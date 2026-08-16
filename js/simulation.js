/* This simulation is created by Atharv Hogade. Do not misuse it. */
/* ============================================================
   EMAIL INBOX SIMULATION — Logic & Data
   ============================================================ */

const emails = [
  {
    id: 1,
    sender: 'Google Security',
    senderEmail: 'no-reply@accounts.google.com',
    to: 'you@gmail.com',
    subject: 'Security Alert: New sign-in from Windows',
    time: '10:32 AM',
    avatar: '#4285F4',
    avatarLetter: 'G',
    unread: true,
    isPhishing: false,
    body: `
      <p>Hi User,</p>
      <p>Your Google Account was just signed in to from a new Windows device. If this was you, you don't need to do anything. If not, we'll help you secure your account.</p>
      <p><strong>New sign-in:</strong></p>
      <ul style="margin: 12px 0; padding-left: 20px; list-style: disc;">
        <li>Device: Windows PC</li>
        <li>Location: New Delhi, India</li>
        <li>Time: Today, 10:28 AM IST</li>
      </ul>
      <p>If this activity wasn't you, go to your <a href="#">Google Account security settings</a> to secure your account.</p>
      <p>Thanks,<br>The Google Accounts Team</p>
    `,
    flags: [],
    explanation: 'This is a <strong>legitimate email</strong> from Google. The sender address is correct (accounts.google.com), the tone is professional, and it doesn\'t ask for your password.'
  },
  {
    id: 2,
    sender: 'Micr0soft Support',
    senderEmail: 'security@micr0soft-verify.com',
    to: 'you@outlook.com',
    subject: 'URGENT: Your account has been compromised!',
    time: '09:15 AM',
    avatar: '#FF4757',
    avatarLetter: 'M',
    unread: true,
    isPhishing: true,
    body: `
      <p>Dear Valued Customer,</p>
      <p>We have detected <strong>suspicious activity</strong> on your Microsoft account. Your account will be <span style="color: var(--accent-red); font-weight: 700;">PERMANENTLY LOCKED</span> within 24 hours if you do not verify your identity immediately.</p>
      <p>Click the link below to verify your account and prevent suspension:</p>
      <p><a href="#" style="color: var(--accent-blue);">https://micr0soft-verify.com/secure/login</a></p>
      <p>If you do not act within 24 hours, your account and all associated data will be permanently deleted.</p>
      <p>Sincerely,<br>Microsoft Security Team</p>
    `,
    flags: [
      'Sender email uses "micr0soft" (zero instead of "o") — a common phishing trick',
      'Domain is "micr0soft-verify.com" — NOT an official Microsoft domain',
      'Creates extreme urgency ("PERMANENTLY LOCKED in 24 hours")',
      'Threatens data deletion to cause panic',
      'Uses generic greeting "Dear Valued Customer" instead of your name'
    ],
    explanation: 'This is a <strong>phishing email</strong>! Notice the misspelled sender domain, urgency tactics, and threatening language — classic phishing red flags.'
  },
  {
    id: 3,
    sender: 'Amazon',
    senderEmail: 'order-update@amazon.in',
    to: 'you@gmail.com',
    subject: 'Your order #402-8832915 has been shipped!',
    time: '08:44 AM',
    avatar: '#FF9900',
    avatarLetter: 'A',
    unread: false,
    isPhishing: false,
    body: `
      <p>Hello,</p>
      <p>Great news! Your order has been shipped and is on its way.</p>
      <p><strong>Order Details:</strong></p>
      <ul style="margin: 12px 0; padding-left: 20px; list-style: disc;">
        <li>Order #402-8832915</li>
        <li>Item: Logitech MX Master 3S Wireless Mouse</li>
        <li>Estimated delivery: Aug 18-20, 2026</li>
        <li>Carrier: Amazon Logistics</li>
      </ul>
      <p>Track your package on the <a href="#">Amazon app</a> or website.</p>
      <p>Thank you for shopping with Amazon!</p>
    `,
    flags: [],
    explanation: 'This is a <strong>legitimate email</strong> from Amazon India. The sender domain (amazon.in) is correct, it contains a specific order number, and doesn\'t ask for sensitive information.'
  },
  {
    id: 4,
    sender: 'PayPaI Security',
    senderEmail: 'alert@paypal-secure-verify.net',
    to: 'you@gmail.com',
    subject: 'Action Required: Unusual login activity detected',
    time: '07:58 AM',
    avatar: '#003087',
    avatarLetter: 'P',
    unread: true,
    isPhishing: true,
    body: `
      <p>Dear Customer,</p>
      <p>We noticed unusual login activity on your PayPal account from an unrecognized device in <strong>Lagos, Nigeria</strong>.</p>
      <p>If this wasn't you, please verify your identity immediately by clicking the secure link below:</p>
      <p><a href="#" style="color: var(--accent-blue);">https://paypal-secure-verify.net/confirm-identity</a></p>
      <p>Please enter your:</p>
      <ul style="margin: 12px 0; padding-left: 20px; list-style: disc;">
        <li>Email address</li>
        <li>Password</li>
        <li>Credit card number (for verification)</li>
        <li>SSN (last 4 digits)</li>
      </ul>
      <p>Failure to verify within 12 hours will result in account restriction.</p>
      <p>PayPaI Security Team</p>
    `,
    flags: [
      'Sender name is "PayPaI" (capital I instead of lowercase L) — visual spoofing',
      'Domain "paypal-secure-verify.net" is NOT paypal.com',
      'Asks for credit card number and SSN — PayPal never does this via email',
      'Creates urgency with "12 hours" deadline',
      'Uses a suspicious non-PayPal URL'
    ],
    explanation: 'This is a <strong>phishing email</strong>! The sender uses "PayPaI" (capital I), asks for credit card and SSN via email, and uses a fake domain. PayPal NEVER requests sensitive data via email.'
  },
  {
    id: 5,
    sender: 'LinkedIn',
    senderEmail: 'notifications@linkedin.com',
    to: 'you@gmail.com',
    subject: 'You have 3 new connection requests',
    time: 'Yesterday',
    avatar: '#0077B5',
    avatarLetter: 'L',
    unread: false,
    isPhishing: false,
    body: `
      <p>Hi there,</p>
      <p>You have 3 new connection requests waiting for you on LinkedIn:</p>
      <ul style="margin: 12px 0; padding-left: 20px; list-style: disc;">
        <li><strong>Priya Sharma</strong> — Software Engineer at Google</li>
        <li><strong>Rahul Verma</strong> — Data Scientist at Microsoft</li>
        <li><strong>Sarah Chen</strong> — Product Manager at Meta</li>
      </ul>
      <p>Visit your <a href="#">LinkedIn profile</a> to accept or decline these requests.</p>
      <p>Thanks,<br>The LinkedIn Team</p>
    `,
    flags: [],
    explanation: 'This is a <strong>legitimate email</strong> from LinkedIn. The sender domain is correct, the tone is professional, and it only asks you to visit the official platform.'
  },
  {
    id: 6,
    sender: 'Netflix Support',
    senderEmail: 'billing@netflix-payment-update.com',
    to: 'you@gmail.com',
    subject: 'Your payment method has expired — Update now to avoid suspension',
    time: 'Yesterday',
    avatar: '#E50914',
    avatarLetter: 'N',
    unread: true,
    isPhishing: true,
    body: `
      <p>Dear Netflix Member,</p>
      <p>We were unable to process your monthly payment because the credit card on file has expired.</p>
      <p>To continue enjoying Netflix without interruption, please update your payment information within <strong>48 hours</strong>:</p>
      <p><a href="#" style="color: var(--accent-blue);">https://netflix-payment-update.com/billing/update</a></p>
      <p>If your payment is not updated, your account will be suspended and you will lose access to all your saved profiles and watch history.</p>
      <p>Thank you,<br>Netflix Billing Department</p>
    `,
    flags: [
      'Domain "netflix-payment-update.com" is NOT netflix.com',
      'Creates urgency ("48 hours" or suspension)',
      'Threatens loss of profiles and watch history',
      'Official Netflix billing emails come from info@mailer.netflix.com',
      'Does not address you by your account name'
    ],
    explanation: 'This is a <strong>phishing email</strong>! Netflix sends billing emails from @mailer.netflix.com, not random domains. The urgency and threat of data loss are classic phishing tactics.'
  }
];

let currentEmailId = null;
let answers = {};
let answeredCount = 0;

function initSimulation() {
  renderEmailList();

  // Restore previous answers if any
  const saved = getSession('simAnswers');
  if (saved) {
    answers = saved;
    answeredCount = Object.keys(answers).length;
    updateScore();
    if (answeredCount >= emails.length) {
      showResults();
    }
  }
}

function renderEmailList() {
  const list = document.getElementById('email-list');
  list.innerHTML = emails.map(email => {
    const answered = answers[email.id];
    let statusBadge = '';
    if (answered) {
      const isCorrect = (answered === 'phishing' && email.isPhishing) || (answered === 'safe' && !email.isPhishing);
      statusBadge = isCorrect
        ? '<span class="badge badge-green" style="margin-left: auto;"><i class="fa-solid fa-check" style="margin-right: 4px;"></i> Correct</span>'
        : '<span class="badge badge-red" style="margin-left: auto;"><i class="fa-solid fa-xmark" style="margin-right: 4px;"></i> Wrong</span>';
    }
    return `
      <div class="email-item ${email.unread && !answered ? 'unread' : ''}" onclick="openEmail(${email.id})" style="opacity: ${answered ? '0.7' : '1'};">
        <div class="email-avatar" style="background: ${email.avatar};">${email.avatarLetter}</div>
        <div class="email-content-preview">
          <div class="email-sender">${email.sender} &lt;${email.senderEmail}&gt;</div>
          <div class="email-subject">${email.subject}</div>
          <div class="email-snippet">Click to read the full email...</div>
        </div>
        ${statusBadge}
        <div class="email-time">${email.time}</div>
      </div>
    `;
  }).join('');
}

function openEmail(id) {
  currentEmailId = id;
  const email = emails.find(e => e.id === id);
  if (!email) return;

  document.getElementById('email-list').style.display = 'none';
  const detail = document.getElementById('email-detail');
  detail.classList.add('active');

  document.getElementById('detail-subject').textContent = email.subject;
  document.getElementById('detail-from').innerHTML = `From: <strong>${email.sender}</strong> &lt;${email.senderEmail}&gt;`;
  document.getElementById('detail-to').textContent = `To: ${email.to}`;
  document.getElementById('detail-time').textContent = email.time;
  document.getElementById('detail-body').innerHTML = email.body;

  const actions = document.getElementById('email-actions');
  if (answers[id]) {
    actions.style.display = 'none';
  } else {
    actions.style.display = 'flex';
  }
}

function backToList() {
  document.getElementById('email-list').style.display = 'block';
  document.getElementById('email-detail').classList.remove('active');
  currentEmailId = null;
}

function markEmail(choice) {
  if (!currentEmailId || answers[currentEmailId]) return;

  const email = emails.find(e => e.id === currentEmailId);
  answers[email.id] = choice;
  answeredCount++;
  setSession('simAnswers', answers);

  const isCorrect = (choice === 'phishing' && email.isPhishing) || (choice === 'safe' && !email.isPhishing);

  // Show feedback
  const overlay = document.getElementById('feedback-overlay');
  const icon = document.getElementById('feedback-icon');
  const title = document.getElementById('feedback-title');
  const text = document.getElementById('feedback-text');
  const flags = document.getElementById('feedback-flags');

  if (isCorrect) {
    icon.innerHTML = '<i class="fa-solid fa-circle-check" style="color: var(--accent-green);"></i>';
    title.textContent = 'Correct!';
    title.style.color = 'var(--accent-green)';
  } else {
    icon.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: var(--accent-red);"></i>';
    title.textContent = 'Incorrect!';
    title.style.color = 'var(--accent-red)';
  }

  text.innerHTML = email.explanation;

  if (email.flags.length > 0) {
    flags.innerHTML = `
      <div style="margin-top: 16px; padding: 16px; background: rgba(255,71,87,0.08); border-radius: 8px; border: 1px solid rgba(255,71,87,0.2);">
        <strong style="color: var(--accent-red); font-size: 13px;"><i class="fa-solid fa-flag" style="margin-right: 6px;"></i> Red Flags:</strong>
        <ul style="margin-top: 8px; padding-left: 6px; list-style: none;">
          ${email.flags.map(f => `<li style="font-size: 13px; color: var(--text-secondary); margin-bottom: 6px;"><i class="fa-solid fa-circle-exclamation" style="color: var(--accent-red); margin-right: 6px; font-size: 11px;"></i> ${f}</li>`).join('')}
        </ul>
      </div>
    `;
  } else {
    flags.innerHTML = '';
  }

  overlay.classList.add('active');
  updateScore();
}

function closeFeedback() {
  document.getElementById('feedback-overlay').classList.remove('active');
  backToList();
  renderEmailList();

  if (answeredCount >= emails.length) {
    showResults();
  }
}

function updateScore() {
  let correct = 0;
  Object.keys(answers).forEach(id => {
    const email = emails.find(e => e.id === parseInt(id));
    const choice = answers[id];
    if ((choice === 'phishing' && email.isPhishing) || (choice === 'safe' && !email.isPhishing)) {
      correct++;
    }
  });

  document.getElementById('score-badge').innerHTML = `<i class="fa-solid fa-star" style="margin-right: 4px;"></i> Score: ${correct}/${emails.length}`;
  setSession('simScore', { correct, total: emails.length, answers });
}

function showResults() {
  const simResults = document.getElementById('sim-results');
  simResults.style.display = 'block';

  let correct = 0;
  let wrong = 0;

  let breakdownHTML = '<div class="grid-2" style="margin-top: 20px;">';

  emails.forEach(email => {
    const choice = answers[email.id];
    const isCorrect = (choice === 'phishing' && email.isPhishing) || (choice === 'safe' && !email.isPhishing);
    if (isCorrect) correct++;
    else wrong++;

    breakdownHTML += `
      <div class="card" style="border-left: 3px solid ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'};">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="font-size: 14px;">${email.subject}</strong>
          <span class="badge ${isCorrect ? 'badge-green' : 'badge-red'}"><i class="fa-solid ${isCorrect ? 'fa-check' : 'fa-xmark'}" style="margin-right: 4px;"></i> ${isCorrect ? 'Correct' : 'Wrong'}</span>
        </div>
        <p style="font-size: 13px; color: var(--text-muted);">
          Type: <strong style="color: ${email.isPhishing ? 'var(--accent-red)' : 'var(--accent-green)'};">${email.isPhishing ? 'Phishing' : 'Legitimate'}</strong>
          — You chose: <strong>${choice === 'phishing' ? 'Phishing' : 'Safe'}</strong>
        </p>
      </div>
    `;
  });

  breakdownHTML += '</div>';

  document.getElementById('result-correct').textContent = correct;
  document.getElementById('result-wrong').textContent = wrong;
  document.getElementById('result-score').textContent = Math.round((correct / emails.length) * 100) + '%';
  document.getElementById('result-breakdown').innerHTML = breakdownHTML;

  setSession('simComplete', true);

  simResults.scrollIntoView({ behavior: 'smooth' });
}
