from django.db import models


# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


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

    # Retorna o fluxo das disciplinas dividido por semestre
    def flow(self):
        flow = {}
        course_subjects = self.course_subject.all()
        for subject in course_subjects:
            subject_dict = {"subject_name": subject.subject.name, "status": subject.status,
                            "credit": subject.subject.credit}
            if subject.semester in flow:
                flow[subject.semester].append(subject_dict)
            else:
                flow[subject.semester] = [subject_dict]
        return flow


class Subject(models.Model):
    code = models.BigIntegerField(primary_key=True)
    department = models.CharField(max_length=4)
    # Departamento é uma sigla no arquivo dos cursos
    # department = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    credit = models.SmallIntegerField()

    def __str__(self):
        return self.name

    def adicionarPreRequisitos(self, argument):
        # TODO adicionar pre-requisito
        return ''


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
