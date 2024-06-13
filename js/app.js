document.addEventListener('DOMContentLoaded', function() {
  //Crear objeto para guardar los datos del form element
  const datos = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  //console.log(datos);

  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSumit = document.querySelector('#formulario button[type="submit"]'); //En esta variable estamos utilizando un Selector de CSS

  //console.log(inputMensaje)

  //Asignar eventos de la interfaz
  inputEmail.addEventListener('input', validar);
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);

  function validar(e) {
    //console.log(e.target.parentElement);
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      datos[e.target.name] = "";
      comprobarDatos();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta(`El email no es valido`, e.target.parentElement);
      datos[e.target.name] = "";
      comprobarDatos();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    // Almacenar los datos en el objeto datos
    datos[e.target.name] = e.target.value.trim().toLowerCase(); //sin espacios y en minusculas
    //console.log(datos);

    //Comprobar el objeto datos
    comprobarDatos();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //Generar alerta en HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //Insertar alerta en HTML
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    //Comprueba si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove(); // Elimina la alerta anterior si existe
    }
  }

  function validarEmail(email) {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const resultado = regex.test(String(email).toLowerCase());
    //console.log(resultado);
    return resultado;
  }

  function comprobarDatos() {
    console.log(datos);
    if (Object.values(datos).includes("")) {
      btnSumit.classList.add("opacity-50");
      btnSumit.disabled = true;
      return;
    }
    btnSumit.classList.remove("opacity-50");
    btnSumit.disabled = false;
  }
});

