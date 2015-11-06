'use strict';

var test = require('tap').test;

test('react-for-atom', function (t) {
  t.plan(6);

  global.atom = {};
  var before = Object.keys(require.cache);

  var React = require('./');
  var addons = React.addons;

  t.ok(addons);

  var after = Object.keys(require.cache);

  if (process.env.NODE_ENV === 'production') {
    // only 2 new modules should've been loaded
    t.ok(after.length - before.length === 2);
  } else {
    // at least 2 new modules should've been loaded
    t.ok(after.length - before.length >= 2);
  }

  // reset the module cache
  after.forEach(function(k) {
    if (before.indexOf(k) === -1) {
      delete require.cache[k];
    }
  });

  // make sure the module cache was reset
  t.same(Object.keys(require.cache), before);

  var React2 = require('./');
  var addons2 = React.addons;

  // only one new module should've been loaded-
  // since React was pulled from the "atom" singleton
  t.equal(Object.keys(require.cache).length, before.length + 1);

  t.equal(React, React2);
  t.equal(addons, addons2);
});

