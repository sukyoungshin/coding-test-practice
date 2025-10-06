// 1번 풀이
// function solution(slice, n) {
//   let pizzaCount = 1;

//   while (pizzaCount <= 100) {
//     if ((slice * pizzaCount) / n >= 1) {
//       return pizzaCount;
//     } else {
//       pizzaCount++;
//     }
//   }

//   return pizzaCount;
// }

// 2번 풀이
function solution(slice, n) {
  return Math.ceil(n / slice);
}

console.log(solution(7, 10));
console.log(solution(4, 12));
