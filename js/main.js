(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('#menu a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  function update() {
    var y = window.scrollY + window.innerHeight * 0.3;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= y) current = s; });
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + current.id;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
