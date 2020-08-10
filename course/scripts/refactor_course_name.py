from course.models import Course

# Dicionário contendo os cursos em redundância para especificarmos
course_list = {
    '8117': 'Administração - Diurno',
    '8150': 'Administração - Noturno',
    '5126': 'Arquitetura e Urbanismo - Diurno',
    '5673': 'Arquitetura e Urbanismo - Noturno',
    '5720': 'Artes Cênicas - Noturno',
    '5711': 'Artes Cênicas - Diurno',
    '4936': 'Artes Visuais - EAD',
    '5649': 'Artes Visuais - Diurno',
    '5665': 'Artes Visuais - Noturno',
    '2216': 'Ciências Biológicas - Diurno',
    '2313': 'Ciências Biológicas - EAD',
    '2259': 'Ciências Biológicas - Noturno',
    '8516': 'Ciências Contábeis - Diurno',
    '8583': 'Ciências Contábeis - Noturno',
    '2283': 'Ciências Naturais - Diurno',
    '2291': 'Ciências Naturais - Noturno',
    '3166': 'Ciências Sociais - Licenciatura',
    '3115': 'Ciências Sociais - Bacharel',
    '8486': 'Direito - Diurno',
    '8885': 'Direito - Noturno',
    '60810': 'Educação Física - Bacharel',
    '7315': 'Educação Física - Licenciatura',
    '7323': 'Educação Física - EAD',
    '7072': 'Enfermagem/FCE',
    '7412': 'Enfermagem/ENF',
    '7013': 'Farmácia/FCE - Diurno',
    '7692': 'Farmácia/FCS - Diurno',
    '7609': 'Farmácia/FCS - Noturno',
    '3336': 'Filosofia - Bacharel - Diurno',
    '3344': 'Filosofia - Licenciatura - Diurno',
    '3352': 'Filosofia - Licenciatura - Noturno',
    '1112': 'Física - Diurno',
    '931': 'Física - EAD',
    '1147': 'Física - Noturno',
    '3841': 'Geografia - Bacharel',
    '3859': 'Geografia - Licenciatura',
    '3867': 'Geografia - EAD',
    '3417': 'História - Bacharel - Diurno',
    '3425': 'História - Licenciatura - Diurno',
    '3476': 'História - Licenciatura - Noturno',
    '850': 'Jornalismo - Diurno',
    '4219': 'Líng Francesa e Respec Literatura - Bacharel',
    '4227': 'Líng Francesa e Respec Literatura - Licenciatura',
    '4316': 'Líng Ing e Respec Literatura - Bacharel',
    '4324': 'Líng Ing e Respec Literatura - Licenciatura',
    '4146': 'Líng Port e Respec Literatura - Noturno',
    '4120': 'Líng Port e Respec Literatura - Licenciatura',
    '4111': 'Líng Port e Respec Literatura - Bacharel',
    '4910': 'Líng Port e Respec Literatura - EAD',
    '1341': 'Matemática - Bacharel - Diurno',
    '1325': 'Matemática - Licenciatura - Diurno',
    '1368': 'Matemática - Licenciatura - Noturno',
    '5509': 'Música - EAD',
    '434': 'Música - Diurno',
    '5606': 'Música - Noturno',
    '9229': 'Pedagogia - Diurno',
    '9296': 'Pedagogia - EAD',
    '9245': 'Pedagogia - Noturno',
    '2712': 'Psicologia - Bacharel',
    '2721': 'Psicologia - Licenciatura',
    '2739': 'Psicologia - Psicólogo',
    '1449': 'Química - Bacharel',
    '1503': 'Química - Licenciatura',
    '7161': 'Saúde Coletiva - Noturno',
    '7153': 'Saúde Coletiva - Diurna',
    '3514': 'Serviço Social - Diurno',
    '3522': 'Serviço Social - Noturno',
    '5151': 'Teatro - EAD'
}

# Array com cursos inexistentes.
course_delete = {
    '8176': 'Administração',
    '5428': 'Artes Cênicas',
    '5461': 'Artes Cênicas',
    '5657': 'Artes Visuais',
    '2267': 'Ciências Biológicas',
    '2151': 'Ciências Biológicas',
    '761': 'Matemática',
    '5444': 'Música'
}


def refactor_course():
    for key, value in course_list.items():
        try:
            curso = Course.objects.get(code=key)
            curso.name = value
            curso.save()
        except Course.DoesNotExist:
            print("Erro ao refatorar o curso {}: {}".format(key, value))

    for key, value in course_delete.items():
        try:
            curso = Course.objects.get(code=key)
            curso.delete()
        except:
            print("Erro ao deletar o curso {}: {}".format(key, value))


def run():
    print("Inico da gerência de redundância de cursos... ")
    refactor_course()
    print("Fim da gerência de redundância de cursos... ")
