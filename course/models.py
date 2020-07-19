from django.db import models


# Create your models here.
class Course(models.Model):
    code = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    issue_date = models.DateField()
    begin_date = models.DateField()
    end_date = models.DateField(blank=True)
