// script.js

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

  // Selecciona el formulario por su ID (debería coincidir con el HTML)
  const form = document.getElementById("contacto-form");

  // Selecciona los campos del formulario
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  // Elemento donde se mostrará una respuesta al usuario (por ejemplo un mensaje de error o éxito)
  const respuesta = document.getElementById("respuesta");

  // Evento al enviar el formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Verifica que todos los campos estén completos
    if (nombre.value.trim() === "" || correo.value.trim() === "" || mensaje.value.trim() === "") {
      respuesta.style.color = "#ff7675"; // Color rojo claro
      respuesta.textContent = "Por favor, completá todos los campos.";
      return; // Sale de la función si hay campos vacíos
    }

    // Si todo está correcto, muestra un mensaje de éxito
    respuesta.style.color = "#55efc4"; // Color verde claro
    respuesta.textContent = "¡Mensaje enviado correctamente!";

    form.reset(); // Limpia el formulario
  });
});
