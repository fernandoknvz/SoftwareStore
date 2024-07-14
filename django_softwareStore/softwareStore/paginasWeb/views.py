from django.shortcuts import render, redirect, get_object_or_404
from django.http import Http404
from django.contrib import messages
from .models import Polera



# Create your views here.
def index(request):
    return render(request, 'index.html')

def productos(request):
    return render(request, 'productos.html')

def agregar(request):
    return render(request, 'agregar.html')

def nosotros(request):
    return render(request, 'nosotros.html')

def formulario(request):
    return render(request, 'formulario.html')

def crud(request):
    return render(request, 'crud.html')

def crud(request):
    poleras = Polera.objects.all()
    context = {"poleras":poleras}
    return render(request, 'crud.html', context)

def polerasAdd(request):
    if request.method != "POST":
        #no es un post, por lo tanto se muestra el formulario para agregar
        tipoPolera = Polera.objects.all()
        context = {'tipoPolera': tipoPolera}
        return render(request, 'poleras_add.html', context)
    else:
        #es un post, por lo tanto se recuperan los datos del formulario
        #y se graban en la tabla

        id_polera = request.POST.get("id_polera")
        nombre = request.POST.get("nombre_polera")
        talla = request.POST.get("talla_polera")
        precio = request.POST.get("precio_polera")

        if id_polera and nombre and talla and precio:
            obj = Polera.objects.create(
                id_polera=id_polera,
                nombre=nombre,
                talla=talla,
                precio=precio
            )
            obj.save()
            context = {'mensaje': "Ok, datos grabados..."}
        else:
            context = {'mensaje': "Error: Todos los campos son obligatorios."}
        
        return render(request, 'poleras_add.html', context)
    

def poleras_delete(request,pk):
    if request.method == 'POST':
        try:
            polera = Polera.objects.get(id_polera=pk)
            polera.delete()
            messages.success(request, 'Polera eliminada exitosamente.')
        except Polera.DoesNotExist:
            messages.error(request, 'La polera que intentas eliminar no existe.')
        
            return redirect('crud')  # Redirige a la página principal de CRUD o a donde sea necesario
        else:
            return redirect('crud')  # En caso de que la solicitud no sea POST, redirige de nuevo a la página principal de CRUD
        
def poleras_edit(request, pk):
    polera = get_object_or_404(Polera, id_polera=pk)
    
    if request.method == "POST":
        nombre = request.POST.get("nombre_polera")
        talla = request.POST.get("talla_polera")
        precio = request.POST.get("precio_polera")
        
        if nombre and talla and precio:
            polera.nombre = nombre
            polera.talla = talla
            polera.precio = precio
            polera.save()
            messages.success(request, 'Polera modificada exitosamente.')
            return redirect('crud')
        else:
            messages.error(request, 'Todos los campos son obligatorios.')
    
    context = {
        'polera': polera,
    }
    return render(request, 'poleras_edit.html', context)
