# Generated by Django 5.0 on 2024-01-02 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mandante', models.CharField(max_length=20)),
                ('visitante', models.CharField(max_length=20)),
                ('estadio', models.CharField(max_length=30)),
            ],
        ),
    ]
