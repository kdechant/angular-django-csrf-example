from django.contrib import admin
from .models import Spaceship


@admin.register(Spaceship)
class SpaceshipAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'top_speed')
    ordering = ['name']
