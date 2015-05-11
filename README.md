# react-for-atom

Wrapper around [facebook/react](https://github.com/facebook/react), providing the following modifications:

- inject custom DOM properties such as `mini`, which are currently unsupported by React (https://github.com/facebook/react/issues/140)

- Provide `React.addons` lazily to reduce package startup time

## A single instance of React
React does not currently play well with other instances of React on the same page (see [#3252](https://github.com/facebook/react/issues/3252), [#2402](https://github.com/facebook/react/issues/2402)).

Since Atom will soon deprecate `atom.react` (which provides an outdated React build), we propose that __Atom package developers wanting to use React require this package__ instead of other variants of React:

```
var React = require('react-for-atom');

// optional
var {addons, PropTypes} = React;
```

We plan to closely track the React release cycle in order to be able to use the latest features as well as provide access to React API warnings (in `atom --dev` mode).
