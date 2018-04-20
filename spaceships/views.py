from django.shortcuts import render
from rest_framework import viewsets
from .models import Spaceship
from . import serializers


def index(request, path=''):
    """
    The home page. This displays the single-page app.
    """
    return render(request, 'index.html')


class SpaceshipViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Spaceship model
    """
    queryset = Spaceship.objects.filter()
    serializer_class = serializers.SpaceshipSerializer

    def get_queryset(self):
        queryset = self.queryset
        return queryset
