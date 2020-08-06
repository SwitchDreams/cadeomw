from graphviz import Digraph
from course.models import Course, Subject
from colour import Color

# Pegando um gradiente de cores indo de vermelho até verde com 100 amostras
red = Color('red')
color_gradient = list(red.range_to(Color('green'), 100))
color_gradient_hex = [c.get_hex() for c in color_gradient]


def get_color(valor):
    """
    retorna uma cor no espaço RGB de acordo com o índice de aprovação da disciplina
    :param valor: float entre 0 e 1, representando o índice de aprovação
    :return: color RGB
    """
    index = int(valor * 100)

    # Safety
    if index > 99:
        index = 99
    elif index < 35:
        index = 1
    else:
        index -= 20

    return color_gradient_hex[index]


def find_prerequisite(subject_code, course_flow, semester):
    subject = Subject.objects.get(code=subject_code)
    if len(subject.prerequisites) >= 1:
        return subject.prerequisites[0]
    else:
        return []


def do_graph(course):
    """
    :param: Course
    :return: g: graph no modoelo graphviz
    """
    g = Digraph('G', filename='../../graph/cursos/' + course.name + '.gv',
                node_attr={'shape': 'record', 'width': '3', 'height': '1.2', 'fixedsize': 'true', 'style': 'filled'},
                graph_attr={'ranksep': '1'})

    # Adicionando Título
    g.attr(label="Fluxo " + str(course.name).capitalize())
    g.attr(labelloc='t')
    g.attr(fontsize='40')

    flow = course.flow
    for semester in range(1, course.num_semester + 1):
        with g.subgraph(name=("Periodo " + str(semester))) as subgraph_periodo:
            subgraph_periodo.attr(rank='same')
            # Coleta somente o periodo
            semester_dict = list(filter(lambda subject: subject['semester'] == semester, flow))
            if len(semester_dict) >= 1:
                semester_dict = semester_dict[0]
            else:
                continue
            # Para todas as disciplinas do fluxo do curso
            for subject in semester_dict["subjects"]:
                # Cria um nó(Disciplina)
                node_info = '{' + f' <codigo>{str(subject["code"])} | <nome> {subject["subject_name"]} |' + '{' + f'{subject["status"]} | {subject["credit"]}' + '}' + '}'
                subgraph_periodo.node(str(subject["code"]), node_info, fillcolor=get_color(subject["pass_percent"]))

                for disciplina in find_prerequisite(subject["code"], flow, semester):
                    g.edge(str(disciplina["code"]), str(subject["code"]))

    return g


def run():
    return do_graph(Course.objects.get(code=1741))
