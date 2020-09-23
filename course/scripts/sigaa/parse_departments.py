from bs4 import BeautifulSoup
from requests import get
from course.models.models import Department, Course


def parse_departments():
    url = 'https://sig.unb.br/sigaa/public/curso/lista.jsf?nivel=G&aba=p-ensino'

    response = get(url)

    html_soup = BeautifulSoup(response.text, 'html.parser')

    # Procurando a table listagem no html
    table = html_soup.find('table', {'class': 'listagem'})

    department = None
    # Preenchendo o primeiro departamento da página
    for row in table.findAll('tr')[1:2]:
        col = row.findAll('td')
        dept = col[0].string.replace('\n', '').replace('\t', '')
        dept = dept.split(' - ')
        initials = dept[0]
        name = dept[1]
        department = Department.objects.create(
            name=name,
            initials=initials
        )

    # Pular o titulo da tabela
    for row in table.findAll('tr')[2:]:
        col = row.findAll('td')

        if len(col) == 1:
            # Atualiza as informações antigas
            dept = col[0].string.replace('\n', '').replace('\t', '')
            dept = dept.split(' - ')
            initials = dept[0]
            name = dept[1]
            department = Department.objects.create(
                name=name,
                initials=initials
            )
        else:
            # Lê informações da Tabela
            course_name = col[0].string.replace('\n', '').replace('\t', '').capitalize().strip()
            academic_degree = col[1].string.replace('\n', '').replace('\t', '').capitalize().strip()
            shift = col[2].string.replace('\n', '').replace('\t', '').capitalize().strip()
            mode = col[4].string.replace('\n', '').replace('\t', '').capitalize().strip()

            if (col[5].string != None):
                coordenador = col[5].string.replace('\n', '').replace('\t', '')
            else:
                coordenador = None

            code = col[6].find('a')["href"][14:20]
            
            try:
                Course.objects.create(code=code, department=department, name=course_name, academic_degree=academic_degree, shift=shift[0], is_ead=is_ead(mode),
                                    coordinator_name=coordenador)
            except:
                pass
            
def is_ead(string):
    return string != "Presencial"


def run():
    parse_departments()

