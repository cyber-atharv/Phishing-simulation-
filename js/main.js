/* This simulation is created by Atharv Hogade. Do not misuse it. */
/* ============================================================
   PHISHING LAB â€” Shared Utilities (Navigation, Session, Matrix)
   ============================================================ */

// ---- Determine base path based on current page depth ----
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/quishing/') || path.includes('/pages/normal-phishing/') || path.includes('/pages/location-phishing/')) {
    return '../../';
  } else if (path.includes('/pages/')) {
    return '../';
  }
  return './';
}

const BASE = getBasePath();

// ---- Sidebar HTML Generator ----
function generateSidebar(activePage) {
  const navItems = [
    { id: 'intro', icon: 'ðŸ ', label: 'Lab Introduction', href: `${BASE}index.html` },
    { id: 'consent', icon: 'âœ…', label: 'Informed Consent', href: `${BASE}pages/consent.html` },
    { id: 'simulation', icon: 'ðŸ“§', label: 'Email Simulation', href: `${BASE}pages/simulation.html` },
    { id: 'phishing-select', icon: 'ðŸŽ¯', label: 'Phishing Demo Pages', href: `${BASE}pages/phishing-select.html` },
    { id: 'location', icon: 'ðŸ“', label: 'Location Exposure', href: `${BASE}pages/location-expose.html` },
    { id: 'results', icon: 'ðŸ“Š', label: 'Results Dashboard', href: `${BASE}pages/results.html` },
    { id: 'quiz', icon: 'â“', label: 'Knowledge Quiz', href: `${BASE}pages/quiz.html` },
    { id: 'certificate', icon: 'ðŸ“œ', label: 'Certificate', href: `${BASE}pages/certificate.html` },
    { id: 'videos', icon: 'ðŸŽ¬', label: 'Awareness Videos', href: `${BASE}pages/videos.html` },
    { id: 'references', icon: 'ðŸ“š', label: 'Research Papers', href: `${BASE}pages/references.html` },
  ];

  return `
    <button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="Toggle Sidebar">â˜°</button>
    <div class="sidebar-overlay" onclick="toggleSidebar()"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo">ðŸ›¡ï¸</div>
        <div class="sidebar-title">
          Phishing Awareness Lab
          <span>Virtual Laboratory</span>
        </div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section-label">Lab Modules</div>
        ${navItems.map(item => `
          <a href="${item.href}" class="nav-item ${activePage === item.id ? 'active' : ''}">
            <span class="nav-icon">${item.icon}</span>
            ${item.label}
          </a>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <p>Phishing Awareness Simulation<br>Created by <strong>Atharv Hogade</strong></p>
      </div>
    </aside>
  `;
}

// ---- Inject sidebar into page ----
function initSidebar(activePage) {
  const container = document.getElementById('sidebar-container');
  if (container) {
    container.innerHTML = generateSidebar(activePage);
  }
}

// ---- Toggle sidebar (mobile) ----
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

// ---- Matrix Rain Background ----
function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}|/\\~`';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00d4ff';
    ctx.font = `${fontSize}px JetBrains Mono, monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 45);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ---- Session Storage Helpers ----
function setSession(key, value) {
  sessionStorage.setItem(`phishlab_${key}`, JSON.stringify(value));
}

function getSession(key) {
  const val = sessionStorage.getItem(`phishlab_${key}`);
  return val ? JSON.parse(val) : null;
}

function hasConsent() {
  return getSession('consent') === true;
}

function getUserName() {
  return getSession('userName') || 'Student';
}

// ---- Check consent gate (redirect if no consent) ----
function requireConsent() {
  if (!hasConsent()) {
    const base = getBasePath();
    window.location.href = `${base}pages/consent.html`;
    return false;
  }
  return true;
}

// ---- Page Load Init ----
document.addEventListener('DOMContentLoaded', () => {
  initMatrixRain();
  // Animate elements with data-animate attribute
  const animElements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animElements.forEach(el => observer.observe(el));
});

