function validacionCantidad(){
    /* Ajerta preventiva evita el envio del formulario*/
    event.preventDefault();

    let cantidad = document.getElementById('cantidad').value;


    cantidad = parseInt(cantidad);

    if (isNaN(cantidad) || cantidad <= 0){
        alert("La cantidad debe ser mayor que cero.");
        return false; // Indica que la validación ha fallado
    }

    agregarAlCarrito(cantidad);
    alert("Agregado Exitosamente!");

    return true;
}

function agregarAlCarrito(cantidad) {
    const carrito = document.getElementById('lista-carrito');
    const li = document.createElement('li');
    li.textContent = 'Producto: React JS, Cantidad: ${cantidad}';
    carrito.appendChild(li);
}