// Login
document.addEventListener('DOMContentLoaded', function () {
  const btnIniciar = document.getElementById('btnIniciar');
  btnIniciar.addEventListener('click', function () {
    const userName = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (userName === '123' && password === '123') {
      // redirigir al usuario a la pagina principal
      window.location.href = 'pages/index-pp.html';
    } else {
      alert('Credenciales incorrectas. Intente de nuevo.');
    }
  });
});

// Buscador/ Filtrador de edificios:
// Obtiene el elemento del input y todos los botones
const input = document.getElementById('buscador');
const botones = document.querySelectorAll('button[type="button"]');

// Agrega el evento input al input para filtrar los botones
input.addEventListener('input', function() {
  const filtro = this.value.toLowerCase(); // Obtiene el valor del input y lo convierte en minúsculas
  botones.forEach(function(boton) {
    const textoBoton = boton.textContent.toLowerCase(); // Obtiene el texto del botón y lo convierte en minúsculas
    if (textoBoton.indexOf(filtro) !== -1) { // Si el texto del botón contiene el filtro, muestra el botón
      boton.style.display = '';
    } else { // De lo contrario, oculta el botón
      boton.style.display = 'none';
    }
  });
});


function mostrarModal() {
  const modal = document.getElementById("exampleModal1");
  const infoEdificio = document.getElementById("info-edificio");
  infoEdificio.innerHTML = "";

  fetch('edificios.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(edificio => {
        const edificioHTML = `
          <div>
            <h2>${edificio.nombre}</h2>
            <p><strong>Dirección:</strong> ${edificio.direccion}</p>
            <p><strong>Teléfono:</strong> ${edificio.telefono}</p>
          </div>`;
        infoEdificio.innerHTML += edificioHTML;
      });
    })
}
