# Generated by Django 3.1.7 on 2021-05-16 13:12

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('generator', '0008_auto_20210516_1304'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Tokens',
            new_name='Token',
        ),
        migrations.RenameField(
            model_name='token',
            old_name='tokens',
            new_name='remaining_tokens',
        ),
    ]