from course.models.models import Course, Department, Subject
from rest_framework import viewsets
from course.serializers import CourseSerializer, DepartmentSerializer, SubjectSerializer, CourseDetailsSerializer, \
    SubjectDetailsSerializer
from rest_framework import filters


class CustomSearchFilter(filters.SearchFilter):
    def get_search_fields(self, view, request):
        if request.query_params.get('department_only'):
            return ['department__name']
        return super(CustomSearchFilter, self).get_search_fields(view, request)


class SelectSerializerMixin(object):
    """
    Classe para permitir mais de um serializer por ViewSet
    """
    serializer_class = None
    list_serializer_class = None
    retrieve_serializer_class = None
    update_serializer_class = None
    partial_update_serializer_class = None
    create_serializer_class = None

    def get_serializer_class(self):
        """
        Return the class to use for the serializer.
        Defaults to using `self.serializer_class`.
        """
        assert self.serializer_class is not None, (
                "'%s' should either include a `serializer_class` attribute, "
                "or override the `get_serializer_class()` method."
                % self.__class__.__name__
        )
        return getattr(self, f"{self.action}_serializer_class") or self.serializer_class


class CourseViewSet(SelectSerializerMixin, viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows courses to be viewed or edited.
    """
    queryset = Course.objects.all().order_by('name')
    serializer_class = CourseSerializer
    retrieve_serializer_class = CourseDetailsSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class DepartmentViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows department to be viewed or edited.
    """
    queryset = Department.objects.all().order_by('name')
    serializer_class = DepartmentSerializer


class SubjectViewSet(SelectSerializerMixin, viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows subjects to be viewed or edited.
    """
    queryset = Subject.objects.all().order_by('name')
    serializer_class = SubjectSerializer
    retrieve_serializer_class = SubjectDetailsSerializer
    filter_backends = [CustomSearchFilter]
    search_fields = ['name', 'department__name']
