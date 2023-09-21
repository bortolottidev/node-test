import { describe, it } from 'node:test'
import assert from 'node:assert'
import add from './add.js'

describe('add', () => {
  it('should add 5+3', () => {
    assert.strictEqual(add(5, 3), 8);
  });

  it('should throw when i pass a NaN', () => {
    assert.throws(
      () => add("dsadsa", 3),
      {
        message: "a is not a number"
      }
    );

    assert.throws(
      () => add(4, "dsadsa"),
      {
        message: "b is not a number"
      }
    );
  });
})
