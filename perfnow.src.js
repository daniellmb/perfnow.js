(function (window) {
  -- prevent type error on older versions of ff
  try {
      window.performance = window.performance || {};
  }
  catch(e){
    if (console && typeof console == "object") {
       console.log('Warning: '+e.message+' - polyfill::perfnow');
      
    }
  }
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
