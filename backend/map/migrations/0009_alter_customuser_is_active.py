# Generated by Django 4.1 on 2022-09-19 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0008_alter_customuser_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]
