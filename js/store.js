/**
 * js/store.js
 * Centralized State Management for BeautyShop
 */

export const KEYS = {
  CART: 'lumina-cart',
  FAVORITES: 'lumina-favorites',
  THEME: 'lumina-theme',
  LANG: 'lumina-lang',
  USER: 'lumina-user',
  PRODUCTS: 'lumina-products'
};

class Store {
  constructor() {
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(callback => callback());
  }

  // Generic Get/Set
  get(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    if (!data) return defaultValue;
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  set(key, value) {
    const data = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, data);
    this.notify();
  }

  // Cart Logic
  getCart() {
    return this.get(KEYS.CART, []);
  }

  addToCart(product, quantity = 1) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.nombre,
        price: product.precio,
        image: product.imagen,
        quantity: quantity
      });
    }
    this.set(KEYS.CART, cart);
    console.log('Product added to cart:', product.id, 'New cart size:', cart.length);
  }

  removeFromCart(productId) {
    const cart = this.getCart().filter(item => item.id !== productId);
    this.set(KEYS.CART, cart);
  }

  updateCartQuantity(productId, quantity) {
    if (quantity <= 0) return this.removeFromCart(productId);
    const cart = this.getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.quantity = quantity;
      this.set(KEYS.CART, cart);
    }
  }

  clearCart() {
    this.set(KEYS.CART, []);
  }

  // Favorites Logic
  getFavorites() {
    return this.get(KEYS.FAVORITES, []);
  }

  toggleFavorite(productId) {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(productId);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(productId);
    }
    this.set(KEYS.FAVORITES, favorites);
  }

  clearFavorites() {
    this.set(KEYS.FAVORITES, []);
  }

  isFavorite(productId) {
    return this.getFavorites().includes(productId);
  }

  // Theme Logic
  getTheme() {
    return this.get(KEYS.THEME, 'oscuro');
  }

  setTheme(theme) {
    this.set(KEYS.THEME, theme);
  }

  // Lang Logic
  getLang() {
    return this.get(KEYS.LANG, 'es');
  }

  setLang(lang) {
    this.set(KEYS.LANG, lang);
  }

  // User Logic
  getUser() {
    return this.get(KEYS.USER);
  }

  setUser(user) {
    this.set(KEYS.USER, user);
  }

  logout() {
    localStorage.removeItem(KEYS.USER);
    this.notify();
  }
}

export const store = new Store();

// Sync across tabs/windows
window.addEventListener('storage', (e) => {
  if (Object.values(KEYS).includes(e.key)) {
    store.notify();
  }
});
