function validacionCantidad(){
    let cantidad = document.getElementById('cantidad').Value;


    cantidad = parseInt(cantidad);

    if (cantidad <= 0){
        alert("La cantidad debe ser mayor que cero.");
        return false; // Indica que la validación ha fallado
    }

    alert("Agregado Exitosamente!");

    return true;
}