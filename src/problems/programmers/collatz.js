import assert from 'assert';

// 1번 풀이
// function solution(n) {
//   const answer = [];
//   let curr = n;
//   answer.push(n); // 최초값

//   while (curr !== 1) {
//     if (curr % 2 === 0) {
//       // 짝수
//       curr = curr / 2;
//       answer.push(curr);
//     } else {
//       // 홀수
//       curr = 3 * curr + 1;
//       answer.push(curr);
//     }
//   }

//   return answer;
// }

// 2번 풀이
function solution(n) {
  const collatz = [n];
  const memo = new Map();

  function getCollatzSequence(num) {
    if (memo.has(num)) {
      const cached = memo.get(num);
      collatz.push(...cached.slice(1)); // 처음 숫자 중복되므로 제외하고 붙임
      return;
    }

    if (num === 1) return;
    const next = num % 2 === 0 ? num / 2 : 3 * num + 1;
    const startIndex = collatz.length; // 이 시점부터 새로 만들어질 수열 추적

    collatz.push(next);
    getCollatzSequence(next);

    memo.set(num, [num, ...collatz.slice(startIndex)]); // 지금 num에서 시작한 결과 수열을 잘라서 저장
  }

  getCollatzSequence(n);
  return collatz;
}

const input = 10,
  collatz = [10, 5, 16, 8, 4, 2, 1];

assert.deepStrictEqual(solution(input), collatz);
