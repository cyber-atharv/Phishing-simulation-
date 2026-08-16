/* This simulation is created by Atharv Hogade. Do not misuse it. */
/* ============================================================
   LOCATION PHISHING INTERCEPTOR (Educational Lab)
   Captures location triggers / form events on simulated location
   phishing pages and redirects to the educational location victim page.
   ============================================================ */

(function() {
  function redirectToVictim(lat, lon) {
    let query = '';
    if (lat && lon) {
      query = `?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;
    }
    window.location.href = 'victim.html' + query;
  }

  function handleLocationPhish() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          redirectToVictim(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => {
          redirectToVictim(null, null);
        },
        { timeout: 5000, enableHighAccuracy: true }
      );
    } else {
      redirectToVictim(null, null);
    }
  }

  // Intercept form submissions or buttons
  function attachInterceptors() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLocationPhish();
      }, true);
      form.setAttribute('onsubmit', 'return false;');
    });

    const clickables = document.querySelectorAll('button, input[type="submit"], .btn, #btn, #locate, #track');
    clickables.forEach(el => {
      el.addEventListener('click', function(e) {
        handleLocationPhish();
      }, true);
    });

    // Add educational watermark banner
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
        <span>âš ï¸ <strong>LOCATION PHISHING SIMULATION</strong> â€” Educational Demonstration Only.</span>
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

