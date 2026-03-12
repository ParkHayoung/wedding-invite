/**
 * 연락하기 섹션 동적 렌더링
 * js/config.js 의 WEDDING_CONFIG 를 참조합니다.
 */
(function () {
  const { groom, groomFather, groomMother, bride, brideFather, brideMother } = WEDDING_CONFIG;

  function contactRow(label, person) {
    if (!person.name) return '';
    return `
      <div class="contact__row">
        <span class="contact__name">
          <span class="contact__role">${label}</span>
          <span class="contact__person">${person.name}</span>
        </span>
        <div class="contact__btns">
          <a href="tel:${person.phone}" class="btn btn--icon" aria-label="전화">📞</a>
          <a href="sms:${person.phone}" class="btn btn--icon" aria-label="문자">💬</a>
        </div>
      </div>`;
  }

  const html = `
    <div class="contact__group">
      <h3 class="contact__label">🤵🏻 신랑측</h3>
      ${contactRow('신랑',     groom)}
      ${contactRow('신랑아버지', groomFather)}
      ${contactRow('신랑어머니', groomMother)}
    </div>
    <div class="contact__group">
      <h3 class="contact__label">👰🏻‍♀️ 신부측</h3>
      ${contactRow('신부',     bride)}
      ${contactRow('신부아버지', brideFather)}
      ${contactRow('신부어머니', brideMother)}
    </div>`;

  const section = document.getElementById('contact');
  if (!section) return;

  const title = section.querySelector('.section__title');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  wrapper.querySelectorAll('.contact__group').forEach((el) => el.classList.add('fade-up'));
  title.insertAdjacentElement('afterend', wrapper);
})();
