# Generated by Django 3.2.22 on 2023-10-26 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='county_team',
            field=models.CharField(blank=True, max_length=25),
        ),
    ]