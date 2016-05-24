'use strict';
/* @noflow */

if (typeof atom === 'undefined') {
  throw new Error("Do not use react-for-atom outside of Atom. Use require('react') instead.");
}

if (typeof atom.__DO_NOT_ACCESS_React_Singleton === 'undefined') {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
    // circumvent React Dev Tools console warning
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
  }
  var exportables = process.env.NODE_ENV !== 'production' ?
    {
      default: function() { return require('react'); },
      createFragment: function() { return require('react-addons-create-fragment'); },
      CSSTransitionGroup: function() { return require('react-addons-css-transition-group'); },
      LinkedStateMixin: function() { return require('react-addons-linked-state-mixin'); },
      Perf: function() { return require('react-addons-perf'); },
      PureRenderMixin: function() { return require('react-addons-pure-render-mixin'); },
      React: function() { return require('react'); },
      ReactDOM: function() { return require('react-dom'); },
      ReactDOMServer: function() { return require('react-dom/server'); },
      shallowCompare: function() { return require('react-addons-shallow-compare'); },
      TestUtils: function() { return require('react-addons-test-utils'); },
      TransitionGroup: function() { return require('react-addons-transition-group'); },
      update: function() { return require('react-addons-update'); },
    } : {
      // Perf & TestUtils are not available in production.
      default: function() { return require('react/dist/react-with-addons.min'); },
      createFragment: function() { return require('react/dist/react-with-addons.min').addons.createFragment; },
      CSSTransitionGroup: function() { return require('react/dist/react-with-addons.min').addons.CSSTransitionGroup; },
      LinkedStateMixin: function() { return require('react/dist/react-with-addons.min').addons.LinkedStateMixin; },
      // Perf: function() { return require('react/dist/react-with-addons.min').addons.Perf; },
      PureRenderMixin: function() { return require('react/dist/react-with-addons.min').addons.PureRenderMixin; },
      React: function() { return require('react/dist/react-with-addons.min'); },
      ReactDOM: function() { return require('react/dist/react-with-addons.min').__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; },
      ReactDOMServer: function() { return require('react/dist/react-with-addons.min').__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; },
      shallowCompare: function() { return require('react/dist/react-with-addons.min').addons.shallowCompare; },
      // TestUtils: function() { return require('react/dist/react-with-addons.min').addons.TestUtils; },
      TransitionGroup: function() { return require('react/dist/react-with-addons.min').addons.TransitionGroup; },
      update: function() { return require('react/dist/react-with-addons.min').addons.update; },
    };
  Object.keys(exportables).forEach(function(key) {
    Object.defineProperty(module.exports, key, {
      get: function() {
        var value = exportables[key]();
        // remove the getter to avoid future require cache lookups
        Object.defineProperty(module.exports, key, {
          value: value,
          configurable: true,
          enumerable: true,
          writable: true,
        });
        return value;
      },
      set: function() {},
      configurable: true,
      enumerable: true,
    });
  });
  Object.defineProperty(module.exports, '__esModule', {value: true});
  atom.__DO_NOT_ACCESS_React_Singleton = module.exports;
} else {
  module.exports = atom.__DO_NOT_ACCESS_React_Singleton;
}
