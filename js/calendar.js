/**
 * 미니 달력 생성
 * weddingDate를 수정하면 해당 월 달력이 자동 생성됩니다.
 */
(function () {
  // ⚠️ 결혼식 날짜를 여기서 수정하세요
  const weddingYear = 2026;
  const weddingMonth = 9; // 1~12
  const weddingDay = 12;

  const container = document.getElementById('calendar');
  if (!container) return;

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const firstDay = new Date(weddingYear, weddingMonth - 1, 1).getDay();
  const lastDate = new Date(weddingYear, weddingMonth, 0).getDate();

  let html = '<table class="calendar">';

  // Header - Year.Month
  html += `<caption class="calendar__header">${weddingYear}. ${String(weddingMonth).padStart(2, '0')}</caption>`;

  // Day names
  html += '<thead><tr>';
  days.forEach((d) => {
    html += `<th>${d}</th>`;
  });
  html += '</tr></thead>';

  // Dates
  html += '<tbody><tr>';
  for (let i = 0; i < firstDay; i++) {
    html += '<td></td>';
  }

  for (let date = 1; date <= lastDate; date++) {
    const dayOfWeek = (firstDay + date - 1) % 7;

    if (dayOfWeek === 0 && date !== 1) {
      html += '</tr><tr>';
    }

    const isSunday = dayOfWeek === 0;
    const isWeddingDay = date === weddingDay;
    const classes = [];
    if (isSunday) classes.push('sunday');
    if (isWeddingDay) classes.push('today');

    html += `<td class="${classes.join(' ')}">${date}</td>`;
  }

  // Fill remaining cells
  const remaining = 7 - ((firstDay + lastDate) % 7);
  if (remaining < 7) {
    for (let i = 0; i < remaining; i++) {
      html += '<td></td>';
    }
  }

  html += '</tr></tbody></table>';
  container.innerHTML = html;
})();
