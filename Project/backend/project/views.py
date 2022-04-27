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
        teacherSubjects = SubjectTeacherRelation.objects.filter(teacher=Teachers.objects.get(user=request.user))
        subjects = []
        for teacherSub in teacherSubjects:
            subjects.append(teacherSub.subject.code)
        new_subjects = Subjects.objects.exclude(code__in=subjects)
        return JsonResponse({
            "data": list(new_subjects.values())
        })

class UserSubjectsView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request): 
        if request.GET.get('status') == 'teacher':
            crt_teacher = Teachers.objects.get(user=request.user)
            teachers = SubjectTeacherRelation.objects.filter(teacher=crt_teacher)
            subjects = []
            for teacher in teachers:
                crt_subject = Subjects.objects.get(id=teacher.subject.id)
                subjects.append({
                    "subject": model_to_dict(crt_subject),
                    "students": len(SubjectStudentRelation.objects.filter(subject=crt_subject))
                })
            
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
        courses = request.data['courses']
        for i in courses:
            subject = Subjects.objects.get(code=i)
            relation = SubjectTeacherRelation()
            relation.subject = subject
            relation.teacher = Teachers.objects.get(user=request.user)
            relation.save()
        return JsonResponse({
            "data": {}
        })