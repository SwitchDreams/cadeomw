from django.test import TestCase
from course.models.models import Course, Subject

# Create your tests here.
class CourseTestCase(TestCase):
    def setUp(self):
        course = Course.objects.create(name="Engenharia da Computação", code=1741, issue_date="2020-03-03")
        a = Subject.objects.create(name="C1", code=1, department="MAT", credit=6)
        b = Subject.objects.create(name="F1", code=2, department="FIS", credit=4)
        c = Subject.objects.create(name="C1", code=3, department="MAT", credit=6)
        course.adicionar_disciplina(semester=1, code_subject=a.code, status="OBR")
        course.adicionar_disciplina(semester=1, code_subject=b.code, status="OBR")
        course.adicionar_disciplina(semester=2, code_subject=c.code, status="OBR")

    def test_flows_course(self):
        course = Course.objects.get(code=1741)
        flow = {1: [{'subject_name': 'C1', 'status': 'OBR', 'credit': 6},
                    {'subject_name': 'F1', 'status': 'OBR', 'credit': 4}],
                2: [{'subject_name': 'C1', 'status': 'OBR', 'credit': 6}]}
        self.assertEqual(course.name, "Engenharia da Computação")
        self.assertEqual(course.flow(), flow)
