// 1번 풀이
function solution(s1, s2) {
  const [shorter, longer] = s1.length < s2.length ? [s1, s2] : [s2, s1];
  return shorter.filter((item) => longer.includes(item)).length;
}

// 2번 풀이
// function solution(s1, s2) {
//   return s1.filter((item) => s2.includes(item)).length;
// }

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
console.log(solution(['n', 'omg'], ['m', 'dot']));
