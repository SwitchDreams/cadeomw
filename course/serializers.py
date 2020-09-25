from course.models.models import Course, Department, Subject
from rest_framework import serializers


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['code', 'name', 'academic_degree', 'coordinator_name', 'department', 'num_semester']


class CourseDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['code', 'name', 'hardest_subject', 'easiest_subject', 'flow',
                  'flow_graph']


class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ['name']


class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'department', 'name', 'credit', 'pass_percent']


class SubjectDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'department', 'department_name', 'name', 'credit', 'pass_percent', 'prerequisites', 'grade_infos',
                  'equivalences', 'get_offer']
