# Generated by Django 3.0.8 on 2020-07-22 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0007_auto_20200721_0457'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursesubject',
            name='status',
            field=models.CharField(choices=[('OBR', 'Obrigatória'), ('OPT', 'Optativa'), ('ML', 'Módulo Livre')], max_length=3),
        ),
    ]
