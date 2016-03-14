###*
  @file perfnow is a 0.1 kb global.performance.now high resolution timer polyfill with Date fallback
  @author Daniel Lamb <dlamb.open.source@gmail.com>
###
perfnow = (global) ->
  # make sure we have an object to work with
  global.performance = {}  unless "performance" of global
  perf = global.performance
  # handle vendor prefixing
  global.performance.now = perf.now or perf.mozNow or perf.msNow or perf.oNow or perf.webkitNow or Date.now or ->
    # fallback to Date
    new Date().getTime()
perfnow self
