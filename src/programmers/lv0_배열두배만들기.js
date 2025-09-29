// 1번 풀이
// function solution(numbers) {
//   return numbers.map((a) => a * 2);
// }

// 2번 풀이
function solution(numbers) {
  return numbers.reduce((acc, cur) => [...acc, cur * 2], []);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 100, -99, 1, 2, 3]));
