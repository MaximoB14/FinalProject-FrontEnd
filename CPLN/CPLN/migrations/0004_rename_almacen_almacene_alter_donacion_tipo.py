# Generated by Django 4.0.6 on 2022-08-07 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CPLN', '0003_almacen_donacion_donante_producto_voluntario_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Almacen',
            new_name='Almacene',
        ),
        migrations.AlterField(
            model_name='donacion',
            name='tipo',
            field=models.CharField(max_length=50),
        ),
    ]