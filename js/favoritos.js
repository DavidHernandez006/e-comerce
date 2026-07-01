import { store } from './store.js';
import { Renderer } from './renderer.js';
import { productos } from './data.js';

const renderer = new Renderer(true);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('grid-favoritos');
  const emptyMsg = document.getElementById('contenedor-vacio');
  const actions = document.getElementById('acciones');
  const counter = document.getElementById('contador');

  const render = () => {
    const favorites = store.getFavorites();
    counter.textContent = favorites.length;

    if (favorites.length === 0) {
      if (container) container.style.display = 'none';
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (actions) actions.style.display = 'none';
    } else {
      if (container) container.style.display = 'grid';
      if (emptyMsg) emptyMsg.style.display = 'none';
      if (actions) actions.style.display = 'flex';

      const favoriteProducts = productos.filter(p => favorites.includes(p.id));
      if (container) container.innerHTML = favoriteProducts.map(p => renderer.createProductCard(p)).join('');
    }
  };

  render();
  store.subscribe(render);

  window.limpiarFavoritos = () => {
    if (confirm('¿Estás seguro de que quieres limpiar todos los favoritos?')) {
      store.clearFavorites();
    }
  };
});
