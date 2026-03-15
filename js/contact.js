/**
 * 연락하기 섹션 동적 렌더링
 * js/config.js 의 WEDDING_CONFIG 를 참조합니다.
 */
(function () {
  const { groom, groomFather, groomMother, bride, brideFather, brideMother } = WEDDING_CONFIG;

  const ICON_PHONE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  const ICON_SMS   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;

  function contactRow(label, person) {
    if (!person.name) return '';
    return `
      <div class="contact__row">
        <div class="contact__info">
          <span class="contact__role">${label}</span>
          <span class="contact__person">${person.name}</span>
        </div>
        <div class="contact__btns">
          <a href="tel:${person.phone}" class="contact__btn" aria-label="${person.name} 전화">
            ${ICON_PHONE} 전화
          </a>
          <a href="sms:${person.phone}" class="contact__btn" aria-label="${person.name} 문자">
            ${ICON_SMS} 문자
          </a>
        </div>
      </div>`;
  }

  const html = `
    <div class="contact__group fade-up">
      <div class="contact__group-header">
        <span class="contact__group-icon">🤵🏻</span>
        <span>신랑측</span>
      </div>
      ${contactRow('신랑',      groom)}
      ${contactRow('아버지',    groomFather)}
      ${contactRow('어머니',    groomMother)}
    </div>
    <div class="contact__group fade-up">
      <div class="contact__group-header">
        <span class="contact__group-icon">👰🏻‍♀️</span>
        <span>신부측</span>
      </div>
      ${contactRow('신부',      bride)}
      ${contactRow('아버지',    brideFather)}
      ${contactRow('어머니',    brideMother)}
    </div>`;

  const section = document.getElementById('contact');
  if (!section) return;

  const title = section.querySelector('.section__title');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  title.insertAdjacentElement('afterend', wrapper);
})();
