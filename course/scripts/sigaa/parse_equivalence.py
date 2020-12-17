from bs4 import BeautifulSoup
import requests
from course.models.models import Equivalence, PreRequisiteSet, Subject


def parse_equivalence(subject_code):
    url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"
    subject_sigaa_id, cookies = get_params_for_parse(subject_code)
    payload = f'formListagemComponentes=formListagemComponentes&javax.faces.ViewState=j_id2&formListagemComponentes%3Aj_id_jsp_190531263_23=formListagemComponentes%3Aj_id_jsp_190531263_23&id={subject_sigaa_id}&publico=public'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookies
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    table = html_soup.select_one('.visualizacao')
    pre_req = table.select('tr')[8]
    # Todo tratar có-requisitos
    co_req = table.select('tr')[9]
    equivalence = table.select('tr')[10]
    handle_pre_req(pre_req, subject_code)
    handle_equivalence(equivalence, subject_code)

def handle_pre_req(pre_req, subject_code):
    pre_req_list = pre_req.text.split()[2:-1]
    # Always find subject
    subject = Subject.objects.get(code=subject_code)
    pre_req_set = PreRequisiteSet.objects.create(subject=subject)
    for disciplina in pre_req_list:
        if disciplina != "(" and disciplina != ")":
            # Cria um novo conjunto de disciplina
            if disciplina.upper() == "OU":
                subject = Subject.objects.get(code=subject_code)
                pre_req_set = PreRequisiteSet.objects.create(subject=subject)
            elif disciplina.upper() == "E":
                continue
            else:
                # Adiciona a disciplina no conjunto de pré-requisitos atual
                try:
                    subject = Subject.objects.get(code=disciplina)
                    pre_req_set.prerequisite.create(subject=subject)
                except:
                    print(f"Disciplina não encontrada para pré-requisito: {disciplina}")


def handle_equivalence(equivalences, subject_code):
    equivalences_list = equivalences.text.split()[2:-1]
    destination = Subject.objects.get(code=subject_code)
    for equivalence in equivalences_list:
        if equivalence != "(" and equivalence != ")":
            # Cria um novo conjunto de disciplina
            if equivalence.upper() == "OU":
                continue
            elif equivalence.upper() == "E":
                print("Equivalencia com E")
                continue
            else:
                # Adiciona a disciplina no conjunto de pré-requisitos atual
                # TODO verificar campos covarage e direction
                try:
                    Equivalence.objects.create(subject_id=equivalence, destination=destination)
                except:
                    print (f"Disciplina {equivalence} não existe no BD")


def get_cookies():
    url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"
    response = requests.request("GET", url)
    return response.headers["Set-Cookie"].split(' ')[0]


def get_params_for_parse(subject_code):
    url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"
    cookies = get_cookies()
    payload = f'form=form&form%3Anivel=G&form%3Atipo=4&form%3Aunidades=0&form%3AbtnBuscarComponentes=Buscar%2BComponentes&javax.faces.ViewState=j_id1&form%3AcheckCodigo=on&form%3Aj_id_jsp_190531263_11={subject_code}&form%3Aj_id_jsp_190531263_13='
    header = {
        'Cookie': cookies,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    response = requests.request("POST", url, headers=header, data=payload)
    page_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    subject_link_to = page_soup.select_one('tbody td a')
    subject_sigaa_id = subject_link_to['onclick'].split(':')[4][1:7]
    return subject_sigaa_id, cookies


def run():
    # Exemplo introdução ao processamento de imagens
    parse_equivalence("ADM0092")
