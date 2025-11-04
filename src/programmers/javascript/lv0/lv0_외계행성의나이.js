// 1번 풀이
function solution(age) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return [...String(age)].reduce((acc, cur) => {
    acc += alphabet[cur];
    return acc;
  }, '');
}

// 2번 풀이
// function solution(age) {
//   return [...String(age)].map((v) => 'abcdefghij'[v]).join('');
// }

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
