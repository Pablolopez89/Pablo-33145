const form = document.getElementById('login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir la acción predeterminada del envío del formulario

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('floatingPassword');
    const rememberMeInput = document.querySelector('input[type="checkbox"]');

    const username = "EXA63467";
    const password = "EXA63467";
    const rememberMe = rememberMeInput.checked;

    // Validar los campos de entrada según nuestras necesidades
    if (usernameInput.value === username && passwordInput.value === password) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html'; // Redirigir al usuario a la página de inicio
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
