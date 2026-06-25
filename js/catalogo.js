// catalogo.js — Renderizado y búsqueda del catálogo
(function() {
  const contenedor = document.getElementById('catalogo');
  const buscador = document.getElementById('buscador-productos');

  function renderLista(lista) {
    if (!contenedor) return;
    contenedor.innerHTML = '';

    if (!lista || lista.length === 0) {
      contenedor.innerHTML = '<p class="texto-centro">No se encontraron productos.</p>';
      return;
    }

    // Si la función crearTarjetaProducto está disponible (viene de main.js), reutilizarla
    if (typeof crearTarjetaProducto === 'function') {
      lista.forEach(p => contenedor.innerHTML += crearTarjetaProducto(p));
      return;
    }

    // Fallback: crear tarjetas simples
    lista.forEach(p => {
      const artículo = document.createElement('article');
      artículo.className = 'tarjeta-producto';
      artículo.innerHTML = `
        <div class="contenedor-imagen-producto">
          <img src="${p.imagen}" alt="${p.nombre}" class="imagen-producto">
        </div>
        <div class="informacion-producto">
          <h3>${p.nombre}</h3>
          <p>${p.descripcion.substring(0, 80)}...</p>
          <div class="fila-precio-descuento">
            <span class="precio-producto">${p.precio}</span>
          </div>
          <button class="boton-agregar-carrito">Agregar</button>
        </div>
      `;
      contenedor.appendChild(artículo);
    });
  }

  function filtrarYRenderizar(query) {
    const q = (query || '').toLowerCase().trim();
    if (!q) return renderLista(productos);

    const filtrados = productos.filter(p => {
      return p.nombre.toLowerCase().includes(q)
        || p.descripcion.toLowerCase().includes(q)
        || (p.etiquetas && p.etiquetas.some(t => t.toLowerCase().includes(q)))
        || obtenerNombreCategoria(p.categoriaId).toLowerCase().includes(q);
    });

    renderLista(filtrados);
  }

  // Inicializar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todos los productos
    if (typeof productos !== 'undefined') renderLista(productos);

    // Configurar buscador
    if (buscador) {
      buscador.addEventListener('input', (e) => filtrarYRenderizar(e.target.value));
    }
  });

})();
