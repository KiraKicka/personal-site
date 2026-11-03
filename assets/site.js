/* Kirill Potemkin — site behaviour. No dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;

  /* Theme: Day / Night, remembered per browser, synced across open tabs. */
  function store(t) { try { localStorage.setItem('kp-theme', t); } catch (e) {} }
  function paintThemeButtons() {
    var t = root.getAttribute('data-theme');
    document.querySelectorAll('[data-set-theme]').forEach(function (b) {
      var on = b.getAttribute('data-set-theme') === t;
      b.classList.toggle('cur', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }
  function setTheme(t) { root.setAttribute('data-theme', t); paintThemeButtons(); }
  document.querySelectorAll('[data-set-theme]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-set-theme');
      store(t);
      setTheme(t);
    });
  });
  window.addEventListener('storage', function (e) {
    if (e.key === 'kp-theme' && (e.newValue === 'day' || e.newValue === 'night')) setTheme(e.newValue);
  });
  paintThemeButtons();

  /* Email: assembled here so the address never sits in the HTML. */
  var email = ['kirill', 'a', 'potemkin'].join('.') + String.fromCharCode(64) + ['gmail', 'com'].join('.');
  document.querySelectorAll('[data-email]').forEach(function (a) {
    a.href = 'mailto:' + email;
    a.textContent = email;
  });

  /* Clocks on the cover sheet. */
  var clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length) {
    var here = 'Europe/Rome';
    try { here = Intl.DateTimeFormat().resolvedOptions().timeZone || here; } catch (e) {}
    if (here === 'Europe/Rome') {
      document.querySelectorAll('[data-yours]').forEach(function (el) { el.remove(); });
    }
    var tick = function () {
      document.querySelectorAll('[data-clock]').forEach(function (el) {
        var tz = el.getAttribute('data-clock') || here;
        try {
          el.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date());
        } catch (e) {
          el.textContent = '';
        }
      });
    };
    tick();
    setInterval(tick, 10000);
  }

  /* Bio carousel. */
  document.querySelectorAll('[data-carousel]').forEach(function (fig) {
    var slides = Array.prototype.slice.call(fig.querySelectorAll('img[data-cap]'));
    if (!slides.length) return;
    var num = fig.querySelector('[data-c-num]');
    var cap = fig.querySelector('[data-c-cap]');
    var coord = fig.querySelector('[data-c-coord]');
    var live = fig.querySelector('[data-c-live]');
    var toggle = fig.querySelector('[data-c="toggle"]');
    var reduce = false, canHover = false;
    try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    try { canHover = matchMedia('(hover: hover)').matches; } catch (e) {}
    var i = 0, paused = reduce, hover = false, last = Date.now();

    function show(n) {
      i = (n + slides.length) % slides.length;
      last = Date.now();
      slides.forEach(function (img, k) {
        img.classList.toggle('on', k === i);
        img.setAttribute('aria-hidden', k === i ? 'false' : 'true');
      });
      num.textContent = String(i + 1);
      cap.textContent = slides[i].getAttribute('data-cap');
      coord.textContent = slides[i].getAttribute('data-coord');
    }
    function paint() {
      toggle.textContent = paused ? 'Play' : 'Pause';
      live.setAttribute('aria-live', paused ? 'polite' : 'off');
    }
    fig.querySelector('[data-c="prev"]').addEventListener('click', function () { show(i - 1); });
    fig.querySelector('[data-c="next"]').addEventListener('click', function () { show(i + 1); });
    toggle.addEventListener('click', function () { paused = !paused; last = Date.now(); paint(); });
    if (canHover) {
      fig.addEventListener('mouseenter', function () { hover = true; });
      fig.addEventListener('mouseleave', function () { hover = false; });
    }
    setInterval(function () {
      if (paused || hover || document.hidden || Date.now() - last < 5500) return;
      show(i + 1);
    }, 1000);
    paint();
  });
})();
