from course.scripts.parse_fluxo import run as run_parse_fluxo
from course.scripts.parse_mencao import run as run_parse_mencao
from course.scripts.parse_equivalencias import run as run_parse_equivalencias
from course.scripts.refactor_subject_name import run as run_refactor_course_name
from course.models import Course, Subject


def pre_process_courses():
    """ Pré-calculando dados no banco de dados para poupar processamento futuro """
    print("Processando dados dos cursos...")
    for course in Course.objects.all():
        course.flow = course.get_flow()
        course.num_semester = course.get_num_semester()
        course.hardest_subject = course.get_hardest_subject()
        course.easiest_subject = course.get_easiest_subject()
        if course.flow is not None:
            course.flow_graph = course.get_flow_graph()
        course.save()


def pre_process_subjects():
    """ Pré-processando dados das matérias """
    for subject in Subject.objects.all():
        subject.pass_percent = subject.get_pass_percent()
        subject.prerequisites = subject.get_prerequisites()
        subject.equivalences = subject.get_equivalences()
        subject.grade_infos = subject.get_grade_infos()
        subject.save()


def run():
    # Faz o parse das informações
    run_parse_fluxo()
    run_parse_mencao()
    run_parse_equivalencias()
    pre_process_subjects()
    pre_process_courses()
    run_refactor_course_name()
