import { it, afterEach, mock } from 'node:test';
import assert from 'node:assert';

afterEach(() => mock.reset());

it('should test spy for mocking', () => {
  const aSpyFunc = mock.fn((asd) => {
    console.log({ asd })
  });

  aSpyFunc("TEST");
  assert.strictEqual(aSpyFunc.mock.calls.length, 1);
  assert.deepStrictEqual(aSpyFunc.mock.calls[0].arguments, ["TEST"]);
});
