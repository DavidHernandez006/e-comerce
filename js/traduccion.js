/**
 * js/traduccion.js — Sistema de multilenguaje refactorizado
 */

import { store } from './store.js';

// Base de datos completa de traducciones
const translations = {
  es: {
    'inicio': 'Inicio',
    'catalogo': 'Catálogo',
    'carrito': 'Carrito',
    'login': 'Iniciar Sesión',
    'registro': 'Registrarse',
    'perfil': 'Mi Perfil',
    'admin': 'Administrador',
    'cerrar_sesion': 'Cerrar Sesión',
    'publicar': 'Publicar Producto',
    'maquillaje': 'Maquillaje',
    'cuidado_facial': 'Cuidado Facial',
    'cuidado_corporal': 'Cuidado Corporal',
    'cabello': 'Cabello',
    'fragancias': 'Fragancias',
    'unas': 'Uñas',
    'comprar': 'Comprar',
    'agregar_carrito': 'Agregar al Carrito',
    'continuar': 'Continuar',
    'cancelar': 'Cancelar',
    'guardar': 'Guardar',
    'eliminar': 'Eliminar',
    'editar': 'Editar',
    'buscar': 'Buscar',
    'filtrar': 'Filtrar',
    'pagar': 'Pagar',
    'confirmar': 'Confirmar',
    'carrito_vacio': 'Tu carrito está vacío',
    'subtotal': 'Subtotal',
    'envio': 'Envío',
    'descuento': 'Descuento',
    'total': 'Total',
    'cantidad': 'Cantidad',
    'precio_unitario': 'Precio Unitario',
    'correo': 'Correo Electrónico',
    'contrasena': 'Contraseña',
    'confirmar_contrasena': 'Confirmar Contraseña',
    'nombre': 'Nombre Completo',
    'telefono': 'Teléfono',
    'direccion': 'Dirección',
    'ciudad': 'Ciudad',
    'codigo_postal': 'Código Postal',
    'pais': 'País',
    'recuerdame': 'Recuérdame',
    'olvide_contrasena': '¿Olvidaste tu contraseña?',
    'no_tienes_cuenta': '¿No tienes cuenta?',
    'ya_tienes_cuenta': '¿Ya tienes cuenta?',
    'descripcion': 'Descripción',
    'precio': 'Precio',
    'stock': 'Stock',
    'disponible': 'Disponible',
    'no_disponible': 'No Disponible',
    'vendedor': 'Vendedor',
    'calificacion': 'Calificación',
    'resenas': 'Reseñas',
    'nuevo': 'Nuevo',
    'bestseller': 'Bestseller',
    'oferta': 'Oferta',
    'bienvenido': 'Bienvenido',
    'error': 'Error',
    'exito': 'Éxito',
    'cargando': 'Cargando...',
    'no_hay_resultados': 'No hay resultados',
    'algo_salio_mal': 'Algo salió mal',
    'por_favor_completa_campos': 'Por favor completa todos los campos',
    'correo_ya_registrado': 'Este correo ya está registrado',
    'contrasena_debil': 'La contraseña es muy débil',
    'producto_agregado': 'Producto agregado al carrito',
    'producto_eliminado': 'Producto eliminado del carrito',
    'modo_oscuro': 'Modo Oscuro',
    'modo_claro': 'Modo Claro',
    'mi_perfil': 'Mi Perfil',
    'mis_compras': 'Mis Compras',
    'mis_publicaciones': 'Mis Publicaciones',
    'configuracion': 'Configuración',
    'editar_perfil': 'Editar Perfil',
    'mis_ordenes': 'Mis Órdenes',
    'numero_orden': 'Número de Orden',
    'fecha_orden': 'Fecha',
    'estado': 'Estado',
    'pendiente': 'Pendiente',
    'enviado': 'Enviado',
    'entregado': 'Entregado',
    'cancelado': 'Cancelado'
  },
  en: {
    'inicio': 'Home',
    'catalogo': 'Catalog',
    'carrito': 'Cart',
    'login': 'Sign In',
    'registro': 'Sign Up',
    'perfil': 'My Profile',
    'admin': 'Admin',
    'cerrar_sesion': 'Sign Out',
    'publicar': 'Publish Product',
    'maquillaje': 'Makeup',
    'cuidado_facial': 'Skincare',
    'cuidado_corporal': 'Body Care',
    'cabello': 'Hair',
    'fragancias': 'Fragrances',
    'unas': 'Nails',
    'comprar': 'Buy',
    'agregar_carrito': 'Add to Cart',
    'continuar': 'Continue',
    'cancelar': 'Cancel',
    'guardar': 'Save',
    'eliminar': 'Delete',
    'editar': 'Edit',
    'buscar': 'Search',
    'filtrar': 'Filter',
    'pagar': 'Pay',
    'confirmar': 'Confirm',
    'carrito_vacio': 'Your cart is empty',
    'subtotal': 'Subtotal',
    'envio': 'Shipping',
    'descuento': 'Discount',
    'total': 'Total',
    'cantidad': 'Quantity',
    'precio_unitario': 'Unit Price',
    'correo': 'Email',
    'contrasena': 'Password',
    'confirmar_contrasena': 'Confirm Password',
    'nombre': 'Full Name',
    'telefono': 'Phone',
    'direccion': 'Address',
    'ciudad': 'City',
    'codigo_postal': 'Postal Code',
    'pais': 'Country',
    'recuerdame': 'Remember me',
    'olvide_contrasena': 'Forgot your password?',
    'no_tienes_cuenta': "Don't have an account?",
    'ya_tienes_cuenta': 'Already have an account?',
    'descripcion': 'Description',
    'precio': 'Price',
    'stock': 'Stock',
    'disponible': 'Available',
    'no_disponible': 'Out of Stock',
    'vendedor': 'Seller',
    'calificacion': 'Rating',
    'resenas': 'Reviews',
    'nuevo': 'New',
    'bestseller': 'Bestseller',
    'oferta': 'Offer',
    'bienvenido': 'Welcome',
    'error': 'Error',
    'exito': 'Success',
    'cargando': 'Loading...',
    'no_hay_resultados': 'No results found',
    'algo_salio_mal': 'Something went wrong',
    'por_favor_completa_campos': 'Please fill all fields',
    'correo_ya_registrado': 'This email is already registered',
    'contrasena_debil': 'Password is too weak',
    'producto_agregado': 'Product added to cart',
    'producto_eliminado': 'Product removed from cart',
    'modo_oscuro': 'Dark Mode',
    'modo_claro': 'Light Mode',
    'mi_perfil': 'My Profile',
    'mis_compras': 'My Purchases',
    'mis_publicaciones': 'My Publications',
    'configuracion': 'Settings',
    'editar_perfil': 'Edit Profile',
    'mis_ordenes': 'My Orders',
    'numero_orden': 'Order Number',
    'fecha_orden': 'Date',
    'estado': 'Status',
    'pendiente': 'Pending',
    'enviado': 'Shipped',
    'entregado': 'Delivered',
    'cancelado': 'Cancelled'
  }
};

export class TranslationManager {
  constructor() {
    this.init();
    store.subscribe(() => this.updateUI());
  }

  init() {
    this.updateUI();
    // Botones de cambio de idioma si existen
    document.addEventListener('click', (e) => {
      if (e.target.id === 'btn-es') this.setLang('es');
      if (e.target.id === 'btn-en') this.setLang('en');
    });
  }

  t(key, params = {}) {
    const lang = store.getLang();
    let text = translations[lang]?.[key] || key;
    for (let [param, value] of Object.entries(params)) {
      text = text.replace(`{${param}}`, value);
    }
    return text;
  }

  setLang(lang) {
    if (translations[lang]) {
      store.setLang(lang);
    }
  }

  updateUI() {
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (el.tagName === 'INPUT' && el.type === 'submit') {
        el.value = this.t(key);
      } else if (el.tagName === 'INPUT' && el.placeholder) {
        el.placeholder = this.t(key);
      } else {
        el.textContent = this.t(key);
      }
    });

    // Disparar evento para compatibilidad si es necesario
    document.dispatchEvent(new CustomEvent('idioma-cambiado', {
      detail: { idioma: store.getLang() }
    }));
  }
}

export const i18n = new TranslationManager();
window.i18n = i18n; // Exponer globalmente para handlers inline si quedan
