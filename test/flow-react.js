'use strict';

var execFile = require('child_process').execFile;
var path = require('path');
var test = require('tap').test;

var ERRORS = [
  '',
  'react-error.js:16:10,16: property `onClick`',
  'Property not found in',
  'react-error.js:5:7,10: Home',
  '',
  'react-error.js:20:22,26: property `title`',
  'Property not found in',
  'react-error.js:5:7,10: Home',
  '',
  'react-error.js:25:17,23: function call',
  'Function cannot be called on',
  'react-error.js:25:17,21: string',
  '',
  'react-error.js:30:1,19: type parameter `Props` of React element `Home`',
  'Error:',
  'react-error.js:30:14,15: number',
  'This type is incompatible with',
  'react-error.js:11:12,21: string',
  '',
  'react-error.js:32:1,19: call of method `render`',
  'Error:',
  'react-error.js:32:17,18: number',
  'This type is incompatible with',
  '[LIB] react.js:195:14,53: ReactElement',
  '',
  'react-error.js:33:1,24: call of method `findDOMNode`',
  'Error:',
  'react-error.js:33:22,23: number',
  'This type is incompatible with',
  '[LIB] react.js:191:13,55: union: type application of polymorphic type: class type: ReactComponent | HTMLElement',
  '',
  'react-error.js:35:22,66: call of method `renderToStaticMarkup`',
  'Error:',
  'react-error.js:35:22,66: string',
  'This type is incompatible with',
  'react-error.js:35:13,18: number',
  '',
  'Found 7 errors',
  '',
].join('\n');

test('react-for-atom flow export', function (t) {
  t.plan(1);
  // flow check --old-output-format --strip-root
  var flow = require('flow-bin');
  execFile(flow, ['check', '--old-output-format', '--strip-root'], {
    cwd: path.join(__dirname, 'flow-react')
  }, function (err, stdout) {
    t.equal(stdout, ERRORS);
  });
});
