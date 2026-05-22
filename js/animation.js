/**
 * 스크롤 애니메이션 - Intersection Observer
 */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  window.observeFadeUp = function (root) {
    (root || document).querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
  };
})();
