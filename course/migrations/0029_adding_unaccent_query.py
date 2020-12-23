from django.contrib.postgres.operations import UnaccentExtension
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('course', '0028_subject_offer'),
    ]

    operations = [
        UnaccentExtension(),
    ]
