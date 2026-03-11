(function () {
  const COLORS = {
    hero:     '#fdf8f3', // 따뜻한 크림
    greeting: '#fdf2f4', // 소프트 블러쉬
    gallery:  '#f5f0fa', // 소프트 라벤더
    info:     '#f0f7f4', // 소프트 세이지
    dday:     '#fdf9ec', // 웜 골드
    location: '#fdf3ed', // 소프트 피치
    contact:  '#fdf0f5', // 소프트 로즈
    account:  '#faf5f0', // 웜 아이보리
  };

  const bg = document.getElementById('bg-gradient');
  if (!bg) return;

  bg.style.backgroundColor = COLORS.hero;

  const observer = new IntersectionObserver((entries) => {
    let best = null;
    let bestRatio = 0;
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
        bestRatio = entry.intersectionRatio;
        best = entry.target.id;
      }
    });
    if (best && COLORS[best]) {
      bg.style.backgroundColor = COLORS[best];
    }
  }, { threshold: [0.15, 0.4, 0.6] });

  Object.keys(COLORS).forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
