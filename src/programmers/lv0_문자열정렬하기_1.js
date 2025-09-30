// 1번 풀이
// function solution(my_string) {
//   return [...my_string]
//     .filter((item) => !isNaN(Number(item)))
//     .map(Number)
//     .sort((a, b) => a - b);
// }

// 2번 풀이
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map(Number);
}

console.log(solution('hi12392'));
console.log(solution('p2o4i8gj2'));
console.log(solution('abcde0'));
