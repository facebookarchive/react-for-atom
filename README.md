# react-for-atom

[![Build Status](https://travis-ci.org/jgebhardt/react-for-atom.svg?branch=master)](https://travis-ci.org/jgebhardt/react-for-atom)

Wrapper around [facebook/react](https://github.com/facebook/react), providing the following
modifications:

## A single instance of React
React does not currently play well with other instances of React on the same page
(see [#3252](https://github.com/facebook/react/issues/3252),
[#2402](https://github.com/facebook/react/issues/2402)).

We propose that __Atom package developers wanting to use React require this package__ instead of
other variants of React. 'react-for-atom' exports
[`React`](https://www.npmjs.com/package/react),
[`ReactDOM`](https://www.npmjs.com/package/react-dom), and all of
[React's addons](https://facebook.github.io/react/docs/addons.html).

```js
const {
  cloneWithProps,
  createFragment,
  CSSTransitionGroup,
  Perf,
  PureRenderMixin,
  React,
  ReactDOM,
  shallowCompare,
  TestUtils,
  TransitionGroup,
  update,
} = require('react-for-atom');

// optional
const {PropTypes} = React;
```

We plan to closely track the React release cycle in order to be able to use the latest features as
well as provide access to React API warnings (in `atom --dev` mode).

#### Where is `LinkedStateMixin`?

Data flows in one direction in React, and so 'react-for-atom' explicitly avoids two-way binding. The
[`LinkedStateMixin`](https://facebook.github.io/react/docs/two-way-binding-helpers.html) is
intentionally omitted.
