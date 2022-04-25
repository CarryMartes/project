from .views import get_subjects
from django.urls import path

urlpatterns = [
    path('subjects/', get_subjects, name='subjects'),
]