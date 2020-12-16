from bs4 import BeautifulSoup
import requests
from course.models.models import PreRequisite, Equivalence, PreRequisiteSet


def parse_equivalence(course_id):
    url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"
    request_data = get_cookies_for_parse()
    payload = f'formListagemComponentes=formListagemComponentes&javax.faces.ViewState=j_id2&formListagemComponentes%3Aj_id_jsp_190531263_23=formListagemComponentes%3Aj_id_jsp_190531263_23&id={course_id}&publico=public'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': request_data['cookies']
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    table = html_soup.select_one('.visualizacao')
    pre_req = table.select('tr')[8]
    co_req = table.select('tr')[9]
    equivalence = table.select('tr')[10]
    handle_pre_req(pre_req, course_id)


def handle_pre_req(pre_req, subject_id):
    pre_req_list = pre_req.text.split()[2:-1]
    pre_req_set = PreRequisiteSet.objects.create(subject_id=subject_id)
    for disciplina in pre_req_list:
        if disciplina != "(" and disciplina != ")":
            if disciplina.upper() == "OU":
                pre_req_set = PreRequisiteSet.objects.create(subject=disciplina)
            elif disciplina.upper() == "E":
                continue
            else:
                pre_req_set.prerequisite.create(subject= disciplina)

def get_cookies_for_parse():
    url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    params = {
        "cookies": response.headers["Set-Cookie"].split(' ')[0],
        "javax": html_soup.select('#javax\.faces\.ViewState')[0]['value']
    }
    payload = 'form=form&form%3Anivel=G&form%3Atipo=4&form%3Aunidades=0&form%3AbtnBuscarComponentes=Buscar%2BComponentes&javax.faces.ViewState=j_id1&form%3AcheckCodigo=on&form%3Aj_id_jsp_190531263_11=MAT0003&form%3Aj_id_jsp_190531263_13='
    header = {
        'Cookie': params["cookies"],
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    requests.request("POST", url, headers=header, data=payload)
    return params


def run():
    parse_equivalence(178495)
    # parse_equivalence(177893)
