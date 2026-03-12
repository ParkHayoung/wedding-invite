/**
 * 카카오맵 임베드 + 네이버/카카오/티맵 길안내 딥링크
 * js/config.js 의 WEDDING_CONFIG 를 참조합니다.
 */
(function () {
  var C = WEDDING_CONFIG;

  // 카카오맵 임베드 - SDK 로딩 완료 후 실행
  function initMap() {
    var mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    var position = new kakao.maps.LatLng(C.lat, C.lng);
    var map = new kakao.maps.Map(mapContainer, {
      center: position,
      level: 4
    });

    var marker = new kakao.maps.Marker({ map: map, position: position });

    var infowindow = new kakao.maps.InfoWindow({
      content: '<div style="padding:5px 10px;font-size:12px;white-space:nowrap;">' + C.venue + '</div>'
    });
    infowindow.open(map, marker);

    // 지도 드래그 비활성화 (모바일 스크롤 방해 방지)
    map.setDraggable(false);
    map.setZoomable(false);

    var toggleBtn = document.getElementById('mapToggle');
    var iconLock = toggleBtn && toggleBtn.querySelector('.map-toggle__icon--lock');
    var iconUnlock = toggleBtn && toggleBtn.querySelector('.map-toggle__icon--unlock');

    function setMapActive(active) {
      map.setDraggable(active);
      map.setZoomable(active);
      if (!toggleBtn) return;
      if (active) {
        toggleBtn.classList.add('is-active');
        if (iconLock) iconLock.hidden = true;
        if (iconUnlock) iconUnlock.hidden = false;
      } else {
        toggleBtn.classList.remove('is-active');
        if (iconLock) iconLock.hidden = false;
        if (iconUnlock) iconUnlock.hidden = true;
      }
    }

    // 지도 클릭 시 토글
    kakao.maps.event.addListener(map, 'click', function () {
      setMapActive(!map.getDraggable());
    });

    // 버튼 클릭 시 토글
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        setMapActive(!map.getDraggable());
      });
    }
  }

  if (window.kakao && kakao.maps) {
    kakao.maps.load(initMap);
  }

  // 네이버 지도 링크
  var naverLink = document.getElementById('naverMapLink');
  if (naverLink) {
    naverLink.href = 'https://map.naver.com/v5/search/' + encodeURIComponent(C.mapName);
    naverLink.target = '_blank';
    naverLink.rel = 'noopener';
  }

  // 카카오맵 링크
  var kakaoLink = document.getElementById('kakaoMapLink');
  if (kakaoLink) {
    kakaoLink.href = 'https://map.kakao.com/link/map/' + encodeURIComponent(C.mapName) + ',' + C.lat + ',' + C.lng;
    kakaoLink.target = '_blank';
    kakaoLink.rel = 'noopener';
  }

  // 티맵 링크 (길안내)
  var tmapLink = document.getElementById('tmapLink');
  if (tmapLink) {
    tmapLink.href = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=&name=' + encodeURIComponent(C.mapName) + '&lon=' + C.lng + '&lat=' + C.lat;
    tmapLink.target = '_blank';
    tmapLink.rel = 'noopener';

    tmapLink.addEventListener('click', function (e) {
      e.preventDefault();
      var tmapAppUrl = 'tmap://route?goalname=' + encodeURIComponent(C.mapName) + '&goaly=' + C.lat + '&goalx=' + C.lng;
      window.location.href = tmapAppUrl;

      setTimeout(function () {
        window.open('https://map.naver.com/v5/directions/-/' + C.lng + ',' + C.lat + ',' + encodeURIComponent(C.mapName), '_blank');
      }, 1500);
    });
  }
})();
