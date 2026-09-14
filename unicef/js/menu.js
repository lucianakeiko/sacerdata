(function () {
  var menu = document.getElementById('site-menu');
  if (!menu) return;

  var base = '';
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].getAttribute('src');
    if (src && src.indexOf('menu.js') !== -1) {
      base = src.replace(/[^/\\]+$/, '').replace(/\/?js\/?$/, '');
      break;
    }
  }

  var items = [
    { nav: 'bae', label: 'BAE', file: 'bae/index.html' },
    { nav: 'praticas', label: 'Práticas', file: 'praticas/index.html' },
    { nav: 'indique', label: 'INDIQUE', file: 'indique.html' },
    { nav: 'outros', label: 'Outros', file: 'outros/index.html' }
  ];

  menu.innerHTML = items.map(function (item) {
    return '<a href="' + base + item.file + '" data-nav="' + item.nav + '">' + item.label + '</a>';
  }).join('');

  var active = document.body.getAttribute('data-nav-active');
  if (!active) return;

  var link = menu.querySelector('[data-nav="' + active + '"]');
  if (link) link.classList.add('active');
})();
