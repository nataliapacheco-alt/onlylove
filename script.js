const heartField = document.getElementById('heartField');
const confettiLayer = document.getElementById('confettiLayer');
const envelope = document.getElementById('openCard');
const hint = document.getElementById('hint');

const heartColors = ['#f32648', '#c70e35', '#ff526f', '#8f0929', '#ed244b'];

function addFloatingHeart(index) {
  const heart = document.createElement('span');
  heart.className = 'pixel-heart';
  const size = 12 + Math.random() * 24;
  heart.style.setProperty('--size', `${size}px`);
  heart.style.setProperty('--heart-color', heartColors[Math.floor(Math.random() * heartColors.length)]);
  heart.style.setProperty('--duration', `${9 + Math.random() * 13}s`);
  heart.style.setProperty('--delay', `${-Math.random() * 20}s`);
  heart.style.setProperty('--drift', `${Math.round(Math.random() * 150 - 75)}px`);
  heart.style.setProperty('--opacity', `${0.28 + Math.random() * 0.55}`);
  // Se distribuyen por toda la pantalla, con mayor presencia en los costados.
  const side = Math.random() < 0.5 ? Math.random() * 23 : 77 + Math.random() * 23;
  heart.style.left = `${side}%`;
  heart.style.animationDelay = `${-Math.random() * 22}s`;
  heartField.appendChild(heart);
}

for (let i = 0; i < 34; i++) addFloatingHeart(i);

function launchConfetti() {
  const colors = ['#ff3158', '#ff9caf', '#fff0f2', '#d90e3b', '#f7c4cf', '#a9092b'];
  for (let i = 0; i < 95; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--piece-color', colors[Math.floor(Math.random() * colors.length)]);
    piece.style.setProperty('--x', `${Math.random() * 620 - 310}px`);
    piece.style.setProperty('--y', `${Math.random() * 570 - 260}px`);
    piece.style.setProperty('--rot', `${Math.random() * 1000 - 500}deg`);
    piece.style.animationDelay = `${Math.random() * 180}ms`;
    if (Math.random() > 0.5) piece.style.borderRadius = '50%';
    confettiLayer.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove(), { once: true });
  }
}

envelope.addEventListener('click', () => {
  const isOpen = envelope.classList.toggle('open');
  if (isOpen) {
    hint.textContent = '♡ que hoy todo te salga bonito ♡';
    launchConfetti();
    // Un pequeño extra de corazones al abrir la sorpresa.
    for (let i = 0; i < 12; i++) {
      const heart = document.createElement('span');
      heart.className = 'pixel-heart';
      heart.style.left = `${12 + Math.random() * 76}%`;
      heart.style.setProperty('--size', `${15 + Math.random() * 20}px`);
      heart.style.setProperty('--heart-color', heartColors[Math.floor(Math.random() * heartColors.length)]);
      heart.style.setProperty('--duration', `${7 + Math.random() * 5}s`);
      heart.style.setProperty('--delay', '0s');
      heart.style.setProperty('--drift', `${Math.random() * 100 - 50}px`);
      heart.style.setProperty('--opacity', '.9');
      heartField.appendChild(heart);
      setTimeout(() => heart.remove(), 12000);
    }
  } else {
    hint.textContent = 'toca la tarjeta para abrirla ♡';
  }
});
