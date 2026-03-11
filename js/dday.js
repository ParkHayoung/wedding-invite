/**
 * D-Day 카운트다운
 */
(function () {
  // ⚠️ 결혼식 날짜를 수정하세요
  const weddingDate = new Date('2026-09-12T16:50:00+09:00');

  const daysEl = document.getElementById('dday-days');
  const hoursEl = document.getElementById('dday-hours');
  const minsEl = document.getElementById('dday-mins');
  const secsEl = document.getElementById('dday-secs');
  const messageEl = document.getElementById('dday-message');

  if (!daysEl) return;

  function update() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      daysEl.textContent = '0';
      hoursEl.textContent = '0';
      minsEl.textContent = '0';
      secsEl.textContent = '0';
      messageEl.textContent = '결혼식 당일입니다';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = mins;
    secsEl.textContent = secs;
    messageEl.textContent = '결혼식까지 ' + days + '일 남았습니다';
  }

  update();
  setInterval(update, 1000);
})();
