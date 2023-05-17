document.addEventListener('DOMContentLoaded', function () {
    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');


    // console.log(inputEmail);
    // console.log(inputAsunto);
    // console.log(inputMensaje);

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        
        if (e.target.value.trim() === "") {
            mostrarAlerta(`el campo ${e.target.name} es obligatorio`, e.target.parentElement);
        return;
        } 

        limpiarAlerta(e.target.parentElement);
        
    }

    function mostrarAlerta(mensaje, referencia) {
        


        //Generar alerta en HTML
        const error = document.createElement(`P`);
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    //inyectar el error al formulario
        referencia.appendChild(error);
}

function limpiarAlerta(referencia){
        //Comprueba si ya existe un alerta
        const alerta = referencia.querySelector('.bg-red-600');
    if(alerta) {
        alerta.remove();
    } 
}

});