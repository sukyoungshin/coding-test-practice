// 1번 풀이
// function solution(numbers) {
//   const sortedNumbers = numbers.sort((a, b) => b - a);
//   return sortedNumbers[0] * sortedNumbers[1];
// }
// 2번 풀이
function solution(numbers) {
  const [first, second] = numbers.sort((a, b) => b - a);
  return first * second;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
