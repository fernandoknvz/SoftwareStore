# usuarios/views.py
from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import login
from django.contrib import messages

def iniciar_sesion(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            # Redirige a la página deseada después del inicio de sesión
            return redirect('crud')  # Por ejemplo, redirige a la página de editar perfil
    else:
        form = AuthenticationForm()
    return render(request, 'usuarios/iniciar_sesion.html', {'form': form})

