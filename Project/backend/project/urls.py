from .views import RepositoriesView, SingleSubjectView, SubjectsView,UserSubjectsView
from django.urls import path

urlpatterns = [
    path('subjects/', SubjectsView.as_view(), name='subjects'),
    path('user_subjects/', UserSubjectsView.as_view(), name='user_subjects'),
    path('subjects/<int:pk>', SingleSubjectView.as_view(), name='single_subject'),
    path('repositories/', RepositoriesView.as_view(), name='repo_view')
]