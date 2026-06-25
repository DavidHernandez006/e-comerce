// ============================================================
// traduccion.js — Sistema de multilenguaje
// E-commerce de Belleza | BeautyShop
// Soporta: Español (es) e Inglés (en)
// ============================================================

// Idioma actual
let idiomaActual = localStorage.getItem('idioma') || 'es';

// Base de datos de traducciones
const idiomas = {
  es: {
    // Navegación
    'inicio': 'Inicio',
    'catalogo': 'Catálogo',
    'carrito': 'Carrito',
    'login': 'Iniciar Sesión',
    'registro': 'Registrarse',
    'perfil': 'Mi Perfil',
    'admin': 'Administrador',
    'cerrar_sesion': 'Cerrar Sesión',
    'publicar': 'Publicar Producto',

    // Categorías
    'maquillaje': 'Maquillaje',
    'cuidado_facial': 'Cuidado Facial',
    'cuidado_corporal': 'Cuidado Corporal',
    'cabello': 'Cabello',
    'fragancias': 'Fragancias',
    'unas': 'Uñas',

    // Botones
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

    // Carrito
    'carrito_vacio': 'Tu carrito está vacío',
    'subtotal': 'Subtotal',
    'envio': 'Envío',
    'descuento': 'Descuento',
    'total': 'Total',
    'cantidad': 'Cantidad',
    'precio_unitario': 'Precio Unitario',

    // Login/Registro
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

    // Productos
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

    // Mensajes
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

    // Modo oscuro
    'modo_oscuro': 'Modo Oscuro',
    'modo_claro': 'Modo Claro',

    // Perfil
    'mi_perfil': 'Mi Perfil',
    'mis_compras': 'Mis Compras',
    'mis_publicaciones': 'Mis Publicaciones',
    'configuracion': 'Configuración',
    'editar_perfil': 'Editar Perfil',

    // Ordenes
    'mis_ordenes': 'Mis Órdenes',
    'numero_orden': 'Número de Orden',
    'fecha_orden': 'Fecha',
    'estado': 'Estado',
    'pendiente': 'Pendiente',
    'enviado': 'Enviado',
    'entregado': 'Entregado',
    'cancelado': 'Cancelado',
  },
  en: {
    // Navigation
    'inicio': 'Home',
    'catalogo': 'Catalog',
    'carrito': 'Cart',
    'login': 'Sign In',
    'registro': 'Sign Up',
    'perfil': 'My Profile',
    'admin': 'Admin',
    'cerrar_sesion': 'Sign Out',
    'publicar': 'Publish Product',

    // Categories
    'maquillaje': 'Makeup',
    'cuidado_facial': 'Skincare',
    'cuidado_corporal': 'Body Care',
    'cabello': 'Hair',
    'fragancias': 'Fragrances',
    'unas': 'Nails',

    // Buttons
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

    // Cart
    'carrito_vacio': 'Your cart is empty',
    'subtotal': 'Subtotal',
    'envio': 'Shipping',
    'descuento': 'Discount',
    'total': 'Total',
    'cantidad': 'Quantity',
    'precio_unitario': 'Unit Price',

    // Login/Register
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

    // Products
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

    // Messages
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

    // Dark Mode
    'modo_oscuro': 'Dark Mode',
    'modo_claro': 'Light Mode',

    // Profile
    'mi_perfil': 'My Profile',
    'mis_compras': 'My Purchases',
    'mis_publicaciones': 'My Publications',
    'configuracion': 'Settings',
    'editar_perfil': 'Edit Profile',

    // Orders
    'mis_ordenes': 'My Orders',
    'numero_orden': 'Order Number',
    'fecha_orden': 'Date',
    'estado': 'Status',
    'pendiente': 'Pending',
    'enviado': 'Shipped',
    'entregado': 'Delivered',
    'cancelado': 'Cancelled',
  }
};

// ============================================================
// FUNCIONES
// ============================================================

/**
 * Traduce una clave al idioma actual
 * @param {string} clave - Clave de la traducción
 * @param {object} parametros - Parámetros para reemplazar en la traducción
 * @returns {string} Texto traducido
 */
function t(clave, parametros = {}) {
  let texto = idiomas[idiomaActual]?.[clave] || clave;
  
  // Reemplazar parámetros si existen
  for (let [param, valor] of Object.entries(parametros)) {
    texto = texto.replace(`{${param}}`, valor);
  }
  
  return texto;
}

/**
 * Cambia el idioma actual y actualiza la interfaz
 * @param {string} nuevoIdioma - Código del idioma ('es' o 'en')
 */
function cambiarIdioma(nuevoIdioma) {
  if (idiomas[nuevoIdioma]) {
    idiomaActual = nuevoIdioma;
    localStorage.setItem('idioma', nuevoIdioma);
    actualizarInterfaz();
  }
}

/**
 * Obtiene el idioma actual
 * @returns {string} Código del idioma actual
 */
function obtenerIdiomaActual() {
  return idiomaActual;
}

/**
 * Actualiza todos los elementos que tengan el atributo data-t
 */
function actualizarInterfaz() {
  document.querySelectorAll('[data-t]').forEach(elemento => {
    const clave = elemento.getAttribute('data-t');
    if (elemento.tagName === 'INPUT' && elemento.type === 'submit') {
      elemento.value = t(clave);
    } else if (elemento.tagName === 'INPUT' && elemento.type === 'placeholder') {
      elemento.placeholder = t(clave);
    } else {
      elemento.textContent = t(clave);
    }
  });

  // Disparar evento personalizado
  document.dispatchEvent(new CustomEvent('idioma-cambiado', { detail: { idioma: idiomaActual } }));
}

// Ejecutar actualización al cargar la página
document.addEventListener('DOMContentLoaded', actualizarInterfaz);