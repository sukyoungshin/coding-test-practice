// 1번 풀이
// function solution(str) {
//   const mid = Math.floor(str.length / 2);
//   return str.length % 2 === 0 ? str[mid - 1] + str[mid] : str[mid];
// }

// 2번 풀이
function solution(str) {
  const mid = Math.floor(str.length / 2);

  const start = str.length % 2 !== 0 ? mid : mid - 1;
  const end = str.length % 2 !== 0 ? mid + 1 : mid + 2;

  return str.substring(start, end);
}
console.log(solution('study')); // u
console.log(solution('good')); // oo
console.log(solution('hello')); // l
