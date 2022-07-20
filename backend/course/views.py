from course.models.models import Course, Department, Subject
from rest_framework import viewsets
from course.serializers import CourseSerializer, DepartmentSerializer, SubjectSerializer, CourseDetailsSerializer, \
    SubjectDetailsSerializer, DepartmentDetailsSerializer
from rest_framework import filters


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
    serializer_class = CourseSerializer
    retrieve_serializer_class = CourseDetailsSerializer

    def get_queryset(self):
        course_name_search = self.request.query_params.get('search')

        queryset = Course.objects.all().order_by('name')

        if course_name_search:
            queryset = queryset.filter(name__unaccent__icontains=course_name_search)

        return queryset


class DepartmentViewSet(SelectSerializerMixin, viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows department to be viewed or edited.
    """
    queryset = Department.objects.all().order_by('name')
    serializer_class = DepartmentSerializer
    retrieve_serializer_class = DepartmentDetailsSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'initials']


class SubjectViewSet(SelectSerializerMixin, viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows subjects to be viewed or edited.
    """

    serializer_class = SubjectSerializer
    retrieve_serializer_class = SubjectDetailsSerializer

    def get_queryset(self):
        has_offer_only = self.request.query_params.get('has_offer')
        department_initial = self.request.query_params.get('department_initial')
        subject_name_search = self.request.query_params.get('search')
        has_selected_schedules = self.request.query_params.get('selected_schedules')
        if has_offer_only:
            queryset = Subject.objects.exclude(offer__isnull=True).exclude(offer=[]).order_by('name')
        else:
            queryset = Subject.objects.all().order_by('name')
        if department_initial:
            queryset = queryset.filter(department__initials=department_initial)
        if subject_name_search:
            queryset = queryset.filter(name__unaccent__icontains=subject_name_search)
        if has_selected_schedules:
            subjects_to_filter = []
            has_selected_schedules = has_selected_schedules.split()
            for subject in queryset:
                for off in subject.offer:
                    valid_schedule = {}
                    if("\n" not in off['schedule']):
                        for selected_time in has_selected_schedules:
                            for schedule in off['schedule']:  # percorrendo o array de horarios de uma aula
                                if (schedule != ''):
                                    if (schedule.find('M') != -1):
                                        period = "M"
                                        period_index = schedule.find('M')
                                        days = schedule[0:period_index]
                                        hours = schedule[period_index + 1:len(schedule)]
                                        valid = 0
                                        if (selected_time[0] in days):
                                            valid += 1
                                        if (selected_time[1] == period):
                                            valid += 1
                                        if (selected_time[2] in hours):
                                            valid += 1
                                        if (valid == 3):
                                            valid_schedule[selected_time] = True
                                            break
                                        else:
                                            valid_schedule[selected_time] = False

                                    if (schedule.find('T') != -1):
                                        period = "T"
                                        period_index = schedule.find('T')
                                        days = schedule[0:period_index]
                                        hours = schedule[period_index + 1:len(schedule)]
                                        valid = 0
                                        if (selected_time[0] in days):
                                            valid += 1
                                        if (selected_time[1] == period):
                                            valid += 1
                                        if (selected_time[2] in hours):
                                            valid += 1
                                        if (valid == 3):
                                            valid_schedule[selected_time] = True
                                            break
                                        else:
                                            valid_schedule[selected_time] = False

                                    if (schedule.find('N') != -1):
                                        period = "N"
                                        period_index = schedule.find('N')
                                        days = schedule[0:period_index]
                                        hours = schedule[period_index + 1:len(schedule)]

                                        valid = 0
                                        if (selected_time[0] in days):
                                            valid += 1
                                        if (selected_time[1] == period):
                                            valid += 1
                                        if (selected_time[2] in hours):
                                            valid += 1
                                        if (valid == 3):
                                            valid_schedule[selected_time] = True
                                            break
                                        else:
                                            valid_schedule[selected_time] = False
                    if (False not in list(valid_schedule.values())):
                        subjects_to_filter.append(subject.name)

            print(subjects_to_filter)
            if subjects_to_filter:
                queryset = queryset.filter(name__in=subjects_to_filter)
            else:
                queryset = queryset.none()
        return queryset
