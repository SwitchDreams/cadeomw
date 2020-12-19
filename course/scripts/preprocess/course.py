from course.models.models import Course


# Run example
# Para um curso em específico
# python manage.py runscripts preprocess.course --script-args course_id
# Para todos os cursos
# python manage.py runscripts preprocess.course --script-args all

def run(*args):
    if len(args) == 0:
        print("Necessário passar o identificador do curso de parametro ou all")
        return 0

    # Todos os cursos
    if args[0] == "all":
        print("Iniciando o processamento de todos os cursos...")
        for course in Course.objects.all():
            course.preprocess_info()
        print("Finalizando o processamento de todos os cursos")
        return

    # Curso em específico
    try:
        print(args[0])
        course = Course.objects.get(code=args[0])
        course.preprocess_info()
        print("Curso pré-processado com sucesso")
    except Course.DoesNotExist:
        print("Curso não encontrado")
