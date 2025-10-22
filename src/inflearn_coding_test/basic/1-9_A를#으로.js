// 1번 풀이
// function solution(str) {
//   return str.replaceAll('A', '#');
// }

// 2번 풀이
function solution(str) {
  return str.replace(/A/g, '#');
}

console.log(solution('BANANA')); // B#N#N#
console.log(solution('APPLE')); // #PP#L#
