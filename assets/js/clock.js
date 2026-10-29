// Local time in Lecco, shown in the header.
(function () {
  var fmt;
  try {
    fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome' });
  } catch (e) { return; }
  function tick() {
    var t = fmt.format(new Date());
    document.querySelectorAll('[data-clock]').forEach(function (el) { el.textContent = t; });
  }
  tick();
  setInterval(tick, 20000);
})();
