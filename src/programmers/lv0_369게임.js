// 1번 풀이
function solution(order) {
  return [...String(order)].reduce((acc, cur) => {
    if (cur === '3' || cur === '6' || cur === '9') {
      acc += 1;
    }
    return acc;
  }, 0);
}

// 2번 풀이
// function solution(order) {
//   return [...String(order)].filter((v) => ['3', '6', '9'].includes(v)).length;
// }

console.log(solution(3));
console.log(solution(29423));
console.log(solution(100));
