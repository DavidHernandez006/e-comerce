/**
 * js/carrito.js — Gestión del carrito de compras refactorizado
 */

import { store } from './store.js';
import { Renderer } from './renderer.js';

const renderer = new Renderer(true);

window.updateQtyGlobal = (id, qty) => {
  store.updateCartQuantity(id, qty);
};

window.removeFromCartGlobal = (id) => {
  store.removeFromCart(id);
};

document.addEventListener("DOMContentLoaded", () => {
  renderCarrito();

  const btnVaciar = document.getElementById("boton-vaciar");
  const btnComprar = document.getElementById("boton-comprar");

  btnVaciar?.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
      store.clearCart();
    }
  });

  btnComprar?.addEventListener("click", () => {
    alert("¡Gracias por tu compra!");
    store.clearCart();
    window.location.href = '../index.html';
  });

  store.subscribe(renderCarrito);
});

function renderCarrito() {
  const lista = document.getElementById("lista-carrito");
  if (!lista) return;

  const items = store.getCart();
  const emptyMsg = document.getElementById("carrito-vacio");
  const btnComprar = document.getElementById("boton-comprar");

  if (items.length === 0) {
    lista.innerHTML = "";
    if (emptyMsg) emptyMsg.hidden = false;
    if (btnComprar) btnComprar.disabled = true;
  } else {
    if (emptyMsg) emptyMsg.hidden = true;
    if (btnComprar) btnComprar.disabled = false;
    lista.innerHTML = items.map(item => renderer.createCartItem(item)).join('');
  }

  actualizarResumen(items);
}

function actualizarResumen(items) {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Lógica de descuento (por ejemplo, Cupón LUMINA20)
  const coupon = localStorage.getItem('lumina-coupon');
  let discount = 0;
  if (coupon === 'LUMINA20') {
    discount = subtotal * 0.20;
  }

  const total = subtotal - discount;

  const subtotalEl = document.getElementById("subtotal-carrito");
  const discountEl = document.getElementById("descuento-carrito");
  const totalEl = document.getElementById("total-carrito");

  if (subtotalEl) subtotalEl.textContent = renderer.formatPrice(subtotal);
  if (discountEl) discountEl.textContent = renderer.formatPrice(discount);
  if (totalEl) totalEl.textContent = renderer.formatPrice(total);
}
