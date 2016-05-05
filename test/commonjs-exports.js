'use strict';

global.atom = {};
global.window = {};

var test = require('tap').test;
var ReactForAtom = require('../');

test('react-for-atom commonjs exports', function (t) {
  t.plan(13);
  t.equal(ReactForAtom.default, require('react'));
  t.equal(ReactForAtom.createFragment, require('react-addons-create-fragment'));
  t.equal(ReactForAtom.CSSTransitionGroup, require('react-addons-css-transition-group'));
  t.equal(ReactForAtom.LinkedStateMixin, require('react-addons-linked-state-mixin'));
  t.equal(ReactForAtom.Perf, require('react-addons-perf'));
  t.equal(ReactForAtom.PureRenderMixin, require('react-addons-pure-render-mixin'));
  t.equal(ReactForAtom.React, require('react'));
  t.equal(ReactForAtom.ReactDOM, require('react-dom'));
  t.equal(ReactForAtom.ReactDOMServer, require('react-dom/server'));
  t.equal(ReactForAtom.shallowCompare, require('react-addons-shallow-compare'));
  t.equal(ReactForAtom.TestUtils, require('react-addons-test-utils'));
  t.equal(ReactForAtom.TransitionGroup, require('react-addons-transition-group'));
  t.equal(ReactForAtom.update, require('react-addons-update'));
});
