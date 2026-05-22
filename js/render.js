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
      '<div class="parents-grid">' +
        '<span><span class="parent-name">' + gF + '</span> · <span class="parent-name">' + gM + '</span></span>' +
        '<span class="parents-grid__ui">의</span>' +
        '<span class="parents-grid__rel">아들</span>' +
        '<strong>' + C.groom.name + '</strong>' +
        '<span><span class="parent-name">' + bF + '</span> · <span class="parent-name">' + bM + '</span></span>' +
        '<span class="parents-grid__ui">의</span>' +
        '<span class="parents-grid__rel">딸</span>' +
        '<strong>' + C.bride.name + '</strong>' +
      '</div>';
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

})();

function renderAccount() {
  var C = WEDDING_CONFIG;

  var copySvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
    '<rect x="9" y="9" width="13" height="13" rx="2"/>' +
    '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
    '</svg>';

  function buildItems(items, roles) {
    return items.map(function (item, i) {
      var role = roles[i] || '';
      return '<div class="account__item">' +
        '<div class="account__meta">' +
          '<div class="account__name-row">' +
            (role ? '<span class="account__role">' + role + '</span>' : '') +
            '<span class="account__holder">' + item.holder + '</span>' +
          '</div>' +
          '<span class="account__bank-number">' + item.bank + ' ' + item.number + '</span>' +
        '</div>' +
        '<button class="account__copy-btn" data-copy="' + item.number + '">' +
          copySvg + '복사' +
        '</button>' +
      '</div>';
    }).join('');
  }

  var groomList = document.getElementById('groom-accounts');
  var brideList = document.getElementById('bride-accounts');
  if (groomList) groomList.innerHTML = buildItems(C.accounts.groom, ['신랑', '아버지', '어머니']);
  if (brideList) brideList.innerHTML = buildItems(C.accounts.bride, ['신부', '아버지', '어머니']);
}
