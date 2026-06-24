// ============================================================
// main.js — Lógica principal e inicialización
// ============================================================

// Esta función se ejecuta automáticamente cuando la página HTML termina de cargar
document.addEventListener("DOMContentLoaded", function() {
  console.log("Sitio cargado. Inicializando...");
  
  // 1. Mostrar los productos destacados en el inicio
  mostrarProductosDestacados();
  
  // 2. Actualizar el contador del carrito si hay algo guardado
  actualizarContadorCarrito();
});

/**
 * Función para renderizar los productos destacados en el HTML
 */
function mostrarProductosDestacados() {
  // 1. Buscar el contenedor en el HTML donde irán las tarjetas
  const contenedorProductos = document.querySelector(".fila-productos");
  
  // Si no estamos en la página de inicio (no existe el contenedor), salimos
  if (!contenedorProductos) return;
  
  // Limpiamos el contenido por si hay algo de prueba
  contenedorProductos.innerHTML = "";
  
  // 2. Filtrar solo los productos que son "destacados" de nuestro data.js
  const productosDestacados = productos.filter(producto => producto.destacado === true);
  
  // 3. Por cada producto destacado, crear su tarjeta en HTML
  productosDestacados.forEach(producto => {
    
    // Formatear el precio para que se vea como moneda colombiana (ej: $45.000)
    const precioFormateado = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(producto.precio);
    
    // Determinar qué etiqueta mostrar (Bestseller, New, etc)
    let etiquetaHTML = "";
    if (producto.descuento > 0) {
      etiquetaHTML = `<span class="etiqueta-producto descuento">-${producto.descuento}%</span>`;
    } else if (producto.nuevo) {
      etiquetaHTML = `<span class="etiqueta-producto nuevo">NUEVO</span>`;
    } else {
      etiquetaHTML = `<span class="etiqueta-producto bestseller">DESTACADO</span>`;
    }
    
    // Construir el HTML de la tarjeta
    const tarjetaHTML = `
      <article class="tarjeta-producto">
        <div class="contenedor-imagen-producto">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
          ${etiquetaHTML}
        </div>
        <div class="informacion-producto">
          <p class="categoria-producto">${obtenerNombreCategoria(producto.categoriaId)}</p>
          <h3 class="nombre-producto">${producto.nombre}</h3>
          <p class="precio-producto">${precioFormateado}</p>
          <button class="boton-agregar-carrito" onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        </div>
      </article>
    `;
    
    // Insertar la tarjeta en el contenedor
    contenedorProductos.innerHTML += tarjetaHTML;
  });
}

/**
 * Función auxiliar para obtener el nombre de la categoría a partir de su ID
 */
function obtenerNombreCategoria(idCategoria) {
  const categoria = categorias.find(cat => cat.id === idCategoria);
  return categoria ? categoria.nombre : "General";
}

/**
 * Función para agregar un producto al carrito (versión inicial)
 */
function agregarAlCarrito(idProducto) {
  console.log("Agregando producto al carrito con ID:", idProducto);
  // Aquí más adelante llamaremos a la lógica de carrito.js
  alert("Producto agregado al carrito! (Lógica en desarrollo)");
}

/**
 * Función para actualizar el numerito del carrito
 */
function actualizarContadorCarrito() {
  const contador = document.querySelector(".contador-carrito");
  if (contador) {
    // Por ahora lo dejamos en 0, luego leeremos del localStorage
    contador.textContent = "0";
  }
}