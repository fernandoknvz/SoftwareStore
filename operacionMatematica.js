function suma() {
    debugger;
    //declarar variables de opcion1 y opcion2 y resultado
    let opcion1;
    let opcion2;
    let resultado;

    //obtener la informacion de 1 y 2
    opcion1 = document.getElementById('opcion1').value;
    opcion2 = document.getElementById('opcion2').value;
    opcion1 = parseInt(opcion1);
    opcion2 = parseInt(opcion1);

    //realizar la suma
    resultado = opcion1 + opcion2; 

    //mostrar el resultado
    console.log('el resultado es: ',resultado);
}