# Generated by Django 3.0.8 on 2020-07-21 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0005_auto_20200720_0124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='begin_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
