// 1번 풀이
// function solution(my_string) {
//   var answer = '';

//   for (let i = 0; i < my_string.length; i++) {
//     if (my_string[i].match(/[a-z]/g)) {
//       answer += my_string[i].toUpperCase();
//     } else {
//       answer += my_string[i].toLowerCase();
//     }
//   }

//   return answer;
// }

// 2번 풀이
function solution(my_string) {
  return [...my_string]
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

console.log(solution('cccCCC'));
console.log(solution('abCdEfghIJ'));
