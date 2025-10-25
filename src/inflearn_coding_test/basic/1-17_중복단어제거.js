// 1번 풀이 (시간복잡도 O(n^2))
// function solution(str) {
//   let answer = [];

//   for (const word of str) {
//     if (!answer.includes(word)) {
//       answer.push(word);
//     }
//   }

//   return answer;
// }

// 2번 풀이 (시간복잡도 O(n^2))
function solution(s) {
  return s.filter((v, i) => s.indexOf(v) === i);
}

console.log(solution(['good', 'time', 'good', 'time', 'student'])); // ['good', 'time', 'student']
