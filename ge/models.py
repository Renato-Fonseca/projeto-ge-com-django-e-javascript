from django.db import models

# Create your models here.


class Match(models.Model):
    mandante = models.CharField(max_length=20)
    visitante = models.CharField(max_length=20)
    estadio = models.CharField(max_length=30)
    horario = models.TimeField(default='16:00')

    def __str__(self):
        return f'{self.mandante} x {self.visitante}'
