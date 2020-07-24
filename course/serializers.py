from course.models import Course, Department, Subject
from rest_framework import serializers


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['code', 'name', 'issue_date', 'num_semester']


class CourseDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['code', 'name', 'issue_date', 'begin_date', 'end_date', 'hardest_subject', 'easiest_subject', 'flow']


class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ['name']


class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'department', 'name', 'credit', 'pass_percent']
