/**
 * 배경음악 플레이어
 * - 오버레이 탭 시 음악 재생 + 오버레이 닫힘
 * - 버튼으로 재생/일시정지 토글
 */
(function () {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  const overlay = document.getElementById('music-overlay');
  if (!audio || !btn) return;

  const iconPlay = btn.querySelector('.music-btn__icon--play');
  const iconPause = btn.querySelector('.music-btn__icon--pause');

  function setPlaying(playing) {
    iconPlay.hidden = playing;
    iconPause.hidden = !playing;
    btn.classList.toggle('music-btn--playing', playing);
  }

  function tryPlay() {
    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      setPlaying(false);
    });
  }

  // 꽃잎 생성
  const petalContainer = document.getElementById('music-overlay-petals');
  if (petalContainer) {
    const petals = ['🌸', '🌺', '🌼'];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('span');
      p.className = 'petal';
      p.textContent = petals[i % petals.length];
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${4 + Math.random() * 5}s`;
      p.style.animationDelay = `${Math.random() * 6}s`;
      p.style.fontSize = `${0.7 + Math.random() * 0.8}rem`;
      petalContainer.appendChild(p);
    }
  }

  // 오버레이 탭: 닫고 재생
  if (overlay) {
    document.body.style.overflow = 'hidden';
    overlay.addEventListener('click', () => {
      overlay.classList.add('is-hidden');
      document.body.style.overflow = '';
      setTimeout(() => overlay.remove(), 650);
      tryPlay();
    });
  }

  // 재생/일시정지 버튼
  btn.addEventListener('click', () => {
    if (audio.paused) {
      tryPlay();
    } else {
      audio.pause();
      setPlaying(false);
    }
  });
})();
