/**
 * 컨페티 효과
 * - overlay:dismissed 이벤트 시 색종이 폭죽 실행
 */
(function () {
  const COLORS = ['#f9c6d0', '#ffd700', '#ffffff', '#f4a7b9', '#e8c9a0', '#c8a2c8', '#b5d5c5', '#ffb347'];
  const COUNT = 120;

  function launch() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';

      const size = 5 + Math.random() * 9;
      const isCircle = Math.random() > 0.5;
      const drift = (Math.random() - 0.5) * 200;
      const spin = (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 360);
      const duration = 2.2 + Math.random() * 2;
      const delay = Math.random() * 1.2;

      el.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${isCircle ? size : size * (0.4 + Math.random() * 0.8)}px;
        background: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        border-radius: ${isCircle ? '50%' : '2px'};
        --drift: ${drift}px;
        --spin: ${spin}deg;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      container.appendChild(el);
    }

    setTimeout(() => container.remove(), 4500);
  }

  document.addEventListener('overlay:dismissed', launch);
})();
