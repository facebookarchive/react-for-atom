'use strict';

var execFile = require('child_process').execFile;
var path = require('path');
var test = require('tap').test;

var ERRORS = [
  '',
  'exports-error.js:4:3,3: property `a`',
  'Property not found in',
  'exports-error.js:7:5,20: CommonJS exports of "../.."',
  '',
  'exports-error.js:5:3,3: property `b`',
  'Property not found in',
  'exports-error.js:7:5,20: CommonJS exports of "../.."',
  '',
  'exports-error.js:6:3,3: property `c`',
  'Property not found in',
  'exports-error.js:7:5,20: CommonJS exports of "../.."',
  '',
  'Found 3 errors',
  '',
].join('\n');

test('react-for-atom flow export', function (t) {
  t.plan(1);
  // flow check --old-output-format --strip-root
  var flow = require('flow-bin');
  execFile(flow, ['check', '--old-output-format', '--strip-root'], {
    cwd: path.join(__dirname, 'flow-export')
  }, function (err, stdout) {
    t.equal(stdout, ERRORS);
  });
});
