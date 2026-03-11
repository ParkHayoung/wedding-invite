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

  // 오버레이 닫힘 시 재생
  document.addEventListener('overlay:dismissed', tryPlay);

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
