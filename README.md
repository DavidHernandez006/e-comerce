 ##E-commerce de Belleza

Proyecto de e-commerce especializado en productos de belleza y cuidado personal.

---

---

## 🎨 Convenciones de Código

### Convenciones de CSS
Usaremos **kebab-case** (palabras separadas por guiones) porque se ve mejor estéticamente y está más organizado.

**Ejemplos correctos:**
```css
.boton-principal { }
.contenedor-carrito { }
.header-navegacion { }
```

### Convenciones de JavaScript
Usaremos **camelCase** porque las variables no pueden tener espacios y es la forma más práctica de hacerlo.

**Ejemplos correctos:**
```javascript
let usuarioActivo = true;
function obtenerCarrito() { }
let precioTotal = 0;
```

**Aviso:** Vamos a usar las dos convenciones, pero nuestro predeterminado o que más vamos a usar es **camelCase**

### Identación y Formato
Usaremos la tabulación de **dos espacios** y también las **comillas dobles** `""`

**Ejemplo de formato correcto:**
```javascript
function crearProducto(nombre, precio) {
  let nuevoProducto = {
    "nombre": nombre,
    "precio": precio
  };
  return nuevoProducto;
}
```

---

## 📁 Estructura de Carpetas

```
beautyshop-ecommerce/
├── index.html                 (Página de inicio)
│
├── pages/                     (Páginas principales)
│   ├── login.html            (Página de login/inicio de sesión)
│   ├── registro.html         (Página de registro de usuarios)
│   ├── catalogo.html         (Catálogo de productos)
│   ├── carrito.html          (Carrito de compras)
│   ├── publicar.html         (Publicar producto - Emprendedores)
│   ├── perfil.html           (Perfil de usuario)
│   └── admin.html            (Panel de administración)
│
├── css/                       (Estilos del proyecto)
│   ├── estilos.css           (Estilos principales y base)
│   ├── responsive.css        (Media queries - Mobile, Tablet, Desktop)
│   └── modo-oscuro.css       (Variables y estilos para tema oscuro)
│
├── js/                        (Lógica JavaScript)
│   ├── main.js               (Lógica principal e inicialización)
│   ├── carrito.js            (Gestión del carrito - agregar, eliminar, calcular)
│   ├── login.js              (Autenticación - login y registro)
│   ├── publicaciones.js      (CRUD de productos)
│   ├── traduccion.js         (Sistema de multilenguaje)
│   ├── modo-oscuro.js        (Gestor de tema claro/oscuro)
│   └── data.js               (Datos de prueba locales)
│
├── assets/                    (Recursos multimedia)
│   ├── images/               (Fotos de productos)
│   ├── icons/                (Iconos SVG/PNG)
│   └── logo/                 (Logo del proyecto)
│
├── data/                      (Base de datos local)
│   └── productos.json        (Datos de productos en JSON)
│
├── README.md                  (Este archivo - documentación)
└── .gitignore               (Archivos a ignorar en Git)
```

---

## 📖 Descripción de Módulos

### 🏠 **Páginas HTML (pages/)**

- **login.html** - Formulario de autenticación para usuarios registrados
- **registro.html** - Formulario para crear nuevas cuentas de usuario
- **catalogo.html** - Listado de productos con filtros y opciones de búsqueda
- **carrito.html** - Gestión de compras, visualizar productos agregados
- **publicar.html** - Panel para que emprendedores/vendedores agreguen nuevos productos
- **perfil.html** - Información personal del usuario, historial de compras, configuración
- **admin.html** - Panel administrativo para gestionar el sitio completo

### 🎨 **Estilos (css/)**

- **estilos.css** - Estilos base, tipografía, colores y diseño general del sitio
- **responsive.css** - Diseño adaptable para móvil, tablet y desktop
- **modo-oscuro.css** - Variables CSS y estilos para el modo oscuro

### ⚙️ **JavaScript (js/)**

- **main.js** - Funciones principales, inicialización y utilidades reutilizables
- **carrito.js** - Clase Carrito con métodos para agregar, eliminar y actualizar productos
- **login.js** - Clase Autenticacion para login, registro y gestión de sesiones
- **publicaciones.js** - Clase GestorProductos para crear, leer, actualizar y eliminar productos
- **traduccion.js** - Sistema de multilenguaje (español, inglés, etc.)
- **modo-oscuro.js** - Gestor de temas para cambiar entre modo claro y oscuro
- **data.js** - Base de datos de prueba con productos y usuarios de ejemplo

### 🖼️ **Recursos (assets/)**

- **images/** - Fotos y imágenes de productos del catálogo
- **icons/** - Iconos en formato SVG o PNG para botones y elementos
- **logo/** - Logo principal del proyecto

### 💾 **Datos (data/)**

- **productos.json** - Base de datos local en formato JSON con información de productos

---

## 🚀 Cómo Empezar

1. Clona el repositorio
2. Crea los archivos en las carpetas correspondientes
3. Sigue las convenciones de código del equipo
4. Escribe código limpio y bien comentado

---

## 📝 Notas Importantes

- Usa **camelCase** para variables y funciones en JavaScript
- Usa **kebab-case** para clases CSS
- Indentación con **2 espacios**
- Usa **comillas dobles** `""`
- Comenta tu código para que otros lo entiendan
- Mantén las carpetas organizadas y limpias

---

**Autor:** DavidHernandez006
**Última actualización:** 2026
