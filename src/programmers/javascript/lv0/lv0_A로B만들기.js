// 1번 풀이
// function solution(before, after) {
//   if (before.length !== after.length) return 0;

//   let answer = [...before];
//   for (let i = 0; i < after.length; i++) {
//     if (answer.includes(after[i])) {
//       const index = answer.indexOf(after[i]);
//       answer[index] = '';
//     }
//   }

//   return answer.join('').length > 0 ? 0 : 1;
// }
// 2번 풀이
function solution(before, after) {
  return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}

console.log(solution('olleh', 'hello')); // 1
console.log(solution('allpe', 'apple')); // 0
