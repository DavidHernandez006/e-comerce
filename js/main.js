/**
 * js/main.js — Lógica principal e inicialización
 */

import { store } from './store.js';
import { Renderer } from './renderer.js';
import { productos, categorias } from './data.js';

const renderer = new Renderer();

// Attach global helpers for inline onclicks
window.addToCartGlobal = (e, id) => {
  if (e) e.stopPropagation();
  const product = productos.find(p => p.id === id);
  if (product) {
    store.addToCart(product);
    mostrarNotificacion(`${product.nombre} agregado al carrito`);
  }
};

window.toggleFavoriteGlobal = (e, id) => {
  if (e) e.stopPropagation();
  store.toggleFavorite(id);
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("BeautyShop initialized with ES6 Modules");
  
  initHome();
  actualizarContadorCarrito();
  
  store.subscribe(() => {
    actualizarContadorCarrito();
    initHome();
  });
});

function initHome() {
  const isHome = document.querySelector('.seccion-hero');
  if (!isHome) return;

  // Destacados
  const destacados = productos.filter(p => p.destacado).slice(0, 4);
  renderer.renderProducts(destacados, "#seccion-destacados .fila-productos");

  // Nuevos
  const nuevos = productos.filter(p => p.nuevo).slice(0, 4);
  renderer.renderProducts(nuevos, "#grid-nuevos");

  // Ofertas
  const ofertas = productos.filter(p => p.descuento > 0).slice(0, 4);
  renderer.renderProducts(ofertas, ".grid-ofertas");

  // Más Vendidos
  const masVendidos = [...productos]
    .sort((a, b) => (b.resenas * b.calificacion) - (a.resenas * a.calificacion))
    .slice(0, 3);
  renderer.renderProducts(masVendidos, ".grid-mas-vendidos");
}

function actualizarContadorCarrito() {
  const badges = document.querySelectorAll('.badge-header, .badge-carrito, .contador-carrito');
  const cart = store.getCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  badges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  });
}

function mostrarNotificacion(mensaje) {
  const notif = document.createElement('div');
  notif.className = 'notificacion-toast';
  notif.textContent = mensaje;
  document.body.appendChild(notif);
  setTimeout(() => notif.classList.add('show'), 100);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}

window.scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
