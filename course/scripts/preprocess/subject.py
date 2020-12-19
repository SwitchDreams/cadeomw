from course.models.models import Subject


# Run example
# Para uma disciplina em específico
# python manage.py runscripts preprocess.subject --script-args subject_id
# Para todas as disciplinas
# python manage.py runscripts preprocess.subject --script-args all

def run(*args):
    if len(args) == 0:
        print("Necessário passar o identificador da disciplina de parametro ou all")
        return 0

    # Todas as disciplinas
    if args[0] == "all":
        print("Iniciando o processamento de todas as disciplinas...")
        for subject in Subject.objects.all():
            subject.preprocess_info()
        print("Finalizando o processamento de todas as disciplinas...")
        return

    # Disciplina em específica
    try:
        course = Subject.objects.get(code=args[0])
        course.preprocess_info()
        print("Disciplina pré-processada com sucesso")
    except Subject.DoesNotExist:
        print("Disciplina não encontrada")
