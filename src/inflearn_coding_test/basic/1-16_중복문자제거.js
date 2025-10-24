// 1번 풀이
// function solution(str) {
//   let answer = '';
//   for (const item of str) {
//     if (answer.includes(item)) continue;
//     answer += item;
//   }
//   return answer;
// }

// 2번 풀이
function solution(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    // indexOf는 처음 나온 인덱스를 반환하므로, 중복된 문자가 나오면 그 인덱스는 다른 인덱스가 된다.
    if (str.indexOf(str[i]) === i) {
      answer += str[i];
    }
  }
  return answer;
}

// 3번 풀이
// function solution(str) {
//   return [...new Set(str)].join('');
// }

console.log(solution('ksekkset')); // kset
console.log(solution('kseksseet')); // kset
