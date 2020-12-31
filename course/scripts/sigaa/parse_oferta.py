from bs4 import BeautifulSoup
from time import sleep
import requests
from course.models.models import Offer
from course.models.models import Subject
from course.models.models import Teacher, OfferTeacher
from django.db import IntegrityError

url = "https://sig.unb.br/sigaa/public/turmas/listar.jsf"


# Input: Lista contendo os valores das disciplinas para ser refatorado (obtidos através dos tds)
# Output: Dicionário contendo as informações refatoradas para criar a oferta
def refactor_list(lista, nome):
    turma = {}

    turma['name'] = lista[0].strip()

    turma['semester'] = lista[1]

    # Nome e carga horário vêm na mesma string
    turma['teacher'] = lista[2].split(' (')[0]
    turma['workload'] = int(lista[2].split('(')[1][0:-2])

    # Horário
    turma['schedule'] = lista[3].split('\r')[0][1:]

    turma['students_qtd'] = lista[5]

    turma['place'] = lista[7][1:]

    turma['subject_code'] = nome.split(' ')[0]

    # Separa a palavra no - ou seja, ignora o código da disciplina
    turma['subject_name'] = nome.split(' - ', 1)[-1]

    return turma


def get_ids_and_names():
    departamentos = {}
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    list_depto = html_soup.find(id='formTurma:inputDepto')

    for depto in list_depto.find_all('option'):
        departamentos[depto['value']] = depto.text

    departamentos.pop('0', None)
    return departamentos


###### Create ######

def create_subject(subject_code, department_object, subject_name, workload):
    subject_object = Subject(
        code=subject_code,
        department=department_object,
        name=subject_name,
        credit=workload
    )
    return subject_object


####################

def parse_oferta(id, department_name):
    infos_list = []
    ano = 2020
    periodo = 2
    request_data = get_request_from_oferta()
    payload = f'formTurma=formTurma&formTurma%3AinputNivel=G&formTurma%3AinputDepto={id}&formTurma%3AinputAno={ano}&formTurma%3AinputPeriodo={periodo}&formTurma%3Aj_id_jsp_1370969402_11=Buscar&javax.faces.ViewState=' \
              f'{request_data["javax"]}'
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:79.0) Gecko/20100101 Firefox/79.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
        'Referer': 'https://sig.unb.br/sigaa/public/turmas/listar.jsf',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://sig.unb.br',
        'Connection': 'keep-alive',
        'Cookie': request_data['cookies'],
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')

    turma_aux = html_soup.find_all('tr', {'class': "agrupador"})
    if not turma_aux:
        print(f"Não existe oferta para o departamento: {department_name}")
        return
    turma = turma_aux[0]

    while True:

        if turma == None:
            break
        # Se é agrupador, conseguimos obter o nome da turma
        if turma['class'][0] == 'agrupador':
            nome = turma.text.strip()

        # Se não for agrupador, é a td com as demais informações
        else:
            # Pegando o vetor de infos da turma
            aux = turma.find_all('td')
            for info in aux:
                if info:
                    # Extraindo o valor dos tds
                    infos_list.append(info.text)

            # Entra a lista de tds do parse desorganizada
            # Retorna um dicionário com as infos necessárias
            turmas = refactor_list(infos_list, nome)

            if not turmas:
                infos_list = []
                turma = turma.find_next_sibling('tr')
                continue

            # Tenta criar a oferta
            try:
                try:
                    subject_object = Subject.objects.get(code=turmas["subject_code"])
                except:
                    print(f'Não foi possível encontrar a disciplina{turmas["subject_code"]}')
                    infos_list = []
                    turma = turma.find_next_sibling('tr')
                    continue

                oferta, _ = Offer.objects.get_or_create(
                    subject=subject_object,
                    name=turmas['name'],
                    semester=turmas['semester'],
                    schedule=turmas['schedule'],
                    students_qtd=turmas['students_qtd'],
                    place=turmas['place']
                )

                # Criando ou dando get no professor para vincular à oferta
                try:
                    teacher, _ = Teacher.objects.get_or_create(name=turmas["teacher"])

                    # Criando relação entre professor e oferta
                    try:
                        ot = OfferTeacher.objects.create(offer=oferta, teacher=teacher)
                    except Exception as e:
                        print(e)
                        print(f'Erro ao vincular {turmas["teacher"]} e {turmas["subject_code"]}-{turmas["name"]}')
                        infos_list = []
                        turma = turma.find_next_sibling('tr')
                        continue
                except:
                    print(f'Erro ao criar ou dar get no professor {turmas["teacher"]} da turma {turmas["subject_code"]}-{turmas["name"]}')
                    infos_list = []
                    turma = turma.find_next_sibling('tr')
                    continue
                
            except IntegrityError as e:
                print(e)
                print(f'A oferta para {turmas["subject_code"]}-{turmas["subject_name"]} já existe no banco de dados')
                infos_list = []
                turma = turma.find_next_sibling('tr')
                continue
            except Exception as e:
                print(e)
                print(f'A oferta para {turmas["subject_code"]}-{turmas["subject_name"]} não foi encontrada')
                infos_list = []
                turma = turma.find_next_sibling('tr')
                continue
            

            infos_list = []

        # Pega a sequência de informações que são sequência do nome (demais infos)
        turma = turma.find_next_sibling('tr')

        if turma == None:
            break


def get_request_from_oferta():
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    return {"cookies": response.headers["Set-Cookie"].split(' ')[0],
            "javax": html_soup.select('#javax\.faces\.ViewState')[0]['value']}


def run():
    departamentos = get_ids_and_names()
    for departamento in departamentos:
        nome_depto = departamentos[departamento].split(" - ")[0].split(" (")[0]
        print(departamento + " " + nome_depto)
        parse_oferta(departamento, nome_depto)
        sleep(0.1)
