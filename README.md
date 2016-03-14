# perfnow.js
[![Build Status][build-image]][build-url]
[![Code GPA][gpa-image]][gpa-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Bower Version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]

## About

perfnow.js is a micro-library written in both CoffeeScript and JavaScript.

Safely use microsecond precision timing using this **0.1 kb** `performance.now` polyfill with `Date` fallback.

This minimal utility is compatible with all browsers as well as the more restricted web worker environment.

## Examples

### JavaScript

```JavaScript
var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
```

### CoffeeScript

```CoffeeScript
t0 = performance.now()
doSomething()
t1 = performance.now()
console.log "Call to doSomething took " + (t1 - t0) + " milliseconds."
```

## Why?

Unlike other timing data available to JavaScript (for example `Date.now`), the timestamps returned by `Performance.now()` are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.

Also unlike `Date.now`, the values returned by `Performance.now()` always increase at a constant rate, independent of the system clock which might be adjusted manually or skewed by software such as the Network Time Protocol.

## When?

There are a many situations where you should use this high resolution timer instead of a basic timestamp:

- **benchmarking**
- calculating framerate with precision
- cueing actions or audio to occur at specific points in an animation or other time-based sequence
- game or animation runloop code

## Tested Environments

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

## Install Choices

- `bower install perfnow`
- [download the zip](https://github.com/daniellmb/perfnow.js/archive/master.zip)

## Tasks

All tasks can be run by simply running `gulp` or with the `npm test` command, or individually:

  * `gulp lint` will lint source code for syntax errors and anti-patterns.
  * `gulp gpa` will analyze source code against complexity thresholds.
  * `gulp test` will run the jasmine unit tests against the source code.
  * `gulp test-coffee` will run the jasmine unit tests against the CoffeeScript source code.
  * `gulp test-min` will run the jasmine unit tests against the minified code.

## License

(The MIT License)

Copyright (c) 2014 Daniel Lamb dlamb.open.source@gmail.com

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



[build-url]: https://travis-ci.org/daniellmb/perfnow.js
[build-image]: http://img.shields.io/travis/daniellmb/perfnow.js.png

[gpa-url]: https://codeclimate.com/github/daniellmb/perfnow.js
[gpa-image]: https://codeclimate.com/github/daniellmb/perfnow.js.png

[coverage-url]: https://codeclimate.com/github/daniellmb/perfnow.js/code?sort=covered_percent&sort_direction=desc
[coverage-image]: https://codeclimate.com/github/daniellmb/perfnow.js/coverage.png

[depstat-url]: https://david-dm.org/daniellmb/perfnow.js
[depstat-image]: https://david-dm.org/daniellmb/perfnow.js.png?theme=shields.io

[issues-url]: https://github.com/daniellmb/perfnow.js/issues
[issues-image]: http://img.shields.io/github/issues/daniellmb/perfnow.png

[bower-url]: http://bower.io/search/?q=perfnow
[bower-image]: https://badge.fury.io/bo/perfnow.js.png

[downloads-url]: https://www.npmjs.org/package/perfnow
[downloads-image]: http://img.shields.io/npm/dm/perfnow.js.png

[npm-url]: https://www.npmjs.org/package/perfnow
[npm-image]: https://badge.fury.io/js/perfnow.js.png

[irc-url]: http://webchat.freenode.net/?channels=perfnow
[irc-image]: http://img.shields.io/badge/irc-%23perfnow-brightgreen.png

[gitter-url]: https://gitter.im/daniellmb/perfnow.js
[gitter-image]: http://img.shields.io/badge/gitter-daniellmb/perfnowjs-brightgreen.png

[tip-url]: https://www.gittip.com/daniellmb
[tip-image]: http://img.shields.io/gittip/daniellmb.png
