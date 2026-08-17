# 🛡️ Phishing Awareness Simulation — Virtual Lab

> **Major Project: Cybersecurity**  
> **Author & Creator**: **Atharv Hogade**  
> *"Phishing Awareness Simulation Using Social Engineering Techniques"*  
> **Notice**: *This page simulation is created by Atharv Hogade. Do not misuse it.*

An interactive, multi-page **Virtual Laboratory** designed to educate users about phishing attacks, social engineering techniques, and cybersecurity awareness — styled after IIT Virtual Labs.

---

## 🎯 Objectives

- Understand phishing techniques and simulate realistic phishing scenarios
- Identify user behavior and measure awareness about phishing threats
- Explore countermeasures and educate users on preventing phishing attacks
- Demonstrate QR code phishing (Quishing) attacks
- Show users how much data their browser leaks to malicious pages

---

## 📁 Project Structure

```
Phishing-simulation-/
├── index.html                     # Main Frontend — Security Awareness Center Dashboard
├── css/
│   ├── style.css                  # PhishGuard Design System
│   └── styles.css                 # Virtual Lab Subpage Styling
├── js/
│   ├── main.js                    # Navigation, Session & Shared Utilities
│   ├── simulation.js              # Email Simulation Logic
│   ├── location.js                # Live Geolocation & Data Leak Logic
│   ├── results.js                 # Chart.js Risk Analytics Dashboard
│   └── quiz.js                    # Scored Assessment Logic
├── pages/
│   ├── consent.html               # Informed Consent Gate
│   ├── simulation.html            # Dedicated Email Inbox Simulation
│   ├── phishing-select.html       # 35+ Brand Phishing Launcher Catalog
│   ├── location-phishing/         # Location GPS Pretexting Demo & Victim Reveal
│   │   ├── index.html             # Location ChatGPT 4 Demo
│   │   ├── phish-handler.js       # Location Interceptor
│   │   └── victim.html            # GPS Interception & Satellite Map Pinpoint
│   ├── quishing/                  # QR Code Phishing Simulation & Victim Reveal
│   │   ├── gmail-inbox.html       # Simulated Gmail with MFA QR Code
│   │   └── victim.html            # Quishing Educational Reveal
│   ├── normal-phishing/           # 35+ Brand Clone Portals
│   │   ├── phish-handler.js       # Universal Form Interceptor
│   │   ├── victim.html            # Credentials Interception & Killchain Reveal
│   │   ├── google/
│   │   ├── microsoft/
│   │   ├── facebook/
│   │   └── ... (35+ total brands)
│   ├── location-expose.html       # Silent Browser Data Leakage Demo
│   ├── results.html               # Visual Performance Analytics
│   ├── quiz.html                  # 10-Question Knowledge Assessment
│   ├── certificate.html           # Downloadable PDF Certificate
│   ├── videos.html                # Curated Awareness Campaign Videos
│   └── references.html            # 10 Academic Research Papers & IT Act 2000
└── README.md
```

---

## 🚀 How to Run

1. Open `index.html` in any modern browser
2. No build tools or servers required — pure HTML/CSS/JS
3. For the QR code scanning feature, serve via a local server:
   ```
   npx serve .
   ```

---

## 🛠️ Technologies

- **HTML5 / CSS3 / JavaScript** — Core technologies
- **Chart.js** (CDN) — Results dashboard charts
- **html2pdf.js** (CDN) — Certificate PDF download
- **qrcode.js** (CDN) — QR code generation for quishing demo

---

## ⚠️ Disclaimer

This project is **strictly for educational purposes only**. No real data is collected, stored, or transmitted. All simulations run entirely within the browser's session storage. Unauthorized phishing is a criminal offense under the IT Act 2000.

---

## 📜 License

MIT License
