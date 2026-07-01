/**
 * js/catalogo.js — Renderizado y búsqueda del catálogo
 */

import { store } from './store.js';
import { Renderer } from './renderer.js';
import { productos, categorias } from './data.js';

const renderer = new Renderer(true);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('catalogo');
  const searchInput = document.getElementById('buscador-productos');

  const render = (list) => {
    if (!container) return;
    if (list.length === 0) {
      container.innerHTML = '<p class="texto-centro">No se encontraron productos.</p>';
      return;
    }
    renderer.renderProducts(list, '#catalogo');
  };

  const filter = (query) => {
    const q = query.toLowerCase().trim();
    const filtered = productos.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      (p.etiquetas && p.etiquetas.some(t => t.toLowerCase().includes(q)))
    );
    render(filtered);
  };

  // Initial render
  render(productos);

  // Search event
  searchInput?.addEventListener('input', (e) => filter(e.target.value));

  // Global listeners for favorite/cart actions are handled by renderer.attachEventListeners called in renderProducts
  document.addEventListener('app:add-to-cart', (e) => {
    const product = productos.find(p => p.id === e.detail.id);
    if (product) store.addToCart(product);
  });
});
