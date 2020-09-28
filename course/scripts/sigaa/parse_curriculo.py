from bs4 import BeautifulSoup
import requests
from django.db import IntegrityError
from course.models.models import Course, Subject, CourseCurriculum, Department

DEPARTMENTS_MAP = {
    "GPP": "FACE",
    "REL": "IREL",
    "POL": "IPOL"
}

def parse_curriculum(course_sigaa_id):
    try:
        course = Course.objects.get(code=course_sigaa_id)        
    except:
        print(f'course {course_sigaa_id} does not exist in the DB')
        return
    
    print(f"--------- Parsing course {course.name} ----------")
    url = "https://sig.unb.br/sigaa/public/curso/curriculo.jsf"
    request_data = get_request_from_course(course_sigaa_id)
    payload = f'formCurriculosCurso=formCurriculosCurso&nivel=G&javax.faces.ViewState={request_data["javax"]}&formCurriculosCurso%3Aj_id_jsp_154341757_30=formCurriculosCurso%3Aj_id_jsp_154341757_30&id={request_data["id"]}'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': request_data['cookies']
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    
    header_soup = html_soup.find_all('tr', limit=7)
    optional_subjects_soup = html_soup.find(id='optativas')

    header_info = get_header_info(header_soup)
    optional_subjects_info = get_optional_subject_info(optional_subjects_soup)

    try:
        course.opt_workload = int(header_info["opt_workload"])
        course.total_workload = int(header_info["total_workload"])
        course.mandatory_workload = int(header_info["mandatory_workload"])

        course.save()
    except:
        print(f'Could not save course: {course.name}')
        pass
    
    for curr_subject in optional_subjects_info:
        print(f"Subject {curr_subject['name']}:")
        try:
            subject = Subject.objects.get(code=curr_subject["code"])
        except Exception as error:
            print(f"    Could not find subject {curr_subject['name']}: {error}. Trying to create it")
            code = curr_subject["code"]
            dept_initials = code[:3]
            try:
                department = Department.objects.get(initials=dept_initials)
            except Exception as error:
                if dept_initials in DEPARTMENTS_MAP:
                    new_dept_code = DEPARTMENTS_MAP[dept_initials]
                
                    try:
                        department = Department.objects.get(code=new_dept_code)
                    except Exception as error:
                        print(f"Could not find correct department: {error}. Creating subject {curr_subject['name']} without department")

                else:
                    print(f"        Could not find alternative department code: {error}. Skipping subject: {curr_subject['name']}")
                    continue
                
                try:
                    subject = Subject.objects.create(
                        name=curr_subject["name"],
                        code=curr_subject["code"],
                        credit=curr_subject["workload"]
                    )
                    subject.save()
                    print(f"Subject {curr_subject['name']} created without department")
                except Exception as error:
                    print(f"Could not create subject {curr_subject['name']}: {error}. Skipping subject")
   
            try:
                subject = Subject.objects.create(
                    name=curr_subject["name"],
                    department=department,
                    code=curr_subject["code"],
                    credit=curr_subject["workload"]
                )
                print(f"    Subject {curr_subject['name']} created")
            except IntegrityError:
                print(f"    Subject {curr_subject['name']} is already created")
            except Exception as error:
                print(f"    Could not create subject {curr_subject['name']}: {error}. Skipping iteration")
                continue
        
        try:
            cc = CourseCurriculum.objects.create(
                course=course,
                subject=subject
            )
            cc.save()
        except:
            print(f"    Could not link subject {curr_subject['name']} with its course")
            continue


def get_request_from_course(course_sigaa_id):
    # Get cookies and auth info
    url = f'https://sig.unb.br/sigaa/public/curso/curriculo.jsf?lc=pt_BR&id={course_sigaa_id}'
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    
    curriculumId = html_soup.find('a', href='#')["onclick"].split(":")[-1].split("'")[1]
    return {
        "cookies": response.headers["Set-Cookie"].split(' ')[0],
        "javax": html_soup.select('#javax\.faces\.ViewState')[0]['value'],
        "id": curriculumId
    }

def get_header_info(header_soup):
    import re

    header_info = {}
    trimmed_header = [elem.text.replace('\t', '').replace('\n', '') for elem in header_soup]
    
    workloads = re.findall(r'\d+', trimmed_header[3])
    header_info["total_workload"] = workloads[0]
    header_info["opt_workload"] = workloads[1]

    header_info["mandatory_workload"] = re.search(r'\d+', trimmed_header[5]).group()

    return header_info

def get_optional_subject_info(opt_soup):
    opt_subjects_vector = opt_soup.find_all('tr')
    opt_subjects = [sub.find('td').text for sub in opt_subjects_vector]
    
    subjects = []
    for sub in opt_subjects:
        subject_info = {}
        fields = sub.split(' - ')

        
        if len(fields[0]) == 7:
            subject_info["code"] = fields[0]
            subject_info["workload"] = int(fields[-1][:2])/4
            name_components = fields[1:-1]
            name=name_components[0]
            for component in name_components[1:0]:
                name += ' - ' + component
            subject_info["name"] = name
        
        if subject_info:
            subjects.append(subject_info)
    
    return subjects

def run():
    # Example data from Engenharia da computação
    parse_curriculum(414610)



