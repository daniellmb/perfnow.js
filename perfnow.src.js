(function (window) {
  window.performance = window.performance || {};
  // handle vendor prefixing
  performance.now = (function () {
    return performance.now ||
      performance.mozNow ||
      performance.msNow ||
      performance.oNow ||
      performance.webkitNow ||
    // final fallback
    function () {
      return new Date().getTime();
    };
  })();
})(window);
