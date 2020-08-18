from bs4 import BeautifulSoup
from requests import get


url = 'https://sig.unb.br/sigaa/public/curso/lista.jsf?nivel=G&aba=p-ensino'

response = get(url)

html_soup = BeautifulSoup(response.text, 'html.parser')

# f = open("file.html", "w")
# f.write(str(html_soup))
# f.close()

# Procurando a table listagem no html
table = html_soup.find('table', { 'class' : 'listagem' })

# lista e dicionario dos departments
departments = []


# Preenchendo o primeiro departamento da página
for row in table.findAll('tr')[1:2]:
    col = row.findAll('td')
    dept = col[0].string.replace('\n', '').replace('\t', '')
    courses = []

# Pular o titulo da tabela
for row in table.findAll('tr')[2:]:
    col = row.findAll('td')


    if len(col) == 1:
        # Inserindo todos os atributos antigos em um dicionario
        departments.append({
            "nome": dept,
            "cursos": courses
        })
    
        # Atualiza as informações antigas
        dept = col[0].string.replace('\n', '').replace('\t', '')
        courses = []
        

    else:
        # Lê informações da Tabela
        nomeCurso = col[0].string.replace('\n', '').replace('\t', '').capitalize().strip()
        grauAcademico = col[1].string.replace('\n', '').replace('\t', '').capitalize().strip()
        turno = col[2].string.replace('\n', '').replace('\t', '').capitalize().strip()
        sede = col[3].string.replace('\n', '').replace('\t', '').capitalize().strip()
        modalidade = col[4].string.replace('\n', '').replace('\t', '').capitalize().strip()

        if (col[5].string != None):
            coordenador = col[5].string.replace('\n', '').replace('\t', '')
        else:
            coordenador = None
        
        courses.append({
            "curso": nomeCurso,
            "grauAcademico": grauAcademico,
            "turno": turno,
            "sede": sede,
            "modalidade": modalidade,
            "coordenador": coordenador,
        })

        
departments.append({
    "nome": dept,
    "cursos": courses
})

print(departments)

