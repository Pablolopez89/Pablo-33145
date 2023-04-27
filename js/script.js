
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



// Buscador / Filtrador de edificios:
document.addEventListener('DOMContentLoaded', function () {
// Obtiene el elemento del input y todos los botones
const input = document.getElementById('buscador');
const botones = document.querySelectorAll('#button');

// Agrega el evento input al input para filtrar los botones
input.addEventListener('input', function () {
  const filtro = this.value.toLowerCase(); // Obtiene el valor del input y lo convierte en minúsculas
  botones.forEach(function (boton) {
    const textoBoton = boton.textContent.toLowerCase(); // Obtiene el texto del botón y lo convierte en minúsculas
    if (textoBoton.indexOf(filtro) !== -1) { // Si el texto del botón contiene el filtro, muestra el botón
      boton.style.display = '';
    } else { // De lo contrario, oculta el botón
      boton.style.display = 'none';
    }
  });
});
});