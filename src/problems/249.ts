import assert from 'assert';

// 다음과 같은 집합 A, B, C가 있을 때,
// 각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.
const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

function intersect(a, b) {
  const result = new Set();

  for (const num of a) {
    if (!b.includes(num)) continue;
    result.add(num);
  }

  return [...result];
}

function diff(originArr, compareArr) {
  const compareSet = new Set(compareArr);
  const result: number[] = [];
  for (const num of originArr) {
    if (!compareSet.has(num)) result.push(num);
  }

  return result;
}

function union(a, b) {
  // 1번풀이
  // return [...a, ...b].filter((v, i, self) => self.indexOf(v) === i).sort((a, b) => a - b);

  // 2번풀이 (new Set())
  return [...new Set([...a, ...b])];
}

assert.deepStrictEqual(intersect(A, C), [3, 4]);
assert.deepStrictEqual(diff(A, B), [2, 4]);
assert.deepStrictEqual(diff(B, A), [22, 44]);
assert.deepStrictEqual(diff(A, C), [1, 2, 5]);
assert.deepStrictEqual(diff(B, C), [1, 22, 44, 5]);
assert.deepStrictEqual(union(A, B), [1, 2, 3, 4, 5, 22, 44]);
assert.deepStrictEqual(union(A, C), [1, 2, 3, 4, 5, 11, 222, 555]);
