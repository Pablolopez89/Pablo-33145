
// Login
document.addEventListener('DOMContentLoaded', function () {
  const btnIniciar = document.getElementById('btnIniciar');
  btnIniciar.addEventListener('click', function () {
    const userName = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (userName === 'EXA63467' && password === '123') {
      // redirigir al usuario a la pagina principal
      window.location.href = 'pages/index-pp.html';
      sessionStorage.setItem('userName', userName);
    } else {
      // Libreria sweetalert2
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'Intente de nuevo.',
        backdrop: '#F9102F',
      });
    }
  });
});

// guarda el nombre de usuario en session storage 
document.addEventListener('DOMContentLoaded', function () {
  // Obtener el botón de cerrar sesión
  const btnCerrarSesion = document.querySelector('#btnCerrarSesion');
  // Agregar el evento click al botón de cerrar sesión
  btnCerrarSesion.addEventListener('click', function () {
    // Borrar la sesión del usuario y redirigir al usuario a la página de inicio de sesión
    sessionStorage.clear();
    window.location.href = '../index.html';
  });
  // Obtener el nombre de usuario almacenado en la sesión del usuario
  const username = sessionStorage.getItem('userName');

  // Obtener el elemento de párrafo que muestra el nombre del usuario
  const userNameText = document.getElementById('userNameText');

  // Actualizar el texto del elemento de párrafo con el valor del nombre de usuario
  userNameText.textContent = `${username}`;
});

// Buscador / Filtrador de edificios pagina SOC Olleros Data
document.addEventListener('DOMContentLoaded', function () {
  // Obtiene el elemento del input y todos los botones
  const input = document.getElementById('buscador');
  const botonesData = document.querySelectorAll('#botonData');

  // Agrega el evento input al input para filtrar los botones
  input.addEventListener('input', function () {
    const filtro = this.value.toLowerCase(); // Obtiene el valor del input y lo convierte en minúsculas
    botonesData.forEach(function (boton) {
      const textoBoton = boton.textContent.toLowerCase(); // Obtiene el texto del botón y lo convierte en minúsculas
      if (textoBoton.indexOf(filtro) !== -1) { // Si el texto del botón contiene el filtro, muestra el botón
        boton.style.display = '';
      } else { // De lo contrario, oculta el botón
        boton.style.display = 'none';
      }
    });
  });
});

// Buscador / Filtrador de edificios pagina SOC Olleros Mayo
document.addEventListener('DOMContentLoaded', function () {

  const input2 = document.getElementById('buscadorMayo');
  const botonesMayo = document.querySelectorAll('#botonMayo');

  input2.addEventListener('input', function () {
    const filtro2 = this.value.toLowerCase();
    botonesMayo.forEach(function (boton1) {
      const textoBoton2 = boton1.textContent.toLowerCase();
      if (textoBoton2.indexOf(filtro2) !== -1) {
        boton1.style.display = '';
      } else {
        boton1.style.display = 'none';
      }
    });
  });
});


  fetch("../js/edificios.json")
    .then(response => response.json())
    .then(edificios => {
      const divEdificios = document.getElementById("edificios");
      edificios.forEach(edificio => {
        const divEdificio = document.createElement("div");
        divEdificio.innerHTML = `
          <h2>${edificio.nombre}</h2>
          <p>Dirección: ${edificio.direccion}</p>
          <p>Teléfono: ${edificio.telefono}</p>
          <a href="${edificio.ubicacion}" target="_blank">Ver en Google Maps</a>
          <img src="${edificio.imagen}" alt="${edificio.nombre}">
        `;
        divEdificios.appendChild(divEdificio);
      });
    })
    .catch(error => console.log(error));

    // Buscador / Filtrador de edificios pagina SOC Olleros Mayo
    document.addEventListener('DOMContentLoaded', function () {

      const input3 = document.getElementById('buscadorOllerosSitios');
      const botonesOllerosSitios = document.querySelectorAll('#botonOllerosSitios');
    
      input3.addEventListener('input', function () {
        const filtro3 = this.value.toLowerCase();
        botonesOllerosSitios.forEach(function (boton3) {
          const textoBoton3 = boton3.textContent.toLowerCase();
          if (textoBoton3.indexOf(filtro3) !== -1) {
            boton3.classList.add('btn-warning');
          } else {
            boton3.classList.remove('btn-warning');
          }
        });
      });
    });
    
  
