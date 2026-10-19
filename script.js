(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeBtn');
  var label = document.getElementById('themeLabel');
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function sync() { label.textContent = isDark() ? 'Light' : 'Dark'; }
  try {
    var saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) {}
  sync();
  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
    sync();
  });
  var projects = document.getElementById('projects');
  var previewButtons = document.querySelectorAll('.project-preview-btn');
  var projectImageModal = document.getElementById('projectImageModal');
  var projectImagePreview = document.getElementById('projectImagePreview');
  var projectImageCaption = document.getElementById('projectImageCaption');
  var projectImageClose = document.getElementById('projectImageClose');
  var activePreviewButton = null;
  function closePreview() {
    if (projectImageModal.open) projectImageModal.close();
    if (activePreviewButton) {
      activePreviewButton.setAttribute('aria-expanded', 'false');
      activePreviewButton = null;
    }
  }
  previewButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      activePreviewButton = button;
      projectImagePreview.src = button.dataset.image;
      projectImagePreview.alt = button.dataset.title + ' board';
      projectImageCaption.textContent = button.dataset.title;
      projectImageModal.showModal();
      button.setAttribute('aria-expanded', 'true');
    });
  });
  projectImageClose.addEventListener('click', closePreview);
  projectImageModal.addEventListener('click', function (event) {
    if (event.target === projectImageModal) closePreview();
  });
  projectImageModal.addEventListener('close', function () {
    if (activePreviewButton) {
      activePreviewButton.setAttribute('aria-expanded', 'false');
      activePreviewButton = null;
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && projectImageModal.open) closePreview();
  });
  var note = document.getElementById('copyNote');
  document.getElementById('copyBtn').addEventListener('click', function () {
    var el = document.getElementById('emailText');
    var done = function () { note.textContent = 'Email copied.'; };
    var fallback = function () {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      note.textContent = 'Email selected. Copy it with your device.';
    };
    try { navigator.clipboard.writeText(el.textContent).then(done, fallback); } catch (e) { fallback(); }
  });
})();
