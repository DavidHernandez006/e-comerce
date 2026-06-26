// simplified.js — Core logic for the simplified single-page version

// State
let cart = JSON.parse(localStorage.getItem('lumina-cart')) || [];
let favorites = JSON.parse(localStorage.getItem('lumina-favorites')) || [];
let currentLang = localStorage.getItem('lumina-lang') || 'es';
let appliedCoupon = null;

// Translations
const translations = {
    es: {
        catalogo: 'Catálogo',
        rutina: 'Rutina',
        emprende: 'Emprende',
        login: 'Ingresar',
        destacados: 'ETHEREAL ESSENTIALS',
        seleccion_curada: 'Selección Curada',
        tu_rutina: 'Tu Rutina Recomendada',
        tu_carrito: 'Tu Carrito',
        total: 'Total',
        pagar: 'Pagar ahora',
        vaciar: 'Vaciar carrito',
        agregar: 'Agregar',
        vacio: 'Tu carrito está vacío',
        mas_vendidos: 'Productos Destacados',
        comprar_ahora: 'Comprar ahora',
        explorar: 'Explorar',
        dia: '☀️ Día',
        noche: '🌙 Noche',
        paso1_dia_titulo: 'Limpiador suave',
        paso1_dia_desc: 'Retira impurezas sin resecar',
        paso2_dia_titulo: 'Tónico hidratante',
        paso2_dia_desc: 'Equilibra el pH de tu piel',
        paso1_noche_titulo: 'Aceite desmaquillante',
        paso1_noche_desc: 'Disuelve maquillaje y SPF',
        paso2_noche_titulo: 'Limpiador de espuma',
        paso2_noche_desc: 'Doble limpieza para piel perfecta',
        paso3_dia_titulo: 'Sérum Vitamina C',
        paso3_dia_desc: 'Ilumina y protege de radicales libres',
        paso4_dia_titulo: 'Crema hidratante + SPF',
        paso4_dia_desc: 'Hidratación y protección solar',
        paso3_noche_titulo: 'Sérum Retinol B5',
        paso3_noche_desc: 'Renovación celular nocturna',
        paso4_noche_titulo: 'Crema de noche nutritiva',
        paso4_noche_desc: 'Regenera mientras descansas',
        emprende_desc: 'Únete a nuestra red exclusiva de embajadoras. Construye tu propio negocio de belleza, recibe capacitación continua y genera ingresos.',
        comisiones: 'Comisiones atractivas',
        descuentos_excl: 'Descuentos exclusivos',
        capacitacion: 'Capacitación continua',
        quiero_emprender: 'Quiero Emprender',
        bienvenido: 'Bienvenido de nuevo',
        correo: 'Correo',
        contrasena: 'Contraseña',
        ingresar: 'Ingresar',
        buscar_placeholder: 'Buscar...',
        nombre: 'Nombre Completo',
        ciudad: 'Ciudad',
        enviar_solicitud: 'Enviar Solicitud',
        emprende_titulo: 'Emprende con LUMINA',
        emprende_sub: 'Únete a nuestra red de embajadoras',
        detalle_producto: 'Detalle del Producto',
        agregar_carrito: 'Agregar al carrito',
        vendedor: 'Vendedor',
        resenas: 'Reseñas',
        aplicar: 'Aplicar',
        cupon_placeholder: 'Cupón (LUMINA20)',
        descuento: 'Descuento',
        subtotal: 'Subtotal'
    },
    en: {
        catalogo: 'Catalog',
        rutina: 'Routine',
        emprende: 'Entrepreneur',
        login: 'Sign In',
        destacados: 'ETHEREAL ESSENTIALS',
        seleccion_curada: 'Curated Selection',
        tu_rutina: 'Your Recommended Routine',
        tu_carrito: 'Your Cart',
        total: 'Total',
        pagar: 'Checkout',
        vaciar: 'Empty Cart',
        agregar: 'Add',
        vacio: 'Your cart is empty',
        mas_vendidos: 'Featured Products',
        comprar_ahora: 'Shop Now',
        explorar: 'Explore',
        dia: '☀️ Day',
        noche: '🌙 Night',
        paso1_dia_titulo: 'Gentle Cleanser',
        paso1_dia_desc: 'Removes impurities without drying',
        paso2_dia_titulo: 'Hydrating Toner',
        paso2_dia_desc: 'Balances skin pH',
        paso3_dia_titulo: 'Vitamin C Serum',
        paso3_dia_desc: 'Brightens and protects from free radicals',
        paso4_dia_titulo: 'Moisturizer + SPF',
        paso4_dia_desc: 'Hydration and sun protection',
        paso1_noche_titulo: 'Cleansing Oil',
        paso1_noche_desc: 'Dissolves makeup and SPF',
        paso2_noche_titulo: 'Foam Cleanser',
        paso2_noche_desc: 'Double cleansing for perfect skin',
        paso3_noche_titulo: 'Retinol B5 Serum',
        paso3_noche_desc: 'Nightly cellular renewal',
        paso4_noche_titulo: 'Nourishing Night Cream',
        paso4_noche_desc: 'Regenerates while you rest',
        emprende_desc: 'Join our exclusive network of ambassadors. Build your own beauty business, receive continuous training and generate income.',
        comisiones: 'Attractive commissions',
        descuentos_excl: 'Exclusive discounts',
        capacitacion: 'Continuous training',
        quiero_emprender: 'Join Now',
        bienvenido: 'Welcome back',
        correo: 'Email',
        contrasena: 'Password',
        ingresar: 'Sign In',
        buscar_placeholder: 'Search...',
        nombre: 'Full Name',
        ciudad: 'City',
        enviar_solicitud: 'Send Request',
        emprende_titulo: 'Grow with LUMINA',
        emprende_sub: 'Join our network of ambassadors',
        detalle_producto: 'Product Details',
        agregar_carrito: 'Add to Cart',
        vendedor: 'Seller',
        resenas: 'Reviews',
        aplicar: 'Apply',
        cupon_placeholder: 'Coupon (LUMINA20)',
        descuento: 'Discount',
        subtotal: 'Subtotal'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (typeof productos === 'undefined') {
        console.error('Data dependency (js/data.js) not found!');
        return;
    }
    renderProducts();
    renderBestSellers();
    updateCartUI();
    applyLanguage();
    setupEventListeners();
});

function setupEventListeners() {
    // Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Search
    const searchInput = document.querySelector('input[data-t-placeholder="buscar_placeholder"]');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderProducts(e.target.value);
        });
    }

    // Entrepreneur Form
    const entForm = document.getElementById('entrepreneurForm');
    if (entForm) {
        entForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const modal = bootstrap.Modal.getInstance(document.getElementById('entrepreneurModal'));
            modal.hide();
            showToast(currentLang === 'es' ? 'Solicitud enviada con éxito' : 'Request sent successfully');
            entForm.reset();
        });
    }

    // Empty Cart
    document.getElementById('empty-cart').addEventListener('click', () => {
        cart = [];
        appliedCoupon = null;
        saveCart();
        updateCartUI();
    });

    // Apply Coupon
    const applyBtn = document.getElementById('apply-coupon');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const input = document.getElementById('coupon-input');
            if (input.value.toUpperCase() === 'LUMINA20') {
                appliedCoupon = { code: 'LUMINA20', discount: 0.20 };
                showToast(currentLang === 'es' ? 'Cupón aplicado: 20% de descuento' : 'Coupon applied: 20% discount');
                updateCartUI();
            } else {
                showToast(currentLang === 'es' ? 'Cupón inválido' : 'Invalid coupon');
            }
        });
    }
}

// Product Rendering
function renderProducts(filter = '') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = productos.filter(p =>
        p.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(filter.toLowerCase())
    );

    grid.innerHTML = filtered.map(p => createCardHTML(p)).join('');
}

function renderBestSellers() {
    const grid = document.getElementById('best-sellers-grid');
    if (!grid) return;

    // Sort by rating * reviews
    const bestSellers = [...productos]
        .sort((a, b) => (b.resenas * b.calificacion) - (a.resenas * a.calificacion))
        .slice(0, 4);

    grid.innerHTML = bestSellers.map(p => createCardHTML(p)).join('');
}

function createCardHTML(p) {
    const isFav = favorites.includes(p.id);
    return `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card card-lumina h-100 overflow-hidden shadow-sm border-secondary" onclick="openProductDetail(${p.id})">
                <div class="position-relative">
                    <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}" style="height: 200px; object-fit: cover;" onerror="this.src='https://placehold.co/400x400?text=${encodeURIComponent(p.nombre)}'">
                    <button class="btn btn-sm position-absolute top-0 end-0 m-2 z-2" onclick="toggleFav(event, ${p.id})">
                        <i class="ph-fill ph-heart ${isFav ? 'text-danger' : 'text-secondary opacity-50'} h5 mb-0"></i>
                    </button>
                    ${p.nuevo ? '<span class="badge bg-primary position-absolute top-0 start-0 m-2">NUEVO</span>' : ''}
                </div>
                <div class="card-body d-flex flex-column p-3">
                    <p class="small text-secondary mb-1">${p.vendedor}</p>
                    <h6 class="card-title text-truncate mb-2">${p.nombre}</h6>
                    <p class="text-lumina-pink fw-bold mb-3 mt-auto">$${p.precio.toLocaleString('es-CO')}</p>
                    <button class="btn btn-lumina btn-sm w-100" onclick="addToCart(event, ${p.id})">
                        <i class="ph ph-shopping-cart"></i> ${translations[currentLang].agregar}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Interaction logic
window.openProductDetail = function(id) {
    const p = productos.find(prod => prod.id === id);
    if (!p) return;

    const content = document.getElementById('product-detail-content');
    content.innerHTML = `
        <div class="col-md-6">
            <img src="${p.imagen}" class="img-fluid h-100 object-fit-cover" alt="${p.nombre}" onerror="this.src='https://placehold.co/600x800?text=${encodeURIComponent(p.nombre)}'">
        </div>
        <div class="col-md-6 p-4 d-flex flex-column">
            <div class="mb-4">
                <span class="text-lumina-pink fw-bold small text-uppercase" data-t="detalle_producto">${translations[currentLang].detalle_producto}</span>
                <h2 class="fw-bold mb-2">${p.nombre}</h2>
                <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="text-warning">${'⭐'.repeat(Math.floor(p.calificacion))}</div>
                    <span class="small text-secondary">(${p.resenas} ${translations[currentLang].resenas})</span>
                </div>
                <p class="text-secondary">${p.descripcion}</p>
                <hr class="border-secondary">
                <div class="mb-2"><span class="text-secondary" data-t="vendedor">${translations[currentLang].vendedor}:</span> <span class="fw-bold">${p.vendedor}</span></div>
                <div class="h3 text-lumina-pink fw-bold">$${p.precio.toLocaleString('es-CO')}</div>
            </div>
            <div class="mt-auto">
                <button class="btn btn-lumina btn-lg w-100" onclick="addToCart(event, ${p.id})">
                    <i class="ph ph-shopping-cart"></i> ${translations[currentLang].agregar_carrito}
                </button>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
};

// Cart Logic
window.addToCart = function(event, id) {
    if (event) event.stopPropagation();
    const product = productos.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();

    // Simple notification
    showToast(`${product.nombre} ${translations[currentLang].agregar_carrito}`);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartDiscount = document.getElementById('cart-discount');
    const discountRow = document.getElementById('discount-row');
    const cartTotal = document.getElementById('cart-total');

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalCount;

    if (cart.length === 0) {
        if (cartItems) cartItems.innerHTML = `<p class="text-center text-secondary py-5">${translations[currentLang].vacio}</p>`;
        appliedCoupon = null;
    } else {
        if (cartItems) cartItems.innerHTML = cart.map(item => `
            <div class="d-flex gap-3 mb-3 align-items-center">
                <img src="${item.imagen}" width="60" height="60" class="rounded object-fit-cover" onerror="this.src='https://placehold.co/60x60?text=Product'">
                <div class="flex-grow-1">
                    <h6 class="mb-0 text-truncate" style="max-width: 150px;">${item.nombre}</h6>
                    <small class="text-secondary">$${item.precio.toLocaleString('es-CO')} x ${item.quantity}</small>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-secondary py-0" onclick="updateQty(${item.id}, -1)">-</button>
                    <button class="btn btn-sm btn-outline-secondary py-0" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    let total = subtotal;
    let discount = 0;

    if (appliedCoupon) {
        discount = subtotal * appliedCoupon.discount;
        total = subtotal - discount;
        discountRow.classList.remove('d-none');
    } else {
        discountRow.classList.add('d-none');
    }

    if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toLocaleString('es-CO')}`;
    if (cartDiscount) cartDiscount.textContent = `-$${discount.toLocaleString('es-CO')}`;
    if (cartTotal) cartTotal.textContent = `$${total.toLocaleString('es-CO')}`;
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('lumina-cart', JSON.stringify(cart));
}

// Notification Logic
function showToast(message) {
    const toastEl = document.getElementById('liveToast');
    const toastMsg = document.getElementById('toastMessage');
    if (toastEl && toastMsg) {
        toastMsg.textContent = message;
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

// Theme Logic
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', newTheme);

    const icon = document.querySelector('#theme-toggle i');
    if (icon) icon.className = newTheme === 'dark' ? 'ph ph-moon' : 'ph ph-sun';
}

// Language Logic
window.changeLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('lumina-lang', lang);
    applyLanguage();
    renderProducts();
    renderBestSellers();
    updateCartUI();
};

function applyLanguage() {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-t-placeholder]').forEach(el => {
        const key = el.getAttribute('data-t-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

// Favorites Logic
window.toggleFav = function(event, id) {
    if (event) event.stopPropagation();
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('lumina-favorites', JSON.stringify(favorites));
    renderProducts();
    renderBestSellers();
};
