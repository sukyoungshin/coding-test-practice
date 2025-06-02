import assert from 'assert';

const arr = [1, 2, 3, 4, 5];

const square = (n) => n ** 2; // 배열의 각 요소를 제곱
const sqrt = (n) => Math.sqrt(n); // 배열 각 요소의 제곱근
const cube = (n) => n ** 3; // 배열의 각 요소를 세제곱

// 1. map을 이용하여, 각 요소를 다음의 순서로 처리하시오.
const result1 = arr.map(square).map(sqrt).map(cube);
assert.deepStrictEqual(result1, [1, 8, 27, 64, 125]);

// 2. reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오. (1회전으로 처리!)
const result2 = arr.reduce<number[]>((acc, cur) => {
  const transformed = cube(sqrt(square(cur)));
  acc.push(transformed);
  return acc;
}, []);
assert.deepStrictEqual(result2, [1, 8, 27, 64, 125]);

// 3. 수행 순서를 자유롭게 변경하도록 해보세요.
function dynamicPipeline(pipeline) {
  return arr.map((num) => pipeline.reduce((acc, fn) => fn(acc), num));
}

const pipeline1 = [square, sqrt, cube];
const pipeline2 = [cube, square, sqrt];

const result3 = dynamicPipeline(pipeline1);
assert.deepStrictEqual(result3, [1, 8, 27, 64, 125]);
const result4 = dynamicPipeline(pipeline2);
assert.deepStrictEqual(result4, [1, 8, 27, 64, 125]);
