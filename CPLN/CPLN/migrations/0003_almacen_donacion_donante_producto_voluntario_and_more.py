# Generated by Django 4.0.6 on 2022-08-04 12:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CPLN', '0002_delete_barrios'),
    ]

    operations = [
        migrations.CreateModel(
            name='Almacen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Donacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('tipo', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Donante',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('cuil', models.IntegerField()),
                ('telefono', models.IntegerField()),
                ('email', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('articulo', models.CharField(max_length=50)),
                ('marca', models.CharField(max_length=50)),
                ('cantidad', models.IntegerField()),
                ('peso', models.IntegerField()),
                ('vencimiento', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Voluntario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol', models.CharField(max_length=50)),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('cuil', models.IntegerField()),
                ('telefono', models.IntegerField()),
                ('email', models.CharField(max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name='Usuario',
        ),
        migrations.AddField(
            model_name='donante',
            name='cod_donante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.producto'),
        ),
        migrations.AddField(
            model_name='donacion',
            name='cod_producto',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.producto'),
        ),
        migrations.AddField(
            model_name='almacen',
            name='cod_producto',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CPLN.producto'),
        ),
    ]
