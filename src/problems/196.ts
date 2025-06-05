import assert from 'assert';

// 1. 배열의 각 원소를 String으로 변환하시오.
const arr = [1, 2, 3, true];
const ret1 = arr.map(String); // map(item => String(item))
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// 2. 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) =>
  [...args]
    .filter(Boolean) // filter((a) => a !== '')
    .join(' ');
const ret2 = classNames('', 'a b c', 'd', '', 'e');
assert.strictEqual(ret2, 'a b c d e');

// cf. example in React
// <div classNames=({x ? 'a b' : ''}, {'' ? 'c' : ''}, {z && 'e f'})
