function validarFormularioContacto() {
    var select = document.getElementById('userMarcas');
    var valorSeleccionado = select.value;

    if (valorSeleccionado === 'NONE') {
        alert('Por favor, selecciona una marca.');
        return false; // Evita que el formulario se envíe
    }

    return true; // Permite que el formulario se envíe
}

function validarFigureTurnos() {

    //Verificar que la fecha ingresada sea mayor o igual a la actual.
    var fechaInput = document.getElementById("fechaTurno").value;
    var fechaSeleccionada = new Date(fechaInput);
    var fechaActual = new Date();
    
    // Obtener la fecha actual sin la parte de la hora
    var fechaActualSinHora = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());
    
    // Verificar si la fecha seleccionada es menor que la fecha actual
    if (fechaSeleccionada < fechaActualSinHora) {
        alert("La fecha seleccionada no puede ser menor que la fecha actual.");
        return false; // Evita que el formulario se envíe
    }
    
    var select = document.getElementById("Marca_auto");
    
    // Verificar si se ha seleccionado una opción en el select
    if (select.value === "NONE") {
        alert("Debes seleccionar una marca.");
        return false; // Evita que el formulario se envíe
    }

    var checkbox = document.getElementById("Acepto");

    // Verificar si el checkbox está marcado
    if (!checkbox.checked) {
        alert("Debes aceptar los términos y condiciones.");
        return false; // Evita que el formulario se envíe
    }

    return true; // Permite que el formulario se envíe
}

function validarInicioSesion() {
    const usuario= document.getElementById('usuario').value.trim();
    const password= document.getElementById('password').value.trim();
    
    let validation = true

    if (!usuario) {
        errorElement.textContent = 'Por favor ingrese el nombre de usuario.';
        validation = false;
    }
    if (!password) {
        errorElement.textContent = 'Por favor, ingresa la contraseña.';
        validation = false; // Prevenir el envío del formulario

    }

    if (validation) {
        return true; // Permitir el envío del formulario
    } 
}

