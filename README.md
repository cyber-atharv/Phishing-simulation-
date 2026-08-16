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
├── index.html                     # Landing page — Theory & Introduction
├── css/styles.css                 # Global design system
├── js/
│   ├── main.js                    # Shared utilities
│   ├── simulation.js              # Email inbox logic
│   ├── location.js                # Location exposure logic
│   ├── results.js                 # Results dashboard logic
│   └── quiz.js                    # Quiz logic
├── pages/
│   ├── consent.html               # Informed consent gate
│   ├── simulation.html            # Email inbox simulation
│   ├── phishing-select.html       # Choose phishing type
│   ├── location-expose.html       # Location/data exposure demo
│   ├── results.html               # Results dashboard with charts
│   ├── quiz.html                  # 10-question knowledge quiz
│   ├── certificate.html           # Downloadable PDF certificate
│   ├── videos.html                # YouTube awareness videos
│   ├── references.html            # Research papers & references
│   ├── normal-phishing/           # 35 brand folders (user-created)
│   │   ├── microsoft/
│   │   ├── google/
│   │   ├── facebook/
│   │   └── ... (35 total)
│   └── quishing/
│       ├── gmail-inbox.html       # Fake Gmail with QR code
│       └── victim.html            # Quishing victim reveal
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
