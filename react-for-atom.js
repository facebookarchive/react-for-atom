'use strict';
/* @flow */

var atom;

if (typeof window !== 'undefined') {
  // circumvent React Dev Tools console warning
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
}

if (typeof global !== 'undefined') {
  // Atom runs in a Node-like environment where `global === window`. Grab a reference to `atom` from
  // `global` and otherwise assume this is an environment where 'react-for-atom' is not appropriate.
  atom = global.atom;
}

if (typeof atom === 'object' && atom !== null) {
  if (typeof atom.__DO_NOT_ACCESS_React_Singleton === 'undefined') {
    module.exports.cloneWithProps = require('react-addons-clone-with-props');
    module.exports.createFragment = require('react-addons-create-fragment');
    module.exports.CSSTransitionGroup = require('react-addons-css-transition-group');
    module.exports.LinkedStateMixin = require('react-addons-linked-state-mixin');
    module.exports.Perf = require('react-addons-perf');
    module.exports.PureRenderMixin = require('react-addons-pure-render-mixin');
    module.exports.React = require('react');
    module.exports.ReactDOM = require('react-dom');
    module.exports.ReactDOMServer = require('react-dom/server');
    module.exports.shallowCompare = require('react-addons-shallow-compare');
    module.exports.TestUtils = require('react-addons-test-utils');
    module.exports.TransitionGroup = require('react-addons-transition-group');
    module.exports.update = require('react-addons-update');
    atom.__DO_NOT_ACCESS_React_Singleton = module.exports;
  } else {
    module.exports = atom.__DO_NOT_ACCESS_React_Singleton;
  }
} else {
  console.log("Do not use react-for-atom outside of Atom. Use require('react') instead.");
}
