from rest_framework import serializers
from .models import Spaceship


class SpaceshipSerializer(serializers.ModelSerializer):

    class Meta:
        model = Spaceship
        fields = ('id', 'name', 'type', 'top_speed')
