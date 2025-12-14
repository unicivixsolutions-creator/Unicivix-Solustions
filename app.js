// ========== FOOTER YEAR ==========
document.getElementById('year').textContent = new Date().getFullYear();

// ========== LOTTIE ANIMATION (optional) ==========
window.addEventListener('DOMContentLoaded', () => {
  try {
    lottie.loadAnimation({
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'logo-lottie.json' // optional — remove if not needed
    });
  } catch (e) {
    console.warn("Lottie not loaded:", e);
  }
});
// Subtle 3D tilt on the featured partner card div got the trump card [title card]
  (() => {
    const card = document.querySelector('[data-tilt-card]');
    if (!card) return;

    const damp = 20;      // lower = stronger tilt
    const maxDeg = 6;     // cap rotation
    let rect = null;

    const setRect = () => { rect = card.getBoundingClientRect(); };
    setRect();
    window.addEventListener('resize', setRect);

    card.addEventListener('mousemove', (e) => {
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / damp;
      const dy = (e.clientY - cy) / damp;

      const rx = Math.max(-maxDeg, Math.min(maxDeg, -dy));
      const ry = Math.max(-maxDeg, Math.min(maxDeg, dx));

      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  })();

  