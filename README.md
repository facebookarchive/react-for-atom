# react-for-atom

[![Build Status](https://travis-ci.org/jgebhardt/react-for-atom.svg?branch=master)](https://travis-ci.org/jgebhardt/react-for-atom)

Singleton lazy loading wrapper around [facebook/react](https://github.com/facebook/react).

## A single instance of React

React does not currently co-exist well with other instances of React in the same environment (see [#3252](https://github.com/facebook/react/issues/3252), [#2402](https://github.com/facebook/react/issues/2402)).

We propose that __Atom package developers wanting to use React require this package__ instead of other variants of React. `react-for-atom` exports
[`React`](https://www.npmjs.com/package/react), [`ReactDOM`](https://www.npmjs.com/package/react-dom), and all of [React's addons](https://facebook.github.io/react/docs/addons.html).

```js
const {
  cloneWithProps,
  createFragment,
  CSSTransitionGroup,
  LinkedStateMixin,
  Perf,
  PureRenderMixin,
  React,
  ReactDOM,
  ReactDOMServer,
  shallowCompare,
  TestUtils,
  TransitionGroup,
  update,
} = require('react-for-atom');

// optional
const {PropTypes} = React;
```

We plan to closely track the React release cycle in order to be able to use the latest features as well as provide access to React API warnings (in `atom --dev` mode).

## Lazy loading

Only when a property is looked up on the `react-for-atom` export is that module actually `require`'d.

```js
const ReactForAtom = require('react-for-atom');

// `react` is actually required here
const {React} = ReactForAtom;

// `TestUtils` is actually required here
const {TestUtils} = ReactForAtom;
```

## Versioning

Prior to `0.14.6`, `react-for-atom` version numbers were loosely related to the React version in `dependencies`. From that version onward, the version of `react-for-atom` matches the React version.

Changes to `react-for-atom` are reflected in pre-release versions (e.g. `0.14.6-1`). From a semver perspective, this doesn't make sense. However, because you should pin the version of `react-for-atom` anyway, this is a clear workaround for conveying React versioning info.
