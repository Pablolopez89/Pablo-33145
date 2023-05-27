
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

// Filtro de edificios pagina SOC Olleros Data
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

//Filtro de edificios pagina SOC Mayo
document.addEventListener('DOMContentLoaded', function () {

  const input1 = document.getElementById('buscadorMayo');
  const botonesMayo = document.querySelectorAll('#botonMayo');

  input1.addEventListener('input', function () {
    const filtro1 = this.value.toLowerCase();
    botonesMayo.forEach(function (boton1) {
      const textoBoton1 = boton1.textContent.toLowerCase();
      if (textoBoton1.indexOf(filtro1) !== -1) {
        boton1.style.display = '';
      } else {
        boton1.style.display = 'none';
      }
    });
  });
});

// Filtro de los edificios  SOC Olleros Sitios (esta ligado con el FETCH)
const tarjetasEdificios = document.getElementById('tarjetasEdificios');
const input2 = document.getElementById('buscadorOllerosSitios');
const botonesOllerosSitios = document.querySelectorAll('#botonOllerosSitios');

document.addEventListener('DOMContentLoaded', function () {

  input2.addEventListener('input', function () {
    const filtro2 = this.value.toLowerCase();
    botonesOllerosSitios.forEach(function (boton2) {
      const textoBoton2 = boton2.textContent.toLowerCase();
      if (textoBoton2.indexOf(filtro2) !== -1) {
        
        boton2.classList.add('btn-outline-warning'); 
        boton2.classList.remove('btn-warning'); 
      } else {
        
        boton2.classList.remove('btn-outline-warning'); 
        boton2.classList.add('btn-warning'); 
      }
    });
    if (filtro2 === '') {
      botonesOllerosSitios.forEach(function (boton2) {
        boton2.classList.remove('btn-outline-warning'); 
        boton2.classList.add('btn-warning'); 
      });
    }
  });
});

// FETCH
document.addEventListener('DOMContentLoaded', function () {

  botonesOllerosSitios.forEach(boton3 => {
    boton3.addEventListener('click', async function () {
      const edificioId = boton3.dataset.edificioId;
      const url = `../js/edificios.json`;

      try {
        const response = await fetch(url);
        const edificios = await response.json();
        const edificio = edificios.find(edificio => edificio.id === edificioId);

        const tarjetaEdificio = document.createElement('div');
        tarjetaEdificio.setAttribute('data-edificio-id', edificioId);
        tarjetaEdificio.innerHTML = `
          <h2><strong>${edificio.nombre}</strong></h2>
          <hr>
          <p><b>Dirección:</b> ${edificio.direccion}</p>
          <p><b>Ubicación:</b><a href="${edificio.ubicacion}" target="_blank"> Ver en Google Maps</a></p>
          <p><b>Teléfono int:</b> ${edificio.telefono}</p>
          <p><strong>Celular guardia:</strong> ${edificio.celular}  - <a class="bi bi-whatsapp" href="https://wa.me/+5493415465662" target="_blank"> Whats App</a></p>
          <p><b>Referente:</b> ${edificio.referente} - <a class="bi bi-envelope-fill" href="mailto:juan.cortarello@claro.com.ar?subject=Sitio TS1001"> Mail  /   </a><a class="bi-microsoft-teams" href="sip:juan.cortarello@claro.com.ar"> Teams </a></p>
          <p><b>Cell ID:</b> ${edificio.cellID}</p>
          <hr>
          <h5>SITIOS QUE MONITOREA</h5>
          <div class="d-flex justify-content-evenly">
          <p><b>Cell ID:</b><a href="x" class="bi bi-geo-alt-fill" target="_blank">${edificio.monitoreo1}</a></p>
          <p><b>Cell ID:</b><a class="bi bi-geo-alt-fill" href="x" target="_blank">${edificio.monitoreo2}</a></p>
          </div>          
          <hr>
          <p><b>Vigilador Diurno:</b> ${edificio.vigilador1} <a class="bi bi-envelope-fill" href="mailto:guillermo.orellano@claro.com.ar?subject=Sitio TS1001"> Mail / </a><a class="bi-microsoft-teams" href="sip:guillermo.orellano@claro.com.ar"> Teams</a></p>
          <p><b>Vigilador Nocturno:</b> ${edificio.vigilador2} <a class="bi bi-envelope-fill" href="mailto:julio.enrique@claro.com.ar?subject=Sitio TS1001"> Mail / </a><a class="bi-microsoft-teams" href="sip:julio.enrique@claro.com.ar"> Teams </a></p>
          <p><b>Vigilador Franquero:</b> ${edificio.vigilador3}</p>
        `;
        tarjetasEdificios.innerHTML = '';
        tarjetasEdificios.appendChild(tarjetaEdificio);
      } catch (error) {
        console.log(error);
      }
    });
  });
});
