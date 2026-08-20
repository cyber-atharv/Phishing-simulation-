# Phishing Awareness Simulation Using Social Engineering Techniques

> **Cybersecurity Internship Project**  
> **Author & Developer:** Atharv Hogade  
> **Frontend UI:** Uzair Shaikh (Refined & Integrated by Atharv Hogade)  
> **Live Demo:** [https://cyber-atharv.github.io/Phishing-simulation-/](https://cyber-atharv.github.io/Phishing-simulation-/)

---

## 📌 Project Overview & Problem Statement

Phishing and social engineering remain among the most dangerous and common cyber threats today. Rather than hacking complex software vulnerabilities, attackers often target human psychology—using urgency, fear, authority, or curiosity to trick people into giving away passwords, sensitive personal details, or access tokens.

The goal of this project is to build a safe, controlled, and realistic **Phishing Awareness Simulation Virtual Lab**. It allows students, employees, and test groups to experience different types of phishing attacks firsthand, test their ability to detect red flags, and understand the consequences of falling for deceptive links without exposing any real credentials or private data.

---

## 🎯 Key Objectives

- **Simulate Real-World Attacks:** Demonstrate practical scenarios including email phishing, brand login clones, QR code phishing (Quishing), and geolocation pretexting.
- **Analyze User Behavior:** Measure how users interact with suspicious emails and links (click rates, credential entry attempts, reporting accuracy).
- **Educate on Countermeasures:** Provide instant educational feedback whenever a user interacts with a simulation (explaining red flags, technical headers, and mitigation steps).
- **Demonstrate Data Leakage:** Show how much device, browser, and network metadata can be silently harvested just by visiting a webpage.
- **Assessment & Certification:** Provide a 10-question evaluation quiz and a downloadable PDF certificate upon successful completion.

---

## 🌐 Live Demo & How to Test

You can test the entire project live on GitHub Pages:  
👉 **[Launch Live Simulation Lab](https://cyber-atharv.github.io/Phishing-simulation-/)**

---

## 🛠️ Main Modules & Features

### 1. Informed Consent Gate (`pages/consent.html`)
Before starting the simulation, participants must read and accept a 5-point ethical consent form. This ensures full awareness that the platform is for educational training and that no real personal data is collected or sent anywhere.

### 2. Email Inbox Simulation (`pages/simulation.html`)
A realistic webmail client containing 6 different email scenarios (both genuine business emails and crafted phishing attempts). Users must inspect sender addresses, links, and content, and decide whether to **"Report as Phishing"** or **"Mark as Safe"**.

### 3. 35+ Brand Phishing Clones (`pages/phishing-select.html`)
An interactive catalog of realistic login pages for major platforms (Google, Microsoft, GitHub, PayPal, Steam, Adobe, MediaFire, LinkedIn, Netflix, etc.).
- When dummy credentials are submitted, the custom client-side script (`phish-handler.js`) intercepts the input locally in `sessionStorage` and immediately teleports the user to the educational **Victim Reveal Page** (`pages/normal-phishing/victim.html`).
- The victim page demonstrates what an attacker would have captured, explains the attack killchain, and outlines emergency password reset / 2FA recovery steps.

### 4. QR Code Phishing (Quishing) (`pages/quishing/gmail-inbox.html`)
Simulates an urgent MFA reset email containing a dynamic QR code. Scanning or clicking the QR code leads to an educational page explaining why QR codes are increasingly used to bypass email security filters.

### 5. Location Phishing & Data Exposure Demo
- **Location Phishing (`pages/location-phishing/index.html`):** Uses a ChatGPT-style conversational pretext to request location permissions and pinpoint the coordinates on an interactive satellite map.
- **Silent Data Exposure (`pages/location-expose.html`):** Demonstrates the technical fingerprint any website can passively collect without permissions (IP address, ISP, city/region, screen resolution, GPU renderer, battery level, CPU cores, timezone).

### 6. Results & Risk Analytics Dashboard (`pages/results.html`)
Uses **Chart.js** to generate visual graphs of the user's simulation performance, categorizes their risk level (High Risk, Moderate, Low Risk, Cyber Defender), and breaks down psychological vulnerabilities like urgency and authority bias.

### 7. Scored Quiz & PDF Certificate Generator (`pages/quiz.html` & `pages/certificate.html`)
- A 10-question randomized multiple-choice assessment with a live countdown timer.
- Scoring 60% or higher generates a verifiable **Certificate of Completion** in PDF format using `html2pdf.js`.

### 8. Awareness Videos & Academic References (`pages/videos.html` & `pages/references.html`)
- 8 curated awareness campaign videos.
- 10 peer-reviewed research papers and relevant legal clauses from the **Information Technology Act, 2000**.

---

## 📁 Project Structure

```text
Phishing-simulation/
├── index.html                     # Security Awareness Dashboard & Home
├── css/
│   ├── style.css                  # Main dashboard styles (by Uzair Shaikh, refined by Atharv Hogade)
│   └── styles.css                 # Virtual lab subpage design system
├── js/
│   ├── main.js                    # Global navigation, sidebar generator & session utilities
│   ├── simulation.js              # Email simulation logic and scoring
│   ├── location.js                # Geolocation and browser fingerprint logic
│   ├── results.js                 # Chart.js analytics and risk assessment logic
│   └── quiz.js                    # 10-question assessment logic
├── pages/
│   ├── consent.html               # Informed consent gate
│   ├── simulation.html            # Email inbox simulation lab
│   ├── phishing-select.html       # 35+ brand phishing launcher catalog
│   ├── location-expose.html       # Silent browser data leakage demo
│   ├── results.html               # Results and analytics dashboard
│   ├── quiz.html                  # Knowledge assessment quiz
│   ├── certificate.html           # Downloadable PDF certificate generator
│   ├── videos.html                # Educational video hub
│   ├── references.html            # Research papers and IT Act legal references
│   ├── normal-phishing/           # 35+ brand login templates & universal handler
│   │   ├── phish-handler.js       # Universal client-side interception script
│   │   ├── victim.html            # Educational credential reveal and debrief page
│   │   └── [brand folders]/       # google, microsoft, github, paypal, steam, etc.
│   ├── location-phishing/         # GPS location pretexting simulation
│   └── quishing/                  # QR code phishing simulation
└── README.md                      # Project documentation
```

---

## 💻 How to Run Locally

This project is built using standard frontend web technologies (HTML5, CSS3, and JavaScript). You do not need complex build tools or backend databases to run it.

### Method 1: Direct Open
1. Clone or download this repository.
2. Double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox, Brave, etc.).

### Method 2: Local HTTP Server (Recommended)
If you want to test QR code scanning on mobile devices over local Wi-Fi:

```bash
# Using Python (built-in)
python -m http.server 8080

# OR using Node.js
npx serve .
```
Then visit `http://localhost:8080` in your browser.

---

## ⚖️ Ethical Considerations & Legal Disclaimer

- **Strictly Educational:** This project was developed solely for academic research, internship evaluation, and cybersecurity awareness training.
- **Zero Remote Data Storage:** No real passwords or personal data are stored, logged, or sent to external servers. All simulation variables are handled strictly within the user's local browser `sessionStorage`.
- **Legal Compliance:** Unauthorized phishing, unauthorized credential harvesting, or deploying social engineering attacks against real users without explicit consent is illegal under **Sections 43 and 66 of the Information Technology Act, 2000 (India)** as well as global cybercrime laws.

---

## 👨‍💻 Credits & Authorship

- **Project Lead & Developer:** **Atharv Hogade**
- **Frontend Dashboard Design:** **Uzair Shaikh** (Refined and integrated by **Atharv Hogade**)
- **Academic References:** Based on guidelines from CERT-In, NIST, and peer-reviewed cybersecurity literature.
