from .views import SubjectsView,UserSubjectsView
from django.urls import path

urlpatterns = [
    path('subjects/', SubjectsView.as_view(), name='subjects'),
    path('user_subjects/', UserSubjectsView.as_view(), name='user_subjects')
]