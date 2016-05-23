'use strict';

global.atom = {};
global.window = {};

var test = require('tap').test;
var ReactForAtom = require('../');

test('react-for-atom commonjs exports', function (t) {
  t.plan(15);

  if (process.env.NODE_ENV !== 'production') {
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
    t.equal(Object.keys(ReactForAtom).length, 13);
  } else {
    t.equal(ReactForAtom.default, require('react/dist/react-with-addons.min'));
    t.equal(ReactForAtom.createFragment, require('react/dist/react-with-addons.min').addons.createFragment);
    t.equal(ReactForAtom.CSSTransitionGroup, require('react/dist/react-with-addons.min').addons.CSSTransitionGroup);
    t.equal(ReactForAtom.LinkedStateMixin, require('react/dist/react-with-addons.min').addons.LinkedStateMixin);
    t.notOk('Perf' in ReactForAtom);
    t.equal(ReactForAtom.PureRenderMixin, require('react/dist/react-with-addons.min').addons.PureRenderMixin);
    t.equal(ReactForAtom.React, require('react/dist/react-with-addons.min'));
    t.equal(ReactForAtom.ReactDOM, require('react/dist/react-with-addons.min').__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
    t.equal(ReactForAtom.ReactDOMServer, require('react/dist/react-with-addons.min').__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
    t.equal(ReactForAtom.shallowCompare, require('react/dist/react-with-addons.min').addons.shallowCompare);
    t.notOk('TestUtils' in ReactForAtom);
    t.equal(ReactForAtom.TransitionGroup, require('react/dist/react-with-addons.min').addons.TransitionGroup);
    t.equal(ReactForAtom.update, require('react/dist/react-with-addons.min').addons.update);
    t.equal(Object.keys(ReactForAtom).length, 11);
  }

  var everyExportHasAValue = Object.keys(ReactForAtom).every(function(key) {
    return typeof ReactForAtom[key] !== 'undefined';
  });
  t.ok(everyExportHasAValue);
});
