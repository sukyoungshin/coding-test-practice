// 1번 풀이
// function solution(my_string) {
//   var answer = '';

//   for (let i = 0; i < my_string.length; i++) {
//     if ([...answer].includes(my_string[i])) continue;
//     answer += my_string[i];
//   }

//   return answer;
// }

// 2번 풀이
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

console.log(solution('people'));
console.log(solution('We are the world'));
