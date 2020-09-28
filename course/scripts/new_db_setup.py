from course.scripts.sigaa.parse_departments import parse_departments
from course.scripts.sigaa.parse_oferta import run as parse_oferta
from course.scripts.sigaa.parse_curriculo import parse_curriculum
from course.scripts.sigaa.parse_fluxo import parse_course

from course.models.models import Course, Subject

# Faz o parse das informações
def run():

    # Cria os cursos e os departamentos
    print("\n###### INICIANDO O PARSE DOS DEPARTAMENTOS ######\n")
    parse_departments()
    print("\n###### PARSE DOS DEPARTAMENTOS CONCLUÍDO ######\n")

    # Cria as matérias e suas turmas da oferta
    print("\n###### INICIANDO O PARSE DA OFERTA ######\n")
    parse_oferta()
    print("\n###### PARSE DA OFERTA CONCLUÍDO ######\n")

    Get all course IDs 
    course_ids = [course.code for course in Course.objects.all()]

    print("\n###### INICIANDO O PARSE DOS CURSOS ######\n")
    for course_id in course_ids:
        print(f"\n###### INICIANDO O PARSE DO CURSO {course_id} ######\n")
        parse_course(course_id)
        print("\n###### PARSE DO FLUXO CONCLUÍDO ######\n")

        parse_curriculum(course_id)
        print("\n###### PARSE DO CURRÍCULO CONCLUÍDO ######\n")

    print("\n###### PRE PROCESSANDO OS DADOS DOS CURSOS ######\n")
    for course in Course.objects.all():
        course.flow = course.get_flow()
        course.curriculum = course.get_curriculum()
        course.num_semester = course.get_num_semester()
        course.hardest_subject = course.get_hardest_subject()
        course.easiest_subject = course.get_easiest_subject()
        if course.flow is not None:
            course.flow_graph = course.get_flow_graph()
        course.save()

    print("\n###### PRE PROCESSANDO OS DADOS DAS MATÉRIAS ######\n")
    for subject in Subject.objects.all():
        subject.pass_percent = subject.get_pass_percent()
        subject.prerequisites = subject.get_prerequisites()
        subject.equivalences = subject.get_equivalences()
        subject.grade_infos = subject.get_grade_infos()
        subject.save()
