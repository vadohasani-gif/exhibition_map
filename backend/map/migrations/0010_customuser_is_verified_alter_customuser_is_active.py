# Generated by Django 4.1 on 2022-09-26 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0009_alter_customuser_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='is_verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active'),
        ),
    ]
