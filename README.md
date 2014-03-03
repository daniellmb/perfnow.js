perfnow.js
==========

Safely use microsecond precision timing using a <b>32 byte</b> `window.performance.now` polyfill with `Date` fallback.


Tested Environments
-------------------
- Mac OS X
	- Google Chrome
	- Safari
	- Firefox
	- Opera

- Windows
	- Google Chrome
	- Safari
	- Firefox
	- Opera
	- Internet Explorer

How to use
----------

```javascript
var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
```
