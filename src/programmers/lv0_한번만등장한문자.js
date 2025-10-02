// 1번 풀이
// function solution(s) {
//   let answer = '';
//   for (let i = 0; i < s.length; i++) {
//     if ([...s].filter((a) => a === s[i]).length !== 1) continue;
//     answer += s[i];
//   }

//   return [...answer].sort().join('');
// }

// 2번 풀이
function solution(s) {
  return [...s]
    .filter((char) => s.indexOf(char) === s.lastIndexOf(char))
    .sort()
    .join('');
}

console.log(solution('abcabcadc')); // "d"
console.log(solution('abdc')); // "d"
console.log(solution('hello')); // "eho"
