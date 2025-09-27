// 1번 풀이
// function solution(numbers) {
//   var answer = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     answer += numbers[i];
//   }

//   return answer / numbers.length;
// }

// 2번 풀이
function solution(numbers) {
  return numbers.reduce((acc, cur) => (acc += cur), 0) / numbers.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
