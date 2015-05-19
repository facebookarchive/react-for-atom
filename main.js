var React;

if (window) {
  // circumvent React Dev Tools console warning
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
}

function _injectCustomConfig() {
  var ReactInjection = require('react/lib/ReactInjection');
  var customAttributes = {
    mini: ReactInjection.DOMProperty.HAS_BOOLEAN_VALUE,
  };
  var AtomDOMPropertyConfig = {
    isCustomAttribute: function(attributeName) {
      return customAttributes[attributeName] !== undefined;
    },
    Properties: customAttributes,
  };
  ReactInjection.DOMProperty.injectDOMPropertyConfig(AtomDOMPropertyConfig);
}

if (typeof atom === 'object' && atom !== null) {
  if (atom.__DO_NOT_ACCESS_React_Singleton === undefined) {
    React = require('react');
    _injectCustomConfig();
    var addons;
    Object.defineProperty(React, 'addons', {
      get() {
        if (!addons) {
          React = require('react/addons');
        }
        return addons;
      },
      set(val) {
        addons = val;
      },
      enumerable: false,
    })
    atom.__DO_NOT_ACCESS_React_Singleton = React;
  } else {
    React = atom.__DO_NOT_ACCESS_React_Singleton;
  }
} else {
  console.warning("Do not use react-for-atom outside of Atom. Use require('react') instead.");
}

module.exports = React;
