/**
 * 오시는 길 플로팅 버튼
 */
(function () {
  const btn = document.getElementById('floatingLocation');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.getElementById('location');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });

  btn.classList.add('is-visible');
})();
