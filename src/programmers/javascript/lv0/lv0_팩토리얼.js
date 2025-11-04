// 1번 풀이
// function solution(n) {
//   if (n === 1 || n === 2) return n;

//   var obj = {
//     1: 1,
//     2: 2 * 1,
//   };

//   let i = 3;

//   while (i * obj[i - 1] <= n) {
//     obj[i] = i * obj[i - 1];
//     i++;
//   }

//   return i - 1;
// }

// 2번 풀이
function solution(n) {
  let factorial = 1;
  let i = 1;
  while (true) {
    const nextFactorial = factorial * (i + 1);

    if (nextFactorial > n) {
      return i;
    }

    factorial = nextFactorial;
    i++;
  }
}

// console.log(solution(3628800));
// console.log(solution(7));
console.log(solution(420)); // 6
