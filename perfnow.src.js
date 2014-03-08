(function (window) {
  window.performance = window.performance || {};
  // handle vendor prefixing
  performance.now = performance.now ||
  performance.mozNow ||
  performance.msNow ||
  performance.oNow ||
  performance.webkitNow ||
  // fallback to Date
  Date.now || function () {
      return new Date().getTime();
  };
})(window);