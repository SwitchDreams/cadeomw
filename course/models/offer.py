from django.db import models
from course.models.models import Department, Subject


class Offer(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='offers')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='offers')
    name = models.CharField(max_length=100)
    semester = models.CharField(max_length=7)
    schedule = models.CharField(max_length=100)
    students_qtd = models.CharField(max_length=3)
    place = models.CharField(max_length=100)



