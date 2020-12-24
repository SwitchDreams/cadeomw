from django.db import models
from django.contrib.postgres.fields import JSONField


# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=100)
    initials = models.CharField(max_length=4)

    def __str__(self):
        return self.name

    def courses_list(self):
        return [course.to_json() for course in self.courses.all()]

    def subjects_list(self):
        return [subject.to_json() for subject in self.subject.all()]


# Classe que armazena o curso
class Course(models.Model):
    SHIFT = (
        ('N', 'Noturno'),
        ('D', 'Diurno'),
    )
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='courses')
    code = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    coordinator_name = models.CharField(max_length=100, null=True)
    academic_degree = models.CharField(max_length=100)
    is_ead = models.BooleanField(default=False)
    shift = models.CharField(max_length=2, choices=SHIFT)
    total_workload = models.PositiveIntegerField(null=True)
    opt_workload = models.PositiveIntegerField(null=True)
    mandatory_workload = models.PositiveIntegerField(null=True)
    # Campos calculados
    curriculum = JSONField(null=True, blank=True)
    flow = JSONField(null=True, blank=True)
    num_semester = models.SmallIntegerField(null=True, blank=True)
    flow_graph = models.TextField(null=True, blank=True)
    hardest_subject = JSONField(null=True, blank=True)
    easiest_subject = JSONField(null=True, blank=True)

    def append_subject(self, semester, subject, status):
        course_subject = CourseSubject(course=self, subject=subject, semester=semester,
                                       status=status)
        course_subject.save()

    def __str__(self):
        return self.name

    def get_flow(self):
        """ Retorna o fluxo das disciplinas dividido por semestre """
        flow = {}
        course_subjects = self.course_subject.order_by('semester')
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

    def get_curriculum(self):
        return [cc.subject.to_json() for cc in self.course_curriculum.all()]

    def get_flow_graph(self):
        """ Retorna o código DOT (Graphviz) do gráfico """
        return do_graph(self).source

    def get_num_semester(self):
        """ Retorna o número de semestres do curso baseado no fluxo """
        return len(self.flow)

    def get_hardest_subject(self):
        """ Retorna a disciplina mais difícil no curso que tenha pass_percent > 0, 
        ou seja com menor porcentagem de aprovação"""
        subjects = sorted(self.course_subject.all(), key=lambda t: t.subject.pass_percent)
        for subject in subjects:
            if subject.subject.pass_percent > 0:
                return subject.to_json()
        return subjects[0].to_json()

    def get_easiest_subject(self):
        """ Retorna a disciplina mais fácil no curso, ou seja com maior porcentagem de aprovação"""
        return sorted(self.course_subject.all(), key=lambda t: t.subject.pass_percent)[-1].to_json()

    def details(self):
        """ Retorna as informações detalhadas do curso, no formato padronizado pelo front"""
        return {
            'workload': {
                'total': self.total_workload,
                'optional': self.opt_workload,
                'mandatory': self.mandatory_workload
            },
            'num_semester': self.num_semester,
            'academic_degree': self.academic_degree,
            'shift': self.shift,
            'coordinator_name': self.coordinator_name
        }

    def preprocess_info(self):
        """ Realiza o pré-processamento das informações do curso"""
        self.flow = self.get_flow()
        self.curriculum = {
            'optional': self.get_curriculum(),
            # Coleta as disciplinas obrigatórias do fluxo do curso
            'mandatory': [course_subject.to_json() for course_subject in
                          self.course_subject.filter(status='OBR').order_by('semester')]
        }
        self.num_semester = self.get_num_semester()
        self.save()

    def to_json(self):
        return {"code": self.code, "name": self.name,
                "shift": self.get_shift_display(), "num_semester": self.num_semester,
                'academic_degree': self.academic_degree}


# Classe que armazena as disciplinas
class Subject(models.Model):
    code = models.CharField(primary_key=True, max_length=20)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='subject', null=True)
    name = models.CharField(max_length=80)
    credit = models.SmallIntegerField()
    # Campos pré-processados
    equivalences = JSONField(blank=True, null=True)
    prerequisites = JSONField(blank=True, null=True)
    grade_infos = JSONField(blank=True, null=True)
    offer = JSONField(blank=True, null=True)
    pass_percent = models.FloatField(default=0)

    def __str__(self):
        return self.name

    def department_name(self):
        return self.department.name

    def to_json(self):
        return {"code": self.code, "subject_name": self.name,
                "credit": self.credit}

    def get_equivalences(self):
        """ Retorna as equivalências em JSON """
        equivalences = []
        for equivalence in self.subject_eq.all():
            equivalences.append(equivalence.to_json())
        return equivalences

    def get_offer(self):
        return [offer.to_json() for offer in self.offers.all()]

    def get_prerequisites(self):
        """ Retorna os pré-requisitos em JSON """
        prerequisites = []
        for prerequisite_set in self.prerequisite_set.all():
            prerequisites_set_list = []
            for prerequisite in prerequisite_set.prerequisite.all():
                prerequisites_set_list.append(prerequisite.subject.to_json())
            prerequisites.append(prerequisites_set_list)
        return prerequisites

    def get_pass_percent(self):
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

    def get_grade_infos(self):
        """ Gera informações para plotar no gráfico """
        grade_infos = {}
        semester_grades = self.semester_grade.all()
        for semester_grade in semester_grades:
            # subject_dict = subject.to_json()
            if semester_grade.semester in grade_infos:
                # Soma as menções para cada tipo
                grade_infos[semester_grade.semester]["grades"]["ss"] += semester_grade.ss
                grade_infos[semester_grade.semester]["grades"]["ms"] += semester_grade.ms
                grade_infos[semester_grade.semester]["grades"]["mm"] += semester_grade.mm
                grade_infos[semester_grade.semester]["grades"]["mi"] += semester_grade.mi
                grade_infos[semester_grade.semester]["grades"]["ii"] += semester_grade.ii
                grade_infos[semester_grade.semester]["grades"]["sr"] += semester_grade.sr
                grade_infos[semester_grade.semester]["grades"]["tr"] += semester_grade.tr
                grade_infos[semester_grade.semester]["grades"]["tj"] += semester_grade.tj
            else:
                grade_infos[semester_grade.semester] = {"semester": semester_grade.semester,
                                                        "grades":
                                                            {"ss": semester_grade.ss,
                                                             "ms": semester_grade.ms,
                                                             "mm": semester_grade.mm,
                                                             "mi": semester_grade.mi,
                                                             "ii": semester_grade.ii,
                                                             "sr": semester_grade.sr,
                                                             "tr": semester_grade.tr,
                                                             "tj": semester_grade.tj}
                                                        }
        grade_list = []
        # Cast para um formato de lista
        for key, value in grade_infos.items():
            grade_list.append(value)
        return grade_list

    def preprocess_info(self):
        self.prerequisites = self.get_prerequisites()
        self.equivalences = self.get_equivalences()
        self.offer = self.get_offer()
        self.save()


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
                "pass_percent": self.subject.pass_percent}


class CourseCurriculum(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_curriculum')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='course_curriculum')

    class Meta:
        unique_together = ('course', 'subject')

    def subject_name(self):
        return self.subject.name

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


class Equivalence(models.Model):
    coverage = models.CharField(max_length=10)
    destination = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='destination_eq')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='subject_eq')
    direction = models.CharField(max_length=14)

    def to_json(self):
        return {
            "coverage": self.coverage,
            "direction": self.direction,
            "destination": self.destination.to_json(),
            "subject": self.subject.to_json(),
            "options": [op.to_json() for op in self.options.all()]
        }

    # Classe que armazena um curso e a qual equivalência ele se refere


class Option(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="subject_option")
    equivalence = models.ForeignKey(Equivalence, on_delete=models.CASCADE, related_name="options")

    def to_json(self):
        return {
            "code": self.course.code,
            "name": self.course.name
        }


class Offer(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='offers')
    name = models.CharField(max_length=100)
    semester = models.CharField(max_length=7)
    schedule = models.CharField(max_length=100)
    students_qtd = models.CharField(max_length=3)
    place = models.CharField(max_length=100)

    def to_json(self):
        return {
            "name": self.name,
            "semester": self.semester,
            "teachers": [ot.teacher.name for ot in self.offer_teachers.all()],
            "total_vacancies": self.students_qtd,
            "schedule": self.schedule.split(" "),
            "place": self.place
        }


class Teacher(models.Model):
    name = models.CharField(unique=True, max_length=100)

    def __str__(self):
        return self.name


class OfferTeacher(models.Model):
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, related_name='offer_teachers')
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='offer_teachers')

    # Import feito depois para não dar conflito com referência cruzada (TODO Alterar esse funcionamento)


from course.scripts.graph_flow_course import do_graph
