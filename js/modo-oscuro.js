/**
 * js/modo-oscuro.js
 */

import { store } from './store.js';

export class ThemeManager {
  constructor() {
    this.init();
  }

  init() {
    const savedTheme = store.getTheme();
    this.applyTheme(savedTheme);

    // Listen for system changes if no preference is set
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      if (!localStorage.getItem('lumina-theme')) {
        this.applyTheme(e.matches ? 'claro' : 'oscuro');
      }
    });

    this.setupToggles();
  }

  applyTheme(theme) {
    if (theme === 'claro') {
      document.documentElement.setAttribute('data-tema', 'claro');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-tema');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }

    store.setTheme(theme);
    this.updateLabels(theme);
  }

  toggle() {
    const current = store.getTheme();
    const next = current === 'claro' ? 'oscuro' : 'claro';
    this.applyTheme(next);
  }

  updateLabels(theme) {
    document.querySelectorAll('.etiqueta-tema').forEach(el => {
      el.textContent = theme === 'claro' ? '☀ Claro' : '🌙 Oscuro';
    });
  }

  setupToggles() {
    document.addEventListener('click', e => {
      const toggle = e.target.closest('#boton-toggle-tema, .boton-toggle-tema');
      if (toggle) {
        this.toggle();
      }
    });
  }
}

// Auto-initialize if not being imported as a specific class instance elsewhere
if (typeof document !== 'undefined') {
  new ThemeManager();
}
