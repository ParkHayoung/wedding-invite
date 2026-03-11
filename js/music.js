/**
 * 배경음악 플레이어
 * - overlay:dismissed 이벤트 수신 시 음악 재생
 * - 버튼으로 재생/일시정지 토글
 */
(function () {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
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

  // 오버레이 탭 시 재생 (iOS는 커스텀 이벤트가 사용자 제스처로 인정 안 됨 → 직접 click 수신)
  const overlay = document.getElementById('music-overlay');
  if (overlay) {
    overlay.addEventListener('click', tryPlay, { once: true });
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
