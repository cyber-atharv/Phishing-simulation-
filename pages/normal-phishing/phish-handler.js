/* This simulation is created by Atharv Hogade. Do not misuse it. */
/* ============================================================
   UNIVERSAL PHISHING INTERCEPTOR (Educational Lab)
   Intercepts credentials submitted on simulated phishing clones,
   stores data in browser sessionStorage, and teleports the user
   to the educational victim reveal page.
   ============================================================ */

(function() {
  // Extract brand name from folder path or page content
  function detectBrand() {
    try {
      const parts = window.location.pathname.replace(/\\/g, '/').split('/');
      const npIndex = parts.indexOf('normal-phishing');
      if (npIndex !== -1 && parts[npIndex + 1]) {
        const brandSlug = parts[npIndex + 1].toLowerCase();
        if (brandSlug && brandSlug !== 'victim.html') {
          return brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);
        }
      }
    } catch(e) {}

    // Fallback: check document title
    const title = document.title || 'Brand';
    const cleanTitle = title.split(/[-–—|:]/)[0].trim();
    if (cleanTitle && cleanTitle.length < 30 && cleanTitle.toLowerCase() !== 'login' && cleanTitle.toLowerCase() !== 'sign in') {
      return cleanTitle;
    }
    return 'Simulated Portal';
  }

  // Find credentials in form or globally on page
  function extractCredentials(form) {
    let username = '';
    let password = '';
    const extra = {};

    const inputs = form ? Array.from(form.querySelectorAll('input, select, textarea')) : Array.from(document.querySelectorAll('input, select, textarea'));

    inputs.forEach(input => {
      const type = (input.type || '').toLowerCase();
      const name = (input.name || input.id || input.placeholder || '').toLowerCase();
      const val = input.value ? input.value.trim() : '';

      if (!val) return;

      if (type === 'password' || name.includes('pass') || name.includes('pwd') || name.includes('secret')) {
        if (!password) password = val;
      } else if (
        type === 'email' || 
        type === 'tel' || 
        name.includes('email') || 
        name.includes('user') || 
        name.includes('login') || 
        name.includes('phone') || 
        name.includes('account') ||
        name.includes('ident') ||
        name.includes('auth') ||
        name.includes('session')
      ) {
        if (!username) username = val;
      } else if (type !== 'hidden' && type !== 'submit' && type !== 'button' && type !== 'checkbox' && type !== 'radio') {
        extra[name || 'field'] = val;
      }
    });

    // Global fallback search if form was empty
    if (!username || !password) {
      document.querySelectorAll('input').forEach(input => {
        const type = (input.type || '').toLowerCase();
        const val = input.value ? input.value.trim() : '';
        if (val) {
          if (!password && type === 'password') password = val;
          if (!username && (type === 'text' || type === 'email' || type === 'tel')) username = val;
        }
      });
    }

    return {
      username: username || 'demo.victim@example.com',
      password: password || 'SecurePassword123!',
      extra
    };
  }

  // Teleport to victim reveal page
  window.handlePhishLabSubmit = function(e, form) {
    if (e) {
      try { e.preventDefault(); } catch(err) {}
      try { e.stopPropagation(); } catch(err) {}
      try { e.stopImmediatePropagation(); } catch(err) {}
    }

    const brand = detectBrand();
    const creds = extractCredentials(form);

    const victimData = {
      brand: brand,
      username: creds.username,
      password: creds.password,
      extra: creds.extra,
      timestamp: new Date().toLocaleString(),
      url: window.location.href
    };

    try {
      sessionStorage.setItem('phishlab_victim_data', JSON.stringify(victimData));
    } catch (err) {
      console.warn('Session storage error:', err);
    }

    // Build URL query parameters
    const query = new URLSearchParams({
      brand: victimData.brand,
      user: victimData.username,
      time: victimData.timestamp
    }).toString();

    // Determine path to victim.html
    let targetUrl = '../victim.html?' + query;
    if (window.location.pathname.includes('/normal-phishing/')) {
      const depth = (window.location.pathname.replace(/\\/g, '/').split('normal-phishing/')[1] || '').split('/').length;
      if (depth > 2) {
        targetUrl = '../../victim.html?' + query;
      } else {
        targetUrl = '../victim.html?' + query;
      }
    }

    // Immediate redirect
    window.location.replace(targetUrl);
    return false;
  };

  // Attach interceptors to DOM
  function initInterceptors() {
    // Intercept all forms
    document.querySelectorAll('form').forEach(form => {
      form.onsubmit = function(e) {
        return window.handlePhishLabSubmit(e, form);
      };
      form.addEventListener('submit', function(e) {
        window.handlePhishLabSubmit(e, form);
      }, true);
    });

    // Intercept buttons & submit inputs
    const submitSelectors = [
      'input[type="submit"]',
      'button[type="submit"]',
      'button:not([type])',
      'input[type="button"]',
      '#btnsubmit',
      '#signIn',
      '#login',
      '#login-button',
      '.rc-button-submit',
      '.login-btn',
      '.btn-primary',
      'button[name="login"]',
      'button[name="submit"]',
      'a[id*="login"]',
      'a[id*="signin"]',
      'a[class*="login"]'
    ];

    document.querySelectorAll(submitSelectors.join(',')).forEach(el => {
      el.addEventListener('click', function(e) {
        const form = el.closest('form');
        window.handlePhishLabSubmit(e, form);
      }, true);
    });

    // Intercept Enter key inside text/password inputs
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
          const form = input.closest('form');
          window.handlePhishLabSubmit(e, form);
        }
      });
    });

    // Educational watermark banner
    if (!document.getElementById('phish-lab-sim-banner')) {
      const banner = document.createElement('div');
      banner.id = 'phish-lab-sim-banner';
      banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(90deg, #dc2626, #ef4444);
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        font-weight: 600;
        padding: 7px 14px;
        text-align: center;
        z-index: 2147483647;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        box-sizing: border-box;
      `;
      banner.innerHTML = `
        <span>⚠️ <strong>PHISHING SIMULATION LAB</strong> — Educational Demonstration Only. Do not enter real passwords.</span>
        <a href="../../pages/phishing-select.html" style="color: #fff; text-decoration: underline; font-weight: 700;">← Back to Catalog</a>
      `;
      if (document.body) {
        document.body.prepend(banner);
        document.body.style.paddingTop = (parseInt(document.body.style.paddingTop || 0) + 36) + 'px';
      }
    }
  }

  // Run immediately and on DOM events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInterceptors);
  } else {
    initInterceptors();
  }

  // Also bind on window load
  window.addEventListener('load', initInterceptors);
})();
