# Generated by Django 3.2.12 on 2022-04-14 09:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('stud_id', models.CharField(max_length=200)),
                ('user', models.OneToOneField(default='kask', on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images_student')),
                ('nickname', models.CharField(default='Hi', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Teachers',
            fields=[
                ('subject', models.CharField(max_length=200)),
                ('user', models.OneToOneField(default='Ms', on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user')),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='images_teacher')),
                ('nickname', models.CharField(default='Hi', max_length=200)),
            ],
        ),
    ]