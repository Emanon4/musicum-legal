// Show one language: ?lang=, then the browser's, then Chinese.
(function () {
  var langs = ['zh', 'ja', 'en'];
  var asked = new URLSearchParams(location.search).get('lang');
  var nav = (navigator.language || '').slice(0, 2);
  var lang = langs.indexOf(asked) >= 0 ? asked : langs.indexOf(nav) >= 0 ? nav : 'zh';
  function show(l) {
    document.querySelectorAll('article').forEach(function (a) { a.classList.toggle('on', a.dataset.lang === l); });
    document.querySelectorAll('.langs button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
    document.documentElement.lang = { zh: 'zh-CN', ja: 'ja', en: 'en' }[l];
  }
  document.querySelectorAll('.langs button').forEach(function (b) {
    b.addEventListener('click', function () { show(b.dataset.lang); });
  });
  show(lang);
})();
