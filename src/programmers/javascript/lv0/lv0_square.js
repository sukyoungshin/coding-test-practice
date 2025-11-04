import assert from 'assert';

function solution(arr) {
  const [행, 열] = [arr.length, arr[0].length];

  if (행 === 열) return arr;

  if (행 > 열) {
    return arr.reduce((acc, row) => {
      const padded = [...row];
      while (padded.length < 행) {
        padded.push(0);
      }
      acc.push(padded);
      return acc;
    }, []);
  } else {
    const 부족한행수 = 열 - 행;
    const emptyRows = Array.from({ length: 부족한행수 }, () => Array(열).fill(0));
    return [...arr, ...emptyRows];
  }
}

const input1 = [
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
];
const input2 = [
  [57, 192, 534, 2],
  [9, 345, 192, 999],
];
const input3 = [
  [1, 2],
  [3, 4],
];

assert.deepStrictEqual(solution(input1), [
  [572, 22, 37, 0],
  [287, 726, 384, 0],
  [85, 137, 292, 0],
  [487, 13, 876, 0],
]);
assert.deepStrictEqual(solution(input2), [
  [57, 192, 534, 2],
  [9, 345, 192, 999],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]);
assert.deepStrictEqual(solution(input3), [
  [1, 2],
  [3, 4],
]);
