/* Theme toggle. The choice is kept in localStorage; without one the page follows the system setting. */
(function () {
  var root = document.documentElement;
  var SUN = '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>';
  var MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
  var toggle = document.getElementById("theme-toggle");
  var icon = document.getElementById("theme-icon");
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t === "dark") return true;
    if (t === "light") return false;
    return !!(mq && mq.matches);
  }
  function paint() { if (icon) icon.innerHTML = isDark() ? SUN : MOON; }
  paint();
  if (mq && mq.addEventListener) mq.addEventListener("change", paint);
  if (toggle) toggle.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("mhus-theme", next); } catch (e) {}
    paint();
  });

  /* copy buttons on install snippets */
  Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () { btn.textContent = "kopiert"; setTimeout(function () { btn.textContent = "kopieren"; }, 1400); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
  });
})();
