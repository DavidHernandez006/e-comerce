// ============================================================
// data.js — Datos de prueba locales
// ============================================================

const categorias = [
  {
    "id": 1,
    "nombre": "Maquillaje",
    "icono": "💄"
  },
  {
    "id": 2,
    "nombre": "Skincare",
    "icono": "🧴"
  },
  {
    "id": 3,
    "nombre": "Cabello",
    "icono": "💇"
  },
  {
    "id": 4,
    "nombre": "Fragancias",
    "icono": "🌸"
  },
  {
    "id": 5,
    "nombre": "Uñas",
    "icono": "💅"
  },
  {
    "id": 6,
    "nombre": "Herramientas",
    "icono": "🖌️"
  },
  {
    "id": 7,
    "nombre": "Accesorios",
    "icono": "🎀"
  },
  {
    "id": 8,
    "nombre": "Sets",
    "icono": "🎁"
  },
  {
    "id": 9,
    "nombre": "Miniaturas",
    "icono": "🧪"
  },
  {
    "id": 10,
    "nombre": "Novedades",
    "icono": "✨"
  },
  {
    "id": 11,
    "nombre": "Ofertas",
    "icono": "🏷️"
  },
  {
    "id": 12,
    "nombre": "Luxury",
    "icono": "💎"
  },
  {
    "id": 13,
    "nombre": "Coreano",
    "icono": "🇰🇷"
  },
  {
    "id": 14,
    "nombre": "Natural",
    "icono": "🌿"
  }
];

const productos = [
  {
    "id": 1,
    "nombre": "Base Glow Essence 1",
    "descripcion": "Increíble bases de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 106354,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "assets/products/maquillaje_1.jpg",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 4.2,
    "resenas": 247,
    "stock": 98,
    "etiquetas": [
      "bases",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 2,
    "nombre": "Base Silk Road 2",
    "descripcion": "Increíble bases de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 149454,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "assets/products/maquillaje_2.jpg",
    "vendedor": "EsenciasColombia",
    "vendedorId": 3,
    "calificacion": 4.3,
    "resenas": 489,
    "stock": 95,
    "etiquetas": [
      "bases",
      "silk road"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Silk Road",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 3,
    "nombre": "Base Midnight Bloom 3",
    "descripcion": "Increíble bases de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 69866,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "assets/products/maquillaje_3.jpg",
    "vendedor": "NaturaGlow",
    "vendedorId": 8,
    "calificacion": 5.0,
    "resenas": 278,
    "stock": 80,
    "etiquetas": [
      "bases",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": []
  },
  {
    "id": 4,
    "nombre": "Base Radiant Beauty 4",
    "descripcion": "Increíble bases de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 119292,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 7,
    "calificacion": 4.2,
    "resenas": 286,
    "stock": 84,
    "etiquetas": [
      "bases",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 5,
    "nombre": "Base Pure Zen 5",
    "descripcion": "Increíble bases de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 109543,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 3.6,
    "resenas": 367,
    "stock": 15,
    "etiquetas": [
      "bases",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 6,
    "nombre": "Base Pure Zen 6",
    "descripcion": "Increíble bases de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 92854,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 8,
    "calificacion": 4.8,
    "resenas": 40,
    "stock": 87,
    "etiquetas": [
      "bases",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "NUEVO",
      "Vegano"
    ]
  },
  {
    "id": 7,
    "nombre": "Base Velvet Touch 7",
    "descripcion": "Increíble bases de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 77282,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 4.8,
    "resenas": 56,
    "stock": 74,
    "etiquetas": [
      "bases",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 8,
    "nombre": "Base Ocean Mist 8",
    "descripcion": "Increíble bases de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 109013,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 5,
    "calificacion": 3.9,
    "resenas": 229,
    "stock": 33,
    "etiquetas": [
      "bases",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Ocean Mist",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 9,
    "nombre": "Base Midnight Bloom 9",
    "descripcion": "Increíble bases de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 23091,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 4,
    "calificacion": 4.6,
    "resenas": 483,
    "stock": 87,
    "etiquetas": [
      "bases",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 10,
    "nombre": "Base Radiant Beauty 10",
    "descripcion": "Increíble bases de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 112194,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 3,
    "calificacion": 4.4,
    "resenas": 6,
    "stock": 31,
    "etiquetas": [
      "bases",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 11,
    "nombre": "Base Pure Zen 11",
    "descripcion": "Increíble bases de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 69702,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.6,
    "resenas": 337,
    "stock": 83,
    "etiquetas": [
      "bases",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 12,
    "nombre": "Base Midnight Bloom 12",
    "descripcion": "Increíble bases de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 73923,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.4,
    "resenas": 448,
    "stock": 46,
    "etiquetas": [
      "bases",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": []
  },
  {
    "id": 13,
    "nombre": "Base Pure Zen 13",
    "descripcion": "Increíble bases de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 28732,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 3,
    "calificacion": 4.6,
    "resenas": 264,
    "stock": 41,
    "etiquetas": [
      "bases",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "OFERTA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 14,
    "nombre": "Base Midnight Bloom 14",
    "descripcion": "Increíble bases de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 119982,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 3.9,
    "resenas": 124,
    "stock": 42,
    "etiquetas": [
      "bases",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "OFERTA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 15,
    "nombre": "Base Glow Essence 15",
    "descripcion": "Increíble bases de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 144805,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.1,
    "resenas": 270,
    "stock": 16,
    "etiquetas": [
      "bases",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 16,
    "nombre": "Labial Lumina 1",
    "descripcion": "Increíble labiales de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 139255,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 4.2,
    "resenas": 377,
    "stock": 48,
    "etiquetas": [
      "labiales",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 17,
    "nombre": "Labial Ocean Mist 2",
    "descripcion": "Increíble labiales de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 36502,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 4.2,
    "resenas": 194,
    "stock": 13,
    "etiquetas": [
      "labiales",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 18,
    "nombre": "Labial Ocean Mist 3",
    "descripcion": "Increíble labiales de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 115755,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.7,
    "resenas": 368,
    "stock": 46,
    "etiquetas": [
      "labiales",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 19,
    "nombre": "Labial Pure Zen 4",
    "descripcion": "Increíble labiales de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 59073,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 5,
    "calificacion": 4.4,
    "resenas": 294,
    "stock": 53,
    "etiquetas": [
      "labiales",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 20,
    "nombre": "Labial Velvet Touch 5",
    "descripcion": "Increíble labiales de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 146965,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 7,
    "calificacion": 4.8,
    "resenas": 289,
    "stock": 11,
    "etiquetas": [
      "labiales",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 21,
    "nombre": "Labial Silk Road 6",
    "descripcion": "Increíble labiales de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 46176,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 4.3,
    "resenas": 273,
    "stock": 72,
    "etiquetas": [
      "labiales",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 22,
    "nombre": "Labial Radiant Beauty 7",
    "descripcion": "Increíble labiales de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 74922,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 3.9,
    "resenas": 217,
    "stock": 40,
    "etiquetas": [
      "labiales",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 23,
    "nombre": "Labial Pure Zen 8",
    "descripcion": "Increíble labiales de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 93418,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 7,
    "calificacion": 4.7,
    "resenas": 373,
    "stock": 20,
    "etiquetas": [
      "labiales",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 24,
    "nombre": "Labial Glow Essence 9",
    "descripcion": "Increíble labiales de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 27681,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 4.3,
    "resenas": 130,
    "stock": 3,
    "etiquetas": [
      "labiales",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 25,
    "nombre": "Labial Velvet Touch 10",
    "descripcion": "Increíble labiales de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 140637,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.8,
    "resenas": 290,
    "stock": 49,
    "etiquetas": [
      "labiales",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 26,
    "nombre": "Labial Silk Road 11",
    "descripcion": "Increíble labiales de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 70865,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 137,
    "stock": 88,
    "etiquetas": [
      "labiales",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 27,
    "nombre": "Labial Velvet Touch 12",
    "descripcion": "Increíble labiales de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 92392,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 4.3,
    "resenas": 245,
    "stock": 0,
    "etiquetas": [
      "labiales",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 28,
    "nombre": "Labial Ocean Mist 13",
    "descripcion": "Increíble labiales de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 23918,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 3.8,
    "resenas": 490,
    "stock": 45,
    "etiquetas": [
      "labiales",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 29,
    "nombre": "Labial Ocean Mist 14",
    "descripcion": "Increíble labiales de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 108739,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 4.7,
    "resenas": 185,
    "stock": 84,
    "etiquetas": [
      "labiales",
      "ocean mist"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 30,
    "nombre": "Labial Pure Zen 15",
    "descripcion": "Increíble labiales de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 128759,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 227,
    "stock": 79,
    "etiquetas": [
      "labiales",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 31,
    "nombre": "Paleta de Sombras Silk Road 1",
    "descripcion": "Increíble sombras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 110013,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 7,
    "calificacion": 5.0,
    "resenas": 203,
    "stock": 91,
    "etiquetas": [
      "sombras",
      "silk road"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 32,
    "nombre": "Paleta de Sombras Midnight Bloom 2",
    "descripcion": "Increíble sombras de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 88776,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 3.6,
    "resenas": 358,
    "stock": 78,
    "etiquetas": [
      "sombras",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 33,
    "nombre": "Paleta de Sombras Silk Road 3",
    "descripcion": "Increíble sombras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 23160,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 3.6,
    "resenas": 395,
    "stock": 43,
    "etiquetas": [
      "sombras",
      "silk road"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 34,
    "nombre": "Paleta de Sombras Glow Essence 4",
    "descripcion": "Increíble sombras de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 60287,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 11,
    "stock": 36,
    "etiquetas": [
      "sombras",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 35,
    "nombre": "Paleta de Sombras Velvet Touch 5",
    "descripcion": "Increíble sombras de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 141681,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 4.5,
    "resenas": 288,
    "stock": 21,
    "etiquetas": [
      "sombras",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": []
  },
  {
    "id": 36,
    "nombre": "Paleta de Sombras Velvet Touch 6",
    "descripcion": "Increíble sombras de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 60322,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 4,
    "calificacion": 4.2,
    "resenas": 110,
    "stock": 40,
    "etiquetas": [
      "sombras",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 37,
    "nombre": "Paleta de Sombras Velvet Touch 7",
    "descripcion": "Increíble sombras de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 40801,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 7,
    "calificacion": 4.5,
    "resenas": 260,
    "stock": 32,
    "etiquetas": [
      "sombras",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 38,
    "nombre": "Paleta de Sombras Lumina 8",
    "descripcion": "Increíble sombras de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 68661,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 4,
    "calificacion": 4.2,
    "resenas": 275,
    "stock": 22,
    "etiquetas": [
      "sombras",
      "lumina"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Lumina",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 39,
    "nombre": "Paleta de Sombras Silk Road 9",
    "descripcion": "Increíble sombras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 111233,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 301,
    "stock": 24,
    "etiquetas": [
      "sombras",
      "silk road"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Silk Road",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 40,
    "nombre": "Paleta de Sombras Radiant Beauty 10",
    "descripcion": "Increíble sombras de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 104179,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 4,
    "calificacion": 4.8,
    "resenas": 96,
    "stock": 66,
    "etiquetas": [
      "sombras",
      "radiant beauty"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 41,
    "nombre": "Paleta de Sombras Silk Road 11",
    "descripcion": "Increíble sombras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 64848,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.2,
    "resenas": 36,
    "stock": 13,
    "etiquetas": [
      "sombras",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 42,
    "nombre": "Paleta de Sombras Pure Zen 12",
    "descripcion": "Increíble sombras de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 146903,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 4.3,
    "resenas": 121,
    "stock": 19,
    "etiquetas": [
      "sombras",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": []
  },
  {
    "id": 43,
    "nombre": "Paleta de Sombras Silk Road 13",
    "descripcion": "Increíble sombras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 105964,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 4.4,
    "resenas": 301,
    "stock": 80,
    "etiquetas": [
      "sombras",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Vegano"
    ]
  },
  {
    "id": 44,
    "nombre": "Paleta de Sombras Pure Zen 14",
    "descripcion": "Increíble sombras de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 81338,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.2,
    "resenas": 8,
    "stock": 99,
    "etiquetas": [
      "sombras",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 45,
    "nombre": "Paleta de Sombras Ocean Mist 15",
    "descripcion": "Increíble sombras de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 64641,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.4,
    "resenas": 202,
    "stock": 68,
    "etiquetas": [
      "sombras",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 46,
    "nombre": "Rubor Ocean Mist 1",
    "descripcion": "Increíble rubores de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 71353,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 3,
    "calificacion": 5.0,
    "resenas": 105,
    "stock": 22,
    "etiquetas": [
      "rubores",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 47,
    "nombre": "Rubor Ocean Mist 2",
    "descripcion": "Increíble rubores de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 43624,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.1,
    "resenas": 67,
    "stock": 99,
    "etiquetas": [
      "rubores",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 48,
    "nombre": "Rubor Pure Zen 3",
    "descripcion": "Increíble rubores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 22215,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.2,
    "resenas": 120,
    "stock": 29,
    "etiquetas": [
      "rubores",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 49,
    "nombre": "Rubor Midnight Bloom 4",
    "descripcion": "Increíble rubores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 107718,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 5,
    "calificacion": 3.8,
    "resenas": 9,
    "stock": 37,
    "etiquetas": [
      "rubores",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 50,
    "nombre": "Rubor Radiant Beauty 5",
    "descripcion": "Increíble rubores de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 96748,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 3.6,
    "resenas": 404,
    "stock": 96,
    "etiquetas": [
      "rubores",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 51,
    "nombre": "Rubor Ocean Mist 6",
    "descripcion": "Increíble rubores de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 91973,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 4.5,
    "resenas": 419,
    "stock": 2,
    "etiquetas": [
      "rubores",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 52,
    "nombre": "Rubor Lumina 7",
    "descripcion": "Increíble rubores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 30772,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 3.6,
    "resenas": 183,
    "stock": 96,
    "etiquetas": [
      "rubores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 53,
    "nombre": "Rubor Glow Essence 8",
    "descripcion": "Increíble rubores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 76346,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 8,
    "calificacion": 4.8,
    "resenas": 161,
    "stock": 62,
    "etiquetas": [
      "rubores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 54,
    "nombre": "Rubor Velvet Touch 9",
    "descripcion": "Increíble rubores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 107889,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 4.9,
    "resenas": 427,
    "stock": 27,
    "etiquetas": [
      "rubores",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": []
  },
  {
    "id": 55,
    "nombre": "Rubor Ocean Mist 10",
    "descripcion": "Increíble rubores de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 71699,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.5,
    "resenas": 472,
    "stock": 2,
    "etiquetas": [
      "rubores",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 56,
    "nombre": "Rubor Lumina 11",
    "descripcion": "Increíble rubores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 73107,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 4.2,
    "resenas": 433,
    "stock": 88,
    "etiquetas": [
      "rubores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": []
  },
  {
    "id": 57,
    "nombre": "Rubor Pure Zen 12",
    "descripcion": "Increíble rubores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 78222,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 3.5,
    "resenas": 429,
    "stock": 72,
    "etiquetas": [
      "rubores",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 58,
    "nombre": "Rubor Velvet Touch 13",
    "descripcion": "Increíble rubores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 132777,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 271,
    "stock": 3,
    "etiquetas": [
      "rubores",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 59,
    "nombre": "Rubor Glow Essence 14",
    "descripcion": "Increíble rubores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 117397,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 4,
    "calificacion": 4.7,
    "resenas": 89,
    "stock": 6,
    "etiquetas": [
      "rubores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 60,
    "nombre": "Rubor Midnight Bloom 15",
    "descripcion": "Increíble rubores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 73287,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 4,
    "calificacion": 4.1,
    "resenas": 237,
    "stock": 52,
    "etiquetas": [
      "rubores",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 61,
    "nombre": "Corrector Glow Essence 1",
    "descripcion": "Increíble correctores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 40824,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.4,
    "resenas": 347,
    "stock": 87,
    "etiquetas": [
      "correctores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 62,
    "nombre": "Corrector Midnight Bloom 2",
    "descripcion": "Increíble correctores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 124303,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 255,
    "stock": 26,
    "etiquetas": [
      "correctores",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 63,
    "nombre": "Corrector Glow Essence 3",
    "descripcion": "Increíble correctores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 76629,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 3,
    "calificacion": 3.7,
    "resenas": 68,
    "stock": 54,
    "etiquetas": [
      "correctores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "EDICION LIMITADA",
      "Vegano"
    ]
  },
  {
    "id": 64,
    "nombre": "Corrector Pure Zen 4",
    "descripcion": "Increíble correctores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 145185,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.5,
    "resenas": 322,
    "stock": 5,
    "etiquetas": [
      "correctores",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 65,
    "nombre": "Corrector Midnight Bloom 5",
    "descripcion": "Increíble correctores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 137243,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 7,
    "calificacion": 4.1,
    "resenas": 452,
    "stock": 100,
    "etiquetas": [
      "correctores",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 66,
    "nombre": "Corrector Lumina 6",
    "descripcion": "Increíble correctores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 83052,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 3.6,
    "resenas": 253,
    "stock": 12,
    "etiquetas": [
      "correctores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Lumina",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 67,
    "nombre": "Corrector Glow Essence 7",
    "descripcion": "Increíble correctores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 59916,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 8,
    "calificacion": 4.6,
    "resenas": 250,
    "stock": 10,
    "etiquetas": [
      "correctores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 68,
    "nombre": "Corrector Lumina 8",
    "descripcion": "Increíble correctores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 128036,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 3,
    "calificacion": 4.8,
    "resenas": 302,
    "stock": 73,
    "etiquetas": [
      "correctores",
      "lumina"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Lumina",
    "badges": [
      "NUEVO",
      "Vegano"
    ]
  },
  {
    "id": 69,
    "nombre": "Corrector Glow Essence 9",
    "descripcion": "Increíble correctores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 43747,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.7,
    "resenas": 76,
    "stock": 42,
    "etiquetas": [
      "correctores",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 70,
    "nombre": "Corrector Glow Essence 10",
    "descripcion": "Increíble correctores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 24829,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 4.6,
    "resenas": 17,
    "stock": 74,
    "etiquetas": [
      "correctores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 71,
    "nombre": "Corrector Midnight Bloom 11",
    "descripcion": "Increíble correctores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 36947,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 6,
    "calificacion": 4.2,
    "resenas": 12,
    "stock": 95,
    "etiquetas": [
      "correctores",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 72,
    "nombre": "Corrector Velvet Touch 12",
    "descripcion": "Increíble correctores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 148961,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 8,
    "calificacion": 3.5,
    "resenas": 233,
    "stock": 16,
    "etiquetas": [
      "correctores",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 73,
    "nombre": "Corrector Midnight Bloom 13",
    "descripcion": "Increíble correctores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 75578,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 7,
    "calificacion": 4.7,
    "resenas": 139,
    "stock": 64,
    "etiquetas": [
      "correctores",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA",
      "Vegano"
    ]
  },
  {
    "id": 74,
    "nombre": "Corrector Glow Essence 14",
    "descripcion": "Increíble correctores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 38396,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 3,
    "calificacion": 4.5,
    "resenas": 449,
    "stock": 100,
    "etiquetas": [
      "correctores",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 75,
    "nombre": "Corrector Velvet Touch 15",
    "descripcion": "Increíble correctores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 105625,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 4.4,
    "resenas": 215,
    "stock": 83,
    "etiquetas": [
      "correctores",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 76,
    "nombre": "Delineador Pure Zen 1",
    "descripcion": "Increíble delineadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 65521,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 4.0,
    "resenas": 266,
    "stock": 75,
    "etiquetas": [
      "delineadores",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 77,
    "nombre": "Delineador Glow Essence 2",
    "descripcion": "Increíble delineadores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 147874,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 5,
    "calificacion": 4.8,
    "resenas": 97,
    "stock": 15,
    "etiquetas": [
      "delineadores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 78,
    "nombre": "Delineador Velvet Touch 3",
    "descripcion": "Increíble delineadores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 105674,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 8,
    "calificacion": 4.0,
    "resenas": 162,
    "stock": 44,
    "etiquetas": [
      "delineadores",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 79,
    "nombre": "Delineador Glow Essence 4",
    "descripcion": "Increíble delineadores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 66233,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 3.8,
    "resenas": 36,
    "stock": 49,
    "etiquetas": [
      "delineadores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 80,
    "nombre": "Delineador Midnight Bloom 5",
    "descripcion": "Increíble delineadores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 22752,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 3,
    "calificacion": 4.8,
    "resenas": 41,
    "stock": 12,
    "etiquetas": [
      "delineadores",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 81,
    "nombre": "Delineador Radiant Beauty 6",
    "descripcion": "Increíble delineadores de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 132247,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 3,
    "calificacion": 4.4,
    "resenas": 308,
    "stock": 65,
    "etiquetas": [
      "delineadores",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "EDICION LIMITADA",
      "Vegano"
    ]
  },
  {
    "id": 82,
    "nombre": "Delineador Radiant Beauty 7",
    "descripcion": "Increíble delineadores de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 82103,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 5,
    "calificacion": 3.7,
    "resenas": 443,
    "stock": 28,
    "etiquetas": [
      "delineadores",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 83,
    "nombre": "Delineador Radiant Beauty 8",
    "descripcion": "Increíble delineadores de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 63272,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.7,
    "resenas": 157,
    "stock": 33,
    "etiquetas": [
      "delineadores",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 84,
    "nombre": "Delineador Radiant Beauty 9",
    "descripcion": "Increíble delineadores de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 69355,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 4.5,
    "resenas": 131,
    "stock": 71,
    "etiquetas": [
      "delineadores",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 85,
    "nombre": "Delineador Pure Zen 10",
    "descripcion": "Increíble delineadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 70905,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 4.1,
    "resenas": 99,
    "stock": 13,
    "etiquetas": [
      "delineadores",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 86,
    "nombre": "Delineador Glow Essence 11",
    "descripcion": "Increíble delineadores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 122708,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.8,
    "resenas": 164,
    "stock": 72,
    "etiquetas": [
      "delineadores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 87,
    "nombre": "Delineador Ocean Mist 12",
    "descripcion": "Increíble delineadores de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 109871,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 5,
    "calificacion": 4.7,
    "resenas": 325,
    "stock": 68,
    "etiquetas": [
      "delineadores",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": []
  },
  {
    "id": 88,
    "nombre": "Delineador Silk Road 13",
    "descripcion": "Increíble delineadores de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 114872,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 7,
    "calificacion": 4.4,
    "resenas": 470,
    "stock": 96,
    "etiquetas": [
      "delineadores",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 89,
    "nombre": "Delineador Ocean Mist 14",
    "descripcion": "Increíble delineadores de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 33382,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 3.6,
    "resenas": 439,
    "stock": 13,
    "etiquetas": [
      "delineadores",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA",
      "Vegano"
    ]
  },
  {
    "id": 90,
    "nombre": "Delineador Pure Zen 15",
    "descripcion": "Increíble delineadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 70888,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 8,
    "calificacion": 4.0,
    "resenas": 19,
    "stock": 65,
    "etiquetas": [
      "delineadores",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 91,
    "nombre": "Máscara de Pestañas Silk Road 1",
    "descripcion": "Increíble máscaras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 87177,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 4,
    "calificacion": 4.1,
    "resenas": 64,
    "stock": 4,
    "etiquetas": [
      "máscaras",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 92,
    "nombre": "Máscara de Pestañas Velvet Touch 2",
    "descripcion": "Increíble máscaras de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 133324,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 4.4,
    "resenas": 306,
    "stock": 34,
    "etiquetas": [
      "máscaras",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 93,
    "nombre": "Máscara de Pestañas Lumina 3",
    "descripcion": "Increíble máscaras de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 81984,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 3.9,
    "resenas": 249,
    "stock": 23,
    "etiquetas": [
      "máscaras",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 94,
    "nombre": "Máscara de Pestañas Glow Essence 4",
    "descripcion": "Increíble máscaras de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 135019,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 3.8,
    "resenas": 131,
    "stock": 54,
    "etiquetas": [
      "máscaras",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 95,
    "nombre": "Máscara de Pestañas Silk Road 5",
    "descripcion": "Increíble máscaras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 90076,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 6,
    "calificacion": 4.8,
    "resenas": 166,
    "stock": 54,
    "etiquetas": [
      "máscaras",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 96,
    "nombre": "Máscara de Pestañas Midnight Bloom 6",
    "descripcion": "Increíble máscaras de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 42731,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 3.8,
    "resenas": 364,
    "stock": 2,
    "etiquetas": [
      "máscaras",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 97,
    "nombre": "Máscara de Pestañas Silk Road 7",
    "descripcion": "Increíble máscaras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 131813,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 5,
    "calificacion": 3.5,
    "resenas": 500,
    "stock": 57,
    "etiquetas": [
      "máscaras",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 98,
    "nombre": "Máscara de Pestañas Midnight Bloom 8",
    "descripcion": "Increíble máscaras de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 58092,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 4,
    "calificacion": 4.9,
    "resenas": 78,
    "stock": 84,
    "etiquetas": [
      "máscaras",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 99,
    "nombre": "Máscara de Pestañas Midnight Bloom 9",
    "descripcion": "Increíble máscaras de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 91680,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 4.4,
    "resenas": 44,
    "stock": 64,
    "etiquetas": [
      "máscaras",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 100,
    "nombre": "Máscara de Pestañas Silk Road 10",
    "descripcion": "Increíble máscaras de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 133108,
    "descuento": 10,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.5,
    "resenas": 497,
    "stock": 46,
    "etiquetas": [
      "máscaras",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 101,
    "nombre": "Máscara de Pestañas Radiant Beauty 11",
    "descripcion": "Increíble máscaras de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 43669,
    "descuento": 30,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 3,
    "calificacion": 3.9,
    "resenas": 31,
    "stock": 41,
    "etiquetas": [
      "máscaras",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 102,
    "nombre": "Máscara de Pestañas Midnight Bloom 12",
    "descripcion": "Increíble máscaras de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 85703,
    "descuento": 15,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 7,
    "calificacion": 4.1,
    "resenas": 43,
    "stock": 6,
    "etiquetas": [
      "máscaras",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "BESTSELLER",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 103,
    "nombre": "Máscara de Pestañas Velvet Touch 13",
    "descripcion": "Increíble máscaras de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 96817,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 6,
    "calificacion": 3.7,
    "resenas": 380,
    "stock": 47,
    "etiquetas": [
      "máscaras",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 104,
    "nombre": "Máscara de Pestañas Velvet Touch 14",
    "descripcion": "Increíble máscaras de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 127870,
    "descuento": 0,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 4.3,
    "resenas": 392,
    "stock": 32,
    "etiquetas": [
      "máscaras",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 105,
    "nombre": "Máscara de Pestañas Midnight Bloom 15",
    "descripcion": "Increíble máscaras de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 82481,
    "descuento": 20,
    "categoriaId": 1,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.9,
    "resenas": 306,
    "stock": 38,
    "etiquetas": [
      "máscaras",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": []
  },
  {
    "id": 106,
    "nombre": "Brocha Midnight Bloom 1",
    "descripcion": "Increíble brochas de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 63306,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 4.8,
    "resenas": 473,
    "stock": 13,
    "etiquetas": [
      "brochas",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "OFERTA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 107,
    "nombre": "Brocha Velvet Touch 2",
    "descripcion": "Increíble brochas de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 20798,
    "descuento": 15,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 3.8,
    "resenas": 357,
    "stock": 36,
    "etiquetas": [
      "brochas",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO",
      "Vegano"
    ]
  },
  {
    "id": 108,
    "nombre": "Brocha Velvet Touch 3",
    "descripcion": "Increíble brochas de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 149607,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 5,
    "calificacion": 3.8,
    "resenas": 489,
    "stock": 84,
    "etiquetas": [
      "brochas",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": []
  },
  {
    "id": 109,
    "nombre": "Brocha Velvet Touch 4",
    "descripcion": "Increíble brochas de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 48245,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 3,
    "calificacion": 4.7,
    "resenas": 13,
    "stock": 54,
    "etiquetas": [
      "brochas",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 110,
    "nombre": "Brocha Pure Zen 5",
    "descripcion": "Increíble brochas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 36860,
    "descuento": 30,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 4.7,
    "resenas": 139,
    "stock": 29,
    "etiquetas": [
      "brochas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 111,
    "nombre": "Brocha Lumina 6",
    "descripcion": "Increíble brochas de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 69643,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.6,
    "resenas": 475,
    "stock": 73,
    "etiquetas": [
      "brochas",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 112,
    "nombre": "Brocha Velvet Touch 7",
    "descripcion": "Increíble brochas de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 79111,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 7,
    "calificacion": 4.3,
    "resenas": 196,
    "stock": 91,
    "etiquetas": [
      "brochas",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 113,
    "nombre": "Brocha Glow Essence 8",
    "descripcion": "Increíble brochas de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 51543,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 3.6,
    "resenas": 353,
    "stock": 82,
    "etiquetas": [
      "brochas",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 114,
    "nombre": "Brocha Radiant Beauty 9",
    "descripcion": "Increíble brochas de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 71230,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 4.7,
    "resenas": 16,
    "stock": 85,
    "etiquetas": [
      "brochas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 115,
    "nombre": "Brocha Pure Zen 10",
    "descripcion": "Increíble brochas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 40914,
    "descuento": 0,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.9,
    "resenas": 176,
    "stock": 54,
    "etiquetas": [
      "brochas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 116,
    "nombre": "Brocha Pure Zen 11",
    "descripcion": "Increíble brochas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 26115,
    "descuento": 10,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.6,
    "resenas": 286,
    "stock": 37,
    "etiquetas": [
      "brochas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 117,
    "nombre": "Brocha Radiant Beauty 12",
    "descripcion": "Increíble brochas de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 106921,
    "descuento": 10,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 5,
    "calificacion": 4.1,
    "resenas": 312,
    "stock": 50,
    "etiquetas": [
      "brochas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 118,
    "nombre": "Brocha Velvet Touch 13",
    "descripcion": "Increíble brochas de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 105977,
    "descuento": 15,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 3.9,
    "resenas": 83,
    "stock": 76,
    "etiquetas": [
      "brochas",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 119,
    "nombre": "Brocha Ocean Mist 14",
    "descripcion": "Increíble brochas de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 65308,
    "descuento": 15,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 3.9,
    "resenas": 39,
    "stock": 40,
    "etiquetas": [
      "brochas",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 120,
    "nombre": "Brocha Radiant Beauty 15",
    "descripcion": "Increíble brochas de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 113405,
    "descuento": 10,
    "categoriaId": 6,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 4.5,
    "resenas": 404,
    "stock": 3,
    "etiquetas": [
      "brochas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 121,
    "nombre": "Sérum Glow Essence 1",
    "descripcion": "Increíble sérums de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 20210,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "assets/products/skincare_1.jpg",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.5,
    "resenas": 218,
    "stock": 43,
    "etiquetas": [
      "sérums",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 122,
    "nombre": "Sérum Velvet Touch 2",
    "descripcion": "Increíble sérums de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 36681,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "assets/products/skincare_2.jpg",
    "vendedor": "EsenciasColombia",
    "vendedorId": 3,
    "calificacion": 4.6,
    "resenas": 430,
    "stock": 66,
    "etiquetas": [
      "sérums",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 123,
    "nombre": "Sérum Glow Essence 3",
    "descripcion": "Increíble sérums de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 42039,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "assets/products/skincare_3.jpg",
    "vendedor": "CabelleraViva",
    "vendedorId": 3,
    "calificacion": 4.6,
    "resenas": 289,
    "stock": 85,
    "etiquetas": [
      "sérums",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 124,
    "nombre": "Sérum Ocean Mist 4",
    "descripcion": "Increíble sérums de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 94948,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 4,
    "calificacion": 4.3,
    "resenas": 182,
    "stock": 7,
    "etiquetas": [
      "sérums",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 125,
    "nombre": "Sérum Silk Road 5",
    "descripcion": "Increíble sérums de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 101011,
    "descuento": 30,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.3,
    "resenas": 275,
    "stock": 50,
    "etiquetas": [
      "sérums",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Vegano"
    ]
  },
  {
    "id": 126,
    "nombre": "Sérum Glow Essence 6",
    "descripcion": "Increíble sérums de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 122424,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 5.0,
    "resenas": 133,
    "stock": 31,
    "etiquetas": [
      "sérums",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 127,
    "nombre": "Sérum Velvet Touch 7",
    "descripcion": "Increíble sérums de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 115932,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 39,
    "stock": 17,
    "etiquetas": [
      "sérums",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 128,
    "nombre": "Sérum Midnight Bloom 8",
    "descripcion": "Increíble sérums de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 115150,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 3.9,
    "resenas": 36,
    "stock": 96,
    "etiquetas": [
      "sérums",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 129,
    "nombre": "Sérum Silk Road 9",
    "descripcion": "Increíble sérums de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 96415,
    "descuento": 30,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 8,
    "calificacion": 3.7,
    "resenas": 384,
    "stock": 70,
    "etiquetas": [
      "sérums",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "BESTSELLER",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 130,
    "nombre": "Sérum Glow Essence 10",
    "descripcion": "Increíble sérums de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 50256,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 3.9,
    "resenas": 58,
    "stock": 36,
    "etiquetas": [
      "sérums",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": []
  },
  {
    "id": 131,
    "nombre": "Sérum Silk Road 11",
    "descripcion": "Increíble sérums de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 140519,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.9,
    "resenas": 82,
    "stock": 25,
    "etiquetas": [
      "sérums",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 132,
    "nombre": "Sérum Lumina 12",
    "descripcion": "Increíble sérums de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 144014,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 6,
    "calificacion": 3.6,
    "resenas": 224,
    "stock": 32,
    "etiquetas": [
      "sérums",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 133,
    "nombre": "Sérum Pure Zen 13",
    "descripcion": "Increíble sérums de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 81037,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.2,
    "resenas": 227,
    "stock": 58,
    "etiquetas": [
      "sérums",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 134,
    "nombre": "Sérum Lumina 14",
    "descripcion": "Increíble sérums de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 59115,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 4.7,
    "resenas": 170,
    "stock": 82,
    "etiquetas": [
      "sérums",
      "lumina"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Lumina",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 135,
    "nombre": "Sérum Glow Essence 15",
    "descripcion": "Increíble sérums de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 133438,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 6,
    "calificacion": 4.8,
    "resenas": 482,
    "stock": 9,
    "etiquetas": [
      "sérums",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": []
  },
  {
    "id": 136,
    "nombre": "Crema Midnight Bloom 1",
    "descripcion": "Increíble cremas de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 21726,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.0,
    "resenas": 99,
    "stock": 64,
    "etiquetas": [
      "cremas",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 137,
    "nombre": "Crema Glow Essence 2",
    "descripcion": "Increíble cremas de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 71443,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 4.7,
    "resenas": 108,
    "stock": 52,
    "etiquetas": [
      "cremas",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": []
  },
  {
    "id": 138,
    "nombre": "Crema Glow Essence 3",
    "descripcion": "Increíble cremas de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 100787,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.4,
    "resenas": 479,
    "stock": 68,
    "etiquetas": [
      "cremas",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 139,
    "nombre": "Crema Midnight Bloom 4",
    "descripcion": "Increíble cremas de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 105527,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 8,
    "calificacion": 3.5,
    "resenas": 169,
    "stock": 47,
    "etiquetas": [
      "cremas",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 140,
    "nombre": "Crema Lumina 5",
    "descripcion": "Increíble cremas de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 112427,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 3.8,
    "resenas": 100,
    "stock": 54,
    "etiquetas": [
      "cremas",
      "lumina"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Lumina",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 141,
    "nombre": "Crema Ocean Mist 6",
    "descripcion": "Increíble cremas de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 55798,
    "descuento": 30,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 3,
    "calificacion": 4.5,
    "resenas": 250,
    "stock": 55,
    "etiquetas": [
      "cremas",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 142,
    "nombre": "Crema Glow Essence 7",
    "descripcion": "Increíble cremas de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 113322,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 3,
    "calificacion": 3.8,
    "resenas": 35,
    "stock": 92,
    "etiquetas": [
      "cremas",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 143,
    "nombre": "Crema Glow Essence 8",
    "descripcion": "Increíble cremas de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 84926,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 4.2,
    "resenas": 207,
    "stock": 64,
    "etiquetas": [
      "cremas",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 144,
    "nombre": "Crema Radiant Beauty 9",
    "descripcion": "Increíble cremas de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 136556,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 8,
    "calificacion": 4.4,
    "resenas": 223,
    "stock": 45,
    "etiquetas": [
      "cremas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 145,
    "nombre": "Crema Pure Zen 10",
    "descripcion": "Increíble cremas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 140380,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 4.6,
    "resenas": 316,
    "stock": 92,
    "etiquetas": [
      "cremas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 146,
    "nombre": "Crema Glow Essence 11",
    "descripcion": "Increíble cremas de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 133576,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 5,
    "calificacion": 4.2,
    "resenas": 30,
    "stock": 36,
    "etiquetas": [
      "cremas",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 147,
    "nombre": "Crema Silk Road 12",
    "descripcion": "Increíble cremas de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 25832,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 3.8,
    "resenas": 5,
    "stock": 22,
    "etiquetas": [
      "cremas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 148,
    "nombre": "Crema Midnight Bloom 13",
    "descripcion": "Increíble cremas de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 63528,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.1,
    "resenas": 347,
    "stock": 25,
    "etiquetas": [
      "cremas",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": []
  },
  {
    "id": 149,
    "nombre": "Crema Velvet Touch 14",
    "descripcion": "Increíble cremas de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 66634,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 5,
    "calificacion": 3.6,
    "resenas": 80,
    "stock": 43,
    "etiquetas": [
      "cremas",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 150,
    "nombre": "Crema Midnight Bloom 15",
    "descripcion": "Increíble cremas de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 110739,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 8,
    "calificacion": 4.9,
    "resenas": 46,
    "stock": 79,
    "etiquetas": [
      "cremas",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 151,
    "nombre": "Protector Solar Silk Road 1",
    "descripcion": "Increíble protectores solares de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 115085,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 3,
    "calificacion": 4.9,
    "resenas": 447,
    "stock": 55,
    "etiquetas": [
      "protectores solares",
      "silk road"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 152,
    "nombre": "Protector Solar Silk Road 2",
    "descripcion": "Increíble protectores solares de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 142144,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 6,
    "calificacion": 4.5,
    "resenas": 29,
    "stock": 74,
    "etiquetas": [
      "protectores solares",
      "silk road"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": []
  },
  {
    "id": 153,
    "nombre": "Protector Solar Pure Zen 3",
    "descripcion": "Increíble protectores solares de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 106053,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 3.6,
    "resenas": 452,
    "stock": 53,
    "etiquetas": [
      "protectores solares",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 154,
    "nombre": "Protector Solar Glow Essence 4",
    "descripcion": "Increíble protectores solares de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 98579,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 3.5,
    "resenas": 16,
    "stock": 41,
    "etiquetas": [
      "protectores solares",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 155,
    "nombre": "Protector Solar Pure Zen 5",
    "descripcion": "Increíble protectores solares de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 48830,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 3.9,
    "resenas": 111,
    "stock": 44,
    "etiquetas": [
      "protectores solares",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 156,
    "nombre": "Protector Solar Glow Essence 6",
    "descripcion": "Increíble protectores solares de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 114213,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.8,
    "resenas": 244,
    "stock": 55,
    "etiquetas": [
      "protectores solares",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Glow Essence",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 157,
    "nombre": "Protector Solar Glow Essence 7",
    "descripcion": "Increíble protectores solares de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 141287,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.4,
    "resenas": 368,
    "stock": 98,
    "etiquetas": [
      "protectores solares",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 158,
    "nombre": "Protector Solar Lumina 8",
    "descripcion": "Increíble protectores solares de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 75346,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.9,
    "resenas": 87,
    "stock": 100,
    "etiquetas": [
      "protectores solares",
      "lumina"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 159,
    "nombre": "Protector Solar Ocean Mist 9",
    "descripcion": "Increíble protectores solares de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 116544,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 7,
    "calificacion": 3.6,
    "resenas": 75,
    "stock": 28,
    "etiquetas": [
      "protectores solares",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 160,
    "nombre": "Protector Solar Radiant Beauty 10",
    "descripcion": "Increíble protectores solares de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 101052,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 52,
    "stock": 12,
    "etiquetas": [
      "protectores solares",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 161,
    "nombre": "Protector Solar Midnight Bloom 11",
    "descripcion": "Increíble protectores solares de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 143786,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 48,
    "stock": 76,
    "etiquetas": [
      "protectores solares",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 162,
    "nombre": "Protector Solar Velvet Touch 12",
    "descripcion": "Increíble protectores solares de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 138349,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 3.7,
    "resenas": 188,
    "stock": 22,
    "etiquetas": [
      "protectores solares",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 163,
    "nombre": "Protector Solar Midnight Bloom 13",
    "descripcion": "Increíble protectores solares de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 98208,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 3.7,
    "resenas": 314,
    "stock": 88,
    "etiquetas": [
      "protectores solares",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Vegano"
    ]
  },
  {
    "id": 164,
    "nombre": "Protector Solar Silk Road 14",
    "descripcion": "Increíble protectores solares de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 116556,
    "descuento": 30,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.9,
    "resenas": 163,
    "stock": 52,
    "etiquetas": [
      "protectores solares",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 165,
    "nombre": "Protector Solar Midnight Bloom 15",
    "descripcion": "Increíble protectores solares de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 34962,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 3.7,
    "resenas": 211,
    "stock": 41,
    "etiquetas": [
      "protectores solares",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 166,
    "nombre": "Limpiador Glow Essence 1",
    "descripcion": "Increíble limpiadores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 116622,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.7,
    "resenas": 428,
    "stock": 42,
    "etiquetas": [
      "limpiadores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "EDICION LIMITADA",
      "Vegano"
    ]
  },
  {
    "id": 167,
    "nombre": "Limpiador Glow Essence 2",
    "descripcion": "Increíble limpiadores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 61311,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 5,
    "calificacion": 3.6,
    "resenas": 14,
    "stock": 36,
    "etiquetas": [
      "limpiadores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "EDICION LIMITADA",
      "Vegano"
    ]
  },
  {
    "id": 168,
    "nombre": "Limpiador Midnight Bloom 3",
    "descripcion": "Increíble limpiadores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 62057,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 5,
    "calificacion": 4.9,
    "resenas": 271,
    "stock": 60,
    "etiquetas": [
      "limpiadores",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 169,
    "nombre": "Limpiador Ocean Mist 4",
    "descripcion": "Increíble limpiadores de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 32553,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 4.4,
    "resenas": 361,
    "stock": 100,
    "etiquetas": [
      "limpiadores",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": []
  },
  {
    "id": 170,
    "nombre": "Limpiador Lumina 5",
    "descripcion": "Increíble limpiadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 81107,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 6,
    "calificacion": 4.9,
    "resenas": 341,
    "stock": 38,
    "etiquetas": [
      "limpiadores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 171,
    "nombre": "Limpiador Pure Zen 6",
    "descripcion": "Increíble limpiadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 51537,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 8,
    "calificacion": 3.6,
    "resenas": 146,
    "stock": 30,
    "etiquetas": [
      "limpiadores",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 172,
    "nombre": "Limpiador Lumina 7",
    "descripcion": "Increíble limpiadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 49569,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.9,
    "resenas": 32,
    "stock": 93,
    "etiquetas": [
      "limpiadores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 173,
    "nombre": "Limpiador Glow Essence 8",
    "descripcion": "Increíble limpiadores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 139643,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 3.7,
    "resenas": 83,
    "stock": 32,
    "etiquetas": [
      "limpiadores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 174,
    "nombre": "Limpiador Radiant Beauty 9",
    "descripcion": "Increíble limpiadores de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 35835,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 5,
    "calificacion": 3.6,
    "resenas": 359,
    "stock": 55,
    "etiquetas": [
      "limpiadores",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 175,
    "nombre": "Limpiador Velvet Touch 10",
    "descripcion": "Increíble limpiadores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 110339,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 5,
    "calificacion": 4.8,
    "resenas": 486,
    "stock": 70,
    "etiquetas": [
      "limpiadores",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 176,
    "nombre": "Limpiador Silk Road 11",
    "descripcion": "Increíble limpiadores de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 144839,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 3.6,
    "resenas": 411,
    "stock": 36,
    "etiquetas": [
      "limpiadores",
      "silk road"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Silk Road",
    "badges": [
      "NUEVO",
      "Vegano"
    ]
  },
  {
    "id": 177,
    "nombre": "Limpiador Velvet Touch 12",
    "descripcion": "Increíble limpiadores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 113877,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 6,
    "calificacion": 4.1,
    "resenas": 205,
    "stock": 12,
    "etiquetas": [
      "limpiadores",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO",
      "Vegano"
    ]
  },
  {
    "id": 178,
    "nombre": "Limpiador Silk Road 13",
    "descripcion": "Increíble limpiadores de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 122210,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 3.9,
    "resenas": 203,
    "stock": 18,
    "etiquetas": [
      "limpiadores",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 179,
    "nombre": "Limpiador Silk Road 14",
    "descripcion": "Increíble limpiadores de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 96113,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 96,
    "stock": 18,
    "etiquetas": [
      "limpiadores",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": []
  },
  {
    "id": 180,
    "nombre": "Limpiador Lumina 15",
    "descripcion": "Increíble limpiadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 109700,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.4,
    "resenas": 15,
    "stock": 62,
    "etiquetas": [
      "limpiadores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 181,
    "nombre": "Tónico Midnight Bloom 1",
    "descripcion": "Increíble tónicos de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 29182,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 3.6,
    "resenas": 336,
    "stock": 2,
    "etiquetas": [
      "tónicos",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 182,
    "nombre": "Tónico Silk Road 2",
    "descripcion": "Increíble tónicos de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 103399,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.5,
    "resenas": 103,
    "stock": 98,
    "etiquetas": [
      "tónicos",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 183,
    "nombre": "Tónico Glow Essence 3",
    "descripcion": "Increíble tónicos de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 137059,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.9,
    "resenas": 495,
    "stock": 28,
    "etiquetas": [
      "tónicos",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": []
  },
  {
    "id": 184,
    "nombre": "Tónico Pure Zen 4",
    "descripcion": "Increíble tónicos de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 112338,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 3,
    "calificacion": 3.5,
    "resenas": 55,
    "stock": 86,
    "etiquetas": [
      "tónicos",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 185,
    "nombre": "Tónico Pure Zen 5",
    "descripcion": "Increíble tónicos de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 31449,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 3.5,
    "resenas": 409,
    "stock": 70,
    "etiquetas": [
      "tónicos",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 186,
    "nombre": "Tónico Glow Essence 6",
    "descripcion": "Increíble tónicos de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 33041,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 3.8,
    "resenas": 86,
    "stock": 25,
    "etiquetas": [
      "tónicos",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 187,
    "nombre": "Tónico Pure Zen 7",
    "descripcion": "Increíble tónicos de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 66954,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 4.7,
    "resenas": 6,
    "stock": 48,
    "etiquetas": [
      "tónicos",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 188,
    "nombre": "Tónico Silk Road 8",
    "descripcion": "Increíble tónicos de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 100808,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.1,
    "resenas": 422,
    "stock": 13,
    "etiquetas": [
      "tónicos",
      "silk road"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Silk Road",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 189,
    "nombre": "Tónico Midnight Bloom 9",
    "descripcion": "Increíble tónicos de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 132859,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 3.6,
    "resenas": 245,
    "stock": 76,
    "etiquetas": [
      "tónicos",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 190,
    "nombre": "Tónico Silk Road 10",
    "descripcion": "Increíble tónicos de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 56726,
    "descuento": 15,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 3.8,
    "resenas": 161,
    "stock": 25,
    "etiquetas": [
      "tónicos",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "BESTSELLER",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 191,
    "nombre": "Tónico Ocean Mist 11",
    "descripcion": "Increíble tónicos de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 123194,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 4,
    "calificacion": 4.2,
    "resenas": 53,
    "stock": 13,
    "etiquetas": [
      "tónicos",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 192,
    "nombre": "Tónico Midnight Bloom 12",
    "descripcion": "Increíble tónicos de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 124467,
    "descuento": 30,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 6,
    "calificacion": 4.4,
    "resenas": 159,
    "stock": 80,
    "etiquetas": [
      "tónicos",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 193,
    "nombre": "Tónico Lumina 13",
    "descripcion": "Increíble tónicos de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 56191,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 4.0,
    "resenas": 495,
    "stock": 53,
    "etiquetas": [
      "tónicos",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 194,
    "nombre": "Tónico Silk Road 14",
    "descripcion": "Increíble tónicos de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 62158,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.7,
    "resenas": 342,
    "stock": 53,
    "etiquetas": [
      "tónicos",
      "silk road"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 195,
    "nombre": "Tónico Lumina 15",
    "descripcion": "Increíble tónicos de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 63943,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 7,
    "calificacion": 4.7,
    "resenas": 455,
    "stock": 65,
    "etiquetas": [
      "tónicos",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 196,
    "nombre": "Mascarilla Silk Road 1",
    "descripcion": "Increíble mascarillas de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 134438,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 8,
    "calificacion": 3.9,
    "resenas": 35,
    "stock": 42,
    "etiquetas": [
      "mascarillas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 197,
    "nombre": "Mascarilla Midnight Bloom 2",
    "descripcion": "Increíble mascarillas de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 135758,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 8,
    "calificacion": 4.3,
    "resenas": 89,
    "stock": 23,
    "etiquetas": [
      "mascarillas",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 198,
    "nombre": "Mascarilla Silk Road 3",
    "descripcion": "Increíble mascarillas de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 33351,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 8,
    "calificacion": 3.7,
    "resenas": 86,
    "stock": 60,
    "etiquetas": [
      "mascarillas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 199,
    "nombre": "Mascarilla Pure Zen 4",
    "descripcion": "Increíble mascarillas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 134785,
    "descuento": 10,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 295,
    "stock": 96,
    "etiquetas": [
      "mascarillas",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 200,
    "nombre": "Mascarilla Midnight Bloom 5",
    "descripcion": "Increíble mascarillas de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 149592,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 3.7,
    "resenas": 125,
    "stock": 49,
    "etiquetas": [
      "mascarillas",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 201,
    "nombre": "Mascarilla Pure Zen 6",
    "descripcion": "Increíble mascarillas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 41084,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.6,
    "resenas": 58,
    "stock": 71,
    "etiquetas": [
      "mascarillas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": []
  },
  {
    "id": 202,
    "nombre": "Mascarilla Pure Zen 7",
    "descripcion": "Increíble mascarillas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 130047,
    "descuento": 30,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 4.1,
    "resenas": 242,
    "stock": 36,
    "etiquetas": [
      "mascarillas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 203,
    "nombre": "Mascarilla Radiant Beauty 8",
    "descripcion": "Increíble mascarillas de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 115163,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 4,
    "calificacion": 4.5,
    "resenas": 318,
    "stock": 1,
    "etiquetas": [
      "mascarillas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 204,
    "nombre": "Mascarilla Silk Road 9",
    "descripcion": "Increíble mascarillas de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 29855,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 6,
    "calificacion": 3.8,
    "resenas": 429,
    "stock": 74,
    "etiquetas": [
      "mascarillas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "BESTSELLER"
    ]
  },
  {
    "id": 205,
    "nombre": "Mascarilla Silk Road 10",
    "descripcion": "Increíble mascarillas de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 140863,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.3,
    "resenas": 314,
    "stock": 28,
    "etiquetas": [
      "mascarillas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 206,
    "nombre": "Mascarilla Pure Zen 11",
    "descripcion": "Increíble mascarillas de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 101889,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 5,
    "calificacion": 4.6,
    "resenas": 183,
    "stock": 27,
    "etiquetas": [
      "mascarillas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 207,
    "nombre": "Mascarilla Velvet Touch 12",
    "descripcion": "Increíble mascarillas de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 144090,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 4.7,
    "resenas": 323,
    "stock": 55,
    "etiquetas": [
      "mascarillas",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 208,
    "nombre": "Mascarilla Radiant Beauty 13",
    "descripcion": "Increíble mascarillas de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 21811,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 407,
    "stock": 82,
    "etiquetas": [
      "mascarillas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 209,
    "nombre": "Mascarilla Silk Road 14",
    "descripcion": "Increíble mascarillas de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 59394,
    "descuento": 20,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 8,
    "calificacion": 4.7,
    "resenas": 219,
    "stock": 51,
    "etiquetas": [
      "mascarillas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA",
      "Vegano"
    ]
  },
  {
    "id": 210,
    "nombre": "Mascarilla Radiant Beauty 15",
    "descripcion": "Increíble mascarillas de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 20796,
    "descuento": 0,
    "categoriaId": 2,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 3.7,
    "resenas": 266,
    "stock": 20,
    "etiquetas": [
      "mascarillas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 211,
    "nombre": "Shampoo Glow Essence 1",
    "descripcion": "Increíble shampoos de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 134675,
    "descuento": 30,
    "categoriaId": 3,
    "imagen": "assets/products/cabello_1.jpg",
    "vendedor": "CabelleraViva",
    "vendedorId": 7,
    "calificacion": 4.7,
    "resenas": 220,
    "stock": 71,
    "etiquetas": [
      "shampoos",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 212,
    "nombre": "Shampoo Ocean Mist 2",
    "descripcion": "Increíble shampoos de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 48809,
    "descuento": 30,
    "categoriaId": 3,
    "imagen": "assets/products/cabello_2.jpg",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 4.5,
    "resenas": 469,
    "stock": 28,
    "etiquetas": [
      "shampoos",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": []
  },
  {
    "id": 213,
    "nombre": "Shampoo Silk Road 3",
    "descripcion": "Increíble shampoos de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 131330,
    "descuento": 10,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 4,
    "calificacion": 4.9,
    "resenas": 162,
    "stock": 26,
    "etiquetas": [
      "shampoos",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 214,
    "nombre": "Shampoo Glow Essence 4",
    "descripcion": "Increíble shampoos de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 40341,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 5,
    "calificacion": 4.7,
    "resenas": 290,
    "stock": 79,
    "etiquetas": [
      "shampoos",
      "glow essence"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Cruelty Free"
    ]
  },
  {
    "id": 215,
    "nombre": "Shampoo Ocean Mist 5",
    "descripcion": "Increíble shampoos de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 51122,
    "descuento": 10,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 3.7,
    "resenas": 68,
    "stock": 19,
    "etiquetas": [
      "shampoos",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 216,
    "nombre": "Shampoo Radiant Beauty 6",
    "descripcion": "Increíble shampoos de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 40231,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 49,
    "stock": 49,
    "etiquetas": [
      "shampoos",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "OFERTA"
    ]
  },
  {
    "id": 217,
    "nombre": "Shampoo Ocean Mist 7",
    "descripcion": "Increíble shampoos de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 141354,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 3.5,
    "resenas": 65,
    "stock": 80,
    "etiquetas": [
      "shampoos",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 218,
    "nombre": "Shampoo Radiant Beauty 8",
    "descripcion": "Increíble shampoos de la marca Radiant Beauty. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 122132,
    "descuento": 20,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 4.7,
    "resenas": 476,
    "stock": 62,
    "etiquetas": [
      "shampoos",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": []
  },
  {
    "id": 219,
    "nombre": "Shampoo Ocean Mist 9",
    "descripcion": "Increíble shampoos de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 136750,
    "descuento": 30,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 7,
    "calificacion": 3.6,
    "resenas": 162,
    "stock": 62,
    "etiquetas": [
      "shampoos",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Ocean Mist",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 220,
    "nombre": "Shampoo Glow Essence 10",
    "descripcion": "Increíble shampoos de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 113831,
    "descuento": 10,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 3.7,
    "resenas": 150,
    "stock": 8,
    "etiquetas": [
      "shampoos",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "BESTSELLER",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 221,
    "nombre": "Shampoo Pure Zen 11",
    "descripcion": "Increíble shampoos de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 148393,
    "descuento": 30,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.5,
    "resenas": 15,
    "stock": 34,
    "etiquetas": [
      "shampoos",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 222,
    "nombre": "Shampoo Pure Zen 12",
    "descripcion": "Increíble shampoos de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 69585,
    "descuento": 10,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 3,
    "calificacion": 3.9,
    "resenas": 277,
    "stock": 36,
    "etiquetas": [
      "shampoos",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA",
      "Vegano"
    ]
  },
  {
    "id": 223,
    "nombre": "Shampoo Pure Zen 13",
    "descripcion": "Increíble shampoos de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 111610,
    "descuento": 10,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 4.1,
    "resenas": 330,
    "stock": 35,
    "etiquetas": [
      "shampoos",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 224,
    "nombre": "Shampoo Ocean Mist 14",
    "descripcion": "Increíble shampoos de la marca Ocean Mist. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 35022,
    "descuento": 10,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 3.5,
    "resenas": 360,
    "stock": 39,
    "etiquetas": [
      "shampoos",
      "ocean mist"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 225,
    "nombre": "Shampoo Silk Road 15",
    "descripcion": "Increíble shampoos de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 36213,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 3.7,
    "resenas": 234,
    "stock": 74,
    "etiquetas": [
      "shampoos",
      "silk road"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Silk Road",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 226,
    "nombre": "Acondicionador Pure Zen 1",
    "descripcion": "Increíble acondicionadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 27542,
    "descuento": 30,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 5,
    "calificacion": 4.3,
    "resenas": 23,
    "stock": 93,
    "etiquetas": [
      "acondicionadores",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free"
    ]
  },
  {
    "id": 227,
    "nombre": "Acondicionador Lumina 2",
    "descripcion": "Increíble acondicionadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 63420,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 8,
    "calificacion": 4.8,
    "resenas": 198,
    "stock": 25,
    "etiquetas": [
      "acondicionadores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 228,
    "nombre": "Acondicionador Pure Zen 3",
    "descripcion": "Increíble acondicionadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 109923,
    "descuento": 30,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 3,
    "calificacion": 4.5,
    "resenas": 336,
    "stock": 18,
    "etiquetas": [
      "acondicionadores",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "NUEVO",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 229,
    "nombre": "Acondicionador Pure Zen 4",
    "descripcion": "Increíble acondicionadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 101202,
    "descuento": 10,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 7,
    "calificacion": 3.6,
    "resenas": 229,
    "stock": 47,
    "etiquetas": [
      "acondicionadores",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 230,
    "nombre": "Acondicionador Glow Essence 5",
    "descripcion": "Increíble acondicionadores de la marca Glow Essence. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 48064,
    "descuento": 20,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.3,
    "resenas": 331,
    "stock": 50,
    "etiquetas": [
      "acondicionadores",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "EDICION LIMITADA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 231,
    "nombre": "Acondicionador Midnight Bloom 6",
    "descripcion": "Increíble acondicionadores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 44274,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 8,
    "calificacion": 4.4,
    "resenas": 328,
    "stock": 29,
    "etiquetas": [
      "acondicionadores",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO",
      "Cruelty Free"
    ]
  },
  {
    "id": 232,
    "nombre": "Acondicionador Lumina 7",
    "descripcion": "Increíble acondicionadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 23673,
    "descuento": 30,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 3.5,
    "resenas": 394,
    "stock": 95,
    "etiquetas": [
      "acondicionadores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "BESTSELLER",
      "Vegano"
    ]
  },
  {
    "id": 233,
    "nombre": "Acondicionador Silk Road 8",
    "descripcion": "Increíble acondicionadores de la marca Silk Road. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 54794,
    "descuento": 15,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 4,
    "calificacion": 3.6,
    "resenas": 13,
    "stock": 41,
    "etiquetas": [
      "acondicionadores",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 234,
    "nombre": "Acondicionador Lumina 9",
    "descripcion": "Increíble acondicionadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 115062,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 5.0,
    "resenas": 210,
    "stock": 35,
    "etiquetas": [
      "acondicionadores",
      "lumina"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "EDICION LIMITADA"
    ]
  },
  {
    "id": 235,
    "nombre": "Acondicionador Lumina 10",
    "descripcion": "Increíble acondicionadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 118398,
    "descuento": 0,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 5,
    "calificacion": 4.9,
    "resenas": 332,
    "stock": 1,
    "etiquetas": [
      "acondicionadores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 236,
    "nombre": "Acondicionador Pure Zen 11",
    "descripcion": "Increíble acondicionadores de la marca Pure Zen. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 137234,
    "descuento": 20,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 4.1,
    "resenas": 471,
    "stock": 71,
    "etiquetas": [
      "acondicionadores",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "BESTSELLER",
      "Cruelty Free"
    ]
  },
  {
    "id": 237,
    "nombre": "Acondicionador Midnight Bloom 12",
    "descripcion": "Increíble acondicionadores de la marca Midnight Bloom. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 78652,
    "descuento": 20,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 3.6,
    "resenas": 15,
    "stock": 80,
    "etiquetas": [
      "acondicionadores",
      "midnight bloom"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Midnight Bloom",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 238,
    "nombre": "Acondicionador Velvet Touch 13",
    "descripcion": "Increíble acondicionadores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 82590,
    "descuento": 20,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.5,
    "resenas": 471,
    "stock": 33,
    "etiquetas": [
      "acondicionadores",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "OFERTA",
      "Cruelty Free"
    ]
  },
  {
    "id": 239,
    "nombre": "Acondicionador Lumina 14",
    "descripcion": "Increíble acondicionadores de la marca Lumina. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 69120,
    "descuento": 15,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 8,
    "calificacion": 4.7,
    "resenas": 242,
    "stock": 53,
    "etiquetas": [
      "acondicionadores",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "OFERTA",
      "Cruelty Free",
      "Vegano"
    ]
  },
  {
    "id": 240,
    "nombre": "Acondicionador Velvet Touch 15",
    "descripcion": "Increíble acondicionadores de la marca Velvet Touch. Formulado con ingredientes de alta calidad para resultados profesionales.",
    "precio": 147809,
    "descuento": 20,
    "categoriaId": 3,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 4,
    "calificacion": 3.5,
    "resenas": 100,
    "stock": 85,
    "etiquetas": [
      "acondicionadores",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Velvet Touch",
    "badges": [
      "NUEVO"
    ]
  },
  {
    "id": 241,
    "nombre": "Fragancias Glow Essence 1",
    "descripcion": "Producto premium de la categoría Fragancias. Calidad excepcional de Glow Essence.",
    "precio": 134489,
    "descuento": 10,
    "categoriaId": 4,
    "imagen": "assets/products/fragancia_1.jpg",
    "vendedor": "CabelleraViva",
    "vendedorId": 8,
    "calificacion": 4.7,
    "resenas": 85,
    "stock": 41,
    "etiquetas": [
      "fragancias",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 242,
    "nombre": "Fragancias Silk Road 2",
    "descripcion": "Producto premium de la categoría Fragancias. Calidad excepcional de Silk Road.",
    "precio": 194780,
    "descuento": 20,
    "categoriaId": 4,
    "imagen": "assets/products/fragancia_2.jpg",
    "vendedor": "NaturaGlow",
    "vendedorId": 5,
    "calificacion": 4.0,
    "resenas": 74,
    "stock": 15,
    "etiquetas": [
      "fragancias",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 243,
    "nombre": "Fragancias Velvet Touch 3",
    "descripcion": "Producto premium de la categoría Fragancias. Calidad excepcional de Velvet Touch.",
    "precio": 106918,
    "descuento": 0,
    "categoriaId": 4,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 44,
    "stock": 44,
    "etiquetas": [
      "fragancias",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 244,
    "nombre": "Fragancias Silk Road 4",
    "descripcion": "Producto premium de la categoría Fragancias. Calidad excepcional de Silk Road.",
    "precio": 246607,
    "descuento": 0,
    "categoriaId": 4,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 4.8,
    "resenas": 50,
    "stock": 19,
    "etiquetas": [
      "fragancias",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 245,
    "nombre": "Fragancias Ocean Mist 5",
    "descripcion": "Producto premium de la categoría Fragancias. Calidad excepcional de Ocean Mist.",
    "precio": 269088,
    "descuento": 0,
    "categoriaId": 4,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 5,
    "calificacion": 4.1,
    "resenas": 40,
    "stock": 22,
    "etiquetas": [
      "fragancias",
      "ocean mist"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 246,
    "nombre": "Uñas Pure Zen 1",
    "descripcion": "Producto premium de la categoría Uñas. Calidad excepcional de Pure Zen.",
    "precio": 165982,
    "descuento": 10,
    "categoriaId": 5,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.5,
    "resenas": 19,
    "stock": 37,
    "etiquetas": [
      "uñas",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 247,
    "nombre": "Uñas Pure Zen 2",
    "descripcion": "Producto premium de la categoría Uñas. Calidad excepcional de Pure Zen.",
    "precio": 121965,
    "descuento": 20,
    "categoriaId": 5,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 6,
    "calificacion": 5.0,
    "resenas": 88,
    "stock": 48,
    "etiquetas": [
      "uñas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 248,
    "nombre": "Uñas Radiant Beauty 3",
    "descripcion": "Producto premium de la categoría Uñas. Calidad excepcional de Radiant Beauty.",
    "precio": 283176,
    "descuento": 20,
    "categoriaId": 5,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 7,
    "calificacion": 4.3,
    "resenas": 62,
    "stock": 45,
    "etiquetas": [
      "uñas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 249,
    "nombre": "Uñas Glow Essence 4",
    "descripcion": "Producto premium de la categoría Uñas. Calidad excepcional de Glow Essence.",
    "precio": 202419,
    "descuento": 20,
    "categoriaId": 5,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 3,
    "calificacion": 4.5,
    "resenas": 19,
    "stock": 38,
    "etiquetas": [
      "uñas",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 250,
    "nombre": "Uñas Ocean Mist 5",
    "descripcion": "Producto premium de la categoría Uñas. Calidad excepcional de Ocean Mist.",
    "precio": 218659,
    "descuento": 10,
    "categoriaId": 5,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 4.7,
    "resenas": 86,
    "stock": 41,
    "etiquetas": [
      "uñas",
      "ocean mist"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 251,
    "nombre": "Accesorios Radiant Beauty 1",
    "descripcion": "Producto premium de la categoría Accesorios. Calidad excepcional de Radiant Beauty.",
    "precio": 251341,
    "descuento": 10,
    "categoriaId": 7,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.1,
    "resenas": 16,
    "stock": 29,
    "etiquetas": [
      "accesorios",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 252,
    "nombre": "Accesorios Velvet Touch 2",
    "descripcion": "Producto premium de la categoría Accesorios. Calidad excepcional de Velvet Touch.",
    "precio": 233529,
    "descuento": 20,
    "categoriaId": 7,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 4.4,
    "resenas": 48,
    "stock": 44,
    "etiquetas": [
      "accesorios",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 253,
    "nombre": "Accesorios Pure Zen 3",
    "descripcion": "Producto premium de la categoría Accesorios. Calidad excepcional de Pure Zen.",
    "precio": 270366,
    "descuento": 0,
    "categoriaId": 7,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 5,
    "calificacion": 4.3,
    "resenas": 18,
    "stock": 25,
    "etiquetas": [
      "accesorios",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 254,
    "nombre": "Accesorios Lumina 4",
    "descripcion": "Producto premium de la categoría Accesorios. Calidad excepcional de Lumina.",
    "precio": 63707,
    "descuento": 20,
    "categoriaId": 7,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 4.2,
    "resenas": 42,
    "stock": 20,
    "etiquetas": [
      "accesorios",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 255,
    "nombre": "Accesorios Velvet Touch 5",
    "descripcion": "Producto premium de la categoría Accesorios. Calidad excepcional de Velvet Touch.",
    "precio": 246393,
    "descuento": 20,
    "categoriaId": 7,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 49,
    "stock": 12,
    "etiquetas": [
      "accesorios",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 256,
    "nombre": "Sets Glow Essence 1",
    "descripcion": "Producto premium de la categoría Sets. Calidad excepcional de Glow Essence.",
    "precio": 124632,
    "descuento": 10,
    "categoriaId": 8,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 5.0,
    "resenas": 36,
    "stock": 46,
    "etiquetas": [
      "sets",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 257,
    "nombre": "Sets Ocean Mist 2",
    "descripcion": "Producto premium de la categoría Sets. Calidad excepcional de Ocean Mist.",
    "precio": 191350,
    "descuento": 0,
    "categoriaId": 8,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 5,
    "calificacion": 4.1,
    "resenas": 78,
    "stock": 36,
    "etiquetas": [
      "sets",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 258,
    "nombre": "Sets Lumina 3",
    "descripcion": "Producto premium de la categoría Sets. Calidad excepcional de Lumina.",
    "precio": 160835,
    "descuento": 10,
    "categoriaId": 8,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.3,
    "resenas": 75,
    "stock": 14,
    "etiquetas": [
      "sets",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 259,
    "nombre": "Sets Midnight Bloom 4",
    "descripcion": "Producto premium de la categoría Sets. Calidad excepcional de Midnight Bloom.",
    "precio": 94105,
    "descuento": 20,
    "categoriaId": 8,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 5.0,
    "resenas": 62,
    "stock": 43,
    "etiquetas": [
      "sets",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 260,
    "nombre": "Sets Velvet Touch 5",
    "descripcion": "Producto premium de la categoría Sets. Calidad excepcional de Velvet Touch.",
    "precio": 134911,
    "descuento": 20,
    "categoriaId": 8,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.5,
    "resenas": 95,
    "stock": 38,
    "etiquetas": [
      "sets",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 261,
    "nombre": "Miniaturas Pure Zen 1",
    "descripcion": "Producto premium de la categoría Miniaturas. Calidad excepcional de Pure Zen.",
    "precio": 130336,
    "descuento": 10,
    "categoriaId": 9,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 4,
    "calificacion": 4.7,
    "resenas": 72,
    "stock": 38,
    "etiquetas": [
      "miniaturas",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 262,
    "nombre": "Miniaturas Radiant Beauty 2",
    "descripcion": "Producto premium de la categoría Miniaturas. Calidad excepcional de Radiant Beauty.",
    "precio": 198307,
    "descuento": 20,
    "categoriaId": 9,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 4.5,
    "resenas": 38,
    "stock": 50,
    "etiquetas": [
      "miniaturas",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 263,
    "nombre": "Miniaturas Silk Road 3",
    "descripcion": "Producto premium de la categoría Miniaturas. Calidad excepcional de Silk Road.",
    "precio": 257480,
    "descuento": 10,
    "categoriaId": 9,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 4.0,
    "resenas": 23,
    "stock": 20,
    "etiquetas": [
      "miniaturas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 264,
    "nombre": "Miniaturas Lumina 4",
    "descripcion": "Producto premium de la categoría Miniaturas. Calidad excepcional de Lumina.",
    "precio": 91458,
    "descuento": 20,
    "categoriaId": 9,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 4,
    "calificacion": 4.7,
    "resenas": 90,
    "stock": 29,
    "etiquetas": [
      "miniaturas",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 265,
    "nombre": "Miniaturas Velvet Touch 5",
    "descripcion": "Producto premium de la categoría Miniaturas. Calidad excepcional de Velvet Touch.",
    "precio": 293962,
    "descuento": 10,
    "categoriaId": 9,
    "imagen": "https://images.unsplash.com/photo-1601049541289-9b1b7abc7403?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 6,
    "calificacion": 4.1,
    "resenas": 100,
    "stock": 35,
    "etiquetas": [
      "miniaturas",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 266,
    "nombre": "Novedades Velvet Touch 1",
    "descripcion": "Producto premium de la categoría Novedades. Calidad excepcional de Velvet Touch.",
    "precio": 147036,
    "descuento": 0,
    "categoriaId": 10,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 6,
    "calificacion": 4.4,
    "resenas": 49,
    "stock": 23,
    "etiquetas": [
      "novedades",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 267,
    "nombre": "Novedades Lumina 2",
    "descripcion": "Producto premium de la categoría Novedades. Calidad excepcional de Lumina.",
    "precio": 290618,
    "descuento": 0,
    "categoriaId": 10,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 5,
    "calificacion": 4.8,
    "resenas": 60,
    "stock": 49,
    "etiquetas": [
      "novedades",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 268,
    "nombre": "Novedades Velvet Touch 3",
    "descripcion": "Producto premium de la categoría Novedades. Calidad excepcional de Velvet Touch.",
    "precio": 123314,
    "descuento": 20,
    "categoriaId": 10,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 3,
    "calificacion": 4.4,
    "resenas": 27,
    "stock": 21,
    "etiquetas": [
      "novedades",
      "velvet touch"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 269,
    "nombre": "Novedades Radiant Beauty 4",
    "descripcion": "Producto premium de la categoría Novedades. Calidad excepcional de Radiant Beauty.",
    "precio": 234504,
    "descuento": 10,
    "categoriaId": 10,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 89,
    "stock": 25,
    "etiquetas": [
      "novedades",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Radiant Beauty",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 270,
    "nombre": "Novedades Pure Zen 5",
    "descripcion": "Producto premium de la categoría Novedades. Calidad excepcional de Pure Zen.",
    "precio": 108207,
    "descuento": 20,
    "categoriaId": 10,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 8,
    "calificacion": 4.9,
    "resenas": 96,
    "stock": 16,
    "etiquetas": [
      "novedades",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 271,
    "nombre": "Ofertas Glow Essence 1",
    "descripcion": "Producto premium de la categoría Ofertas. Calidad excepcional de Glow Essence.",
    "precio": 110555,
    "descuento": 20,
    "categoriaId": 11,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 8,
    "calificacion": 4.4,
    "resenas": 35,
    "stock": 18,
    "etiquetas": [
      "ofertas",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 272,
    "nombre": "Ofertas Midnight Bloom 2",
    "descripcion": "Producto premium de la categoría Ofertas. Calidad excepcional de Midnight Bloom.",
    "precio": 199074,
    "descuento": 0,
    "categoriaId": 11,
    "imagen": "https://images.unsplash.com/photo-1570172236625-f3747f551b9d?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 8,
    "calificacion": 4.2,
    "resenas": 49,
    "stock": 29,
    "etiquetas": [
      "ofertas",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 273,
    "nombre": "Ofertas Silk Road 3",
    "descripcion": "Producto premium de la categoría Ofertas. Calidad excepcional de Silk Road.",
    "precio": 57374,
    "descuento": 10,
    "categoriaId": 11,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.0,
    "resenas": 61,
    "stock": 47,
    "etiquetas": [
      "ofertas",
      "silk road"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Silk Road",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 274,
    "nombre": "Ofertas Ocean Mist 4",
    "descripcion": "Producto premium de la categoría Ofertas. Calidad excepcional de Ocean Mist.",
    "precio": 225005,
    "descuento": 20,
    "categoriaId": 11,
    "imagen": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 3,
    "calificacion": 4.4,
    "resenas": 56,
    "stock": 39,
    "etiquetas": [
      "ofertas",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 275,
    "nombre": "Ofertas Pure Zen 5",
    "descripcion": "Producto premium de la categoría Ofertas. Calidad excepcional de Pure Zen.",
    "precio": 167100,
    "descuento": 0,
    "categoriaId": 11,
    "imagen": "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 8,
    "calificacion": 4.3,
    "resenas": 18,
    "stock": 33,
    "etiquetas": [
      "ofertas",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 276,
    "nombre": "Luxury Midnight Bloom 1",
    "descripcion": "Producto premium de la categoría Luxury. Calidad excepcional de Midnight Bloom.",
    "precio": 80299,
    "descuento": 20,
    "categoriaId": 12,
    "imagen": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.8,
    "resenas": 83,
    "stock": 17,
    "etiquetas": [
      "luxury",
      "midnight bloom"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Midnight Bloom",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 277,
    "nombre": "Luxury Pure Zen 2",
    "descripcion": "Producto premium de la categoría Luxury. Calidad excepcional de Pure Zen.",
    "precio": 264303,
    "descuento": 0,
    "categoriaId": 12,
    "imagen": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 4.1,
    "resenas": 21,
    "stock": 37,
    "etiquetas": [
      "luxury",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 278,
    "nombre": "Luxury Ocean Mist 3",
    "descripcion": "Producto premium de la categoría Luxury. Calidad excepcional de Ocean Mist.",
    "precio": 106780,
    "descuento": 0,
    "categoriaId": 12,
    "imagen": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600&q=80",
    "vendedor": "Glamour Colombia",
    "vendedorId": 4,
    "calificacion": 4.2,
    "resenas": 46,
    "stock": 22,
    "etiquetas": [
      "luxury",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 279,
    "nombre": "Luxury Pure Zen 4",
    "descripcion": "Producto premium de la categoría Luxury. Calidad excepcional de Pure Zen.",
    "precio": 64237,
    "descuento": 10,
    "categoriaId": 12,
    "imagen": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 7,
    "calificacion": 4.8,
    "resenas": 98,
    "stock": 12,
    "etiquetas": [
      "luxury",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 280,
    "nombre": "Luxury Pure Zen 5",
    "descripcion": "Producto premium de la categoría Luxury. Calidad excepcional de Pure Zen.",
    "precio": 270285,
    "descuento": 10,
    "categoriaId": 12,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 4,
    "calificacion": 4.4,
    "resenas": 96,
    "stock": 40,
    "etiquetas": [
      "luxury",
      "pure zen"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 281,
    "nombre": "Coreano Velvet Touch 1",
    "descripcion": "Producto premium de la categoría Coreano. Calidad excepcional de Velvet Touch.",
    "precio": 179709,
    "descuento": 10,
    "categoriaId": 13,
    "imagen": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.6,
    "resenas": 70,
    "stock": 37,
    "etiquetas": [
      "coreano",
      "velvet touch"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Velvet Touch",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 282,
    "nombre": "Coreano Lumina 2",
    "descripcion": "Producto premium de la categoría Coreano. Calidad excepcional de Lumina.",
    "precio": 59044,
    "descuento": 0,
    "categoriaId": 13,
    "imagen": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 6,
    "calificacion": 4.3,
    "resenas": 70,
    "stock": 30,
    "etiquetas": [
      "coreano",
      "lumina"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Lumina",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 283,
    "nombre": "Coreano Glow Essence 3",
    "descripcion": "Producto premium de la categoría Coreano. Calidad excepcional de Glow Essence.",
    "precio": 67476,
    "descuento": 0,
    "categoriaId": 13,
    "imagen": "https://images.unsplash.com/photo-1612817288470-349890a597d2?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 6,
    "calificacion": 4.4,
    "resenas": 22,
    "stock": 19,
    "etiquetas": [
      "coreano",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 284,
    "nombre": "Coreano Radiant Beauty 4",
    "descripcion": "Producto premium de la categoría Coreano. Calidad excepcional de Radiant Beauty.",
    "precio": 236986,
    "descuento": 20,
    "categoriaId": 13,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 6,
    "calificacion": 4.1,
    "resenas": 28,
    "stock": 36,
    "etiquetas": [
      "coreano",
      "radiant beauty"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Radiant Beauty",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 285,
    "nombre": "Coreano Ocean Mist 5",
    "descripcion": "Producto premium de la categoría Coreano. Calidad excepcional de Ocean Mist.",
    "precio": 278174,
    "descuento": 20,
    "categoriaId": 13,
    "imagen": "https://images.unsplash.com/photo-1591130901023-ef8895057155?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NaturaGlow",
    "vendedorId": 4,
    "calificacion": 4.5,
    "resenas": 25,
    "stock": 11,
    "etiquetas": [
      "coreano",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 286,
    "nombre": "Natural Ocean Mist 1",
    "descripcion": "Producto premium de la categoría Natural. Calidad excepcional de Ocean Mist.",
    "precio": 83825,
    "descuento": 0,
    "categoriaId": 14,
    "imagen": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "vendedor": "NailArtCo",
    "vendedorId": 7,
    "calificacion": 4.7,
    "resenas": 70,
    "stock": 30,
    "etiquetas": [
      "natural",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 287,
    "nombre": "Natural Ocean Mist 2",
    "descripcion": "Producto premium de la categoría Natural. Calidad excepcional de Ocean Mist.",
    "precio": 74390,
    "descuento": 0,
    "categoriaId": 14,
    "imagen": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.6,
    "resenas": 54,
    "stock": 43,
    "etiquetas": [
      "natural",
      "ocean mist"
    ],
    "destacado": false,
    "nuevo": true,
    "marca": "Ocean Mist",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 288,
    "nombre": "Natural Glow Essence 3",
    "descripcion": "Producto premium de la categoría Natural. Calidad excepcional de Glow Essence.",
    "precio": 84638,
    "descuento": 10,
    "categoriaId": 14,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "EsenciasColombia",
    "vendedorId": 5,
    "calificacion": 4.6,
    "resenas": 81,
    "stock": 36,
    "etiquetas": [
      "natural",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 289,
    "nombre": "Natural Glow Essence 4",
    "descripcion": "Producto premium de la categoría Natural. Calidad excepcional de Glow Essence.",
    "precio": 67499,
    "descuento": 20,
    "categoriaId": 14,
    "imagen": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "vendedor": "CabelleraViva",
    "vendedorId": 6,
    "calificacion": 4.8,
    "resenas": 57,
    "stock": 30,
    "etiquetas": [
      "natural",
      "glow essence"
    ],
    "destacado": false,
    "nuevo": false,
    "marca": "Glow Essence",
    "badges": [
      "Premium"
    ]
  },
  {
    "id": 290,
    "nombre": "Natural Pure Zen 5",
    "descripcion": "Producto premium de la categoría Natural. Calidad excepcional de Pure Zen.",
    "precio": 249081,
    "descuento": 20,
    "categoriaId": 14,
    "imagen": "https://images.unsplash.com/photo-1608248593802-8eb3a6569e25?auto=format&fit=crop&w=600&q=80",
    "vendedor": "BellezaNatural",
    "vendedorId": 3,
    "calificacion": 4.7,
    "resenas": 20,
    "stock": 18,
    "etiquetas": [
      "natural",
      "pure zen"
    ],
    "destacado": true,
    "nuevo": false,
    "marca": "Pure Zen",
    "badges": [
      "Premium"
    ]
  }
];

const usuarios = [
  {
    "id": 1,
    "nombre": "Admin",
    "apellido": "BeautyShop",
    "email": "admin@beautyshop.com",
    "password": "Admin123*",
    "rol": "admin",
    "avatar": "assets/images/avatar-admin.jpg",
    "telefono": "3001234567",
    "direccion": "Calle 100 #15-20",
    "ciudad": "Bogotá",
    "fechaRegistro": "2026-01-01T00:00:00Z",
    "activo": true
  },
  {
    "id": 2,
    "nombre": "María",
    "apellido": "López",
    "email": "maria@gmail.com",
    "password": "Maria123*",
    "rol": "cliente",
    "avatar": "assets/images/avatar-maria.jpg",
    "telefono": "3109876543",
    "direccion": "Carrera 7 #45-10",
    "ciudad": "Medellín",
    "fechaRegistro": "2026-02-15T10:30:00Z",
    "activo": true
  },
  {
    "id": 3,
    "nombre": "Camila",
    "apellido": "Restrepo",
    "email": "glamour@gmail.com",
    "password": "Glamour123*",
    "rol": "vendedor",
    "avatar": "assets/images/avatar-glamour.jpg",
    "telefono": "3156781234",
    "direccion": "Av. El Poblado #32-15",
    "ciudad": "Medellín",
    "fechaRegistro": "2026-01-20T09:00:00Z",
    "activo": true
  },
  {
    "id": 4,
    "nombre": "Valentina",
    "apellido": "Mora",
    "email": "bellezanatural@gmail.com",
    "password": "Belleza123*",
    "rol": "vendedor",
    "avatar": "assets/images/avatar-belleza.jpg",
    "telefono": "3204567890",
    "direccion": "Calle 72 #20-45",
    "ciudad": "Bogotá",
    "fechaRegistro": "2026-02-01T14:00:00Z",
    "activo": true
  },
  {
    "id": 5,
    "nombre": "Sofía",
    "apellido": "Herrera",
    "email": "naturaglow@gmail.com",
    "password": "Natura123*",
    "rol": "vendedor",
    "avatar": "assets/images/avatar-natura.jpg",
    "telefono": "3187654321",
    "direccion": "Cra 43A #5-15",
    "ciudad": "Barranquilla",
    "fechaRegistro": "2026-01-28T11:00:00Z",
    "activo": true
  },
  {
    "id": 6,
    "nombre": "Laura",
    "apellido": "Castro",
    "email": "caballera@gmail.com",
    "password": "Cabello123*",
    "rol": "vendedor",
    "avatar": "assets/images/avatar-cabellera.jpg",
    "telefono": "3141122334",
    "direccion": "Calle 5 #80-30",
    "ciudad": "Cali",
    "fechaRegistro": "2026-03-05T08:00:00Z",
    "activo": true
  },
  {
    "id": 7,
    "nombre": "Daniela",
    "apellido": "Suárez",
    "email": "esencias@gmail.com",
    "password": "Esencia123*",
    "rol": "vendedor",
    "avatar": "assets/images/avatar-esencias.jpg",
    "telefono": "3169988776",
    "direccion": "Transversal 6 #25-50",
    "ciudad": "Bucaramanga",
    "fechaRegistro": "2026-02-20T16:00:00Z",
    "activo": true
  },
  {
    "id": 8,
    "nombre": "Paola",
    "apellido": "Jiménez",
    "email": "nailart@gmail.com",
    "password": "Nails123*",
    "rol": "vendedor",
    "avatar": "assets/images/avatar-nail.jpg",
    "telefono": "3132233445",
    "direccion": "Calle 13 #60-20",
    "ciudad": "Pereira",
    "fechaRegistro": "2026-03-10T10:00:00Z",
    "activo": true
  }
];

const resenas = [
  {
    "id": 1,
    "productoId": 5,
    "usuarioId": 2,
    "usuarioNombre": "María L.",
    "calificacion": 5,
    "comentario": "¡Increíble sérum! Llevo 3 semanas usándolo y ya veo una diferencia notable en mis manchas. Lo recomiendo totalmente.",
    "fecha": "2026-05-10T12:00:00Z"
  },
  {
    "id": 2,
    "productoId": 1,
    "usuarioId": 2,
    "usuarioNombre": "María L.",
    "calificacion": 4,
    "comentario": "Muy buena cobertura y dura todo el día.",
    "fecha": "2026-05-15T14:30:00Z"
  },
  {
    "id": 3,
    "productoId": 12,
    "usuarioId": 2,
    "usuarioNombre": "María L.",
    "calificacion": 5,
    "comentario": "El mejor perfume que he comprado.",
    "fecha": "2026-06-01T09:00:00Z"
  }
];

const carritoInicial = [];

const ordenes = [];

console.log("✅ data.js cargado correctamente");
console.log(`   📦 ${productos.length} productos`);
console.log(`   👥 ${usuarios.length} usuarios`);
console.log(`   🏷️  ${categorias.length} categorías`);
