/**
 * 모바일 청첩장 메인 스크립트
 */
(function () {
  // 주소/계좌 복사
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        showToast('복사되었습니다');
      }).catch(() => {
        // fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('복사되었습니다');
      });
    });
  });

  // 계좌 토글
  document.querySelectorAll('.account__toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const target = document.getElementById(targetId);
      const isOpen = !target.hidden;

      target.hidden = isOpen;
      btn.classList.toggle('open', !isOpen);
    });
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
