'use strict';

global.atom = {};
global.window = {};

var test = require('tap').test;
var babel = require('babel-core');
var vm = require('vm');

test('react-for-atom es-module namespace exports', function (t) {
  t.plan(1);

  var code = babel.transform([
    'import * as reactForAtom from "..";',
    'module.exports = reactForAtom;',
  ].join('\n')).code;

  var c = {
    module: {exports: {}},
    require: require,
    atom: {},
    window: {},
  };
  vm.runInNewContext(code, c);

  t.same(c.module.exports, {
    default: require('react'),
    createFragment: require('react-addons-create-fragment'),
    CSSTransitionGroup: require('react-addons-css-transition-group'),
    LinkedStateMixin: require('react-addons-linked-state-mixin'),
    Perf: require('react-addons-perf'),
    PureRenderMixin: require('react-addons-pure-render-mixin'),
    React: require('react'),
    ReactDOM: require('react-dom'),
    ReactDOMServer: require('react-dom/server'),
    shallowCompare: require('react-addons-shallow-compare'),
    TestUtils: require('react-addons-test-utils'),
    TransitionGroup: require('react-addons-transition-group'),
    update: require('react-addons-update'),
  });
});
