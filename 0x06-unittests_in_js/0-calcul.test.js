const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber(2, -2), 0);
    assert.strictEqual(calculateNumber(3, -5), -2);
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(10, 3), 13);
  });

  it('should round floats', () => {
    assert.strictEqual(calculateNumber(2, 5.7), 8);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
    assert.strictEqual(calculateNumber(2.4, -5.5), -3);
  });

  it('should return rounded sum if only one is provided', () => {
    assert.strictEqual(calculateNumber(4.7), 5);
    assert.strictEqual(calculateNumber(3), 3);
    assert.strictEqual(calculateNumber(6.7), 7);
  });

  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
    assert.strictEqual(calculateNumber(1, '3.7'), 5);
    assert.strictEqual(calculateNumber('1.2', 3.7), 5);
  });

  it('should throw typeerror if either parameter cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('hello'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber(1.2, 'dog'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
});
