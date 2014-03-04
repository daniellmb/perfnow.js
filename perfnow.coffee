((window) ->
  window.performance = window.performance or {}
  #handle vendor prefixing
  performance.now = performance.now or performance.mozNow or performance.msNow or performance.oNow or performance.webkitNow or ->
    #fallback to Date time
    +new Date
) window
