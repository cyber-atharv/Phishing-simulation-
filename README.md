# 🛡️ Phishing Awareness Simulation Using Social Engineering Techniques

> **Cybersecurity Virtual Laboratory & Internship Project**  
> **Author & Developer**: **Atharv Hogade**  
> **Frontend Design**: **Uzair Shaikh** · **Refined by**: **Atharv Hogade**  
> **Notice**: *This simulation platform is strictly created for authorized academic and educational purposes only. Do not misuse it.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Fully%20Functional-success.svg)](#)
[![Technologies: HTML5%20%7C%20CSS3%20%7C%20JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange.svg)](#)
[![Legal: IT%20Act%202000](https://img.shields.io/badge/Compliance-IT%20Act%202000%20(Sec%2043%2F66)-green.svg)](#-cyber-ethics--legal-framework)

---

## 📌 Problem Statement

Phishing attacks remain the **primary entry vector** for over 80% of modern cyber incidents and enterprise data breaches. By exploiting cognitive biases and psychological triggers—such as artificial urgency, fear of penalty, curiosity, and authority impersonation—attackers deceive individuals into surrendering confidential credentials, multi-factor tokens, or physical geolocation data.

This project delivers a **comprehensive, interactive Virtual Laboratory** designed to simulate realistic phishing attack surfaces in a safe, sandboxed environment. The platform identifies human behavioral vulnerabilities, measures user risk posture, and educates participants on rigorous defensive countermeasures.

---

## 🎯 Objectives

1. **Simulate Realistic Attack Scenarios**: Demonstrate deceptive email spear-phishing, 35+ brand authentication clones, QR-code phishing (Quishing), and GPS location pretexting.
2. **Identify Behavioral Vulnerabilities & Telemetry**: Track interactions (link clicks, credential submissions, report rates) to measure susceptibility to social engineering triggers.
3. **Explore Defensive Countermeasures**: Educate users with instant post-interception debriefs, multi-factor authentication (MFA/FIDO2) protocols, and reporting workflows.
4. **Demonstrate Silent Data Leakage**: Reveal the volume of technical metadata (IP, Geolocation, ISP, device fingerprint, battery, GPU) exposed to malicious web pages without explicit consent.
5. **Assess Knowledge & Certification**: Provide a scored 10-question evaluation quiz and a verifiable, downloadable PDF Certificate of Completion.

---

## 🔬 6-Step Implementation Methodology

```
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│ 1. Research &   │ ──> │ 2. Harmless Sim  │ ──> │ 3. Clones & HTML │
│ Threat Vectors  │     │ Template Design  │     │ Demonstration    │
└─────────────────┘     └──────────────────┘     └──────────────────┘
         │                                                 │
         ▼                                                 ▼
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│ 6. Analytics &  │ <── │ 5. User Behavior │ <── │ 4. Informed Gate │
│ Countermeasures │     │ Telemetry Metrics│     │ & Test Group Sim │
└─────────────────┘     └──────────────────┘     └──────────────────┘
```

### Step 1: Threat Research & Classification
- Analyzed real-world phishing methodologies across four primary vectors:
  - **Email Phishing**: Fake password reset & urgent security notifications.
  - **Brand Clones (Normal Phishing)**: Pixel-perfect replicas of 35+ major identity providers (Microsoft, Google, GitHub, Facebook, PayPal, Steam, etc.).
  - **Quishing (QR Code Phishing)**: Embedding malicious URLs inside physical/digital QR codes to bypass enterprise email security gateways (SEGs).
  - **Location Phishing (Geo-Pretexting)**: Using conversational chat interfaces (ChatGPT 4 pretext) to harvest high-accuracy GPS coordinates.

### Step 2: Harmless Email Template Design
- Built an interactive web email inbox (`pages/simulation.html`) featuring 6 realistic scenarios (both benign communications and targeted phishing lures).
- Embedded classic red flags: spoofed sender domains (`@service-auth-verify.com`), mismatched hyperlinks, grammatical coercion, and artificial urgency deadlines.

### Step 3: High-Fidelity Login Mimicking & Interception
- Engineered client-side form interception (`pages/normal-phishing/phish-handler.js` & `pages/location-phishing/phish-handler.js`) that captures dummy credentials locally in `sessionStorage` without transmitting real data to any remote server.
- Immediate client redirection to educational victim reveal pages (`victim.html`) with interactive password reveal toggles and killchain breakdowns.

### Step 4: Ethical Informed Consent Gate
- Implemented a mandatory 5-point informed consent gate (`pages/consent.html`) ensuring voluntary participation, explicit simulation authorization, and zero collection of real production passwords.

### Step 5: Behavioral Measurement & Telemetry
- Measured user actions across three critical telemetry metrics:
  - **Link Click Rate**: Frequency of clicking suspicious embedded links.
  - **Credential Submission Rate**: High-risk submission of username/password data.
  - **Incident Reporting Rate**: Identifying and flagging phishing messages to security ops.

### Step 6: Risk Analytics & Countermeasure Education
- **Results Dashboard** (`pages/results.html`): Interactive visual charts powered by **Chart.js** classifying risk level (*High Risk, Moderate, Low Risk, Cyber Defender*).
- **Incident Response Protocol**: Step-by-step checklist on session revocation, credential resetting, FIDO2 WebAuthn adoption, and CERT-In reporting.

---

## 📁 Repository Structure

```
Phishing-simulation-/
├── index.html                     # Main Frontend — Security Awareness Center Dashboard
├── css/
│   ├── style.css                  # PhishGuard Design System (Dashboard, Cards, Metrics)
│   └── styles.css                 # Unified Virtual Lab Stylesheet for Sub-Pages
├── js/
│   ├── main.js                    # Global Navigation, Session Helpers & Sidebar Generator
│   ├── simulation.js              # Interactive Email Inbox Simulation Logic
│   ├── location.js                # Live Geolocation & Browser Fingerprint Extraction
│   ├── results.js                 # Chart.js Performance & Risk Analytics Logic
│   └── quiz.js                    # 10-Question Knowledge Assessment Engine
├── pages/
│   ├── consent.html               # Mandatory Informed Consent Gate
│   ├── simulation.html            # Dedicated 6-Scenario Email Inbox Lab
│   ├── phishing-select.html       # 35+ Brand Phishing Launcher Catalog
│   ├── location-phishing/         # GPS Pretexting Simulation (ChatGPT 4 Pretext)
│   │   ├── index.html             # Conversational Location Request Interface
│   │   ├── phish-handler.js       # GPS & GeoIP Form Interceptor
│   │   └── victim.html            # Physical Location & Satellite Map Pinpoint
│   ├── quishing/                  # QR Code Phishing Lab (Quishing)
│   │   ├── gmail-inbox.html       # Fake Gmail Interface with MFA Setup QR Code
│   │   └── victim.html            # Quishing Mechanics & Threat Analysis
│   ├── normal-phishing/           # 35+ Brand Login Clones
│   │   ├── phish-handler.js       # Universal Form Interceptor (Session Harvester)
│   │   ├── victim.html            # Universal Victim Reveal & Remediation Portal
│   │   ├── google/                # Google Account Login Clone
│   │   ├── microsoft/             # Microsoft Office 365 Login Clone
│   │   ├── github/                # GitHub Sign In Clone
│   │   ├── deviantart/            # DeviantArt Login Clone
│   │   ├── mediafire/             # MediaFire Authentication Clone
│   │   ├── paypal/                # PayPal Secure Checkout Clone
│   │   ├── steam/                 # Steam Community Login Clone
│   │   ├── adobe/                 # Adobe Creative Cloud Login Clone
│   │   ├── linkedin/              # LinkedIn Sign In Clone
│   │   └── ... (35+ total brands)
│   ├── location-expose.html       # Silent Browser Data Leakage Demonstration
│   ├── results.html               # Chart.js Visual Risk Analytics Dashboard
│   ├── quiz.html                  # 10-Question Scored Knowledge Assessment
│   ├── certificate.html           # Downloadable PDF Certificate of Completion
│   ├── videos.html                # 8 Curated Cybersecurity Awareness Videos
│   └── references.html            # 10 Peer-Reviewed Papers & IT Act 2000 Legal Framework
├── LICENSE                        # MIT Open Source License
└── README.md                      # Comprehensive Project Documentation
```

---

## 🧭 Virtual Laboratory Navigation Map

| Module | Location | Core Functionality |
|---|---|---|
| **Security Dashboard** | [`index.html`](index.html) | Interactive telemetry, in-page simulation, awareness score meter |
| **Informed Consent** | [`pages/consent.html`](pages/consent.html) | Ethical authorization & terms gate |
| **Email Simulation** | [`pages/simulation.html`](pages/simulation.html) | 6 inbox messages, real-time phishing classification |
| **35+ Brand Catalog** | [`pages/phishing-select.html`](pages/phishing-select.html) | Microsoft, Google, GitHub, PayPal, Steam, Netflix, etc. |
| **QR Code Quishing** | [`pages/quishing/gmail-inbox.html`](pages/quishing/gmail-inbox.html) | Gmail inbox with dynamic QR code generation & victim reveal |
| **Location Phishing** | [`pages/location-phishing/index.html`](pages/location-phishing/index.html) | ChatGPT 4 conversational location pretext & GPS pinpoint |
| **Silent Data Exposure** | [`pages/location-expose.html`](pages/location-expose.html) | Live IP, ISP, battery, GPU, resolution, hardware fingerprint |
| **Results Analytics** | [`pages/results.html`](pages/results.html) | Chart.js pie/bar charts, vulnerability breakdown, risk rating |
| **Knowledge Assessment**| [`pages/quiz.html`](pages/quiz.html) | 10 randomized MCQs with live timer & scoring |
| **PDF Certificate** | [`pages/certificate.html`](pages/certificate.html) | Downloadable completion certificate signed by Atharv Hogade |
| **Awareness Videos** | [`pages/videos.html`](pages/videos.html) | 8 curated YouTube awareness campaign videos |
| **Academic Papers** | [`pages/references.html`](pages/references.html) | 10 peer-reviewed papers (IEEE/ACM/Springer) & IT Act 2000 |

---

## 🚀 How to Run the Project

### Option 1: Direct Browser Launch (No installation required)
Simply double-click or open `index.html` in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave).

### Option 2: Local HTTP Server (Recommended for QR Code Scanning)
To enable full mobile QR code scanning over local Wi-Fi:

```bash
# Using Node.js npx serve
npx serve .

# OR using Python 3
python -m http.server 8080

# OR using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

---

## ⚖️ Cyber Ethics & Legal Framework

> [!IMPORTANT]
> **Educational & Ethical Compliance Notice**:  
> This virtual laboratory is built strictly for **authorized educational, demonstration, and awareness training purposes**.

1. **Zero Data Storage / Transmission**: No real passwords, credentials, or private information are collected, sent over the network, or stored in remote databases. All simulation data is processed strictly in client-side `sessionStorage` and cleared when the browser tab closes.
2. **Legal Compliance**: Complies with **Section 43 and Section 66 of the Information Technology Act 2000 (India)** and the **Indian Computer Emergency Response Team (CERT-In)** cybersecurity guidelines.
3. **Ethical Guidelines**: Unauthorized phishing or deploying social engineering attacks against individuals without written consent is a criminal offense punishable under civil and criminal cyber laws worldwide.

---

## 🛠️ Technologies & Libraries

- **HTML5 & Vanilla CSS3**: High-performance, responsive layout styled with modern dark cybersecurity aesthetics, glassmorphism, and custom CSS design tokens.
- **JavaScript (ES6+)**: Pure client-side simulation logic, DOM manipulation, form interceptors, and session lifecycle management.
- **Chart.js (v4.4.0)**: CDN-integrated rendering of dynamic pie and bar charts on the Results Dashboard.
- **html2pdf.js (v0.10.1)**: Client-side vector PDF generation for the Certificate of Completion.
- **qrcode.js (v1.0.0)**: Dynamic QR code generation for the Quishing simulation.
- **OpenStreetMap / Leaflet**: GPS coordinate pinpointing for the Location Phishing victim reveal.
- **FontAwesome (v6.5.1)**: Scalable vector icons.

---

## 📜 Authorship & Acknowledgments

- **Major Project & Virtual Lab Developer**: **Atharv Hogade**
- **Frontend Dashboard Layout**: **Uzair Shaikh** (Refined and integrated by **Atharv Hogade**)
- **Academic Foundation**: Inspired by IIT Virtual Labs and certified research from IEEE, ACM, and CERT-In.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.
