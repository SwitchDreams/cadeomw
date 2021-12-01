from bs4 import BeautifulSoup
import requests
from course.models.models import Course, Department, Subject
from django.db import IntegrityError

DEPARTMENTS_MAP = {
    "GPP": "FACE",
    "REL": "IREL",
    "POL": "IPOL"
}

def parse_course(course_sigaa_id):
    try:
        course = Course.objects.get(code=course_sigaa_id)        
    except:
        print(f'course {course_sigaa_id} does not exist in the DB')
        return

    url = "https://sig.unb.br/sigaa/public/curso/curriculo.jsf"
    request_data = get_request_from_course(course_sigaa_id)
    payload = f'formCurriculosCurso=formCurriculosCurso&nivel=G&javax.faces.ViewState={request_data["javax"]}&formCurriculosCurso%3Aj_id_jsp_154341757_30=formCurriculosCurso%3Aj_id_jsp_154341757_30&id={request_data["id"]}'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': request_data['cookies']
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')

    semesters = html_soup.find("div", {"class": 'yui-content'})
    if semesters:
        # Verificando se não está vazio
        semesters = semesters.find_all("div")[2:]
    for semester in semesters:
        semester_number = semester["id"][8:]
        # Do not get the last term Ex: Carga Horária Total: 360hrs.
        semester_subjects = semester.find_all("tr")[:-1]
        for subject in semester_subjects:
            save_subject(course, subject, semester_number)


def save_subject(course, html_subject, semester):
    html_subject_rows = html_subject.find_all("td")
    subject_info = html_subject_rows[0].text.split(' - ')
    status = html_subject_rows[1].text.strip()
    code = subject_info[0]

    # Prevent that subject names with "-" are wrongly parsed
    name_components = subject_info[1:-1]
    name = name_components[0]
    for component in name_components[1:0]:
        name += ' - ' + component
    
    # Get credits in hours format
    credit = int(subject_info[-1][:-1])

    # Get status code
    status_code = {
        "Obrigatória":  "OBR",
        "Optativa":     "OPT",
        "Módulo Livre": "ML"
    }

    # Try to get current subject from the DB
    # If its not there, proceed to create it
    try:
        subject = Subject.objects.get(code=code)
    except Exception as error:
        print(f"Could not find subject {name}: {error}. Trying to create it")
        dept_initials = code[:3]
    
        # If the subject can't be found, get its department from its code
        # Try to find the department
        try:
            department = Department.objects.get(initials=dept_initials)
        except Exception as error:

            # If the department cannot be found, check if its initials are mapped
            # If the initials are not mapped or the mapped one fails, proceed to create subject without department
            if dept_initials in DEPARTMENTS_MAP:
                new_deps_initials = DEPARTMENTS_MAP[dept_initials]

                try:
                    department = Department.objects.get(initials=new_deps_initials)
                except Exception as error:
                    print(f"Could not find correct department: {error}. Creating subject {name} without department")
                    
            else:
                print(f"Could not find alternative department code: {error}. Creating subject {name} without department")

            # Creates subject without department
            try:
                subject = Subject(
                    name=name,
                    code=code,
                    credit=credit
                )
                subject.save()
                print(f"Subject {name} created without department")
            except Exception as error:
                # If all of the above fails, skip to the next subject
                print(f"Could not create subject {name}: {error}. Skipping subject")
                return

        # Create subject if department is found
        try:
            subject = Subject(
                name=name,
                department=department,
                code=code,
                credit=credit
            )
            subject.save()
            print(f"Subject {name} created")
        except IntegrityError:
            print(f"Subject {name} is already created")
        except Exception as error:
            print(f"Could not create subject {name}: {error}. Skipping subject")
            return

    # Append the created subject       
    course.append_subject(semester, subject, status_code[status])


def get_request_from_course(course_sigaa_id):
    url = f'https://sig.unb.br/sigaa/public/curso/curriculo.jsf?lc=pt_BR&id={course_sigaa_id}'
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    curriculumId = html_soup.find('a', href='#')["onclick"].split(":")[-2].split("'")[1]

    return {
        "cookies": response.headers["Set-Cookie"].split(' ')[0],
        "javax": html_soup.select('#javax\.faces\.ViewState')[0]['value'],
        "id": curriculumId
    }


def run():
    # Example data from Engenharia da computação
    parse_course(414112)
