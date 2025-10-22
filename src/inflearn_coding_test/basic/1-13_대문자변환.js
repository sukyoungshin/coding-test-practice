// 1번 풀이
// function solution(str) {
//   let answer = '';
//   for (const char of str) {
//     if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//       answer += char.toLowerCase(); // 대→소
//     } else {
//       answer += char.toUpperCase(); // 소→대
//     }
//   }
//   return answer;
// }

// 2번 풀이
function solution(str) {
  return [...str]
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

console.log(solution('ItisTimeToStudy')); // iIIStIMEtOsTUDY
