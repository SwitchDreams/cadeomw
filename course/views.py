from course.models import Course, Department, Subject
from rest_framework import viewsets, filters
from course.parses.parse_fluxo import parse_geral
from course.parses.parse_mencao import update_mencao_database
from django.http import JsonResponse
from course.serializers import CourseSerializer, DepartmentSerializer, SubjectSerializer


def update_mencao(request):
    update_mencao_database()
    return JsonResponse({'Dale': 'bora'})


def update_fluxo(request):
    filepath = "data/sigra/fluxos/fluxos_geral.txt"
    parse_geral(filepath)
    return JsonResponse({'Dale': 'bora'})


class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows courses to be viewed or edited.
    """
    queryset = Course.objects.all().order_by('name')
    serializer_class = CourseSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


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
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
