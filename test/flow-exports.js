'use strict';

var execFile = require('child_process').execFile;
var path = require('path');
var test = require('tap').test;

var ERRORS = [
  '',
  'exports-commonjs-error.js:4:3,3: property `a`',
  'Property not found in',
  'exports-commonjs-error.js:7:5,20: CommonJS exports of "../.."',
  '',
  'exports-commonjs-error.js:5:3,3: property `b`',
  'Property not found in',
  'exports-commonjs-error.js:7:5,20: CommonJS exports of "../.."',
  '',
  'exports-commonjs-error.js:6:3,3: property `c`',
  'Property not found in',
  'exports-commonjs-error.js:7:5,20: CommonJS exports of "../.."',
  '',
  'exports-es-module-error.js:4:3,3: Named import from module `../..`',
  'This module has no named export called `a`.',
  '',
  'exports-es-module-error.js:5:3,3: Named import from module `../..`',
  'This module has no named export called `b`.',
  '',
  'exports-es-module-error.js:6:3,3: Named import from module `../..`',
  'This module has no named export called `c`.',
  '',
  'Found 6 errors',
  '',
].join('\n');

test('react-for-atom flow exports', function (t) {
  t.plan(1);
  // flow check --old-output-format --strip-root
  var flow = require('flow-bin');
  execFile(flow, ['check', '--old-output-format', '--strip-root'], {
    cwd: path.join(__dirname, 'flow-exports')
  }, function (err, stdout) {
    t.equal(stdout, ERRORS);
  });
});
