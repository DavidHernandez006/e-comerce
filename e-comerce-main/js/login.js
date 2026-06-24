// ============================================================
// login.js 
// ============================================================

// Esperamos a que el HTML termine de cargar
document.addEventListener("DOMContentLoaded", function() {
  
  const formulario = document.getElementById("formulario-login");
  const mensajeError = document.getElementById("mensaje-error");

  // Si el formulario no existe (por ejemplo, estamos en otra página), no hacemos nada
  if (!formulario) return;

  // Escuchamos cuando el usuario hace clic en el botón "Ingresar"
  formulario.addEventListener("submit", function(evento) {
    
    // Evita que la página se recargue automáticamente
    evento.preventDefault();

    // 1. Obtener lo que el usuario escribió en las cajas de texto
    const emailIngresado = document.getElementById("email").value;
    const passwordIngresado = document.getElementById("password").value;

    // 2. Buscar en nuestra "base de datos" (data.js)
    // Buscamos si hay ALGÚN usuario que tenga ese mismo email Y contraseña
    const usuarioEncontrado = usuarios.find(usuario => 
      usuario.email === emailIngresado && usuario.password === passwordIngresado
    );

    // 3. Tomar una decisión
    if (usuarioEncontrado) {
      
      // ¡ÉXITO! Ocultamos el error por si estaba visible
      mensajeError.style.display = "none";
      
      // Guardamos la información en el localStorage del navegador
      // Guardamos solo datos seguros (nunca la contraseña)
      const datosParaGuardar = {
        id: usuarioEncontrado.id,
        nombre: usuarioEncontrado.nombre,
        rol: usuarioEncontrado.rol
      };
      
      // localStorage guarda textos, usamos JSON.stringify para convertir el objeto
      localStorage.setItem("usuarioLogueado", JSON.stringify(datosParaGuardar));

      alert(`¡Bienvenido ${usuarioEncontrado.nombre}!`);
      
      // Lo mandamos de regreso a la página principal
      window.location.href = "../index.html";
      
    } else {
      
      // ERROR: Las credenciales no coinciden
      mensajeError.style.display = "block";
      
    }
  });
});