from django.http import JsonResponse
from .models import Subjects
from django.db.models import Q
from auth.models import Teachers

# Create your views here.
def get_subjects(request):
    print(request)
    if request.GET.get('code'):
        code = request.GET['code']
        subjects = Subjects.objects.filter(
            Q(code__contains=code)
        )
    else:
        subjects = Subjects.objects.all()
    return JsonResponse({
        "data": list(subjects.values())
    })