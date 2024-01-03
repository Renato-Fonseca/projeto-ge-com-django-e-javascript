from django.db import models
from django.utils import timezone
from datetime import datetime, timedelta


def current_time():
    return timezone.now().time()


def current_date():
    return datetime.date()


dt_str = "2013/10/11"
dt = datetime.strptime(dt_str, "%Y/%m/%d")
new_dt = dt + timedelta(days=1)


class Match(models.Model):
    mandante = models.CharField(max_length=20)
    visitante = models.CharField(max_length=20)
    estadio = models.CharField(max_length=30)
    horario = models.TimeField(default=current_time)
    date = models.DateField(null=True)
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=50)
    about = models.TextField(default=new_dt)



    def __str__(self):
        return f'{self.mandante} x {self.visitante}'
