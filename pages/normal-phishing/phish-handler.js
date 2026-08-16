/* This simulation is created by Atharv Hogade. Do not misuse it. */
/* ============================================================
   UNIVERSAL PHISHING INTERCEPTOR (Educational Lab)
   Intercepts form submissions on simulated phishing pages,
   captures dummy credentials in browser session,
   and redirects to the educational victim reveal page.
   ============================================================ */

(function() {
  // Extract brand name from folder path
  function detectBrand() {
    const parts = window.location.pathname.replace(/\\/g, '/').split('/');
    const npIndex = parts.indexOf('normal-phishing');
    if (npIndex !== -1 && parts[npIndex + 1]) {
      const brandSlug = parts[npIndex + 1];
      return brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);
    }
    // Fallback: check document title or domain
    const title = document.title || 'Brand';
    return title.split(/[-â€“â€”|:]/)[0].trim() || 'Simulated Service';
  }

  // Find credentials in form or page inputs
  function extractCredentials(form) {
    const inputs = form ? form.querySelectorAll('input, select, textarea') : document.querySelectorAll('input');
    let username = '';
    let password = '';
    const extra = {};

    inputs.forEach(input => {
      const type = (input.type || '').toLowerCase();
      const name = (input.name || input.id || '').toLowerCase();
      const val = input.value ? input.value.trim() : '';

      if (!val) return;

      if (type === 'password' || name.includes('pass') || name.includes('pwd')) {
        if (!password) password = val;
      } else if (
        type === 'email' || 
        type === 'tel' || 
        name.includes('email') || 
        name.includes('user') || 
        name.includes('login') || 
        name.includes('phone') || 
        name.includes('account') ||
        name.includes('ident')
      ) {
        if (!username) username = val;
      } else if (type !== 'hidden' && type !== 'submit' && type !== 'button' && type !== 'checkbox') {
        extra[name || 'field'] = val;
      }
    });

    // Fallbacks if user left fields empty or clicked submit directly
    if (!username) {
      // Look globally if form didn't catch it
      const allInputs = document.querySelectorAll('input');
      allInputs.forEach(input => {
        const type = (input.type || '').toLowerCase();
        const val = input.value ? input.value.trim() : '';
        if (val && !username && (type === 'text' || type === 'email')) username = val;
        if (val && !password && type === 'password') password = val;
      });
    }

    return {
      username: username || 'user@example.com',
      password: password || 'Password123!',
      extra
    };
  }

  // Handle interception and redirection
  function handlePhishSubmit(e, form) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
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

    // Build URL parameters as backup
    const query = new URLSearchParams({
      brand: victimData.brand,
      user: victimData.username,
      time: victimData.timestamp
    }).toString();

    // Redirect to victim page
    // Look for victim.html in pages/normal-phishing/victim.html
    const targetUrl = '../victim.html?' + query;
    window.location.href = targetUrl;
    return false;
  }

  // Attach interceptors once DOM is ready
  function attachInterceptors() {
    // Intercept all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        handlePhishSubmit(e, form);
      }, true);

      // Change action so standard form submit doesn't go to dead link
      form.setAttribute('onsubmit', 'return false;');
    });

    // Also intercept buttons with submit/login roles or IDs
    const submitSelectors = [
      'input[type="submit"]',
      'button[type="submit"]',
      '#btnsubmit',
      '#signIn',
      '#login',
      '#login-button',
      '.rc-button-submit',
      '.login-btn',
      'button[name="login"]'
    ];

    document.querySelectorAll(submitSelectors.join(',')).forEach(btn => {
      btn.addEventListener('click', function(e) {
        const form = btn.closest('form');
        handlePhishSubmit(e, form);
      }, true);
    });

    // Add educational disclaimer watermark at the top if not present
    if (!document.getElementById('phish-lab-sim-banner')) {
      const banner = document.createElement('div');
      banner.id = 'phish-lab-sim-banner';
      banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(90deg, #ff4757, #ff6b9d);
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        font-weight: 600;
        padding: 6px 14px;
        text-align: center;
        z-index: 999999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      `;
      banner.innerHTML = `
        <span>âš ï¸ <strong>PHISHING SIMULATION LAB</strong> â€” Educational Demonstration Only. Do not enter real credentials.</span>
        <a href="../../index.html" style="color: #ffffff; text-decoration: underline; margin-left: 12px; font-weight: 700;">Exit to Lab Home</a>
      `;
      document.body.appendChild(banner);
      document.body.style.paddingTop = (parseInt(document.body.style.paddingTop || 0) + 32) + 'px';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachInterceptors);
  } else {
    attachInterceptors();
  }
})();

