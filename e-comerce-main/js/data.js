// ============================================================
// data.js — Datos de prueba locales
// E-commerce de Belleza | BeautyShop
//TODOS LOS ID DE PRUEBA :USUARIOS,PRODUCTOS Y CATEGORIAS
// Autor: DavidHernandez
// ============================================================

// ------------------------------------------------------------
// CATEGORÍAS DE PRODUCTOS
// ------------------------------------------------------------
const categorias = [
  { id: 1, nombre: "Maquillaje",       icono: "💄" },
  { id: 2, nombre: "Cuidado Facial",   icono: "🧴" },
  { id: 3, nombre: "Cuidado Corporal", icono: "🛁" },
  { id: 4, nombre: "Cabello",          icono: "💇" },
  { id: 5, nombre: "Fragancias",       icono: "🌸" },
  { id: 6, nombre: "Uñas",            icono: "💅" },
];

// ------------------------------------------------------------
// PRODUCTOS DE PRUEBA
// Estructura de cada producto:
// {
//   id:           número único
//   nombre:       string
//   descripcion:  string
//   precio:       número (en pesos colombianos)
//   descuento:    número (porcentaje, 0 si no tiene)
//   categoriaId:  número (referencia a categorias[].id)
//   imagen:       string (ruta de la imagen)
//   vendedor:     string (nombre del emprendedor)
//   vendedorId:   número (referencia a usuarios[].id)
//   calificacion: número (1-5)
//   resenas:      número (cantidad de reseñas)
//   stock:        número
//   etiquetas:    array de strings
//   destacado:    boolean (aparece en el inicio)
//   nuevo:        boolean (es producto nuevo)
// }
// ------------------------------------------------------------
const productos = [
  // --- MAQUILLAJE ---
  {
    id: 1,
    nombre: "Base de Maquillaje Mate",
    descripcion: "Base líquida de larga duración con acabado mate. Cobertura media a total, ideal para piel grasa y mixta. Con protección SPF 25.",
    precio: 45000,
    descuento: 10,
    categoriaId: 1,
    imagen: "assets/images/base-mate.jpg",
    vendedor: "Glamour Colombia",
    vendedorId: 3,
    calificacion: 4.5,
    resenas: 128,
    stock: 50,
    etiquetas: ["maquillaje", "base", "mate", "larga duración"],
    destacado: true,
    nuevo: false,
  },
  {
    id: 2,
    nombre: "Paleta de Sombras Sunset",
    descripcion: "Paleta de 12 sombras con tonos cálidos. Incluye acabados mate, shimmer y glitter. Alta pigmentación y larga duración.",
    precio: 68000,
    descuento: 0,
    categoriaId: 1,
    imagen: "assets/images/paleta-sunset.jpg",
    vendedor: "Glamour Colombia",
    vendedorId: 3,
    calificacion: 4.8,
    resenas: 95,
    stock: 30,
    etiquetas: ["maquillaje", "sombras", "ojos", "paleta"],
    destacado: true,
    nuevo: false,
  },
  {
    id: 3,
    nombre: "Labial Hidratante Rosa Nude",
    descripcion: "Labial cremoso con vitamina E y aceite de argán. Color rosa nude perfecto para uso diario. Dura hasta 8 horas.",
    precio: 22000,
    descuento: 15,
    categoriaId: 1,
    imagen: "assets/images/labial-nude.jpg",
    vendedor: "BellezaNatural",
    vendedorId: 4,
    calificacion: 4.3,
    resenas: 67,
    stock: 80,
    etiquetas: ["maquillaje", "labial", "hidratante", "nude"],
    destacado: false,
    nuevo: true,
  },
  {
    id: 4,
    nombre: "Máscara de Pestañas Volumen XXL",
    descripcion: "Máscara de pestañas de fórmula enriquecida con keratina. Da volumen y alargamiento extremo. Resistente al agua.",
    precio: 35000,
    descuento: 0,
    categoriaId: 1,
    imagen: "assets/images/mascara-volumen.jpg",
    vendedor: "Glamour Colombia",
    vendedorId: 3,
    calificacion: 4.6,
    resenas: 112,
    stock: 45,
    etiquetas: ["maquillaje", "mascara", "pestañas", "waterproof"],
    destacado: false,
    nuevo: false,
  },

  // --- CUIDADO FACIAL ---
  {
    id: 5,
    nombre: "Sérum Vitamina C Antioxidante",
    descripcion: "Sérum facial con 20% de vitamina C pura. Ilumina, unifica el tono y reduce manchas. Fórmula estabilizada para mayor eficacia.",
    precio: 89000,
    descuento: 20,
    categoriaId: 2,
    imagen: "assets/images/serum-vitc.jpg",
    vendedor: "NaturaGlow",
    vendedorId: 5,
    calificacion: 4.9,
    resenas: 203,
    stock: 25,
    etiquetas: ["facial", "sérum", "vitamina c", "antioxidante", "manchas"],
    destacado: true,
    nuevo: false,
  },
  {
    id: 6,
    nombre: "Crema Hidratante con Ácido Hialurónico",
    descripcion: "Crema de día y noche con ácido hialurónico de triple peso molecular. Hidratación profunda por 72 horas. Sin fragancia, apta para piel sensible.",
    precio: 75000,
    descuento: 0,
    categoriaId: 2,
    imagen: "assets/images/crema-hialuronico.jpg",
    vendedor: "NaturaGlow",
    vendedorId: 5,
    calificacion: 4.7,
    resenas: 156,
    stock: 40,
    etiquetas: ["facial", "crema", "hialurónico", "hidratante", "sensible"],
    destacado: true,
    nuevo: false,
  },
  {
    id: 7,
    nombre: "Mascarilla de Arcilla Verde",
    descripcion: "Mascarilla purificante con arcilla verde y extracto de árbol de té. Limpia los poros en profundidad y controla el exceso de sebo.",
    precio: 38000,
    descuento: 5,
    categoriaId: 2,
    imagen: "assets/images/mascarilla-arcilla.jpg",
    vendedor: "BellezaNatural",
    vendedorId: 4,
    calificacion: 4.4,
    resenas: 88,
    stock: 60,
    etiquetas: ["facial", "mascarilla", "arcilla", "poros", "purificante"],
    destacado: false,
    nuevo: true,
  },

  // --- CUIDADO CORPORAL ---
  {
    id: 8,
    nombre: "Crema Corporal de Manteca de Karité",
    descripcion: "Crema ultra hidratante con manteca de karité y aceite de coco. Nutre y repara la piel seca. Fragancia suave a vainilla.",
    precio: 42000,
    descuento: 0,
    categoriaId: 3,
    imagen: "assets/images/crema-karite.jpg",
    vendedor: "BellezaNatural",
    vendedorId: 4,
    calificacion: 4.5,
    resenas: 74,
    stock: 55,
    etiquetas: ["corporal", "crema", "karité", "hidratante", "seca"],
    destacado: false,
    nuevo: false,
  },
  {
    id: 9,
    nombre: "Exfoliante Corporal de Café",
    descripcion: "Exfoliante natural a base de granos de café, azúcar morena y aceite de almendras. Elimina células muertas y reafirma la piel.",
    precio: 55000,
    descuento: 10,
    categoriaId: 3,
    imagen: "assets/images/exfoliante-cafe.jpg",
    vendedor: "NaturaGlow",
    vendedorId: 5,
    calificacion: 4.8,
    resenas: 131,
    stock: 35,
    etiquetas: ["corporal", "exfoliante", "café", "natural", "reafirmante"],
    destacado: true,
    nuevo: false,
  },

  // --- CABELLO ---
  {
    id: 10,
    nombre: "Aceite Reparador de Argan",
    descripcion: "Aceite de argán 100% puro prensado en frío. Repara el cabello dañado, da brillo y reduce el frizz. Ideal para puntas abiertas.",
    precio: 62000,
    descuento: 0,
    categoriaId: 4,
    imagen: "assets/images/aceite-argan.jpg",
    vendedor: "CabelleraViva",
    vendedorId: 6,
    calificacion: 4.7,
    resenas: 189,
    stock: 42,
    etiquetas: ["cabello", "aceite", "argán", "reparador", "frizz"],
    destacado: true,
    nuevo: false,
  },
  {
    id: 11,
    nombre: "Shampoo Sin Sulfatos Coco y Aloe",
    descripcion: "Shampoo suave libre de sulfatos, parabenos y siliconas. Con extracto de coco y aloe vera. Ideal para cabello teñido y rizado.",
    precio: 48000,
    descuento: 0,
    categoriaId: 4,
    imagen: "assets/images/shampoo-coco.jpg",
    vendedor: "CabelleraViva",
    vendedorId: 6,
    calificacion: 4.6,
    resenas: 97,
    stock: 65,
    etiquetas: ["cabello", "shampoo", "sin sulfatos", "coco", "rizado"],
    destacado: false,
    nuevo: true,
  },

  // --- FRAGANCIAS ---
  {
    id: 12,
    nombre: "Perfume Floral Rose Gold",
    descripcion: "Eau de Parfum con notas de rosa, jazmín y sándalo. Fragancia femenina elegante con una duración de más de 12 horas.",
    precio: 120000,
    descuento: 25,
    categoriaId: 5,
    imagen: "assets/images/perfume-rose.jpg",
    vendedor: "EsenciasColombia",
    vendedorId: 7,
    calificacion: 4.9,
    resenas: 245,
    stock: 20,
    etiquetas: ["fragancia", "perfume", "floral", "rosa", "elegante"],
    destacado: true,
    nuevo: false,
  },

  // --- UÑAS ---
  {
    id: 13,
    nombre: "Esmalte Gel de Larga Duración",
    descripcion: "Esmalte de uñas efecto gel sin necesidad de lámpara UV. Acabado brillante y resistente hasta 2 semanas. Disponible en 20 colores.",
    precio: 18000,
    descuento: 0,
    categoriaId: 6,
    imagen: "assets/images/esmalte-gel.jpg",
    vendedor: "NailArtCo",
    vendedorId: 8,
    calificacion: 4.4,
    resenas: 163,
    stock: 100,
    etiquetas: ["uñas", "esmalte", "gel", "larga duración", "brillante"],
    destacado: false,
    nuevo: true,
  },
  {
    id: 14,
    nombre: "Kit de Manicure Profesional",
    descripcion: "Set completo de manicure con lima, cortauñas, palito de naranjo, removedor y base fortalecedora. Presentación de lujo en estuche.",
    precio: 85000,
    descuento: 15,
    categoriaId: 6,
    imagen: "assets/images/kit-manicure.jpg",
    vendedor: "NailArtCo",
    vendedorId: 8,
    calificacion: 4.7,
    resenas: 82,
    stock: 28,
    etiquetas: ["uñas", "manicure", "kit", "profesional", "set"],
    destacado: false,
    nuevo: false,
  },
];

// ------------------------------------------------------------
// USUARIOS DE PRUEBA
// Estructura de cada usuario:
// {
//   id:        número único
//   nombre:    string
//   apellido:  string
//   email:     string
//   password:  string (en producción NUNCA se guarda en texto plano)
//   rol:       "cliente" | "vendedor" | "admin"
//   avatar:    string (ruta de la imagen)
//   telefono:  string
//   direccion: string
//   ciudad:    string
//   fechaRegistro: string (ISO 8601)
//   activo:    boolean
// }
// ------------------------------------------------------------
const usuarios = [
  {
    id: 1,
    nombre: "Admin",
    apellido: "BeautyShop",
    email: "admin@beautyshop.com",
    password: "Admin123*",
    rol: "admin",
    avatar: "assets/images/avatar-admin.jpg",
    telefono: "3001234567",
    direccion: "Calle 100 #15-20",
    ciudad: "Bogotá",
    fechaRegistro: "2026-01-01T00:00:00Z",
    activo: true,
  },
  {
    id: 2,
    nombre: "María",
    apellido: "López",
    email: "maria@gmail.com",
    password: "Maria123*",
    rol: "cliente",
    avatar: "assets/images/avatar-maria.jpg",
    telefono: "3109876543",
    direccion: "Carrera 7 #45-10",
    ciudad: "Medellín",
    fechaRegistro: "2026-02-15T10:30:00Z",
    activo: true,
  },
  {
    id: 3,
    nombre: "Camila",
    apellido: "Restrepo",
    email: "glamour@gmail.com",
    password: "Glamour123*",
    rol: "vendedor",
    avatar: "assets/images/avatar-glamour.jpg",
    telefono: "3156781234",
    direccion: "Av. El Poblado #32-15",
    ciudad: "Medellín",
    fechaRegistro: "2026-01-20T09:00:00Z",
    activo: true,
  },
  {
    id: 4,
    nombre: "Valentina",
    apellido: "Mora",
    email: "bellezanatural@gmail.com",
    password: "Belleza123*",
    rol: "vendedor",
    avatar: "assets/images/avatar-belleza.jpg",
    telefono: "3204567890",
    direccion: "Calle 72 #20-45",
    ciudad: "Bogotá",
    fechaRegistro: "2026-02-01T14:00:00Z",
    activo: true,
  },
  {
    id: 5,
    nombre: "Sofía",
    apellido: "Herrera",
    email: "naturaglow@gmail.com",
    password: "Natura123*",
    rol: "vendedor",
    avatar: "assets/images/avatar-natura.jpg",
    telefono: "3187654321",
    direccion: "Cra 43A #5-15",
    ciudad: "Barranquilla",
    fechaRegistro: "2026-01-28T11:00:00Z",
    activo: true,
  },
  {
    id: 6,
    nombre: "Laura",
    apellido: "Castro",
    email: "caballera@gmail.com",
    password: "Cabello123*",
    rol: "vendedor",
    avatar: "assets/images/avatar-cabellera.jpg",
    telefono: "3141122334",
    direccion: "Calle 5 #80-30",
    ciudad: "Cali",
    fechaRegistro: "2026-03-05T08:00:00Z",
    activo: true,
  },
  {
    id: 7,
    nombre: "Daniela",
    apellido: "Suárez",
    email: "esencias@gmail.com",
    password: "Esencia123*",
    rol: "vendedor",
    avatar: "assets/images/avatar-esencias.jpg",
    telefono: "3169988776",
    direccion: "Transversal 6 #25-50",
    ciudad: "Bucaramanga",
    fechaRegistro: "2026-02-20T16:00:00Z",
    activo: true,
  },
  {
    id: 8,
    nombre: "Paola",
    apellido: "Jiménez",
    email: "nailart@gmail.com",
    password: "Nails123*",
    rol: "vendedor",
    avatar: "assets/images/avatar-nail.jpg",
    telefono: "3132233445",
    direccion: "Calle 13 #60-20",
    ciudad: "Pereira",
    fechaRegistro: "2026-03-10T10:00:00Z",
    activo: true,
  },
];

// ------------------------------------------------------------
// RESEÑAS DE PRUEBA
// ------------------------------------------------------------
const resenas = [
  {
    id: 1,
    productoId: 5,
    usuarioId: 2,
    usuarioNombre: "María L.",
    calificacion: 5,
    comentario: "¡Increíble sérum! Llevo 3 semanas usándolo y ya veo una diferencia notable en mis manchas. Lo recomiendo totalmente.",
    fecha: "2026-05-10T12:00:00Z",
  },
  {
    id: 2,
    productoId: 1,
    usuarioId: 2,
    usuarioNombre: "María L.",
    calificacion: 4,
    comentario: "Muy buena cobertura y dura todo el día. La única queja es que puede sentirse un poco pesada en clima caliente.",
    fecha: "2026-05-15T14:30:00Z",
  },
  {
    id: 3,
    productoId: 12,
    usuarioId: 2,
    usuarioNombre: "María L.",
    calificacion: 5,
    comentario: "El mejor perfume que he comprado. La fragancia dura muchísimo y recibo elogios cada vez que lo uso.",
    fecha: "2026-06-01T09:00:00Z",
  },
];

// ------------------------------------------------------------
// ÓRDENES / HISTORIAL DE COMPRAS DE PRUEBA
// ------------------------------------------------------------
const ordenes = [
  {
    id: "ORD-001",
    usuarioId: 2,
    productos: [
      { productoId: 5, cantidad: 1, precioUnitario: 89000 },
      { productoId: 12, cantidad: 1, precioUnitario: 120000 },
    ],
    subtotal: 209000,
    descuentoTotal: 30000,
    total: 179000,
    estado: "entregado",   // "pendiente" | "procesando" | "enviado" | "entregado" | "cancelado"
    direccionEnvio: "Carrera 7 #45-10, Medellín",
    fechaOrden: "2026-05-20T10:00:00Z",
    fechaEntrega: "2026-05-25T15:00:00Z",
  },
];

// ------------------------------------------------------------
// EXPORTAR (para uso con módulos si se migra a ES Modules)
// Por ahora son variables globales accesibles desde cualquier script
// ------------------------------------------------------------
// export { categorias, productos, usuarios, resenas, ordenes };

console.log("✅ data.js cargado correctamente");
console.log(`   📦 ${productos.length} productos`);
console.log(`   👥 ${usuarios.length} usuarios`);
console.log(`   🏷️  ${categorias.length} categorías`);