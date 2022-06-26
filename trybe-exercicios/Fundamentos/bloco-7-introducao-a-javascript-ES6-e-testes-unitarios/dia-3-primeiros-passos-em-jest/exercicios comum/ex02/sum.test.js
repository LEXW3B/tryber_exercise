const { default: test } = require('node:test');
const sum = require('./sum');

test('sum two values', () => {
  expect(sum(2,3)).toBe(5);
});