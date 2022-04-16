from django.contrib import admin

from .models import Students, Teachers

# Register your models here.
admin.site.register(Teachers)
admin.site.register(Students)