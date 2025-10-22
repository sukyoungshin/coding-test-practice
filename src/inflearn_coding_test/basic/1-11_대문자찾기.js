// 1번 풀이
// function solution(str) {
//   const regex = /[A-Z]/g;
//   return [...str].filter((char) => regex.test(char)).length;
// }

// 2번 풀이
// function solution(str) {
//   let count = 0;
//   for (const char of str) {
//     if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) count++;
//   }

//   return count;
// }

// 3번 풀이
function solution(str) {
  let count = 0;
  for (const char of str) {
    if (char === char.toUpperCase()) count++;
  }

  return count;
}

console.log(solution('KoreaTimeGood')); // 3
