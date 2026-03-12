/**
 * WEDDING_CONFIG 를 기반으로 각 섹션을 렌더링합니다.
 * config.js 이후에 로드되어야 합니다.
 */
(function () {
  var C = WEDDING_CONFIG;

  /* ─── 히어로 ──────────────────────────────────── */
  var hero = document.getElementById('hero');
  if (hero) {
    hero.innerHTML =
      '<p class="hero__label fade-up">Wedding Invitation</p>' +
      '<h1 class="hero__names fade-up">' +
        '<span class="hero__groom">' + C.groom.name + '</span>' +
        '<span class="hero__amp">&amp;</span>' +
        '<span class="hero__bride">' + C.bride.name + '</span>' +
      '</h1>' +
      '<p class="hero__date fade-up">' + C.heroDate + '</p>' +
      '<p class="hero__venue fade-up">' + C.venue + '</p>';
  }

  /* ─── 인사말 텍스트 ──────────────────────────── */
  var greetingText = document.getElementById('greeting-text');
  if (greetingText) {
    greetingText.innerHTML = C.greetingText;
  }

  /* ─── 인사말 부모 소개 ───────────────────────── */
  var parents = document.getElementById('greeting-parents');
  if (parents) {
    var gF = C.groomFather.name || '○○○';
    var gM = C.groomMother.name || '○○○';
    var bF = C.brideFather.name || '○○○';
    var bM = C.brideMother.name || '○○○';
    parents.innerHTML =
      '<p><span class="parent-name">' + gF + '</span> · <span class="parent-name">' + gM + '</span>의 아들 <strong>' + C.groom.name + '</strong></p>' +
      '<p><span class="parent-name">' + bF + '</span> · <span class="parent-name">' + bM + '</span>의 딸 <strong>' + C.bride.name + '</strong></p>';
  }

  /* ─── 오시는 길 주소 ─────────────────────────── */
  var locationAddress = document.getElementById('location-address');
  if (locationAddress) {
    locationAddress.innerHTML =
      '<div class="location__info-card">' +
        '<div class="location__pin">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
            '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>' +
            '<circle cx="12" cy="10" r="3"/>' +
          '</svg>' +
        '</div>' +
        '<div class="location__info-text">' +
          '<p class="location__venue-name">' + C.venue + '</p>' +
          '<p class="location__address-text">' + C.address + '</p>' +
        '</div>' +
      '</div>' +
      '<button class="btn btn--copy location__copy-btn" data-copy="' + C.address + '">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
          '<rect x="9" y="9" width="13" height="13" rx="2"/>' +
          '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
        '</svg>' +
        '주소 복사' +
      '</button>';
  }

  /* ─── 계좌 섹션 ──────────────────────────────── */
  var account = document.getElementById('account');
  if (account) {
    var arrowSvg =
      '<svg class="account__arrow" width="16" height="16" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="2">' +
      '<polyline points="6 9 12 15 18 9"/></svg>';

    function buildAccountGroup(label, id, items) {
      var itemsHtml = items.map(function (item) {
        var full = item.bank + ' ' + item.number;
        return '<div class="account__item">' +
          '<p class="account__info">' + full + '</p>' +
          '<p class="account__holder">예금주: ' + item.holder + '</p>' +
          '<button class="btn btn--copy" data-copy="' + full + '">복사</button>' +
          '</div>';
      }).join('');
      return '<div class="account__group">' +
        '<button class="account__toggle" data-target="' + id + '">' +
          label + ' ' + arrowSvg +
        '</button>' +
        '<div class="account__list" id="' + id + '" hidden>' + itemsHtml + '</div>' +
        '</div>';
    }

    var wrapper = document.createElement('div');
    wrapper.innerHTML =
      buildAccountGroup('신랑측 계좌번호', 'groom-accounts', C.accounts.groom) +
      buildAccountGroup('신부측 계좌번호', 'bride-accounts', C.accounts.bride);

    var title = account.querySelector('.section__title');
    title.insertAdjacentElement('afterend', wrapper);
  }

})();
