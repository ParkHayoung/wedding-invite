/**
 * ✏️ 결혼식 정보를 이 파일에서만 수정하세요
 */
const WEDDING_CONFIG = {

  /* ─── 날짜 & 시간 ─────────────────────────────── */
  year:  2026,
  month: 9,
  day:   12,
  time:  '16:50',

  heroDate:      '2026. 09. 12. SAT PM 4:50',              // 히어로 날짜 표시
  datetimeLabel: '2026년 9월 12일 토요일 오후 4시 50분',    // 달력 헤더 날짜

  /* ─── 장소 ────────────────────────────────────── */
  venue:   '더파티움 안양 5F 브리에홀',                    // 히어로 & 달력 공통
  mapName: '더파티움 안양',                                 // 지도 마커 이름
  lat:     37.3959871,
  lng:     126.9644907,
  address: '경기 안양시 동안구 시민대로 311 금강스마트빌딩',

  /* ─── 인사말 ──────────────────────────────────── */
  greetingText: [
    '함께 있을 때 가장 나다운 모습이 되고',
    '함께 있을 때 미래를 꿈꾸게 하는 사람을 만나',
    '함께 맞는 4번째 가을, 결혼합니다.',
    '',
    '지금처럼 서로에게 가장 친한 친구가 되어',
    '예쁘고 행복하게 잘 살겠습니다.',
    '',
    '저희 두 사람의 새로운 시작을 함께하시어',
    '축복해 주시면 감사하겠습니다.',
  ].join('<br>'),

  /* ─── 신랑측 ──────────────────────────────────── */
  groom:       { name: '문승현', phone: '010-0000-0000' },
  groomFather: { name: '문영오',       phone: '010-0000-0000' },  // 이름 비우면 ○○○ 표시
  groomMother: { name: '서경숙',       phone: '010-0000-0000' },  // 연락처 섹션은 숨김

  /* ─── 신부측 ──────────────────────────────────── */
  bride:       { name: '박하영', phone: '010-0000-0000' },
  brideFather: { name: '박상수', phone: '010-0000-0000' },
  brideMother: { name: '오미경', phone: '010-0000-0000' },

  /* ─── 갤러리 이미지 ──────────────────────────── */
  gallery: [
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/01.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/02.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/03.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/04.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/05.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/06.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/07.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/08.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/09.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/10.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/11.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/12.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/13.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/14.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/15.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/16.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/17.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/18.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/19.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/wedding-invite-ea127.firebasestorage.app/o/20.jpg?alt=media',
  ],

  /* ─── 계좌 정보 ───────────────────────────────── */
  accounts: {
    groom: [
      { holder: '문승현',    bank: '신한은행', number: '110-000-000000' },
      { holder: '문영오', bank: '신한은행', number: '110-000-000000' },
      { holder: '서경숙', bank: '신한은행', number: '110-000-000000' },
    ],
    bride: [
      { holder: '박하영',    bank: '국민은행', number: '000-00-0000-000' },
      { holder: '박상수',    bank: '국민은행', number: '000-00-0000-000' },
      { holder: '오미경',    bank: '국민은행', number: '000-00-0000-000' },
    ],
  },

};
