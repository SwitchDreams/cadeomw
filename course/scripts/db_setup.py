from course.scripts.sigaa.parse_departments import parse_departments
from course.scripts.sigaa.parse_oferta import run as parse_oferta
from course.scripts.sigaa.parse_subjects import run as parse_disciplinas
from course.scripts.sigaa.parse_curriculo import parse_curriculum
from course.scripts.sigaa.parse_fluxo import parse_course
from course.scripts.sigaa.parse_equivalence import parse_equivalence
from course.scripts.refactor_course_name import run as refactor_course
from course.scripts.sigaa.parse_unidade import run as parse_unidades

from course.models.models import Course, Subject


# Faz o parse das informações
def run():
    # Cria os cursos e os departamentos
    print("\n###### INICIANDO O PARSE DOS DEPARTAMENTOS ######\n")
    parse_departments()
    parse_unidades()
    print("\n###### PARSE DOS DEPARTAMENTOS CONCLUÍDO ######\n")

    print("\n###### INICIANDO PARSE DAS DISCIPLINAS ######\n")
    # Cria todas as disciplinas com base nos departamentos
    parse_disciplinas()
    print("\n######  PARSE DAS DISCIPLINAS CONCLUÍDO ######\n")

    # Cria as matérias e suas turmas da oferta
    print("\n###### INICIANDO O PARSE DA OFERTA ######\n")
    parse_oferta()
    print("\n###### PARSE DA OFERTA CONCLUÍDO ######\n")

    # Get all course IDs 
    course_ids = [course.code for course in Course.objects.all()]

    print("\n###### INICIANDO O PARSE DOS CURSOS ######\n")
    for course_id in course_ids:
        print(f"\n###### INICIANDO O PARSE DO CURSO {course_id} ######\n")
        parse_course(course_id)
        print("\n###### PARSE DO FLUXO CONCLUÍDO ######\n")

        parse_curriculum(course_id)
        print("\n###### PARSE DO CURRÍCULO CONCLUÍDO ######\n")

    refactor_course()
    print("\n###### PARSE DOS CURSOS CONCLUÍDO ######\n")

    print("\n###### ADICIONANDO EQUIVALÊNCIAS e PRÉ-REQUISITOS NA DISCIPLINA ######\n")
    subjects_ids = [subject.code for subject in Subject.objects.all()]
    for subjects_id in subjects_ids:
        print(f"\n###### PARSE EQUIVALÊNCIAS e PRÉ-REQUISITOS da disciplina {subjects_id} ######\n")
        try:
            parse_equivalence(subjects_id)
        except:
            print("Erro no parse\n")

    print("\n###### PRE PROCESSANDO OS DADOS DOS CURSOS ######\n")
    for course in Course.objects.all():
        course.preprocess_info()

    print("\n###### PRE PROCESSANDO OS DADOS DAS MATÉRIAS ######\n")
    for subject in Subject.objects.all():
        subject.preprocess_info()
