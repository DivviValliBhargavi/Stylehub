/* ═══════════════════════════════════════════
   STYLEHUB — main.js
═══════════════════════════════════════════ */

'use strict';

/* ── PRODUCT DATA ── */
const products = {
  women: [
    {
      id: 'w1', name: 'Autumn Linen Blazer', category: 'Outerwear',
      price: 3499, original: 4999, discount: 30,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#f0e6d9,#d4b896)',
      accent: '#9a6f45',
      svg: `<ellipse cx="60" cy="42" rx="22" ry="22" fill="#9a6f45" opacity=".6"/>
            <path d="M12 160 Q35 95 60 82 Q85 95 108 160Z" fill="#9a6f45" opacity=".38"/>
            <path d="M30 105 Q45 94 60 88 Q75 94 90 105 L93 145 Q60 155 27 145Z" fill="#6b4a2a" opacity=".5"/>
            <rect x="52" y="107" width="16" height="30" rx="2" fill="#5a3e22" opacity=".4"/>`,
    },
    {
      id: 'w2', name: 'Floral Midi Dress', category: 'Dresses',
      price: 2199, original: 2199, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#fce8f0,#f0b8cc)',
      accent: '#c0487a',
      svg: `<ellipse cx="60" cy="38" rx="20" ry="20" fill="#c0487a" opacity=".55"/>
            <path d="M15 165 Q40 95 60 82 Q80 95 105 165Z" fill="#c0487a" opacity=".35"/>
            <path d="M28 105 Q44 95 60 90 Q76 95 92 105 L95 150 Q60 158 25 150Z" fill="#962458" opacity=".45"/>
            <circle cx="40" cy="118" r="5" fill="#f9d0de" opacity=".7"/>
            <circle cx="75" cy="130" r="4" fill="#f9d0de" opacity=".7"/>
            <circle cx="55" cy="140" r="3.5" fill="#f9d0de" opacity=".7"/>`,
    },
    {
      id: 'w3', name: 'Cashmere Turtleneck', category: 'Knitwear',
      price: 1899, original: 2699, discount: 30,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#e8f0f8,#b8d0e4)',
      accent: '#2471a3',
      svg: `<ellipse cx="60" cy="40" rx="20" ry="20" fill="#2471a3" opacity=".55"/>
            <path d="M18 165 Q40 100 60 86 Q80 100 102 165Z" fill="#2471a3" opacity=".35"/>
            <rect x="32" y="58" width="56" height="8" rx="4" fill="#1a5580" opacity=".4"/>
            <path d="M32 100 Q46 90 60 87 Q74 90 88 100 L90 145 Q60 153 30 145Z" fill="#1a5580" opacity=".45"/>`,
    },
    {
      id: 'w4', name: 'Wide-Leg Trousers', category: 'Bottoms',
      price: 1699, original: 1699, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#e8ede8,#b8ccb8)',
      accent: '#4a7a4a',
      svg: `<ellipse cx="60" cy="38" rx="18" ry="18" fill="#4a7a4a" opacity=".55"/>
            <path d="M32 80 Q42 78 60 76 Q78 78 88 80 L95 165 Q60 170 25 165Z" fill="#2e5a2e" opacity=".45"/>
            <path d="M60 80 L55 165 M60 80 L65 165" stroke="#2e5a2e" stroke-width="1" opacity=".3"/>`,
    },
    {
      id: 'w5', name: 'Silk Wrap Blouse', category: 'Tops',
      price: 1399, original: 1999, discount: 30,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#fef0e0,#f5d09a)',
      accent: '#c8860a',
      svg: `<ellipse cx="60" cy="36" rx="20" ry="20" fill="#c8860a" opacity=".5"/>
            <path d="M15 140 Q34 90 60 78 Q86 90 105 140" fill="#c8860a" opacity=".3"/>
            <path d="M30 100 Q45 88 60 83 Q75 88 90 100 L88 140 Q60 148 32 140Z" fill="#a06808" opacity=".45"/>
            <path d="M60 78 C45 88 30 100 32 140" stroke="#a06808" stroke-width="1.5" opacity=".35" fill="none"/>`,
    },
    {
      id: 'w6', name: 'Pleated Midi Skirt', category: 'Bottoms',
      price: 1599, original: 1599, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#f0e8f8,#d4b8ec)',
      accent: '#7a4aaa',
      svg: `<ellipse cx="60" cy="36" rx="18" ry="18" fill="#7a4aaa" opacity=".55"/>
            <path d="M28 78 Q44 74 60 72 Q76 74 92 78 L100 165 Q60 172 20 165Z" fill="#7a4aaa" opacity=".38"/>
            <path d="M28 78 L24 165 M38 76 L34 165 M48 74 L46 165 M60 72 L60 165 M72 74 L74 165 M82 76 L86 165 M92 78 L96 165" stroke="#5e2e8e" stroke-width="0.8" opacity=".3"/>`,
    },
    {
      id: 'w7', name: 'Oversized Denim Jacket', category: 'Outerwear',
      price: 2799, original: 3699, discount: 24,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#dce8f4,#9bbdd8)',
      accent: '#1a5c8a',
      svg: `<ellipse cx="60" cy="40" rx="22" ry="22" fill="#1a5c8a" opacity=".55"/>
            <path d="M10 145 Q28 88 60 75 Q92 88 110 145Z" fill="#1a5c8a" opacity=".35"/>
            <path d="M20 110 Q40 96 60 90 Q80 96 100 110 L102 145 Q60 154 18 145Z" fill="#0e3d62" opacity=".5"/>
            <rect x="28" y="110" width="12" height="14" rx="3" fill="#dce8f4" opacity=".3"/>`,
    },
    {
      id: 'w8', name: 'Ribbed Knit Co-ord Set', category: 'Sets',
      price: 2499, original: 2499, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#fde8e0,#f4b09a)',
      accent: '#c8452a',
      svg: `<ellipse cx="60" cy="36" rx="20" ry="20" fill="#c8452a" opacity=".5"/>
            <path d="M25 100 Q42 88 60 83 Q78 88 95 100 L96 130 Q60 138 24 130Z" fill="#a02218" opacity=".45"/>
            <path d="M30 132 Q44 128 60 126 Q76 128 90 132 L92 165 Q60 170 28 165Z" fill="#a02218" opacity=".4"/>`,
    },
  ],
 
  kids: [
    {
      id: 'k1', name: 'Rainbow Hoodie', category: 'Tops (2–8 yrs)',
      price: 799, original: 999, discount: 20,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#e8f8e8,#a8e4a8)',
      accent: '#28a028',
      svg: `<ellipse cx="60" cy="36" rx="18" ry="18" fill="#28a028" opacity=".55"/>
            <path d="M22 90 Q38 76 60 70 Q82 76 98 90 L98 125 Q60 133 22 125Z" fill="#1a7a1a" opacity=".48"/>
            <path d="M22 90 L16 115 L32 110" fill="#1a7a1a" opacity=".4"/>
            <path d="M98 90 L104 115 L88 110" fill="#1a7a1a" opacity=".4"/>
            <path d="M30 76 Q40 68 60 65 Q80 68 90 76" stroke="#28a028" stroke-width="6" fill="none" opacity=".4" stroke-linecap="round"/>
            <circle cx="60" cy="80" r="6" fill="#fff" opacity=".5"/>`,
    },
    {
      id: 'k2', name: 'Dino Print Pyjamas', category: 'Nightwear (3–10 yrs)',
      price: 649, original: 649, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#e4f0fb,#a0c8f0)',
      accent: '#1a6aaa',
      svg: `<ellipse cx="60" cy="34" rx="18" ry="18" fill="#1a6aaa" opacity=".5"/>
            <path d="M24 92 Q40 78 60 72 Q80 78 96 92 L96 128 Q60 136 24 128Z" fill="#0e4a82" opacity=".45"/>
            <path d="M36 100 L28 100 L28 95 L32 92 L36 95Z" fill="#28a028" opacity=".6"/>
            <path d="M56 105 L48 105 L48 100 L52 97 L56 100Z" fill="#28a028" opacity=".6"/>
            <path d="M76 98 L68 98 L68 93 L72 90 L76 93Z" fill="#28a028" opacity=".6"/>
            <path d="M24 128 L20 160 L32 160 M96 128 L100 160 L88 160" fill="#0e4a82" opacity=".4"/>`,
    },
    {
      id: 'k3', name: 'Floral Frock', category: 'Dresses (2–6 yrs)',
      price: 849, original: 1199, discount: 29,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#fde8f4,#f4a8d0)',
      accent: '#d03888',
      svg: `<ellipse cx="60" cy="33" rx="16" ry="16" fill="#d03888" opacity=".55"/>
            <path d="M30 95 Q44 82 60 76 Q76 82 90 95 L95 130 Q60 138 25 130Z" fill="#a0186e" opacity=".45"/>
            <path d="M20 130 Q40 125 60 123 Q80 125 100 130 L100 160 Q60 168 20 160Z" fill="#a0186e" opacity=".38"/>
            <circle cx="45" cy="100" r="4" fill="#fde8f4" opacity=".8"/>
            <circle cx="65" cy="112" r="3.5" fill="#fde8f4" opacity=".8"/>
            <circle cx="78" cy="100" r="3" fill="#fde8f4" opacity=".8"/>`,
    },
    {
      id: 'k4', name: 'Cargo Shorts & Tee Set', category: 'Sets (4–12 yrs)',
      price: 999, original: 999, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#f0f4e0,#c8dca0)',
      accent: '#5a8020',
      svg: `<ellipse cx="60" cy="32" rx="18" ry="18" fill="#5a8020" opacity=".55"/>
            <path d="M24 88 Q40 76 60 70 Q80 76 96 88 L95 116 Q60 124 25 116Z" fill="#3a5c12" opacity=".48"/>
            <path d="M28 116 Q40 112 60 110 Q80 112 92 116 L95 148 Q60 155 25 148Z" fill="#3a5c12" opacity=".38"/>
            <rect x="70" y="120" width="12" height="14" rx="2" fill="#283c0a" opacity=".35"/>`,
    },
    {
      id: 'k5', name: 'Cosy Sherpa Jacket', category: 'Outerwear (3–8 yrs)',
      price: 1299, original: 1699, discount: 24,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#fef4e0,#f8d898)',
      accent: '#c88c18',
      svg: `<ellipse cx="60" cy="36" rx="20" ry="20" fill="#c88c18" opacity=".55"/>
            <path d="M14 105 Q32 88 60 80 Q88 88 106 105 L106 145 Q60 154 14 145Z" fill="#a06c0c" opacity=".5"/>
            <path d="M14 105 L8 130 L24 124" fill="#a06c0c" opacity=".38"/>
            <path d="M106 105 L112 130 L96 124" fill="#a06c0c" opacity=".38"/>
            <path d="M55 80 L55 145 M65 80 L65 145" stroke="#fef4e0" stroke-width="1" opacity=".25"/>`,
    },
    {
      id: 'k6', name: 'Striped Dungarees', category: 'Bottoms (2–7 yrs)',
      price: 749, original: 749, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#e4e8f8,#a8b4e8)',
      accent: '#2a4aaa',
      svg: `<ellipse cx="60" cy="33" rx="17" ry="17" fill="#2a4aaa" opacity=".55"/>
            <rect x="28" y="70" width="64" height="10" rx="4" fill="#1a2e8a" opacity=".5"/>
            <path d="M32 80 L25 160 L44 160 L60 110 L76 160 L95 160 L88 80Z" fill="#1a2e8a" opacity=".42"/>
            <path d="M28 80 L92 80" stroke="#c8d4ff" stroke-width="1" opacity=".4"/>
            <path d="M28 94 L92 94 M28 108 L92 108 M28 122 L92 122 M28 136 L92 136" stroke="#c8d4ff" stroke-width="0.8" opacity=".25"/>`,
    },
    {
      id: 'k7', name: 'Unicorn Sweatshirt', category: 'Tops (3–10 yrs)',
      price: 899, original: 1199, discount: 25,
      badge: 'Sale', badgeType: '',
      bg: 'linear-gradient(145deg,#f4e8ff,#d8a8f8)',
      accent: '#8822cc',
      svg: `<ellipse cx="60" cy="35" rx="20" ry="20" fill="#8822cc" opacity=".5"/>
            <path d="M18 92 Q36 78 60 72 Q84 78 102 92 L102 130 Q60 138 18 130Z" fill="#5c1294" opacity=".46"/>
            <path d="M56 52 L60 36 L64 52" fill="#ffd700" opacity=".7"/>
            <path d="M40 42 Q60 28 80 42" stroke="#f0b0ff" stroke-width="2" fill="none" opacity=".5"/>`,
    },
    {
      id: 'k8', name: 'Waterproof Rain Jacket', category: 'Outerwear (4–12 yrs)',
      price: 1499, original: 1499, discount: 0,
      badge: 'New', badgeType: 'new',
      bg: 'linear-gradient(145deg,#e0f8f0,#90dcc0)',
      accent: '#0a8a5a',
      svg: `<ellipse cx="60" cy="38" rx="20" ry="20" fill="#0a8a5a" opacity=".55"/>
            <path d="M12 100 Q30 84 60 76 Q90 84 108 100 L108 148 Q60 156 12 148Z" fill="#066040" opacity=".5"/>
            <path d="M12 100 L6 128 L22 122" fill="#066040" opacity=".38"/>
            <path d="M108 100 L114 128 L98 122" fill="#066040" opacity=".38"/>
            <path d="M56 76 L56 148 M64 76 L64 148" stroke="#e0f8f0" stroke-width="1.2" opacity=".3"/>`,
    },
  ]
};
 
/* ── STATE ── */
let cart = JSON.parse(localStorage.getItem('stylehub_cart') || '[]');
 
/* ── SAVE CART ── */
function saveCart() {
  localStorage.setItem('stylehub_cart', JSON.stringify(cart));
}
 
/* ── TOAST ── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2600);
}
 
/* ── CART COUNT ── */
function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById('cartCount');
  el.textContent = total;
  total > 0 ? el.classList.add('visible') : el.classList.remove('visible');
}
 
/* ── RENDER CART ── */
function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
 
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Your bag is empty</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }
 
  footer.style.display = 'block';
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
 
  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="ci-img">
        <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg"
             style="background:${item.bg}">
          ${item.svg}
        </svg>
      </div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">₹${item.price.toLocaleString('en-IN')}</div>
        <div class="ci-qty">
          <button onclick="changeQty('${item.id}',-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}',1)">+</button>
        </div>
        <div class="ci-remove" onclick="removeItem('${item.id}')">Remove</div>
      </div>
    </div>
  `).join('');
}
 
function changeQty(id, delta) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  updateCartCount();
  renderCart();
}
 
function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
  showToast('Item removed from bag');
}
 
/* ── ADD TO CART ── */
function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartCount();
  renderCart();
  openCart();
  showToast(`"${product.name}" added to bag ✓`);
}
 
/* ── CART DRAWER ── */
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);
 
/* ── BUILD PRODUCT CARD ── */
function buildCard(p, delay = 0) {
  const discountBadge = p.discount > 0 ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : `<span class="product-badge ${p.badgeType}">${p.badge}</span>`;
  const originalHtml = p.discount > 0
    ? `<span class="product-original">₹${p.original.toLocaleString('en-IN')}</span>
       <span class="product-discount">-${p.discount}%</span>`
    : '';
 
  const card = document.createElement('div');
  card.className = 'product-card animate-in';
  card.style.animationDelay = `${delay}ms`;
  card.innerHTML = `
    <div class="product-img" style="background:${p.bg}">
      <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        ${p.svg}
      </svg>
      ${discountBadge}
      <div class="product-wishlist" onclick="toggleWishlist(this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      </div>
    </div>
    <div class="product-info">
      <div class="product-category">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-pricing">
        <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
        ${originalHtml}
      </div>
      <button class="btn-add-cart" onclick='addToCart(${JSON.stringify(p)})'>Add to Bag</button>
    </div>
  `;
  return card;
}
 
/* ── WISHLIST TOGGLE ── */
function toggleWishlist(el) {
  el.classList.toggle('liked');
  const liked = el.classList.contains('liked');
  showToast(liked ? 'Added to wishlist ♡' : 'Removed from wishlist');
}
 
/* ── RENDER GRIDS ── */
function renderGrids() {
  const wGrid = document.getElementById('womenGrid');
  const kGrid = document.getElementById('kidsGrid');
  products.women.forEach((p, i) => wGrid.appendChild(buildCard(p, i * 80)));
  products.kids.forEach((p, i)  => kGrid.appendChild(buildCard(p, i * 80)));
}
 
/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
 
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
 
  // Active nav link
  const sections = ['home','women','kids','about','contact'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });
 
/* ── MOBILE NAV ── */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
 
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});
 
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});
 
/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});
 
/* ── REVEAL ON SCROLL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
 
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
 
/* ── CONTACT FORM ── */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const fields = this.querySelectorAll('[required]');
  let valid = true;
  fields.forEach(f => {
    f.classList.remove('error');
    if (!f.value.trim()) { f.classList.add('error'); valid = false; }
  });
  if (!valid) { showToast('Please fill in all required fields'); return; }
 
  const btn = this.querySelector('button[type=submit]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
 
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.disabled = false;
    this.reset();
    document.getElementById('formSuccess').classList.add('show');
    setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 4000);
    showToast('Message sent! We\'ll reply soon ✓');
  }, 1400);
});
 
/* ── PRODUCT CARD SCROLL REVEAL ── */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      cardObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
 
/* ── INIT ── */
function init() {
  renderGrids();
  updateCartCount();
  renderCart();
 
  // Observe cards after render
  document.querySelectorAll('.product-card').forEach(c => {
    c.style.opacity = '0';
    c.style.transition = 'opacity .5s ease, transform .5s ease';
    cardObserver.observe(c);
  });
}
 
document.addEventListener('DOMContentLoaded', init);
