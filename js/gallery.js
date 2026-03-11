/**
 * 갤러리 - 라이트박스 뷰어
 */
(function () {
  const items = document.querySelectorAll('.gallery__item');
  if (!items.length) return;

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const counter = lightbox.querySelector('.lightbox__counter');
  let currentIndex = 0;

  const images = Array.from(items).map(item => item.querySelector('img').src);

  function open(index) {
    currentIndex = index;
    update();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function update() {
    lightboxImg.src = images[currentIndex];
    counter.textContent = (currentIndex + 1) + ' / ' + images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    update();
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    update();
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => open(i));
  });

  lightbox.querySelector('.lightbox__close').addEventListener('click', close);
  lightbox.querySelector('.lightbox__nav--prev').addEventListener('click', prev);
  lightbox.querySelector('.lightbox__nav--next').addEventListener('click', next);

  // 배경 클릭으로 닫기
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  // 스와이프
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  });
})();
