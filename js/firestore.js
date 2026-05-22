(function () {
  firebase.initializeApp({
    apiKey: "AIzaSyCdJDtZeSRPWNgitEQkzDOMBKhx-Egf9oc",
    authDomain: "wedding-invite-ea127.firebaseapp.com",
    projectId: "wedding-invite-ea127",
    storageBucket: "wedding-invite-ea127.firebasestorage.app",
    messagingSenderId: "76977498542",
    appId: "1:76977498542:web:1c740b0306cdd109f4003f"
  });

  var db = firebase.firestore();

  db.collection('config').doc('private').get().then(function (doc) {
    if (!doc.exists) return;
    var d = doc.data();

    WEDDING_CONFIG.groom.phone       = d.groomPhone       || '';
    WEDDING_CONFIG.groomFather.phone = d.groomFatherPhone || '';
    WEDDING_CONFIG.groomMother.phone = d.groomMotherPhone || '';
    WEDDING_CONFIG.bride.phone       = d.bridePhone       || '';
    WEDDING_CONFIG.brideFather.phone = d.brideFatherPhone || '';
    WEDDING_CONFIG.brideMother.phone = d.brideMotherPhone || '';

    WEDDING_CONFIG.accounts.groom = JSON.parse(d.groomAccounts || '[]');
    WEDDING_CONFIG.accounts.bride = JSON.parse(d.brideAccounts || '[]');

    renderContact();
    renderAccount();

    document.querySelectorAll('.fade-up:not(.visible)').forEach(function (el) {
      el.classList.add('visible');
    });
  }).catch(function (err) {
    console.error('Firestore 로드 실패:', err);
  });
})();
