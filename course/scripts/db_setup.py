from course.scripts.parse_fluxo import run as run_parse_fluxo
from course.scripts.parse_mencao import run as run_parse_mencao
from course.scripts.parse_equivalencias import run as run_parse_equivalencias
from course.models import Course


def pre_process_courses():
    """ Pré-calculando dados no banco de dados para poupar processamento futuro"""
    print("Processando dados do curso")
    for course in Course.objects.all():
        course.flow = course.set_flow()
        course.num_semester = course.set_num_semester()
        if course.flow is not None:
            course.flow_graph = course.set_flow_graph()
        course.save()


def run():
    # run_parse_fluxo()
    pre_process_courses()
    # run_parse_mencao()
    # run_parse_equivalencias()
