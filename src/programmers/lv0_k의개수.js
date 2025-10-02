// 1번 풀이
// function solution(i, j, k) {
//   return Array.from({ length: j - i + 1 }, (_, index) => i + index)
//     .join('')
//     .split('')
//     .filter((char) => char === String(k)).length;
// }

// 2번 풀이
function solution(i, j, k) {
  let a = '';
  for (i; i <= j; i++) {
    a += i; // 1. i부터 j까지의 모든 숫자를 하나의 '긴 문자열' a로 합친다.
  }

  // 2. 이 긴 문자열 a를 'k'라는 문자를 기준으로 나눈다.
  // 3. 나누어진 배열의 길이를 구한 후, 1을 뺀다.
  return a.split(k).length - 1;
}

console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
