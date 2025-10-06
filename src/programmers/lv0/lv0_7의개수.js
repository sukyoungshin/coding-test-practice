// 1번 풀이
// function solution(array) {
//   return array
//     .join('')
//     .split('')
//     .filter((a) => a === '7').length;
// }
//
// 2번 풀이
function solution(array) {
  return array.join('').split('7').length - 1;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
