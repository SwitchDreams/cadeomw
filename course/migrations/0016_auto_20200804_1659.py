# Generated by Django 3.0.8 on 2020-08-04 16:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0015_auto_20200803_0123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='option',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subject_option', to='course.Course'),
        ),
    ]
