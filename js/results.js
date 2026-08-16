/* ============================================================
   RESULTS DASHBOARD — Logic & Charts
   ============================================================ */

const emailData = [
  { id: 1, subject: 'Security Alert: New sign-in', sender: 'Google', isPhishing: false },
  { id: 2, subject: 'URGENT: Account compromised!', sender: 'Micr0soft', isPhishing: true },
  { id: 3, subject: 'Your order has been shipped!', sender: 'Amazon', isPhishing: false },
  { id: 4, subject: 'Unusual login activity', sender: 'PayPaI', isPhishing: true },
  { id: 5, subject: 'New connection requests', sender: 'LinkedIn', isPhishing: false },
  { id: 6, subject: 'Payment method expired', sender: 'Netflix', isPhishing: true },
];

document.addEventListener('DOMContentLoaded', () => {
  const simScore = getSession('simScore');

  if (!simScore || !simScore.answers || Object.keys(simScore.answers).length === 0) {
    document.getElementById('no-results').style.display = 'block';
    return;
  }

  document.getElementById('results-content').style.display = 'block';

  const answers = simScore.answers;
  let correct = 0;
  let wrong = 0;
  const perEmail = [];

  emailData.forEach(email => {
    const choice = answers[email.id];
    if (!choice) return;
    const isCorrect = (choice === 'phishing' && email.isPhishing) || (choice === 'safe' && !email.isPhishing);
    if (isCorrect) correct++;
    else wrong++;
    perEmail.push({ ...email, choice, isCorrect });
  });

  const total = correct + wrong;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Risk level
  let riskLevel, riskIcon, riskColor, riskTitle, riskDesc;
  if (accuracy >= 80) {
    riskLevel = 'Low';
    riskIcon = '🛡️';
    riskColor = 'var(--accent-green)';
    riskTitle = 'Low Risk — Great Awareness!';
    riskDesc = 'You correctly identified most phishing emails. You have strong awareness of phishing techniques. Keep staying vigilant and keep learning!';
  } else if (accuracy >= 50) {
    riskLevel = 'Medium';
    riskIcon = '⚠️';
    riskColor = 'var(--accent-orange)';
    riskTitle = 'Medium Risk — Room for Improvement';
    riskDesc = 'You missed some phishing emails. Review the red flags and take the knowledge quiz to strengthen your defenses.';
  } else {
    riskLevel = 'High';
    riskIcon = '🚨';
    riskColor = 'var(--accent-red)';
    riskTitle = 'High Risk — Vulnerable to Attacks';
    riskDesc = 'You fell for most phishing emails. This means you would be highly vulnerable in a real attack. Please review the theory section and retake the simulation.';
  }

  // Update stats
  document.getElementById('r-correct').textContent = correct;
  document.getElementById('r-wrong').textContent = wrong;
  document.getElementById('r-accuracy').textContent = accuracy + '%';

  const riskEl = document.getElementById('r-risk');
  riskEl.textContent = riskLevel;
  riskEl.style.background = `linear-gradient(135deg, ${riskColor}, ${riskColor})`;
  riskEl.style.webkitBackgroundClip = 'text';
  riskEl.style.webkitTextFillColor = 'transparent';
  riskEl.style.backgroundClip = 'text';

  // Risk card
  document.getElementById('risk-icon').textContent = riskIcon;
  const rTitle = document.getElementById('risk-title');
  rTitle.textContent = riskTitle;
  rTitle.style.color = riskColor;
  document.getElementById('risk-desc').textContent = riskDesc;
  document.getElementById('risk-card').style.borderLeft = `3px solid ${riskColor}`;

  // Breakdown
  const breakdownGrid = document.getElementById('breakdown-grid');
  breakdownGrid.innerHTML = perEmail.map(e => `
    <div class="card" style="border-left: 3px solid ${e.isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'};">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <strong style="font-size: 14px;">${e.subject}</strong>
        <span class="badge ${e.isCorrect ? 'badge-green' : 'badge-red'}">${e.isCorrect ? '✅ Correct' : '❌ Wrong'}</span>
      </div>
      <p style="font-size: 13px; color: var(--text-muted);">
        From: <strong>${e.sender}</strong> —
        Type: <strong style="color: ${e.isPhishing ? 'var(--accent-red)' : 'var(--accent-green)'};">${e.isPhishing ? 'Phishing' : 'Legitimate'}</strong> —
        You chose: <strong>${e.choice === 'phishing' ? 'Phishing' : 'Safe'}</strong>
      </p>
    </div>
  `).join('');

  // Charts
  renderCharts(correct, wrong, perEmail);
});

function renderCharts(correct, wrong, perEmail) {
  // Pie Chart
  const pieCtx = document.getElementById('pie-chart').getContext('2d');
  new Chart(pieCtx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        data: [correct, wrong],
        backgroundColor: ['#00ff88', '#ff4757'],
        borderColor: ['rgba(0,255,136,0.3)', 'rgba(255,71,87,0.3)'],
        borderWidth: 2,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#9aa5c4', font: { family: 'Inter', size: 13 }, padding: 20 }
        }
      },
      cutout: '65%',
    }
  });

  // Bar Chart
  const barCtx = document.getElementById('bar-chart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: perEmail.map(e => e.sender),
      datasets: [{
        label: 'Result',
        data: perEmail.map(e => e.isCorrect ? 1 : -1),
        backgroundColor: perEmail.map(e => e.isCorrect ? 'rgba(0,255,136,0.6)' : 'rgba(255,71,87,0.6)'),
        borderColor: perEmail.map(e => e.isCorrect ? '#00ff88' : '#ff4757'),
        borderWidth: 1,
        borderRadius: 6,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: v => v === 1 ? 'Correct' : v === -1 ? 'Wrong' : '',
            color: '#9aa5c4',
            font: { family: 'Inter', size: 12 }
          },
          grid: { color: 'rgba(255,255,255,0.05)' },
          min: -1.5,
          max: 1.5,
        },
        x: {
          ticks: { color: '#9aa5c4', font: { family: 'Inter', size: 12 } },
          grid: { display: false },
        }
      },
      plugins: {
        legend: { display: false },
      }
    }
  });
}
