(function () {
  var db = firebase.firestore();
  var col = db.collection('guestbook');

  function formatDate(ts) {
    if (!ts) return '';
    var d = ts.toDate();
    return d.getFullYear() + '.' +
      String(d.getMonth() + 1).padStart(2, '0') + '.' +
      String(d.getDate()).padStart(2, '0');
  }

  function createEntry(doc) {
    var data = doc.data();
    var el = document.createElement('div');
    el.className = 'guestbook__entry';
    el.innerHTML =
      '<div class="guestbook__entry-header">' +
        '<span class="guestbook__name">' + data.name + '</span>' +
        '<span class="guestbook__date">' + formatDate(data.createdAt) + '</span>' +
        '<button class="guestbook__delete-btn" type="button">삭제</button>' +
      '</div>' +
      '<p class="guestbook__message">' + data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' +
      '<div class="guestbook__delete-form">' +
        '<input type="password" placeholder="비밀번호" maxlength="9">' +
        '<button class="guestbook__delete-confirm" type="button">확인</button>' +
        '<button class="guestbook__delete-cancel" type="button">취소</button>' +
      '</div>';

    var deleteBtn = el.querySelector('.guestbook__delete-btn');
    var deleteForm = el.querySelector('.guestbook__delete-form');
    var pwInput = el.querySelector('.guestbook__delete-form input');
    var confirmBtn = el.querySelector('.guestbook__delete-confirm');
    var cancelBtn = el.querySelector('.guestbook__delete-cancel');

    deleteBtn.onclick = function () {
      deleteForm.classList.add('visible');
      pwInput.focus();
    };

    cancelBtn.onclick = function () {
      deleteForm.classList.remove('visible');
      pwInput.value = '';
    };

    confirmBtn.onclick = function () {
      if (pwInput.value === data.password) {
        col.doc(doc.id).delete();
      } else {
        pwInput.value = '';
        pwInput.placeholder = '비밀번호 오류';
        setTimeout(function () { pwInput.placeholder = '비밀번호'; }, 1500);
      }
    };

    return el;
  }

  function render(snapshot) {
    var list = document.getElementById('guestbook-list');
    if (!list) return;
    list.innerHTML = '';
    if (snapshot.empty) {
      list.innerHTML = '<p class="guestbook__empty">아직 작성된 메시지가 없어요 :)</p>';
      return;
    }
    snapshot.forEach(function (doc) {
      list.appendChild(createEntry(doc));
    });
  }

  col.orderBy('createdAt', 'desc').onSnapshot(render, function (err) {
    console.error('방명록 로드 실패:', err);
  });

  var submitBtn = document.querySelector('.gb-submit');
  if (!submitBtn) return;

  submitBtn.onclick = function () {
    var name = document.getElementById('gb-name').value.trim();
    var password = document.getElementById('gb-password').value.trim();
    var message = document.getElementById('gb-message').value.trim();

    if (!name || !password || !message) {
      alert('모든 항목을 입력해주세요');
      return;
    }
    if (password.length < 4 || password.length > 9) {
      alert('비밀번호는 4~9자리로 입력해주세요');
      return;
    }

    submitBtn.disabled = true;
    col.add({
      name: name,
      message: message,
      password: password,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () {
      document.getElementById('gb-name').value = '';
      document.getElementById('gb-password').value = '';
      document.getElementById('gb-message').value = '';
      submitBtn.disabled = false;
    }).catch(function (err) {
      console.error('작성 실패:', err);
      alert('작성에 실패했어요. 다시 시도해주세요.');
      submitBtn.disabled = false;
    });
  };
})();
