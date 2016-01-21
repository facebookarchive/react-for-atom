'use strict';

var test = require('tap').test;

test('react-for-atom', function (t) {
  t.plan(7);

  global.atom = {};
  var before = Object.keys(require.cache);
  var ReactForAtom = require('./');
  var after = Object.keys(require.cache);

  // at least 10 modules should've been loaded, React and its addons
  t.ok(after.length - before.length >= 10);

  // ensure React and some of its addons exist
  t.ok(ReactForAtom.shallowCompare);
  t.ok(ReactForAtom.PureRenderMixin);
  t.ok(ReactForAtom.React);

  // reset the module cache
  after.forEach(function(k) {
    if (before.indexOf(k) === -1) {
      delete require.cache[k];
    }
  });

  // make sure the module cache was reset
  t.same(Object.keys(require.cache), before);

  var ReactForAtom2 = require('./');

  // only one new module should've been loaded-
  // since React was pulled from the "atom" singleton
  t.equal(Object.keys(require.cache).length, before.length + 1);
  t.equal(ReactForAtom, ReactForAtom2);
});

