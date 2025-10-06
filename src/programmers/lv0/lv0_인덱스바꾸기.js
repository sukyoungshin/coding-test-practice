// 1번 풀이
// function solution(my_string, num1, num2) {
//   const charArray = [...my_string];

//   const result = charArray.map((char, index) => {
//     if (index === num1) {
//       return charArray[num2];
//     } else if (index === num2) {
//       return charArray[num1];
//     }
//     return char;
//   });

//   return result.join('');
// }

// 2번 풀이
function solution(my_string, num1, num2) {
  const stringArray = [...my_string];
  [stringArray[num1], stringArray[num2]] = [stringArray[num2], stringArray[num1]];

  return stringArray.join('');
}

console.log(solution('hello', 1, 2));
console.log(solution('I love you', 3, 6));
