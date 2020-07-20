from course.models import Course, Department, Subject
from rest_framework import viewsets
from course.serializers import CourseSerializer, DepartmentSerializer, SubjectSerializer


class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows courses to be viewed or edited.
    """
    queryset = Course.objects.all().order_by('name')
    serializer_class = CourseSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows department to be viewed or edited.
    """
    queryset = Department.objects.all().order_by('name')
    serializer_class = DepartmentSerializer


class SubjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows subjects to be viewed or edited.
    """
    queryset = Subject.objects.all().order_by('name')
    serializer_class = SubjectSerializer
