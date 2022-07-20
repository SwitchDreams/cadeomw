from bs4 import BeautifulSoup
import requests
from course.models.models import Department
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


def parse_department(dapartment_sigaa_id, department_name):
    payload = f'form=form&form%3Anivel=G&form%3AcheckTipo=on&form%3Atipo=2&form%3Aj_id_jsp_190531263_11=&form%3Aj_id_jsp_190531263_13=&form%3AcheckUnidade=on&form%3Aunidades={dapartment_sigaa_id}&form%3AbtnBuscarComponentes=Buscar+Componentes&javax.faces.ViewState=j_id1'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': get_cookies(),
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    first_subject = html_soup.select('tbody tr td')
    if first_subject:
        subjects_code = first_subject[0].text
        department_initials = ''.join(filter(str.isalpha, subjects_code))
        try:
            print(f"[{department_initials}] - {department_name}")
            Department.objects.create(name=department_name, initials=department_initials)
        except:
            print(f"Erro na criação do departamento {department_name} de código {department_initials}")
    else:
        print(f'O departamento {department_name} não possui disciplinas')


def get_cookies():
    response = requests.request("GET", url)
    return response.headers["Set-Cookie"].split(' ')[0]


def run():
    departments = get_ids_and_names()
    for department in departments:
        department_name = departments[department].split(" - ")[0].split(" (")[0]
        try:
            Department.objects.get(name=department_name)
        except Department.DoesNotExist:
            parse_department(department, department_name)
            print(f"Criando departamento: {department_name}")
            continue
