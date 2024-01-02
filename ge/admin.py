from django.contrib import admin
from ge.models import Match

# Register your models here.


@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    pass
