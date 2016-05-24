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

  if (process.env.NODE_ENV !== 'production') {
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
  } else {
    // Perf & TestUtils are not available in production.
    t.same(c.module.exports, {
      default: require('react/dist/react-with-addons.min'),
      createFragment: require('react/dist/react-with-addons.min').addons.createFragment,
      CSSTransitionGroup: require('react/dist/react-with-addons.min').addons.CSSTransitionGroup,
      LinkedStateMixin: require('react/dist/react-with-addons.min').addons.LinkedStateMixin,
      PureRenderMixin: require('react/dist/react-with-addons.min').addons.PureRenderMixin,
      React: require('react/dist/react-with-addons.min'),
      ReactDOM: require('react/dist/react-with-addons.min').__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      ReactDOMServer: require('react/dist/react-with-addons.min').__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      shallowCompare: require('react/dist/react-with-addons.min').addons.shallowCompare,
      TransitionGroup: require('react/dist/react-with-addons.min').addons.TransitionGroup,
      update: require('react/dist/react-with-addons.min').addons.update,
    });
  }
});
