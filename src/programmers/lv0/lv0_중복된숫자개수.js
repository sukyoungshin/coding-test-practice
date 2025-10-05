// 1번 풀이
// function solution(array, n) {
//   return array.filter((a) => a === n).length;
// }

// 2번 풀이
function solution(array, n) {
  return array.reduce((acc, cur) => {
    if (cur === n) {
      acc++;
    }
    return acc;
  }, 0);
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
console.log(solution([0, 2, 3, 4], 1));
console.log(solution([1, 1, 1, 1, 1], 1));
