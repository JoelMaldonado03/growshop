document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const loginContainer = document.querySelector(".login-container");
  
    // Simular carga
    setTimeout(() => {
      loaderWrapper.style.display = "none"; // Ocultar la pantalla de carga
      loginContainer.style.display = "block"; // Mostrar el formulario
    }, 2000); // 2 segundos de animación
  });
  