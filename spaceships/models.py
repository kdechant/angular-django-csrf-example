from django.db import models


class Spaceship(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    top_speed = models.CharField(max_length=25)

    def __str__(self):
        return self.name
