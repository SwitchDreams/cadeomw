from django.contrib.postgres.operations import UnaccentExtension
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('course', '0030_auto_20201224_2043'),
    ]

    operations = [
        UnaccentExtension(),
    ]
