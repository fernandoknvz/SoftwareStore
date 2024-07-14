# usuarios/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('iniciar_sesion/', views.iniciar_sesion, name='iniciar_sesion'),
    # Define el path y nombre 'iniciar_sesion' según tus preferencias
]
