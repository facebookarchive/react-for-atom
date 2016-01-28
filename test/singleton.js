'use strict';

global.atom = {};
global.window = {};

var test = require('tap').test;

test('react-for-atom singleton', function (t) {
  t.plan(4);

  var before = Object.keys(require.cache);
  var ReactForAtom1 = require('../');

  var reactDevtoolsGlobalHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

  // force module loading
  Object.keys(ReactForAtom1).forEach(function(key) { ReactForAtom1[key]; });
  var after1 = Object.keys(require.cache);

  // reset the module cache
  after1.forEach(function(k) {
    if (before.indexOf(k) === -1) {
      delete require.cache[k];
    }
  });

  // ensure the module cache was reset
  t.same(Object.keys(require.cache), before);

  var ReactForAtom2 = require('../');

  // only one new module should've been loaded-
  // since React was pulled from the "atom" singleton
  // ensure exports exists, and force module loading
  Object.keys(ReactForAtom2).forEach(function(key) { ReactForAtom2[key]; });
  var after2 = Object.keys(require.cache);

  t.equal(after2.length, before.length + 1);
  t.equal(ReactForAtom2, ReactForAtom2);

  // does not try to re-circumvent the react devtools global hook
  t.equal(window.__REACT_DEVTOOLS_GLOBAL_HOOK__, reactDevtoolsGlobalHook);
});
