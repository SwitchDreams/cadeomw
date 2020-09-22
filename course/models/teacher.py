from django.db import models
from course.models.offer import Offer


class Teacher(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class OfferTeacher(models.Model):
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, related_name='offer_teachers')
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='offer_teachers')
