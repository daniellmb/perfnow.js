perfnow.js
==========

Safely use microsecond precision timing using this <b>132 byte</b> `window.performance.now` polyfill with `Date` fallback.


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

Why?
----
Unlike other timing data available to JavaScript (for example `Date.now`), the timestamps returned by `Performance.now()` are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.

Also unlike `Date.now`, the values returned by `Performance.now()` always increase at a constant rate, independent of the system clock which might be adjusted manually or skewed by software such as the Network Time Protocol.

License 
-------
(The MIT License)

Copyright (c) 2014 Daniel Lamb <daniellmb.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
