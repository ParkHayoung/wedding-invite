/**
 * 갤러리 - 라이트박스 뷰어
 */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid || !WEDDING_CONFIG.gallery || !WEDDING_CONFIG.gallery.length) return;

  grid.innerHTML = '';
  WEDDING_CONFIG.gallery.forEach((item, i) => {
    const url = typeof item === 'string' ? item : item.url;
    const position = typeof item === 'object' && item.position ? item.position : 'center';
    const div = document.createElement('div');
    div.className = 'gallery__item fade-up';
    const img = document.createElement('img');
    img.src = url;
    img.alt = '웨딩 사진 ' + (i + 1);
    img.style.objectPosition = position;
    div.appendChild(img);
    grid.appendChild(div);
  });

  if (window.observeFadeUp) window.observeFadeUp(grid);

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const counter = lightbox.querySelector('.lightbox__counter');
  const items = grid.querySelectorAll('.gallery__item');
  const images = Array.from(items).map(item => item.querySelector('img').src);
  let currentIndex = 0;

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

  items.forEach((item, i) => item.addEventListener('click', () => open(i)));

  lightbox.querySelector('.lightbox__close').addEventListener('click', close);
  lightbox.querySelector('.lightbox__nav--prev').addEventListener('click', prev);
  lightbox.querySelector('.lightbox__nav--next').addEventListener('click', next);

  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  });
}
