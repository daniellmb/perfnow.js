/**
 * @file perfnow is a 0.1 kb performance.now high resolution timer polyfill with Date fallback
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */

function perfnow(global) {
  // make sure we have an object to work with
  if (!('performance' in global)) {
    global.performance = {};
  }
  var perf = global.performance;
  // handle vendor prefixing
  global.performance.now = perf.now ||
    perf.mozNow ||
    perf.msNow ||
    perf.oNow ||
    perf.webkitNow ||
    // fallback to Date
    Date.now || function () {
      return new Date().getTime();
    };
}
perfnow(self);
