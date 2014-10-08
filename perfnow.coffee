###*
  @file perfnow is a 0.14 kb window.performance.now high resolution timer polyfill with Date fallback
  @author Daniel Lamb <dlamb.open.source@gmail.com>
###
perfnow = (window) ->
  # make sure we have an object to work with
  window.performance = {}  unless "performance" of window
  perf = window.performance
  # handle vendor prefixing
  window.performance.now = perf.now or perf.mozNow or perf.msNow or perf.oNow or perf.webkitNow or Date.now or ->
    # fallback to Date
    new Date().getTime()
perfnow window