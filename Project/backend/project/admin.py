from django.contrib import admin

from .models import Subjects, SubjectTeacherRelation, SubjectStudentRelation

# Register your models here.
admin.site.register(Subjects)
admin.site.register(SubjectStudentRelation)
admin.site.register(SubjectTeacherRelation)