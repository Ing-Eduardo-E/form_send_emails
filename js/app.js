document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  //console.log(inputMensaje)

  //Asignar eventos de la interfaz
  inputEmail.addEventListener('blur', validar);

  inputAsunto.addEventListener('blur', validar);

  inputMensaje.addEventListener('blur', validar);

  function validar(evento) {
    console.log(evento.target.value);
  }

});

