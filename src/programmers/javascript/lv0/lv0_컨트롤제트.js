// 1번 풀이
// function solution(s) {
//   return s.split(' ').reduce((acc, cur, i, self) => {
//     const prevNum = Number(self[i - 1]);
//     const curNum = Number(cur);

//     acc = isNaN(cur) ? acc - prevNum : acc + curNum;

//     return acc;
//   }, 0);
// }

// 2번 풀이
function solution(s) {
  const stack = [];
  const numbers = s.split(' ');

  for (const cur of numbers) {
    if (cur === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(cur));
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(solution('1 2 Z 3'));
console.log(solution('10 20 30 40'));
console.log(solution('10 Z 20 Z 1'));
console.log(solution('10 Z 20 Z'));
console.log(solution('10 Z 20 Z 30'));
console.log(solution('10 Z 20 Z 30 Z'));
console.log(solution('10 Z 20 Z 30 Z 40'));
