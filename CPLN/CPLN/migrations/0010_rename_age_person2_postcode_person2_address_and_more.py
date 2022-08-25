# Generated by Django 4.0.6 on 2022-08-24 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CPLN', '0009_person2'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person2',
            old_name='age',
            new_name='postCode',
        ),
        migrations.AddField(
            model_name='person2',
            name='address',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='person2',
            name='dateOfBirth',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='person2',
            name='telephone',
            field=models.IntegerField(max_length=20, null=True),
        ),
    ]