from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('productos/', views.productos, name='productos'),
    path('agregar/', views.agregar, name='agregar'),
    path('nosotros/', views.nosotros, name='nosotros'),
    path('formulario/', views.formulario, name='formulario'),
    path('crud/', views.crud, name='crud'),
    path('poleras_add/', views.polerasAdd, name='polerasAdd'),
    path('poleras_delete/<str:pk>', views.poleras_delete, name='poleras_delete'),
    path('poleras_edit/<str:pk>/', views.poleras_edit, name='poleras_edit'),
]
