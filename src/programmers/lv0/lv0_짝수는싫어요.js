// 1번 풀이
// function solution(n) {
//   let answer = [];
//   for (let i = 1; i < n + 1; i += 2) {
//     answer.push(i);
//   }
//   return answer;
// }

// 2번 풀이
function solution(n) {
  return Array.from({ length: n }, (_, i) => i++).filter((a) => a % 2 !== 0);
}

console.log(solution(10));
console.log(solution(15));
