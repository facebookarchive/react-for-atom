'use strict';

global.atom = {};
global.window = {};

var test = require('tap').test;
var babel = require('babel-core');
var vm = require('vm');

test('react-for-atom es-module named exports', function (t) {
  t.plan(13);

  var code = babel.transform([
    'import ReactDefault, {',
    '  createFragment,',
    '  CSSTransitionGroup,',
    '  LinkedStateMixin,',
    '  Perf,',
    '  PureRenderMixin,',
    '  React,',
    '  ReactDOM,',
    '  ReactDOMServer,',
    '  shallowCompare,',
    '  TestUtils,',
    '  TransitionGroup,',
    '  update,',
    '} from "..";',
    '',
    'module.exports = {',
    '  ReactDefault,',
    '  createFragment,',
    '  CSSTransitionGroup,',
    '  LinkedStateMixin,',
    '  Perf,',
    '  PureRenderMixin,',
    '  React,',
    '  ReactDOM,',
    '  ReactDOMServer,',
    '  shallowCompare,',
    '  TestUtils,',
    '  TransitionGroup,',
    '  update,',
    '};',
    '',
  ].join('\n')).code;

  var c = {
    module: {exports: {}},
    require: require,
    atom: {},
    window: {},
  };
  vm.runInNewContext(code, c);

  t.equal(c.module.exports.ReactDefault, require('react'));
  t.equal(c.module.exports.createFragment, require('react-addons-create-fragment'));
  t.equal(c.module.exports.CSSTransitionGroup, require('react-addons-css-transition-group'));
  t.equal(c.module.exports.LinkedStateMixin, require('react-addons-linked-state-mixin'));
  t.equal(c.module.exports.Perf, require('react-addons-perf'));
  t.equal(c.module.exports.PureRenderMixin, require('react-addons-pure-render-mixin'));
  t.equal(c.module.exports.React, require('react'));
  t.equal(c.module.exports.ReactDOM, require('react-dom'));
  t.equal(c.module.exports.ReactDOMServer, require('react-dom/server'));
  t.equal(c.module.exports.shallowCompare, require('react-addons-shallow-compare'));
  t.equal(c.module.exports.TestUtils, require('react-addons-test-utils'));
  t.equal(c.module.exports.TransitionGroup, require('react-addons-transition-group'));
  t.equal(c.module.exports.update, require('react-addons-update'));
});
