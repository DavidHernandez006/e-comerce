// catalogo.js — Lógica avanzada de filtrado, búsqueda y ordenamiento
(function() {
  const contenedor = document.getElementById('catalogo');
  const buscador = document.getElementById('buscador-productos');
  const autocompleteBox = document.getElementById('autocomplete-results');
  const categoriasFiltros = document.getElementById('categorias-filtros');
  const precioRange = document.getElementById('precio-range');
  const precioMaxLabel = document.getElementById('precio-max-label');
  const selectOrden = document.getElementById('select-orden');
  const btnLimpiar = document.getElementById('btn-limpiar-filtros');
  const contadorProductos = document.getElementById('contador-productos');

  let productosFiltrados = [...productos];
  let filtros = {
    query: '',
    categorias: [],
    precioMax: 300000,
    ratingMin: 0
  };

  function init() {
    renderCategorias();
    aplicarFiltros();
    configurarEventos();
    actualizarBadgesNav();
  }

  function renderCategorias() {
    if (!categoriasFiltros) return;
    categoriasFiltros.innerHTML = categorias.map(cat => `
      <label>
        <input type="checkbox" value="${cat.id}" class="filtro-cat">
        ${cat.icono} ${cat.nombre}
      </label>
    `).join('');
  }

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function configurarEventos() {
    if (buscador) {
      const handleInput = debounce((e) => {
        filtros.query = e.target.value;
        actualizarAutocomplete(e.target.value);
        aplicarFiltros();
      }, 150);

      buscador.addEventListener('input', handleInput);
    }

    if (categoriasFiltros) {
      categoriasFiltros.addEventListener('change', () => {
        const checks = document.querySelectorAll('.filtro-cat:checked');
        filtros.categorias = Array.from(checks).map(c => parseInt(c.value));
        aplicarFiltros();
      });
    }

    if (precioRange) {
      precioRange.addEventListener('input', (e) => {
        filtros.precioMax = parseInt(e.target.value);
        precioMaxLabel.textContent = formatearPrecio(filtros.precioMax);
        aplicarFiltros();
      });
    }

    document.getElementsByName('rating').forEach(radio => {
      radio.addEventListener('change', (e) => {
        filtros.ratingMin = parseFloat(e.target.value);
        aplicarFiltros();
      });
    });

    if (selectOrden) {
      selectOrden.addEventListener('change', aplicarFiltros);
    }

    if (btnLimpiar) {
      btnLimpiar.addEventListener('click', () => {
        filtros = { query: '', categorias: [], precioMax: 300000, ratingMin: 0 };
        if (buscador) buscador.value = '';
        if (precioRange) precioRange.value = 300000;
        precioMaxLabel.textContent = '$300.000';
        document.querySelectorAll('.filtro-cat').forEach(c => c.checked = false);
        document.querySelector('input[name="rating"][value="0"]').checked = true;
        aplicarFiltros();
      });
    }
  }

  function aplicarFiltros() {
    productosFiltrados = productos.filter(p => {
      const matchQuery = p.nombre.toLowerCase().includes(filtros.query.toLowerCase()) ||
                         p.marca.toLowerCase().includes(filtros.query.toLowerCase());
      const matchCat = filtros.categorias.length === 0 || filtros.categorias.includes(p.categoriaId);
      const matchPrecio = p.precio <= filtros.precioMax;
      const matchRating = p.calificacion >= filtros.ratingMin;
      return matchQuery && matchCat && matchPrecio && matchRating;
    });

    ordenarProductos();
    renderLista(productosFiltrados);
  }

  function ordenarProductos() {
    const orden = selectOrden ? selectOrden.value : 'relevancia';
    switch (orden) {
      case 'precio-bajo':
        productosFiltrados.sort((a, b) => a.precio - b.precio);
        break;
      case 'precio-alto':
        productosFiltrados.sort((a, b) => b.precio - a.precio);
        break;
      case 'rating':
        productosFiltrados.sort((a, b) => b.calificacion - a.calificacion);
        break;
      default:
        productosFiltrados.sort((a, b) => b.resenas - a.resenas);
    }
  }

  function renderLista(lista) {
    if (!contenedor) return;
    contenedor.innerHTML = '';

    if (contadorProductos) {
      contadorProductos.textContent = `Mostrando ${lista.length} productos`;
    }

    if (lista.length === 0) {
      contenedor.innerHTML = '<div class="vacio-mensaje"><h3>No encontramos productos</h3><p>Intenta ajustar tus filtros.</p></div>';
      return;
    }

    lista.forEach(p => {
      contenedor.innerHTML += crearTarjetaProducto(p);
    });
  }

  function actualizarAutocomplete(val) {
    if (!autocompleteBox) return;
    if (val.length < 2) {
      autocompleteBox.style.display = 'none';
      return;
    }

    const sugerencias = productos
      .filter(p => p.nombre.toLowerCase().includes(val.toLowerCase()))
      .slice(0, 5);

    if (sugerencias.length > 0) {
      autocompleteBox.innerHTML = sugerencias.map(p => `
        <div class="autocomplete-item" onclick="window.location.href='publicacion.html?id=${p.id}'">
          ${p.nombre} <small>en ${obtenerNombreCategoria(p.categoriaId)}</small>
        </div>
      `).join('');
      autocompleteBox.style.display = 'block';
    } else {
      autocompleteBox.style.display = 'none';
    }
  }

  function actualizarBadgesNav() {
    const favs = JSON.parse(localStorage.getItem('favoritos')) || [];
    const carritoL = JSON.parse(localStorage.getItem('beautyshop-carrito')) || [];

    const badgeFavs = document.querySelector('.badge-favs');
    if (badgeFavs) {
      badgeFavs.textContent = favs.length;
      badgeFavs.style.display = favs.length > 0 ? 'flex' : 'none';
    }

    const badgeHeader = document.querySelector('.badge-header');
    if (badgeHeader) {
      const count = carritoL.reduce((acc, item) => acc + item.cantidad, 0);
      badgeHeader.textContent = count;
      badgeHeader.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  // Exponer para el autocomplete global
  window.actualizarBadgesNav = actualizarBadgesNav;

  document.addEventListener('DOMContentLoaded', init);

})();
