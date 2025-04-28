// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contacto-form");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");
    const respuesta = document.getElementById("respuesta");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (nombre.value.trim() === "" || correo.value.trim() === "" || mensaje.value.trim() === "") {
        respuesta.style.color = "#ff7675";
        respuesta.textContent = "Por favor, completá todos los campos.";
        return;
      }
  
      respuesta.style.color = "#55efc4";
      respuesta.textContent = "¡Mensaje enviado correctamente!";
  
      form.reset();
    });
  });
  