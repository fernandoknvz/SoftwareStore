// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén referencia al formulario y al div de mensaje de enviado exitosamente
    const contactForm = document.getElementById('contactForm');
    const mensajeEnviado = document.getElementById('mensajeEnviado');
    const datosEnviadosList = document.getElementById('datosEnviados');
    const limpiarBtn = document.getElementById('limpiarBtn'); // Seleccionar el botón Limpiar

    // Agrega un evento de escucha para el envío del formulario
    contactForm.addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto del formulario
        event.preventDefault();

        // Recolectar datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const edad = document.getElementById('edad').value;
        const ciudad = document.getElementById('ciudad').value;
        const comuna = document.getElementById('comuna').value;
        const motivo = document.getElementById('motivo').options[document.getElementById('motivo').selectedIndex].text;
        const mensaje = document.getElementById('mensaje').value;

        //validamos que la edad este entre el rango de 18 a 120 años
        // Validar la edad
        if (edad < 18 || edad > 120) {
            alert('La edad debe estar entre 18 y 120 años.');
            return; // Detener el envío del formulario si la edad no está en el rango válido
        }

        // Validar la longitud y el formato del número de contacto
        if (/^[+]?[(]?56[)]?[-\s.]?[0-9]{9}$/.test(telefono)) {
            alert('El número de contacto debe tener 9 dígitos y ser solo números.');
            return; // Detener el envío del formulario si el número de contacto no cumple con la validación
        }

        // Mostrar mensaje de enviado exitosamente
        mensajeEnviado.style.display = 'block';

        // Mostrar datos enviados
        datosEnviadosList.innerHTML = '';
        mostrarDatoEnviado('Nombre', nombre);
        mostrarDatoEnviado('Apellido', apellido);
        mostrarDatoEnviado('Edad', edad);
        mostrarDatoEnviado('Email', email);
        mostrarDatoEnviado('Ciudad', ciudad);
        mostrarDatoEnviado('Comuna', comuna);
        mostrarDatoEnviado('Motivo', motivo);
        mostrarDatoEnviado('Mensaje', mensaje);

        // Limpiar formulario
        contactForm.reset();

    });

    //funcion para limpiar los campos escritos del fomulario
    limpiarBtn.addEventListener('click', function() {
        contactForm.reset(); // Limpiar todos los campos del formulario
    });

    // Función para mostrar cada dato enviado en una lista
    function mostrarDatoEnviado(label, value) {
        const listItem = document.createElement('li');
        listItem.textContent = `${label}: ${value}`;
        datosEnviadosList.appendChild(listItem);
    }
});