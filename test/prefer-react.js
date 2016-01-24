'use strict';

var test = require('tap').test;

test('react-for-atom prefer react', function (t) {
  t.plan(1);

  // make sure we don't have an atom global
  delete global.atom;

  t.throws(function() {
    var ReactForAtom = require('../');
  }, {
    message: "Do not use react-for-atom outside of Atom. Use require('react') instead.",
  });
});
