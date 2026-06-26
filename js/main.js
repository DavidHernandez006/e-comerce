// ============================================================
// main.js — Lógica principal e inicialización
// ============================================================

// Cargar favoritos al iniciar
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Esta función se ejecuta automáticamente cuando la página HTML termina de cargar
document.addEventListener("DOMContentLoaded", function() {
  console.log("Sitio cargado. Inicializando...");
  
  // Optimización de Scroll: Throttle para el navbar u otros efectos
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScroll < 16) return; // ~60fps throttle
    lastScroll = now;

    const header = document.querySelector('.barra-superior');
    if (header) {
      if (window.scrollY > 50) {
        header.style.backdropFilter = 'blur(20px)';
        header.style.background = 'rgba(18, 18, 18, 0.8)';
      } else {
        header.style.backdropFilter = 'none';
        header.style.background = 'transparent';
      }
    }
  }, { passive: true });

  // 1. Mostrar los productos destacados en el inicio
  mostrarProductosDestacados();
  
  // 2. Mostrar productos nuevos
  mostrarProductosNuevos();
  
  // 3. Mostrar productos con ofertas
  mostrarProductosConOfertas();
  
  // 4. Mostrar productos más vendidos
  mostrarProductosMasVendidos();
  
  // 5. Actualizar el contador del carrito si hay algo guardado
  actualizarContadorCarrito();
  
  // 6. Configurar listeners para favoritos
  configurarFavoritos();
});

/**
 * Función para renderizar los productos destacados en el HTML
 */
function mostrarProductosDestacados() {
  const contenedorProductos = document.querySelector("#seccion-destacados .fila-productos");
  
  if (!contenedorProductos) return;
  
  contenedorProductos.innerHTML = "";
  
  const productosDestacados = productos.filter(producto => producto.destacado === true).slice(0, 4);
  
  productosDestacados.forEach(producto => {
    contenedorProductos.innerHTML += crearTarjetaProducto(producto);
  });
}

/**
 * Función para mostrar productos nuevos
 */
function mostrarProductosNuevos() {
  const contenedorNuevos = document.querySelector("#grid-nuevos");
  
  if (!contenedorNuevos) return;
  
  contenedorNuevos.innerHTML = "";
  
  const productosNuevos = productos.filter(producto => producto.nuevo === true).slice(0, 4);
  
  productosNuevos.forEach(producto => {
    contenedorNuevos.innerHTML += crearTarjetaProducto(producto);
  });
}

/**
 * Función para mostrar productos con ofertas
 */
function mostrarProductosConOfertas() {
  const contenedorOfertas = document.querySelector(".grid-ofertas");
  
  if (!contenedorOfertas) return;
  
  contenedorOfertas.innerHTML = "";
  
  const productosConOfertas = productos.filter(producto => producto.descuento > 0).slice(0, 4);
  
  productosConOfertas.forEach(producto => {
    contenedorOfertas.innerHTML += crearTarjetaOferta(producto);
  });
}

/**
 * Función para mostrar productos más vendidos
 */
function mostrarProductosMasVendidos() {
  const contenedorMasVendidos = document.querySelector(".grid-mas-vendidos");
  
  if (!contenedorMasVendidos) return;
  
  contenedorMasVendidos.innerHTML = "";
  
  // Ordenar por calificación y reseñas (más vendidos)
  const masVendidos = [...productos]
    .sort((a, b) => (b.resenas * b.calificacion) - (a.resenas * a.calificacion))
    .slice(0, 3);
  
  masVendidos.forEach(producto => {
    contenedorMasVendidos.innerHTML += crearTarjetaVendida(producto);
  });
}

/**
 * Crea el HTML de una tarjeta de producto estándar
 */
function crearTarjetaProducto(producto) {
  const precioFormateado = formatearPrecio(producto.precio);
  let etiquetaHTML = obtenerEtiqueta(producto);
  const esFavorito = favoritos.includes(producto.id);
  
  return `
    <article class="tarjeta-producto" onclick="irADetalleProducto(${producto.id})">
      <div class="contenedor-imagen-producto">
        <img src="${producto.imagen}"
             alt="${producto.nombre}"
             class="imagen-producto"
             loading="lazy"
             onerror="handleImgError(this)"
             onload="handleImgLoad(this)">
        ${etiquetaHTML}
        <button class="btn-favorito ${esFavorito ? 'activo' : ''}" 
                onclick="toggleFavorito(event, ${producto.id})" 
                title="Agregar a favoritos">
          <i class="ph ${esFavorito ? 'ph-heart-fill' : 'ph-heart'}"></i>
        </button>
      </div>
      <div class="informacion-producto">
        <p class="categoria-producto">${obtenerNombreCategoria(producto.categoriaId)}</p>
        <h3 class="nombre-producto">${producto.nombre}</h3>
        <div class="fila-precio-descuento">
          <span class="precio-producto">${precioFormateado}</span>
          ${producto.descuento > 0 ? `<span class="descuento-badge">-${producto.descuento}%</span>` : ''}
        </div>
        <div class="calificacion">
          ${'⭐'.repeat(Math.floor(producto.calificacion))} (${producto.resenas})
        </div>
        <button class="boton-agregar-carrito" onclick="agregarAlCarrito(event, ${producto.id})">Agregar</button>
      </div>
    </article>
  `;
}

/**
 * Crea el HTML de una tarjeta de oferta
 */
function crearTarjetaOferta(producto) {
  const precioOriginal = producto.precio;
  const precioConDescuento = precioOriginal - (precioOriginal * producto.descuento / 100);
  const precioFormateadoOriginal = formatearPrecio(precioOriginal);
  const precioFormateadoDescuento = formatearPrecio(precioConDescuento);
  const esFavorito = favoritos.includes(producto.id);
  
  return `
    <article class="tarjeta-oferta" onclick="irADetalleProducto(${producto.id})">
      <div class="imagen-oferta">
        <img src="${producto.imagen}"
             alt="${producto.nombre}"
             loading="lazy"
             onerror="handleImgError(this)"
             onload="handleImgLoad(this)">
        <span class="badge-descuento">-${producto.descuento}%</span>
        <button class="btn-favorito-oferta ${esFavorito ? 'activo' : ''}" 
                onclick="toggleFavorito(event, ${producto.id})">
          <i class="ph ${esFavorito ? 'ph-heart-fill' : 'ph-heart'}"></i>
        </button>
      </div>
      <div class="info-oferta">
        <p class="categoria-oferta">${obtenerNombreCategoria(producto.categoriaId)}</p>
        <h3>${producto.nombre}</h3>
        <div class="precios-oferta">
          <span class="precio-original">${precioFormateadoOriginal}</span>
          <span class="precio-descuento">${precioFormateadoDescuento}</span>
        </div>
        <button class="btn-agregar-oferta" onclick="agregarAlCarrito(event, ${producto.id})">
          <i class="ph ph-shopping-cart"></i> Agregar
        </button>
      </div>
    </article>
  `;
}

/**
 * Crea el HTML de una tarjeta de producto más vendido
 */
function crearTarjetaVendida(producto) {
  const precioFormateado = formatearPrecio(producto.precio);
  const esFavorito = favoritos.includes(producto.id);
  
  return `
    <article class="tarjeta-vendido" onclick="irADetalleProducto(${producto.id})">
      <div class="imagen-vendido">
        <img src="${producto.imagen}"
             alt="${producto.nombre}"
             loading="lazy"
             onerror="handleImgError(this)"
             onload="handleImgLoad(this)">
        <button class="btn-favorito-vendido ${esFavorito ? 'activo' : ''}" 
                onclick="toggleFavorito(event, ${producto.id})">
          <i class="ph ${esFavorito ? 'ph-heart-fill' : 'ph-heart'}"></i>
        </button>
      </div>
      <div class="info-vendido">
        <p class="cat-vendido">${obtenerNombreCategoria(producto.categoriaId)}</p>
        <h3>${producto.nombre}</h3>
        <p class="desc-vendido">${producto.descripcion.substring(0, 50)}...</p>
        <div class="rating-vendido">
          ${'⭐'.repeat(Math.floor(producto.calificacion))} ${producto.calificacion} (${producto.resenas} reseñas)
        </div>
        <div class="fila-precio">
          <span class="precio-vendido">${precioFormateado}</span>
          <button class="btn-agregar" onclick="agregarAlCarrito(event, ${producto.id})">
            <i class="ph ph-shopping-cart"></i> Agregar
          </button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Obtiene la etiqueta según el tipo de producto
 */
function obtenerEtiqueta(producto) {
  if (producto.descuento > 0) {
    return `<span class="etiqueta-producto descuento">-${producto.descuento}%</span>`;
  } else if (producto.nuevo) {
    return `<span class="etiqueta-producto nuevo">NUEVO</span>`;
  } else if (producto.resenas > 100) {
    return `<span class="etiqueta-producto bestseller">BESTSELLER</span>`;
  }
  return '';
}

/**
 * Formatea un precio como moneda colombiana
 */
function formatearPrecio(precio) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(precio);
}

/**
 * Obtiene el nombre de la categoría por su ID
 */
function obtenerNombreCategoria(idCategoria) {
  const categoria = categorias.find(cat => cat.id === idCategoria);
  return categoria ? categoria.nombre : "General";
}

/**
 * Navega a la página de detalle del producto
 */
function irADetalleProducto(productoId) {
  const isInsidePages = window.location.pathname.includes('/pages/');
  const prefix = isInsidePages ? '' : 'pages/';
  window.location.href = `${prefix}publicacion.html?id=${productoId}`;
}

/**
 * Toggle favorito
 */
function toggleFavorito(event, productoId) {
  event.stopPropagation();
  
  const indice = favoritos.indexOf(productoId);
  if (indice > -1) {
    favoritos.splice(indice, 1);
    mostrarNotificacion("Eliminado de favoritos");
  } else {
    favoritos.push(productoId);
    mostrarNotificacion("Agregado a favoritos ❤️");
  }
  
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  
  // Actualizar UI
  actualizarUIFavoritos();

  // Recargar las secciones para actualizar botones de favorito
  mostrarProductosDestacados();
  mostrarProductosConOfertas();
  mostrarProductosMasVendidos();

  // Si existe en catalogo.js, sincronizar badges
  if (typeof actualizarBadgesNav === 'function') {
    actualizarBadgesNav();
  }
}

function actualizarUIFavoritos() {
    const badgeFavs = document.querySelector('.badge-favs');
    if (badgeFavs) {
        badgeFavs.textContent = favoritos.length;
        badgeFavs.style.display = favoritos.length > 0 ? 'flex' : 'none';
    }
}

/**
 * Configurar listeners de favoritos
 */
function configurarFavoritos() {
  const enlaceFavoritos = document.querySelector('.enlace-favoritos');
  if (enlaceFavoritos) {
    enlaceFavoritos.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'pages/favoritos.html';
    });
  }
}

/**
 * Agrega un producto al carrito
 */
function agregarAlCarrito(event, productoId) {
  if (event) event.stopPropagation();
  
  let key = "beautyshop-carrito";
  let carrito = JSON.parse(localStorage.getItem(key)) || [];
  const producto = productos.find(p => p.id === productoId);
  
  if (!producto) return;
  
  const itemExistente = carrito.find(item => item.productoId === productoId);
  
  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    carrito.push({
      productoId: producto.id,
      cantidad: 1
    });
  }
  
  localStorage.setItem(key, JSON.stringify(carrito));
  actualizarContadorCarrito();
  
  // Mostrar notificación
  mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

/**
 * Actualiza el contador del carrito
 */
function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem('beautyshop-carrito')) || [];
  const contador = carrito.reduce((total, item) => total + item.cantidad, 0);
  
  const badgeCarrito = document.querySelector('.badge-header');
  if (badgeCarrito) {
    badgeCarrito.textContent = contador;
    badgeCarrito.style.display = contador > 0 ? 'inline' : 'none';
  }
}

/**
 * Global Image Handlers for Performance & UX
 */
function handleImgError(img) {
  img.classList.add('img-error');
  // Fallback to a placeholder that fits the luxury theme
  img.src = "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400";
}

function handleImgLoad(img) {
  img.classList.add('loaded');
}

/**
 * Muestra una notificación temporal
 */
function mostrarNotificacion(mensaje) {
  const notificacion = document.createElement('div');
  notificacion.className = 'notificacion';
  notificacion.textContent = mensaje;
  notificacion.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notificacion);
  
  setTimeout(() => notificacion.remove(), 2000);
}

/**
 * Desplaza a una sección específica
 */
function scrollToSection(sectionId) {
  const seccion = document.getElementById(sectionId);
  if (seccion) {
    seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Activa el elemento del menú correspondiente
 */
function activarMenu(indice) {
  const menuItems = document.querySelectorAll('.opcion-navegacion');
  menuItems.forEach((item, i) => {
    if (i === indice) {
      item.classList.add('activa');
    } else {
      item.classList.remove('activa');
    }
  });
}
