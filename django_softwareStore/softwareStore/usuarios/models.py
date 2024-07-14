# usuarios/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    direccion = models.TextField(blank=True, null=True)

    # Agregar related_name en las relaciones ManyToManyField
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='usuarios',  # Cambia 'usuarios' por el nombre que prefieras
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='usuarios',  # Cambia 'usuarios' por el nombre que prefieras
        blank=True,
        help_text='Specific permissions for this user.'
    )

    def __str__(self):
        return self.username
