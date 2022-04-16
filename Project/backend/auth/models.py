from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User

class Students(models.Model):
    stud_id = models.CharField(max_length=200)
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, default='kask')
    image = models.ImageField(upload_to='images_student', null=True, blank=True)
    nickname = models.CharField(max_length=200, default="Hi")
    
class Teachers(models.Model):
    subject = models.CharField(max_length=200)
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, default="Ms")
    profile_image = models.ImageField(upload_to='images_teacher', null=True, blank=True)
    nickname = models.CharField(max_length=200, default="Hi")