from bs4 import BeautifulSoup
import requests
from course.models.models import PreRequisite, Equivalence

def parse_equivalence(course_id):
    url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"
    request_data = get_cookies_for_parse()
    #payload='formListagemComponentes=formListagemComponentes&javax.faces.ViewState=j_id83&formListagemComponentes%3Aj_id_jsp_190531263_23=formListagemComponentes%3Aj_id_jsp_190531263_23&id={course_id}'
    payload='formListagemComponentes=formListagemComponentes&javax.faces.ViewState=j_id83&formListagemComponentes%3Aj_id_jsp_190531263_23=formListagemComponentes%3Aj_id_jsp_190531263_23&id=176854&publico=public'
    # headers = {
    #     'Content-Type': 'application/x-www-form-urlencoded',
    #     'Cookie': "JSESSIONID=CA076FF5DB0B5215A6971B0B733D5F2A.sigaa07"
    # }
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
        'Referer': 'https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://sig.unb.br',
        'Connection': 'keep-alive',
        'Cookie': '_ga=GA1.2.2132313207.1536881087; _gid=GA1.2.969949746.1607897799; JSESSIONID=CA076FF5DB0B5215A6971B0B733D5F2A.sigaa07',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0'
}
    response = requests.request("POST", url, headers=headers, data=payload)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    print(html_soup)
def get_cookies_for_parse():
    url = "https://sig.unb.br/sigaa/public/componentes/busca_componentes.jsf"
    response = requests.request("GET", url)
    html_soup = BeautifulSoup(response.text.encode('utf8'), 'html.parser')
    print(response.headers["Set-Cookie"].split(' ')[0])
    print(html_soup.select('#javax\.faces\.ViewState')[0]['value'])
    return {
        "cookies": response.headers["Set-Cookie"].split(' ')[0],
        "javax": html_soup.select('#javax\.faces\.ViewState')[0]['value']
    }

def run():
    parse_equivalence(176854)