/**
 * 카카오맵 임베드 + 네이버/카카오/티맵 길안내 딥링크
 */
(function () {
  var VENUE = {
    name: '더파티움 안양',
    lat: 37.3959871,
    lng: 126.9644907,
    address: '경기 안양시 동안구 시민대로 311 금강스마트빌딩 5층'
  };

  // 카카오맵 임베드 - SDK 로딩 완료 후 실행
  function initMap() {
    var mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    var position = new kakao.maps.LatLng(VENUE.lat, VENUE.lng);
    var map = new kakao.maps.Map(mapContainer, {
      center: position,
      level: 3
    });

    var marker = new kakao.maps.Marker({ map: map, position: position });

    var infowindow = new kakao.maps.InfoWindow({
      content: '<div style="padding:5px 10px;font-size:12px;white-space:nowrap;">' + VENUE.name + '</div>'
    });
    infowindow.open(map, marker);

    // 지도 드래그 비활성화 (모바일 스크롤 방해 방지)
    map.setDraggable(false);
    map.setZoomable(false);

    // 지도 클릭 시 확대/축소 토글
    kakao.maps.event.addListener(map, 'click', function () {
      var draggable = map.getDraggable();
      map.setDraggable(!draggable);
      map.setZoomable(!draggable);
    });
  }

  // SDK 로딩 완료 대기 후 초기화
  if (window.kakao && kakao.maps) {
    kakao.maps.load(initMap);
  }

  // 네이버 지도 링크
  var naverLink = document.getElementById('naverMapLink');
  if (naverLink) {
    naverLink.href = 'https://map.naver.com/v5/search/' + encodeURIComponent(VENUE.name);
    naverLink.target = '_blank';
    naverLink.rel = 'noopener';
  }

  // 카카오맵 링크
  var kakaoLink = document.getElementById('kakaoMapLink');
  if (kakaoLink) {
    kakaoLink.href = 'https://map.kakao.com/link/map/' + encodeURIComponent(VENUE.name) + ',' + VENUE.lat + ',' + VENUE.lng;
    kakaoLink.target = '_blank';
    kakaoLink.rel = 'noopener';
  }

  // 티맵 링크 (길안내)
  var tmapLink = document.getElementById('tmapLink');
  if (tmapLink) {
    tmapLink.href = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=&name=' + encodeURIComponent(VENUE.name) + '&lon=' + VENUE.lng + '&lat=' + VENUE.lat;
    tmapLink.target = '_blank';
    tmapLink.rel = 'noopener';

    tmapLink.addEventListener('click', function (e) {
      e.preventDefault();
      var tmapAppUrl = 'tmap://route?goalname=' + encodeURIComponent(VENUE.name) + '&goaly=' + VENUE.lat + '&goalx=' + VENUE.lng;
      window.location.href = tmapAppUrl;

      setTimeout(function () {
        window.open('https://map.naver.com/v5/directions/-/' + VENUE.lng + ',' + VENUE.lat + ',' + encodeURIComponent(VENUE.name), '_blank');
      }, 1500);
    });
  }
})();
