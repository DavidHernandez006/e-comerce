// ============================================================
// carrito.js — Gestión del carrito de compras
// ============================================================

const CLAVE_CARRITO = "beautyshop-carrito";

class Carrito {
  constructor() {
    this.items = this.cargar();
  }

  cargar() {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    if (guardado) {
      return JSON.parse(guardado);
    }

    if (typeof carritoInicial !== "undefined" && carritoInicial.length > 0) {
      const inicial = carritoInicial.map(function(item) {
        return { productoId: item.productoId, cantidad: item.cantidad };
      });
      localStorage.setItem(CLAVE_CARRITO, JSON.stringify(inicial));
      return inicial;
    }

    return [];
  }

  guardar() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(this.items));
  }

  agregar(productoId, cantidad) {
    if (cantidad === undefined) cantidad = 1;

    const existente = this.items.find(function(item) {
      return item.productoId === productoId;
    });

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.items.push({ productoId: productoId, cantidad: cantidad });
    }

    this.guardar();
  }

  eliminar(productoId) {
    this.items = this.items.filter(function(item) {
      return item.productoId !== productoId;
    });
    this.guardar();
  }

  actualizarCantidad(productoId, cantidad) {
    if (cantidad <= 0) {
      this.eliminar(productoId);
      return;
    }

    const item = this.items.find(function(i) {
      return i.productoId === productoId;
    });

    if (item) {
      item.cantidad = cantidad;
      this.guardar();
    }
  }

  vaciar() {
    this.items = [];
    this.guardar();
  }

  obtenerProductosDetalle() {
    return this.items
      .map(function(item) {
        const producto = productos.find(function(p) {
          return p.id === item.productoId;
        });

        if (!producto) return null;

        const precioConDescuento = producto.precio * (1 - producto.descuento / 100);

        return {
          id: producto.id,
          nombre: producto.nombre,
          imagen: producto.imagen,
          cantidad: item.cantidad,
          precioOriginal: producto.precio,
          precioUnitario: precioConDescuento,
          subtotal: precioConDescuento * item.cantidad
        };
      })
      .filter(function(item) {
        return item !== null;
      });
  }

  calcularTotales() {
    const detalle = this.obtenerProductosDetalle();
    let subtotal = 0;
    let total = 0;
    let cantidadItems = 0;

    detalle.forEach(function(item) {
      subtotal += item.precioOriginal * item.cantidad;
      total += item.subtotal;
      cantidadItems += item.cantidad;
    });

    return {
      subtotal: subtotal,
      descuento: subtotal - total,
      total: total,
      cantidadItems: cantidadItems
    };
  }
}

const carrito = new Carrito();

function formatearPrecio(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(valor);
}

function agregarAlCarrito(idProducto) {
  carrito.agregar(idProducto);
  actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
  const contador = document.querySelector(".contador-carrito");
  if (!contador) return;

  const totales = carrito.calcularTotales();
  contador.textContent = totales.cantidadItems;
}

function cambiarCantidad(idProducto, cantidad) {
  carrito.actualizarCantidad(idProducto, cantidad);
  renderizarCarrito();
  actualizarContadorCarrito();
}

function eliminarDelCarrito(idProducto) {
  carrito.eliminar(idProducto);
  renderizarCarrito();
  actualizarContadorCarrito();
}

function renderizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  if (!lista) return;

  const mensajeVacio = document.getElementById("carrito-vacio");
  const botonComprar = document.getElementById("boton-comprar");
  const detalle = carrito.obtenerProductosDetalle();
  const totales = carrito.calcularTotales();

  if (detalle.length === 0) {
    lista.innerHTML = "";
    if (mensajeVacio) mensajeVacio.hidden = false;
    if (botonComprar) botonComprar.disabled = true;
  } else {
    if (mensajeVacio) mensajeVacio.hidden = true;
    if (botonComprar) botonComprar.disabled = false;

    lista.innerHTML = detalle.map(function(item) {
      return (
        '<article class="item-carrito" data-id="' + item.id + '">' +
          '<img src="../' + item.imagen + '" alt="' + item.nombre + '" class="imagen-item-carrito">' +
          '<div class="info-item-carrito">' +
            '<h3>' + item.nombre + '</h3>' +
            '<p>' + formatearPrecio(item.precioUnitario) + ' c/u</p>' +
          '</div>' +
          '<div class="cantidad-item-carrito">' +
            '<button type="button" onclick="cambiarCantidad(' + item.id + ', ' + (item.cantidad - 1) + ')">−</button>' +
            '<span>' + item.cantidad + '</span>' +
            '<button type="button" onclick="cambiarCantidad(' + item.id + ', ' + (item.cantidad + 1) + ')">+</button>' +
          '</div>' +
          '<p class="subtotal-item-carrito">' + formatearPrecio(item.subtotal) + '</p>' +
          '<button type="button" class="boton-eliminar-item" onclick="eliminarDelCarrito(' + item.id + ')">Eliminar</button>' +
        '</article>'
      );
    }).join("");
  }

  const subtotalEl = document.getElementById("subtotal-carrito");
  const descuentoEl = document.getElementById("descuento-carrito");
  const totalEl = document.getElementById("total-carrito");

  if (subtotalEl) subtotalEl.textContent = formatearPrecio(totales.subtotal);
  if (descuentoEl) descuentoEl.textContent = formatearPrecio(totales.descuento);
  if (totalEl) totalEl.textContent = formatearPrecio(totales.total);
}

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".contenedor-carrito")) {
    renderizarCarrito();

    const botonVaciar = document.getElementById("boton-vaciar");
    const botonComprar = document.getElementById("boton-comprar");

    if (botonVaciar) {
      botonVaciar.addEventListener("click", function() {
        carrito.vaciar();
        renderizarCarrito();
        actualizarContadorCarrito();
      });
    }

    if (botonComprar) {
      botonComprar.addEventListener("click", function() {
        alert("¡Gracias por tu compra! (Proceso de pago en desarrollo)");
        carrito.vaciar();
        renderizarCarrito();
        actualizarContadorCarrito();
      });
    }
  }

  actualizarContadorCarrito();
});
