'use strict';

global.atom = {};
global.window = {};

var test = require('tap').test;

test('react-for-atom lazy loading', function (t) {
  t.plan(2);

  var before = Object.keys(require.cache);
  var ReactForAtom1 = require('../');

  // verify lazy loading
  var after0 = Object.keys(require.cache);
  t.equal(after0.length, before.length + 1);

  // force module loading
  Object.keys(ReactForAtom1).forEach(function(key) { ReactForAtom1[key]; });
  var after1 = Object.keys(require.cache);

  // verify module loading - must be some large number
  t.ok(after1.length - before.length > 100);
});
