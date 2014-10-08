/**
 * @file
 *
 * ### Responsibilities
 * - unit test perfnow.js
 *
 * Scaffolded with generator-microjs v0.1.2
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';
/*global perfnow*/
describe('perfnow.js', function () {
  var win;
  beforeEach(function () {
    // add spies
  });

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).not.toBe(false);
  });

  it('should set performance.now', function () {
    // arrange
    // act
    // assert
    expect(typeof window.performance.now).toBe('function');
  });

  it('should use now if is exists', function () {
    // arrange
    win = {performance:{now:'now'}};
    // act
    perfnow(win);
    // assert
    expect(win.performance.now).toBe('now');
  });

  it('should use mozNow if is exists', function () {
    // arrange
    win = {performance:{mozNow:'mozNow'}};
    // act
    perfnow(win);
    // assert
    expect(win.performance.now).toBe('mozNow');
  });

  it('should use msNow if is exists', function () {
    // arrange
    win = {performance:{msNow:'msNow'}};
    // act
    perfnow(win);
    // assert
    expect(win.performance.now).toBe('msNow');
  });

  it('should use oNow if is exists', function () {
    // arrange
    win = {performance:{oNow:'oNow'}};
    // act
    perfnow(win);
    // assert
    expect(win.performance.now).toBe('oNow');
  });

  it('should use webkitNow if is exists', function () {
    // arrange
    win = {performance:{webkitNow:'webkitNow'}};
    // act
    perfnow(win);
    // assert
    expect(win.performance.now).toBe('webkitNow');
  });

  it('should fallback to Date if needed', function () {
    // arrange
    win = {};
    jasmine.GlobalDate = window.Date;
    var MockDate = function () {
      return new jasmine.GlobalDate(0);
    };
    MockDate.prototype = jasmine.GlobalDate.prototype;
    window.Date = MockDate;
    // act
    perfnow(win);
    // assert
    expect(win.performance.now()).toBe(0);
    // reset
    window.Date = jasmine.GlobalDate;
  });

});