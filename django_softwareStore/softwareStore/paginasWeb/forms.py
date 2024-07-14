from django import forms
from .models import Polera

class PoleraForm(forms.ModelForm):
    class Meta:
        model = Polera
        fields = ['nombre', 'talla', 'precio']  # Ajusta los campos según sea necesario