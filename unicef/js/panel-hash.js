(function () {
  function activateFromHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    var input = document.getElementById('painel-' + hash);
    if (input) input.checked = true;
  }

  activateFromHash();
  window.addEventListener('hashchange', activateFromHash);
})();
