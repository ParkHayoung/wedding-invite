/**
 * 모바일 청첩장 메인 스크립트
 */
(function () {
  // 주소/계좌 복사 (이벤트 위임)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const text = btn.dataset.copy;
    const msg = btn.classList.contains('account__copy-btn') ? '계좌번호가 복사되었습니다' : '복사되었습니다';
    navigator.clipboard.writeText(text).then(() => {
      showToast(msg);
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(msg);
    });
  });

  // 계좌 토글 (이벤트 위임)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.account__toggle');
    if (!btn) return;
    const target = document.getElementById(btn.dataset.target);
    const isOpen = !target.hidden;
    target.hidden = isOpen;
    btn.classList.toggle('open', !isOpen);
  });

  // 토스트 메시지
  let toastEl = null;
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }

    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add('show');

    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2000);
  }
})();
