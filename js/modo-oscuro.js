// Gestor de tema claro/oscuro
// Aquí va: Clase TemaManager para cambiar entre modo claro y oscuro, guardar preferencia en localStorage
// ============================================================
// modo-oscuro.js — Gestor de tema claro/oscuro
// Clase TemaManager para cambiar entre modo claro y oscuro
// Guarda la preferencia del usuario en localStorage
// ============================================================

class TemaManager {
  constructor() {
    // Clave para guardar la preferencia en localStorage
    this.CLAVE_STORAGE = 'lumina-tema';

    // Inicializar el tema al cargar
    this.inicializar();
  }

  /**
   * Inicializa el tema basándose en:
   * 1. La preferencia guardada en localStorage
   * 2. La preferencia del sistema operativo
   * 3. Por defecto: modo oscuro
   */
  inicializar() {
    const temaGuardado = localStorage.getItem(this.CLAVE_STORAGE);

    if (temaGuardado) {
      // Si hay preferencia guardada, usarla
      this.aplicarTema(temaGuardado);
    } else {
      // Si no hay preferencia, usar el tema del sistema
      const prefiereModoClaro = window.matchMedia('(prefers-color-scheme: light)').matches;
      this.aplicarTema(prefiereModoClaro ? 'claro' : 'oscuro');
    }

    // Escuchar cambios en la preferencia del sistema (si el usuario no ha elegido manualmente)
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (evento) => {
      if (!localStorage.getItem(this.CLAVE_STORAGE)) {
        this.aplicarTema(evento.matches ? 'claro' : 'oscuro');
      }
    });
  }

  /**
   * Aplica el tema al documento HTML
   * @param {string} tema - 'claro' o 'oscuro'
   */
  aplicarTema(tema) {
    if (tema === 'claro') {
      document.documentElement.setAttribute('data-tema', 'claro');
    } else {
      document.documentElement.removeAttribute('data-tema');
    }

    // Actualizar el texto de la etiqueta si existe
    this.actualizarEtiqueta(tema);
  }

  /**
   * Alterna entre modo claro y oscuro
   */
  alternar() {
    const esClaro = document.documentElement.getAttribute('data-tema') === 'claro';
    const nuevoTema = esClaro ? 'oscuro' : 'claro';

    // Guardar la preferencia
    localStorage.setItem(this.CLAVE_STORAGE, nuevoTema);

    // Aplicar el tema
    this.aplicarTema(nuevoTema);

    // Pequeña animación de feedback
    this.animarCambio();
  }

  /**
   * Obtiene el tema actual
   * @returns {string} 'claro' o 'oscuro'
   */
  obtenerTemaActual() {
    return document.documentElement.getAttribute('data-tema') === 'claro' ? 'claro' : 'oscuro';
  }

  /**
   * Actualiza el texto de la etiqueta del toggle
   * @param {string} tema - 'claro' o 'oscuro'
   */
  actualizarEtiqueta(tema) {
    const etiqueta = document.querySelector('.etiqueta-tema');
    if (etiqueta) {
      etiqueta.textContent = tema === 'claro' ? '☀ Claro' : '🌙 Oscuro';
    }
  }

  /**
   * Anima el cambio de tema con un efecto sutil
   */
  animarCambio() {
    document.body.style.transition = 'none';
    document.body.offsetHeight; // Forzar reflow
    document.body.style.transition = '';
  }
}

// ============================================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================================

// Crear instancia global del gestor de temas
const temaManager = new TemaManager();

// Cuando el DOM esté listo, conectar el/los botones toggle (soporta varios selectores)
document.addEventListener('DOMContentLoaded', function() {
  // Soportar varios identificadores o clases usados en distintas páginas
  const posibles = [
    '#boton-toggle-tema',
    '#btn-modo-oscuro',
    '.btn-modo-oscuro',
    '.boton-toggle-tema'
  ];

  const botones = [];
  posibles.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => botones.push(el));
  });

  botones.forEach(boton => {
    // Marcar estado inicial
    boton.setAttribute('role', 'button');
    boton.setAttribute('tabindex', '0');
    boton.setAttribute('aria-pressed', temaManager.obtenerTemaActual() === 'claro' ? 'true' : 'false');

    boton.addEventListener('click', function(event) {
      temaManager.alternar();
      // actualizar aria-pressed
      boton.setAttribute('aria-pressed', temaManager.obtenerTemaActual() === 'claro' ? 'true' : 'false');
    });

    boton.addEventListener('keydown', function(evento) {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        temaManager.alternar();
        boton.setAttribute('aria-pressed', temaManager.obtenerTemaActual() === 'claro' ? 'true' : 'false');
      }
    });
  });
});