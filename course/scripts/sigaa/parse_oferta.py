from bs4 import BeautifulSoup
from time import sleep
import requests

url = "https://sig.unb.br/sigaa/public/turmas/listar.jsf"


def refactor_list(lista, nome):
    turma = {}

    lista = [i for i in lista if i]  # Retirando strings vazias da lista
    lista.insert(0, nome)  # Inserindo o nome na lista

    # print(lista)
    print("=====================")

    lista.pop(5)  # Retirando horário completo
    lista.pop(6)  # Retirando vagas ocupadas

    print(lista)
    print("################")

    turma['subject_code'] = lista[0].split(' ')[0]

    # Separa a palavra no, ou seja, ignora o código da disciplina, e o [1:] é pra ignorar o espaço que sobra na string
    turma['subject_name'] = lista[0].split('-')[-1][1:]

    turma['name'] = lista[1]
    turma['semester'] = lista[2]
    turma['teacher'] = lista[3].split('(')[0].strip()

    # Pega a quantidade de horas, separa da segunda posição até a penúltima
    turma['workload'] = lista[3].split(' ')[-1][1:-1]

    turma['schedule'] = lista[4]
    turma['students_qtd'] = lista[5]

    # Para turmas sem local definido
    if len(lista) == 7:
        turma['place'] = lista[6]
    else:
        turma['place'] = ''

    return turma


def RemoveRepetidosLista(l):
    # cria um dicionario em branco
    dict = {}
    # para cada valor na lista l
    for word in l:
        # adiciona ao dicionario: valor:1
        # se for repetido o valor somente sobrescreve ele
        dict[word] = 1
    # retorna uma copia das 'keys'
    l[:] = dict.keys()
    return l


def get_ids_and_names():
    departamentos = {}
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    # print(html_soup)
    list_depto = html_soup.find(id='formTurma:inputDepto')

    for depto in list_depto.find_all('option'):
        departamentos[depto['value']] = depto.text

    departamentos.pop('0', None)

    return departamentos


def parse_oferta(id):
    infos_list = []
    lista = []
    turmas = {}

    request_data = get_request_from_oferta()
    payload = f'formTurma=formTurma&formTurma%3AinputNivel=G&formTurma%3AinputDepto={id}&formTurma%3AinputAno=2020&formTurma%3AinputPeriodo=1&formTurma%3Aj_id_jsp_1370969402_11=Buscar&javax.faces.ViewState=' \
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

    # a = html_soup.find_all(class_= "agrupador")
    # a = html_soup.find_all('tr', {'class': "agrupador"})

    turma = html_soup.find_all('tr', {'class': "agrupador"})[0]
    flag = False

    while True:

        # Se é agrupador, pegamos a informação do nome
        if turma['class'][0] == 'agrupador':
            nome = turma.text.strip()
            # Na primeira iteração não teremos a informação completa, então precisamos de uma flag para 
            # Montar o objeto na segunda iteração
            if flag:
                # Criar disciplina no BD
                print('')
            else:
                flag = True
        else:
            flag = False

            aux = turma.text
            aux = aux.split('\n')  # Montando a lista com base nas quebras de linha

            for info in aux:
                if info:
                    infos_list.append(info.strip())

            turmas = refactor_list(infos_list, nome)
            # print(turmas)

            infos_list = []

        # for l in lista:
        #     print(l)
        # print("----------")

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
    print(departamentos)
    # for id in departamentos['ids']:
    #     sleep(0.1)
    #     parse_oferta(id)
    parse_oferta(518)
