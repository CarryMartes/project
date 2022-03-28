from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User
# # Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    nickname = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images', null=True, blank=True)

    def __str__(self) -> str:
        return self.nickname

class Student(UserProfile):
    stud_id = models.CharField(max_length=200)
    
class Teacher(UserProfile):
    subject = models.CharField(max_length=200)