import assert from 'assert';

const arr = [1, 2, 3, 4];

// push, pop, shift, unshift 를 순수 함수로 작성하시오.
const push = (array, ...args) => [...array, ...args];
const pop = (array, index?: number) => (index ? array.slice(-index) : array[array.length - 1]);
const unshift = (array, ...args) => [...args, ...array];
const shift = (array, n = 1) => [array.slice(0, n), array.slice(n)];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);

assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]);

assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]);
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]);

assert.deepStrictEqual(arr, [1, 2, 3, 4]);
