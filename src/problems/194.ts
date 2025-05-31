import assert from 'assert';

const deleteArray = (array, ...args) => {
  // 1. key-value 필터 (ex. 'id', 2)
  if (typeof args[0] === 'string' && args.length === 2) {
    const [key, value] = args;
    return array.filter((item) => item[key] !== value);
  }

  // 2. index 방식
  const [start, end] = args;

  if (args.length <= 1) {
    return array.slice(0, start);
  }
  return [...array.slice(0, start), ...array.slice(end)];
};

const arr = [1, 2, 3, 4];

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);
