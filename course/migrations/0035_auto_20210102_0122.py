# Generated by Django 3.0.8 on 2021-01-02 01:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0034_merge_20201231_2208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offer',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
