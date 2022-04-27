from django.contrib import admin

from .models import Repositories, Subjects, SubjectTeacherRelation, SubjectStudentRelation

# Register your models here.
admin.site.register(Subjects)
admin.site.register(SubjectStudentRelation)
admin.site.register(SubjectTeacherRelation)
admin.site.register(Repositories)