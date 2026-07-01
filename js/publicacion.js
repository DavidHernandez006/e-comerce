import { store } from './store.js';
import { Renderer } from './renderer.js';
import { productos, categorias } from './data.js';

const renderer = new Renderer(true);

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const product = productos.find(p => p.id === id);

  if (!product) {
    document.querySelector('.contenedor-detalle').innerHTML = '<h2>Producto no encontrado</h2>';
    return;
  }

  // Basic info
  document.getElementById('imagen-principal').src = renderer.normalizeImagePath(product.imagen);
  document.getElementById('breadcrumb-producto').textContent = product.nombre;
  document.getElementById('titulo-detalle').textContent = product.nombre;
  document.getElementById('descripcion-detalle').textContent = product.descripcion;
  document.getElementById('stock-disponible').textContent = `Stock: ${product.stock}`;

  // Use renderer for price
  const priceContainer = document.getElementById('precio-container');
  if (product.descuento > 0) {
    const discounted = product.precio * (1 - product.descuento/100);
    priceContainer.innerHTML = `
      <div style="display: flex; gap: 15px; align-items: center;">
        <span class="precio-detalle">${renderer.formatPrice(discounted)}</span>
        <span class="precio-original">${renderer.formatPrice(product.precio)}</span>
      </div>
    `;
  } else {
    priceContainer.innerHTML = `<span class="precio-detalle">${renderer.formatPrice(product.precio)}</span>`;
  }

  // Related
  const related = productos.filter(p => p.categoriaId === product.categoriaId && p.id !== product.id).slice(0, 4);
  renderer.renderProducts(related, '#productos-relacionados');

  // Actions
  window.incrementarCantidad = () => {
    const input = document.getElementById('cantidad');
    input.value = parseInt(input.value) + 1;
  };

  window.decrementarCantidad = () => {
    const input = document.getElementById('cantidad');
    if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
  };

  window.agregarAlCarritoDetalle = () => {
    const qty = parseInt(document.getElementById('cantidad').value);
    store.addToCart(product, qty);
  };

  window.toggleFavoritoDetalle = () => {
    store.toggleFavorite(product.id);
    updateFavBtn();
  };

  const updateFavBtn = () => {
    const btn = document.getElementById('btn-favorito');
    const isFav = store.isFavorite(product.id);
    btn.innerHTML = `<i class="ph ${isFav ? 'ph-heart-fill' : 'ph-heart'}"></i>`;
    btn.classList.toggle('activo', isFav);
  };

  updateFavBtn();
});
