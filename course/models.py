from django.db import models


# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


# Classe que armazena o curso
class Course(models.Model):
    code = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    issue_date = models.DateField()
    begin_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    def adicionar_disciplina(self, semester, code_subject, status):
        course_subject = CourseSubject(course=self, subject_id=code_subject, semester=semester,
                                       status=status)
        course_subject.save()

    def __str__(self):
        return self.name

    def flow(self):
        """ Retorna o fluxo das disciplinas dividido por semestre """
        flow = {}
        course_subjects = self.course_subject.all()
        for subject in course_subjects:
            subject_dict = subject.to_json()
            if subject.semester in flow:
                flow[subject.semester]["subjects"].append(subject_dict)
            else:
                flow[subject.semester] = {"semester": subject.semester, "subjects": [subject_dict]}
        flow_list = []
        # Cast para um formato de lista
        for key, value in flow.items():
            flow_list.append(value)
        return flow_list

    def num_semester(self):
        """ Retorna o número de semestres do curso baseado no fluxo """
        return len(self.flow())

    def hardest_subject(self):
        """ Retorna a disciplina mais difícil no curso, ou seja com menor porcentagem de parovação"""
        return sorted(self.course_subject.all(), key=lambda t: t.subject.pass_percent())[0].to_json()

    def easiest_subject(self):
        """ Retorna a disciplina mais difícil no curso, ou seja com menor porcentagem de parovação"""
        return sorted(self.course_subject.all(), key=lambda t: t.subject.pass_percent())[-1].to_json()


# Classe que armazena as disciplinas
class Subject(models.Model):
    code = models.BigIntegerField(primary_key=True)
    # TODO mudar departamento para ser model ao inves de string
    # Departamento é uma sigla no arquivo dos cursos
    # department = models.ForeignKey(Department, on_delete=models.CASCADE)
    department = models.CharField(max_length=4)
    name = models.CharField(max_length=50)
    credit = models.SmallIntegerField()

    def __str__(self):
        return self.name

    def prerequisites(self):
        """ Retorna os pré-requisitos em JSON """
        prerequisites = []
        for prerequisite_set in self.prerequisite_set.all():
            prerequisites_set_list = []
            for prerequisite in prerequisite_set.prerequisite.all():
                prerequisites_set_list.append(
                    {"departament": prerequisite.subject.department, "subject_name": prerequisite.subject.name})
            prerequisites.append(prerequisites_set_list)
        return prerequisites

    def pass_percent(self):
        """  Retorna a porcentagem de aprovados """
        # Coleta todas as menções
        semester_grades = self.semester_grade.all()
        qte_pass = qte_fail = 0.0
        for semester_grade in semester_grades:
            # Soma as menções de aprovação
            qte_pass += semester_grade.ss + semester_grade.ms + semester_grade.mm + semester_grade.cc
            # Soma as menções que indicam reprovação + trancamentos
            qte_fail += semester_grade.ii + semester_grade.mi + semester_grade.sr + semester_grade.tj + semester_grade.tr

        # Caso o total de menções seja 0, retorna 0
        if qte_pass == qte_fail == 0:
            return 0
        # Retorna a porcentagem de aprovados arrendodas de duas casas decimais
        else:
            return round(qte_pass / (qte_pass + qte_fail), 2)


# Classe que armazena as disciplinas do curso com o semestre
class CourseSubject(models.Model):
    STATUS = (
        ('OBR', 'Obrigatória'),
        ('OPT', 'Optativa'),
        ('ML', 'Módulo Livre'),
    )
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_subject')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='course_subject')
    semester = models.PositiveSmallIntegerField()
    status = models.CharField(max_length=3, choices=STATUS)

    def subject_name(self):
        return self.subject.name

    def to_json(self):
        return {"code": self.subject.code, "subject_name": self.subject.name,
                "status": self.status, "credit": self.subject.credit,
                "pass_percent": self.subject.pass_percent()}


# Classe que armazen as menções da disciplinas em um determinado semestre
class SemesterGrade(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='semester_grade')
    # Semester (Ex: 2018/2)
    semester = models.CharField(max_length=6)
    room = models.CharField(max_length=3)
    ss = models.PositiveSmallIntegerField()
    ms = models.PositiveSmallIntegerField()
    mm = models.PositiveSmallIntegerField()
    mi = models.PositiveSmallIntegerField()
    ii = models.PositiveSmallIntegerField()
    sr = models.PositiveSmallIntegerField()
    tr = models.PositiveSmallIntegerField()
    tj = models.PositiveSmallIntegerField()
    cc = models.PositiveSmallIntegerField()


# Classe que armazena um cojunto de pre-requisitos
class PreRequisiteSet(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='prerequisite_set')


# Classe que armazena um pré-requisito em um conjunto de requisito
class PreRequisite(models.Model):
    prerequisite_set = models.ForeignKey(PreRequisiteSet, on_delete=models.CASCADE, related_name='prerequisite')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='prerequisite')
