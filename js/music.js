/**
 * 배경음악 플레이어
 * - 첫 사용자 인터랙션 시 자동 재생 시도 (브라우저 정책 대응)
 * - 버튼으로 재생/일시정지 토글
 */
(function () {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  if (!audio || !btn) return;

  const iconPlay = btn.querySelector('.music-btn__icon--play');
  const iconPause = btn.querySelector('.music-btn__icon--pause');

  let started = false;

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

  // 버튼 클릭: 토글
  btn.addEventListener('click', () => {
    started = true;
    if (audio.paused) {
      tryPlay();
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  // 첫 사용자 인터랙션 시 자동 재생 시도
  function onFirstInteraction() {
    if (started) return;
    started = true;
    tryPlay();
    document.removeEventListener('touchstart', onFirstInteraction);
    document.removeEventListener('click', onFirstInteraction);
  }

  document.addEventListener('touchstart', onFirstInteraction, { once: true });
  document.addEventListener('click', onFirstInteraction, { once: true });
  document.addEventListener('scroll', onFirstInteraction, { once: true });
})();
