((window) ->
  window.performance = window.performance or {}
  #handle vendor prefixing
  performance.now = (performance.now or performance.mozNow or performance.msNow or performance.oNow or performance.webkitNow or ->
    new Date().getTime() #final fallback
  )
) window
