var test = require('unit.js');
var str = 'hello world';

test.string(str).startsWith('hello');

if (test.string(str).startsWith('hello')) {
  console.log('Passed');
}