# Generated by Django 3.0.8 on 2020-12-19 17:04

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0027_auto_20201215_2121'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='offer',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True),
        ),
    ]