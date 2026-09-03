(function () {
  var menu = document.getElementById('site-menu');
  if (!menu) return;

  fetch('/unicef/menu.html')
    .then(function (res) { return res.text(); })
    .then(function (html) {
      menu.innerHTML = html;

      var active = document.body.getAttribute('data-nav-active');
      if (!active) return;

      var link = menu.querySelector('[data-nav="' + active + '"]');
      if (link) link.classList.add('active');
    });
})();
