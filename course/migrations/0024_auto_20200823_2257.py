# Generated by Django 3.0.8 on 2020-08-23 22:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0023_auto_20200823_2252'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
