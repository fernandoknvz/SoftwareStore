from django.db import models

# Create your models here.
class Polera(models.Model):
    id_polera = models.CharField(primary_key=True, max_length=3)
    nombre = models.CharField(max_length=20)
    talla = models.CharField(max_length=1)
    precio = models.CharField(max_length=6)
   

def __str__(self):
    return str(self.nombre)+" "+str(self.precio)