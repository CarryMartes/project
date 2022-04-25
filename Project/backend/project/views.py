import json
from django.http import JsonResponse

from .models import SubjectStudentRelation, SubjectTeacherRelation, Subjects
from django.db.models import Q
from auth.models import Teachers,Students
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated  #new here
from rest_framework.decorators import action
from django.core import serializers
from django.forms.models import model_to_dict

# Create your views here.
class SubjectsView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
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

class UserSubjectsView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request): 
        if request.data['status'] == 'teacher':
            crt_teacher = Teachers.objects.get(user=request.user)
            teachers = SubjectTeacherRelation.objects.filter(teacher=crt_teacher)
            subjects = []
            for teacher in teachers:
                subjects.append(model_to_dict(Subjects.objects.get(id=teacher.subject.id)))
            
            return JsonResponse({
                "subjects": subjects
            })
        crt_student = Students.objects.get(user=request.user)
        students = SubjectStudentRelation.objects.filter(student=crt_student)
        subjects = []
        for teacher in students:
            subjects.append(model_to_dict(Subjects.objects.get(id=teacher.subject.id)))
        
        return JsonResponse({
            "subjects": subjects
        })
    def post(self, request):
        print(request.data)
        return JsonResponse({
            "data": {}
        })