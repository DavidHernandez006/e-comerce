/**
 * js/renderer.js
 * Centralized UI Rendering for BeautyShop
 */

import { store } from './store.js';
import { categorias } from './data.js';

export class Renderer {
  constructor(isSubPage = false) {
    this.basePath = isSubPage ? '../' : '';
  }

  /**
   * Formats price to COP
   */
  formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(price || 0);
  }

  /**
   * Sanitizes strings to prevent XSS
   */
  sanitize(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Normalizes image path
   */
  normalizeImagePath(path) {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return this.basePath + path;
  }

  /**
   * Gets category name from ID
   */
  getCategoryName(id) {
    const cat = categorias.find(c => c.id === id);
    return cat ? cat.nombre : '';
  }

  /**
   * Generates Product Card HTML
   */
  createProductCard(product) {
    const isFav = store.isFavorite(product.id);
    const priceFormatted = this.formatPrice(product.precio);
    const imgPath = this.normalizeImagePath(product.imagen);
    const detailPath = `${this.basePath}pages/publicacion.html?id=${product.id}`;
    const categoryName = this.getCategoryName(product.categoriaId);

    let badge = '';
    if (product.descuento > 0) {
      badge = `<span class="etiqueta-producto descuento">-${product.descuento}%</span>`;
    } else if (product.nuevo) {
      badge = `<span class="etiqueta-producto nuevo">NUEVO</span>`;
    } else if (product.resenas > 100) {
      badge = `<span class="etiqueta-producto bestseller">BESTSELLER</span>`;
    }

    return `
      <article class="tarjeta-producto" data-id="${product.id}">
        <div class="contenedor-imagen-producto">
          <img src="${imgPath}" alt="${this.sanitize(product.nombre)}" class="imagen-producto" loading="lazy" onclick="window.location.href='${detailPath}'">
          ${badge}
          <button class="btn-favorito ${isFav ? 'activo' : ''}"
                  onclick="toggleFavoriteGlobal(event, ${product.id})"
                  title="Favorito">
            <i class="ph ${isFav ? 'ph-heart-fill' : 'ph-heart'}"></i>
          </button>
        </div>
        <div class="informacion-producto">
          <p class="categoria-producto">${this.sanitize(categoryName)}</p>
          <h3 class="nombre-producto" onclick="window.location.href='${detailPath}'" style="cursor:pointer">${this.sanitize(product.nombre)}</h3>
          <div class="fila-precio-descuento">
            <span class="precio-producto">${priceFormatted}</span>
            ${product.descuento > 0 ? `<span class="descuento-badge">-${product.descuento}%</span>` : ''}
          </div>
          <div class="calificacion">
            ${'⭐'.repeat(Math.floor(product.calificacion))} (${product.resenas})
          </div>
          <button class="boton-agregar-carrito" onclick="addToCartGlobal(event, ${product.id})">Agregar</button>
        </div>
      </article>
    `;
  }

  /**
   * Generates Cart Item HTML
   */
  createCartItem(item) {
    const imgPath = this.normalizeImagePath(item.image);
    const subtotal = this.formatPrice(item.price * item.quantity);

    return `
      <article class="item-carrito" data-id="${item.id}">
        <img src="${imgPath}" alt="${this.sanitize(item.name)}" class="imagen-item-carrito">
        <div class="info-item-carrito">
          <h3>${this.sanitize(item.name)}</h3>
          <p>${this.formatPrice(item.price)} c/u</p>
        </div>
        <div class="cantidad-item-carrito">
          <button type="button" onclick="updateQtyGlobal(${item.id}, ${item.quantity - 1})">−</button>
          <span>${item.quantity}</span>
          <button type="button" onclick="updateQtyGlobal(${item.id}, ${item.quantity + 1})">+</button>
        </div>
        <p class="subtotal-item-carrito">${subtotal}</p>
        <button type="button" class="boton-eliminar-item" onclick="removeFromCartGlobal(${item.id})">Eliminar</button>
      </article>
    `;
  }

  /**
   * Render a list of products to a container
   */
  renderProducts(products, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = products.map(p => this.createProductCard(p)).join('');
  }
}
