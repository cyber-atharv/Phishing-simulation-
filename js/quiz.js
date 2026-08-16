/* This simulation is created by Atharv Hogade. Do not misuse it. */
/* ============================================================
   KNOWLEDGE QUIZ â€” Questions, Logic & Scoring
   ============================================================ */

const questions = [
  {
    q: 'What is the primary goal of a phishing attack?',
    options: [
      'To install software updates on your computer',
      'To trick victims into revealing sensitive information',
      'To improve network security',
      'To send promotional advertisements'
    ],
    correct: 1,
    explanation: 'Phishing attacks aim to trick victims into revealing sensitive information like passwords, credit card numbers, or personal data by impersonating trusted entities.'
  },
  {
    q: 'Which of the following is a red flag in a phishing email?',
    options: [
      'The email is from a known contact',
      'The email has no attachments',
      'The sender\'s email domain is misspelled (e.g., micr0soft.com)',
      'The email is sent during business hours'
    ],
    correct: 2,
    explanation: 'Misspelled domains (like "micr0soft" with a zero) are a classic phishing indicator. Attackers register lookalike domains to deceive victims.'
  },
  {
    q: 'What is "Quishing"?',
    options: [
      'Phishing through phone calls',
      'Phishing through SMS messages',
      'Phishing using QR codes',
      'Phishing through social media'
    ],
    correct: 2,
    explanation: 'Quishing (QR phishing) involves embedding malicious URLs in QR codes. When scanned, victims are redirected to fake websites designed to steal credentials.'
  },
  {
    q: 'What should you do if you receive a suspicious email claiming your bank account is compromised?',
    options: [
      'Click the link immediately to verify your account',
      'Reply to the email with your account details',
      'Contact your bank directly using the official phone number or website',
      'Forward the email to all your contacts as a warning'
    ],
    correct: 2,
    explanation: 'Always verify suspicious communications by contacting the organization directly through official channels â€” never click links or reply with sensitive data.'
  },
  {
    q: 'Which type of phishing targets high-level executives like CEOs?',
    options: [
      'Spear phishing',
      'Vishing',
      'Whaling',
      'Smishing'
    ],
    correct: 2,
    explanation: 'Whaling specifically targets C-level executives and senior management with highly personalized attacks, often involving fake legal documents or business requests.'
  },
  {
    q: 'What does "HTTPS" in a URL indicate?',
    options: [
      'The website is guaranteed to be safe',
      'The connection between your browser and the server is encrypted',
      'The website is a government site',
      'The website has been verified by Google'
    ],
    correct: 1,
    explanation: 'HTTPS means the connection is encrypted, but it does NOT guarantee the website is legitimate. Many phishing sites now use HTTPS certificates.'
  },
  {
    q: 'Which of these is the MOST effective defense against phishing?',
    options: [
      'Using a strong password only',
      'Installing antivirus software only',
      'Multi-Factor Authentication (MFA) combined with user awareness training',
      'Changing your email address frequently'
    ],
    correct: 2,
    explanation: 'MFA combined with awareness training is the most effective defense. MFA prevents account access even if credentials are stolen, and training helps users identify threats.'
  },
  {
    q: 'What is "Vishing"?',
    options: [
      'Phishing through video calls',
      'Phishing through voice calls (phone)',
      'Phishing through VPN connections',
      'Phishing through virtual reality'
    ],
    correct: 1,
    explanation: 'Vishing (Voice phishing) uses phone calls to trick victims. Attackers impersonate bank officials, tech support, or government agencies to extract sensitive information.'
  },
  {
    q: 'A legitimate organization would most likely do which of the following?',
    options: [
      'Ask for your password via email',
      'Threaten to delete your account in 24 hours',
      'Direct you to their official website to manage your account',
      'Send you a QR code for "mandatory verification"'
    ],
    correct: 2,
    explanation: 'Legitimate organizations never ask for passwords via email or create artificial urgency. They direct users to official websites for account management.'
  },
  {
    q: 'Under the Indian IT Act 2000, phishing can be prosecuted under which sections?',
    options: [
      'Section 420 IPC only',
      'Sections 66C (Identity Theft) and 66D (Cheating by Personation)',
      'Section 144 CrPC',
      'Phishing is not covered under Indian law'
    ],
    correct: 1,
    explanation: 'The IT Act 2000, Sections 66C (identity theft) and 66D (cheating by personation using computer resources) cover phishing offenses with imprisonment up to 3 years.'
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
let timerInterval = null;
let startTime = null;
let quizTime = 0;

function startQuiz() {
  document.getElementById('quiz-intro').style.display = 'none';
  document.getElementById('quiz-body').style.display = 'block';

  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);

  currentQuestion = 0;
  score = 0;
  renderQuestion();
}

function updateTimer() {
  quizTime = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(quizTime / 60);
  const secs = quizTime % 60;
  document.getElementById('quiz-timer').textContent = `â±ï¸ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function renderQuestion() {
  const q = questions[currentQuestion];
  answered = false;

  document.getElementById('q-counter').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById('q-progress').style.width = ((currentQuestion + 1) / questions.length * 100) + '%';
  document.getElementById('q-score').textContent = `Score: ${score}/${questions.length}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-feedback').style.display = 'none';
  document.getElementById('q-next').style.display = 'none';

  const optionsContainer = document.getElementById('q-options');
  optionsContainer.innerHTML = q.options.map((opt, i) => `
    <div class="quiz-option" data-index="${i}" onclick="selectAnswer(${i})">
      <strong style="margin-right: 8px;">${String.fromCharCode(65 + i)}.</strong> ${opt}
    </div>
  `).join('');
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const options = document.querySelectorAll('.quiz-option');

  options.forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === q.correct) {
      opt.classList.add('correct');
    }
    if (i === index && i !== q.correct) {
      opt.classList.add('wrong');
    }
  });

  const isCorrect = index === q.correct;
  if (isCorrect) score++;

  const feedback = document.getElementById('q-feedback');
  feedback.style.display = 'block';
  feedback.innerHTML = `
    <div class="alert ${isCorrect ? 'alert-success' : 'alert-danger'}">
      <span class="alert-icon">${isCorrect ? 'âœ…' : 'âŒ'}</span>
      <div>
        <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong>
        <p style="margin-top: 6px; font-size: 13px;">${q.explanation}</p>
      </div>
    </div>
  `;

  document.getElementById('q-score').textContent = `Score: ${score}/${questions.length}`;

  const nextBtn = document.getElementById('q-next');
  nextBtn.style.display = 'inline-flex';
  nextBtn.textContent = currentQuestion === questions.length - 1 ? 'ðŸ Finish Quiz' : 'Next Question â†’';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  clearInterval(timerInterval);

  document.getElementById('quiz-body').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'block';

  const pct = Math.round((score / questions.length) * 100);
  const mins = Math.floor(quizTime / 60);
  const secs = quizTime % 60;
  const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;

  document.getElementById('qr-score').textContent = `${score}/${questions.length}`;
  document.getElementById('qr-time').textContent = timeStr;
  document.getElementById('qr-pct').textContent = pct + '%';

  let icon, title, desc;
  if (pct >= 80) {
    icon = 'ðŸ†';
    title = 'Excellent! You\'re Phishing-Proof!';
    desc = 'Outstanding performance! You have a strong understanding of phishing threats and how to defend against them.';
  } else if (pct >= 70) {
    icon = 'ðŸŽ¯';
    title = 'Good Job! You Passed!';
    desc = 'You have a solid understanding of phishing. Review the questions you missed to strengthen your knowledge.';
  } else if (pct >= 50) {
    icon = 'ðŸ“š';
    title = 'Keep Learning!';
    desc = 'You have some understanding but need more practice. Review the theory section and try again.';
  } else {
    icon = 'âš ï¸';
    title = 'Needs Improvement';
    desc = 'Your phishing awareness needs significant improvement. Please review all the educational materials and try the simulation again.';
  }

  document.getElementById('qr-icon').textContent = icon;
  document.getElementById('qr-title').textContent = title;
  document.getElementById('qr-desc').textContent = desc;

  // Show certificate button if passed
  if (pct >= 70) {
    document.getElementById('cert-btn').style.display = 'inline-flex';
  }

  // Save quiz results
  setSession('quizScore', { score, total: questions.length, pct, time: timeStr });
}

function resetQuiz() {
  sessionStorage.removeItem('phishlab_quizScore');
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-intro').style.display = 'block';
  document.getElementById('quiz-timer').textContent = 'â±ï¸ 00:00';
  currentQuestion = 0;
  score = 0;
  quizTime = 0;
}

