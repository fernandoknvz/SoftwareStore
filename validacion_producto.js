function validacionProducto(){
    //declaro variables a utilizar
    let valor_talla;
    let cantidad;
    let total;

    //obtengo la informacion
    valor_talla = document.getElementById('valor_talla').value;
    cantidad = document.getElementById('cantidad').value;
    valor_talla = parseInt(valor_talla);
    cantidad = parseInt(cantidad);

    total = valor_talla * cantidad;

    console.log('El total a pagar es: $',total);

    
}