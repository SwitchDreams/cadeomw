from course.models.models import Course, Department, Subject
from rest_framework import serializers


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    shift = serializers.CharField(source='get_shift_display')

    class Meta:
        model = Course
        fields = ['code', 'name', 'academic_degree', 'coordinator_name', 'department', 'num_semester', 'shift']


class CourseDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['code', 'name', 'details', 'department', 'flow',
                  'flow_graph', 'curriculum']


class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name', 'initials']


class DepartmentDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name', 'initials', 'courses_list', 'subjects_list']


class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'department_name', 'name', 'credit', 'offer']


class SubjectDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subject
        fields = ['code', 'name', 'department', 'department_name', 'credit', 'prerequisites', 'corequisites',
                  'equivalences', 'offer']
