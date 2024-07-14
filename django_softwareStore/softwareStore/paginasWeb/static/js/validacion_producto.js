function validacionCantidad(event){
    /* Alerta preventiva evita el envio del formulario*/
    event.preventDefault();

    let cantidad = document.getElementById('cantidad').value;
    let precio = 25000; //precio fijo de cada producto
    let nombreProducto = "React JS"; //nombre del producto
    cantidad = parseInt(cantidad);

    if (isNaN(cantidad) || cantidad <= 0){
        alert("La cantidad debe ser mayor que cero.");
        return false; // Indica que la validación ha fallado
    }

    agregarAlCarrito(nombreProducto, cantidad, precio);
    alert("Agregado Exitosamente!");

    // Reiniciar los campos del formulario
    document.getElementById('cantidad').value = '';

    return true;
}

function agregarAlCarrito(nombreProducto, cantidad, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const producto = {
        nombre: nombreProducto,
        cantidad: cantidad,
        precio: precio
    };

    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarritoElement = document.getElementById('total-carrito');
    listaCarrito.innerHTML = '';
    let totalCarrito = 0;

    carrito.forEach((producto, index) => {
        const totalProducto = producto.precio * producto.cantidad;
        totalCarrito += totalProducto;

        const li = document.createElement('li');
        li.textContent = `Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: $${producto.precio}, Precio total: $${totalProducto}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-danger', 'ms-2');
        btnEliminar.onclick = () => eliminarDelCarrito(index);

        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });

    totalCarritoElement.textContent = `Total: $${totalCarrito}`;
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

document.addEventListener('DOMContentLoaded', mostrarCarrito);
