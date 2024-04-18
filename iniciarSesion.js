function obtDatosDeSesion(){

    let inputUsuario = document.getElementById('inputUsuario');
    let inputPassword = document.getElementById('inputPassword');

    if(!inputUsuario.value.trim()){
        inputUsuario.nextElementSibling.textContent = '¡El nombre del usuario no es válido!';
        inputUsuario.classList.add('is-invalid');
    }else{
        inputUsuario.classList.remove('is-invalid');
        inputUsuario.nextElementSibling.textContent = '';
    }

    if(!inputPassword.value.trim()){
        inputPassword.nextElementSibling.textContent = '¡La contraseña no es válida!';
        inputPassword.classList.add('is-invalid');
    }else{
        inputPassword.classList.remove('is-invalid');
        inputPassword.nextElementSibling.textContent = '';
    }

// // corrige los errores
// debugger;
}
const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form =>{
    form.addEventListener('submit', event => {
        if(!form.checkValidity()){
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    },false)
})