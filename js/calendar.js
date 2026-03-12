/**
 * 미니 달력 생성
 * js/config.js 의 WEDDING_CONFIG 를 참조합니다.
 */
(function () {
  const { year, month, day, datetimeLabel, venue } = WEDDING_CONFIG;

  const container = document.getElementById('calendar');
  if (!container) return;

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();

  let html = '<table class="calendar">';

  // Header
  html += `<caption class="calendar__header">
    <p class="calendar__datetime">${datetimeLabel}</p>
    <p class="calendar__venue">${venue}</p>
  </caption>`;

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
    const isWeddingDay = date === day;
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
