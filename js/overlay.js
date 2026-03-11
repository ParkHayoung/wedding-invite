/**
 * 인트로 오버레이
 * - 오버레이 HTML을 동적으로 생성/주입
 * - 글자 페이드 → 커튼 오픈 순서로 애니메이션
 * - 닫힘 시 'overlay:dismissed' 이벤트 발행
 */
(function () {
  const overlay = document.createElement('div');
  overlay.id = 'music-overlay';
  overlay.className = 'music-overlay';
  overlay.innerHTML = `
    <div class="music-overlay__curtain music-overlay__curtain--left"></div>
    <div class="music-overlay__curtain music-overlay__curtain--right"></div>
    <div class="music-overlay__petals" id="music-overlay-petals"></div>
    <div class="music-overlay__inner">
      <p class="music-overlay__deco">🤵🏻 ✦ 👰🏻‍♀️</p>
      <p class="music-overlay__subtitle">We're getting married</p>
      <h2 class="music-overlay__names">문승현 &amp; 박하영</h2>
      <p class="music-overlay__date">2026. 09. 12. SAT</p>
      <p class="music-overlay__hint">터치하여 청첩장 열기</p>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  // 꽃잎 생성
  const petalContainer = overlay.querySelector('.music-overlay__petals');
  const petalEmojis = ['🌸', '🌺', '🌼'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = petalEmojis[i % petalEmojis.length];
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${4 + Math.random() * 5}s`;
    p.style.animationDelay = `${Math.random() * 6}s`;
    p.style.fontSize = `${0.7 + Math.random() * 0.8}rem`;
    petalContainer.appendChild(p);
  }

  function dismiss() {
    overlay.removeEventListener('click', dismiss);

    const inner = overlay.querySelector('.music-overlay__inner');
    const petals = overlay.querySelector('.music-overlay__petals');

    // 글자/꽃잎 페이드 아웃 (Web Animations API로 CSS 애니메이션 우선순위 우회)
    [inner, petals].forEach(el => {
      if (!el) return;
      el.style.animation = 'none';
      el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, fill: 'forwards' });
    });

    document.body.style.overflow = '';

    // 페이드 후 커튼 오픈
    setTimeout(() => overlay.classList.add('is-hidden'), 550);

    // 오버레이 제거
    setTimeout(() => overlay.remove(), 1300);

    // 음악 재생 신호
    document.dispatchEvent(new CustomEvent('overlay:dismissed'));
  }

  overlay.addEventListener('click', dismiss);
})();
