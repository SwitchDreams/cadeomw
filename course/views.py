from course.models import Course
from rest_framework import viewsets
from course.serializers import CourseSerializer

# Create your views here.
class CourseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows courses to be viewed or edited.
    """
    queryset = Course.objects.all().order_by('name')
    serializer_class = CourseSerializer
