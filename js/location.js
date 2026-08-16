/* This simulation is created by Atharv Hogade. Do not misuse it. */
/* ============================================================
   LOCATION EXPOSURE DEMO â€” JS Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  collectData();
});

async function collectData() {
  const progress = document.getElementById('scan-progress');
  let pct = 0;
  const interval = setInterval(() => {
    pct += 2;
    if (pct > 90) pct = 90;
    progress.style.width = pct + '%';
  }, 50);

  // 1. Collect browser-local data immediately
  const browserData = collectBrowserData();

  // 2. Fetch IP-based data with multi-provider fallback
  let ipData = {};
  const endpoints = [
    'https://ipwho.is/',
    'https://ipapi.co/json/',
    'https://ipinfo.io/json?token='
  ];

  for (let url of endpoints) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (res.ok) {
        const d = await res.json();
        ipData = {
          ip: d.ip || (d.connection ? d.connection.ip : '192.168.1.100'),
          city: d.city || d.region || 'Detected City',
          region: d.region || d.region_name || 'Detected State',
          country_name: d.country || d.country_name || 'India',
          org: d.connection ? d.connection.isp : (d.org || d.isp || 'Broadband ISP'),
          latitude: d.latitude || (d.loc ? d.loc.split(',')[0] : '28.6139'),
          longitude: d.longitude || (d.loc ? d.loc.split(',')[1] : '77.2090'),
          timezone: d.timezone ? (d.timezone.id || d.timezone) : Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        break;
      }
    } catch (e) {
      console.warn(`GeoIP endpoint ${url} failed, trying next...`);
    }
  }

  if (!ipData.ip) {
    ipData = {
      ip: '223.187.112.45 (Live Simulated IP)',
      city: 'New Delhi',
      region: 'Delhi',
      country_name: 'India',
      org: 'Airtel / Jio Broadband Network',
      latitude: '28.6139',
      longitude: '77.2090',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  }

  clearInterval(interval);
  progress.style.width = '100%';

  setTimeout(() => {
    renderData(browserData, ipData);
  }, 500);
}

function collectBrowserData() {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  let os = 'Unknown';

  if (ua.includes('Firefox')) browser = 'Mozilla Firefox';
  else if (ua.includes('Edg')) browser = 'Microsoft Edge';
  else if (ua.includes('Chrome')) browser = 'Google Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

  if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
  else if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac OS X')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

  const screenRes = `${window.screen.width} Ã— ${window.screen.height}`;
  const viewport = `${window.innerWidth} Ã— ${window.innerHeight}`;
  const colorDepth = window.screen.colorDepth + '-bit';
  const language = navigator.language || navigator.userLanguage || 'Unknown';
  const languages = navigator.languages ? navigator.languages.join(', ') : language;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
  const cookiesEnabled = navigator.cookieEnabled ? 'Yes' : 'No';
  const doNotTrack = navigator.doNotTrack === '1' ? 'Enabled' : 'Disabled';
  const platform = navigator.platform || 'Unknown';
  const hardwareConcurrency = navigator.hardwareConcurrency || 'Unknown';
  const deviceMemory = navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'N/A';
  const touchSupport = ('ontouchstart' in window) ? 'Yes' : 'No';
  const connectionType = navigator.connection ? navigator.connection.effectiveType : 'Unknown';
  const online = navigator.onLine ? 'Online' : 'Offline';
  const plugins = navigator.plugins ? navigator.plugins.length : 0;
  const referrer = document.referrer || 'Direct Visit';
  const localTime = new Date().toLocaleString();

  return {
    browser, os, screenRes, viewport, colorDepth, language, languages,
    timezone, cookiesEnabled, doNotTrack, platform, hardwareConcurrency,
    deviceMemory, touchSupport, connectionType, online, plugins, referrer,
    localTime, userAgent: ua
  };
}

function renderData(browser, ip) {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('data-grid').style.display = 'block';

  // Main location grid cards
  const grid = document.getElementById('location-grid');
  const mainItems = [
    { icon: 'ðŸŒ', label: 'IP Address', value: ip.ip || 'N/A' },
    { icon: 'ðŸ™ï¸', label: 'City', value: ip.city || 'N/A' },
    { icon: 'ðŸ—ºï¸', label: 'Region', value: ip.region || 'N/A' },
    { icon: 'ðŸŒ', label: 'Country', value: ip.country_name || 'N/A' },
    { icon: 'ðŸ“¡', label: 'ISP / Organization', value: ip.org || 'N/A' },
    { icon: 'ðŸ“', label: 'Coordinates', value: `${ip.latitude || 'N/A'}, ${ip.longitude || 'N/A'}` },
    { icon: 'ðŸ–¥ï¸', label: 'Operating System', value: browser.os },
    { icon: 'ðŸŒ', label: 'Browser', value: browser.browser },
    { icon: 'ðŸ“', label: 'Screen Resolution', value: browser.screenRes },
    { icon: 'ðŸ•', label: 'Timezone', value: browser.timezone },
    { icon: 'ðŸ”Œ', label: 'Connection', value: browser.connectionType },
    { icon: 'â°', label: 'Local Time', value: browser.localTime },
  ];

  grid.innerHTML = mainItems.map(item => `
    <div class="data-item">
      <div class="data-icon">${item.icon}</div>
      <div>
        <div class="data-label">${item.label}</div>
        <div class="data-value">${item.value}</div>
      </div>
    </div>
  `).join('');

  // Technical table
  const tbody = document.getElementById('tech-tbody');
  const techRows = [
    { type: 'User Agent', value: browser.userAgent, risk: 'High' },
    { type: 'Platform', value: browser.platform, risk: 'Medium' },
    { type: 'Language', value: browser.languages, risk: 'Medium' },
    { type: 'Color Depth', value: browser.colorDepth, risk: 'Low' },
    { type: 'Viewport Size', value: browser.viewport, risk: 'Low' },
    { type: 'CPU Cores', value: browser.hardwareConcurrency, risk: 'Medium' },
    { type: 'Device Memory', value: browser.deviceMemory, risk: 'Medium' },
    { type: 'Touch Support', value: browser.touchSupport, risk: 'Low' },
    { type: 'Cookies Enabled', value: browser.cookiesEnabled, risk: 'Medium' },
    { type: 'Do Not Track', value: browser.doNotTrack, risk: 'Low' },
    { type: 'Plugins Count', value: browser.plugins, risk: 'Medium' },
    { type: 'Network Status', value: browser.online, risk: 'Low' },
    { type: 'Referrer', value: browser.referrer, risk: 'Medium' },
  ];

  const riskBadge = (risk) => {
    const colors = { High: 'badge-red', Medium: 'badge-orange', Low: 'badge-blue' };
    return `<span class="badge ${colors[risk]}">${risk}</span>`;
  };

  tbody.innerHTML = techRows.map(row => `
    <tr>
      <td><strong>${row.type}</strong></td>
      <td style="font-family: 'JetBrains Mono', monospace; font-size: 12px; word-break: break-all;">${row.value}</td>
      <td>${riskBadge(row.risk)}</td>
    </tr>
  `).join('');
}

