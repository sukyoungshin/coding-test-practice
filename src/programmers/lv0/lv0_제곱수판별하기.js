// 1번 풀이
// function solution(n) {
//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i !== 0) continue;
//     if (i * i !== n) continue;

//     if (i * i === n) return 1;
//   }

//   return 2;
// }

// 2번 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(144));
console.log(solution(976));
console.log(solution(81));
