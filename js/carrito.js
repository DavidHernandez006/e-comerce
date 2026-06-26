/**
 * ============================================================
 * js/carrito.js — Advanced Shopping Cart Architecture
 * E-commerce: BeautyShop | Theme: Midnight Glow
 * ============================================================
 */

const CLAVE_CARRITO = "beautyshop-carrito";
const CUPON_DESCUENTO = "LUMINA20";

class CarritoManager {
  constructor() {
    this.items = this._cargarDesdeStorage();
    this.descuentoActivo = 0; // Porcentaje
    this.init();
  }

  init() {
    this._actualizarUI();
    document.addEventListener("DOMContentLoaded", () => this._actualizarUI());
  }

  _cargarDesdeStorage() {
    try {
      const datos = localStorage.getItem(CLAVE_CARRITO);
      return datos ? JSON.parse(datos) : [];
    } catch (e) {
      console.error("Error cargando carrito:", e);
      return [];
    }
  }

  _guardarEnStorage() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(this.items));
    this._actualizarUI();
  }

  agregar(productoId, cantidad = 1) {
    const itemExistente = this.items.find(i => i.productoId === productoId);

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      this.items.push({ productoId, cantidad });
    }

    this._guardarEnStorage();
    this.notificar("Producto añadido al ritual");
  }

  quitar(productoId) {
    this.items = this.items.filter(i => i.productoId !== productoId);
    this._guardarEnStorage();
  }

  actualizarCantidad(productoId, nuevaCantidad) {
    if (nuevaCantidad <= 0) return this.quitar(productoId);

    const item = this.items.find(i => i.productoId === productoId);
    if (item) {
      item.cantidad = nuevaCantidad;
      this._guardarEnStorage();
    }
  }

  aplicarCupon(codigo) {
    if (codigo === CUPON_DESCUENTO) {
      this.descuentoActivo = 20;
      this._actualizarUI();
      return true;
    }
    return false;
  }

  obtenerDetalle() {
    return this.items.map(item => {
      const p = productos.find(prod => prod.id === item.productoId);
      if (!p) return null;

      const precioBase = p.precio * (1 - (p.descuento / 100));
      return {
        ...p,
        cantidad: item.cantidad,
        precioUnitario: precioBase,
        subtotal: precioBase * item.cantidad
      };
    }).filter(i => i !== null);
  }

  calcularTotales() {
    const detalle = this.obtenerDetalle();
    const bruto = detalle.reduce((sum, i) => sum + i.subtotal, 0);
    const ahorroCupon = bruto * (this.descuentoActivo / 100);

    return {
      bruto,
      ahorroCupon,
      total: bruto - ahorroCupon,
      conteo: detalle.reduce((sum, i) => sum + i.cantidad, 0)
    };
  }

  _actualizarUI() {
    const countBadge = document.querySelectorAll(".badge-carrito, .contador-carrito, .badge-header");
    const totales = this.calcularTotales();

    countBadge.forEach(b => {
      b.textContent = totales.conteo;
      b.style.display = totales.conteo > 0 ? "flex" : "none";
    });

    if (window.location.pathname.includes("carrito.html")) {
      this.renderizarVistaCarrito();
    }
  }

  renderizarVistaCarrito() {
    const contenedor = document.getElementById("lista-carrito");
    if (!contenedor) return;

    const items = this.obtenerDetalle();
    const vacioMsg = document.getElementById("carrito-vacio");
    const totales = this.calcularTotales();

    if (items.length === 0) {
      contenedor.innerHTML = "";
      vacioMsg.hidden = false;
      document.querySelector(".resumen-carrito").style.opacity = "0.5";
      document.getElementById("boton-comprar").disabled = true;
    } else {
      vacioMsg.hidden = true;
      document.querySelector(".resumen-carrito").style.opacity = "1";
      document.getElementById("boton-comprar").disabled = false;

      contenedor.innerHTML = items.map(item => `
        <article class="item-carrito glassmorphism-card" data-id="${item.id}">
          <div class="item-img-wrapper">
            <img src="../${item.imagen}" alt="${item.nombre}">
          </div>
          <div class="item-info">
            <h3>${item.nombre}</h3>
            <p class="item-cat">${item.vendedor}</p>
            <span class="item-precio">${this.formatearCOP(item.precioUnitario)}</span>
          </div>
          <div class="item-controles">
            <button onclick="bsCarrito.actualizarCantidad(${item.id}, ${item.cantidad - 1})">−</button>
            <span class="qty">${item.cantidad}</span>
            <button onclick="bsCarrito.actualizarCantidad(${item.id}, ${item.cantidad + 1})">+</button>
          </div>
          <div class="item-subtotal">
            ${this.formatearCOP(item.subtotal)}
          </div>
          <button class="btn-remove" onclick="bsCarrito.quitar(${item.id})">
            <i class="ph ph-trash"></i>
          </button>
        </article>
      `).join("");
    }

    this._renderTotales(totales);
  }

  _renderTotales(totales) {
    const subtotalEl = document.getElementById("subtotal-carrito");
    const totalEl = document.getElementById("total-carrito");
    const descuentoEl = document.getElementById("descuento-carrito");

    if (subtotalEl) subtotalEl.textContent = this.formatearCOP(totales.bruto);
    if (totalEl) totalEl.textContent = this.formatearCOP(totales.total);
    if (descuentoEl) {
      descuentoEl.textContent = `-${this.formatearCOP(totales.ahorroCupon)}`;
      descuentoEl.parentElement.style.display = totales.ahorroCupon > 0 ? "flex" : "none";
    }
  }

  formatearCOP(valor) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(valor);
  }

  notificar(msg) {
    const toast = document.createElement("div");
    toast.className = "bs-toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  vaciar() {
    this.items = [];
    this.descuentoActivo = 0;
    this._guardarEnStorage();
  }
}

// Singleton export
const bsCarrito = new CarritoManager();
