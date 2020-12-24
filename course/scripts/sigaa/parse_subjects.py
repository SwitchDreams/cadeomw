from bs4 import BeautifulSoup
import requests
from course.models.models import Department, Subject
from django.db import IntegrityError

url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"


def get_ids_and_names():
    departamentos = {}
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    list_depto = html_soup.find(id='form:unidades')

    for depto in list_depto.find_all('option'):
        departamentos[depto['value']] = depto.text

    departamentos.pop('0', None)
    return departamentos


def parse_subjects_from_department(dapartment_sigaa_id, department):
    payload = f'form=form&form%3Anivel=G&form%3AcheckTipo=on&form%3Atipo=2&form%3Aj_id_jsp_190531263_11=&form%3Aj_id_jsp_190531263_13=&form%3AcheckUnidade=on&form%3Aunidades={dapartment_sigaa_id}&form%3AbtnBuscarComponentes=Buscar+Componentes&javax.faces.ViewState=j_id1'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': get_cookies(),
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    subjects = html_soup.select('tbody tr')
    for subject in subjects:
        fields = subject.select('td')
        # Coleta os campos necessários para criação da matéria
        code, name, _, workload, _ = fields
        try:
            Subject.objects.create(
                code=code.text,
                department=department,
                name=name.text,
                credit=workload.text[:-1]  # Retira o h do final da string
            )
        except IntegrityError:
            print(f"Disciplina já existente: {code.text}")


def get_cookies():
    response = requests.request("GET", url)
    return response.headers["Set-Cookie"].split(' ')[0]


# Esse parse tem a função de criar as disciplinas no banco de dados, é necessário que os departamentos já estejam criados
def run():
    departments = get_ids_and_names()
    for department in departments:
        department_name = departments[department].split(" - ")[0].split(" (")[0]
        try:
            department_object = Department.objects.get(name=department_name)
            parse_subjects_from_department(department, department_object)
        except Department.DoesNotExist:
            print(f"Departamento não existe ou não possui disciplinas: {department_name}")
            continue
