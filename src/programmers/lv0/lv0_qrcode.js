import assert from 'assert';

// 1번풀이
// function solution(q, r, code) {
//     var answer = '';
//     for (let i = 0; i < code.length; i++) {
//         if (i % q === r) {
//             answer += code[i];
//         }
//     }
//     return answer;
// }

// 2번풀이
function solution(q, r, code) {
  var chars = [...code];

  return chars.reduce((acc, cur, idx) => {
    if (idx % q === r) {
      acc += cur;
    }
    return acc;
  }, '');
}

const q1 = 3,
  r1 = 1,
  code1 = 'qjnwezgrpirldywt';
const q2 = 1,
  r2 = 0,
  code2 = 'programmers';

assert.deepStrictEqual(solution(q1, r1, code1), 'jerry');
assert.deepStrictEqual(solution(q2, r2, code2), 'programmers');
