// 1번 풀이 => ❌ 수학적인 우선순위가 적용되지 않음 (ex. '6 + 4 / 2')
// function solution(my_string) {
//   const arr = my_string.split(' ');

//   var answer = Number(arr[0]);
//   for (let i = 1; i < arr.length; i += 2) {
//     const operator = arr[i];
//     const nextNum = Number(arr[i + 1]);

//     if (operator === '+') {
//       answer += nextNum;
//     } else if (operator === '-') {
//       answer -= nextNum;
//     } else if (operator === '/') {
//       answer /= nextNum;
//     } else if (operator === '*') {
//       answer *= nextNum;
//     }
//   }

//   return answer;
// }

// 2번 풀이 (수학적 우선순위 적용)
function solution(my_string) {
  const arr = my_string.split(' ');

  let currOperator = '+';
  const stack = [];

  for (const element of arr) {
    if (element === '+' || element === '-' || element === '/' || element === '*') {
      currOperator = element;
    } else {
      // 숫자인경우
      const curNum = Number(element);

      if (currOperator === '+') {
        stack.push(+curNum);
      } else if (currOperator === '-') {
        stack.push(-curNum);
      } else if (currOperator === '*' || currOperator === '/') {
        const prevNum = stack.pop();

        if (currOperator === '*') {
          stack.push(prevNum * curNum);
        } else {
          stack.push(prevNum / curNum);
        }
        currOperator = '+';
      }
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(solution('3 + 4'));
console.log(solution('3 - 4'));
console.log(solution('3 / 4'));
console.log(solution('3 * 4'));
console.log(solution('3 + 4 * 5'));
console.log(solution('3 + 4 * 5 / 6'));
console.log(solution('3 + 4 * 5 / 6 - 7'));
console.log(solution('3 + 4 * 5 / 6 - 7 + 8'));
console.log(solution('3 + 4 * 5 / 6 - 7 + 8 * 9'));
console.log(solution('3 + 4 * 5 / 6 - 7 + 8 * 9 / 10'));
