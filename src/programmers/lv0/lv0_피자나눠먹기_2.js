// 1번 풀이
function solution(n) {
  let loop = 1;
  while (true) {
    if ((n * loop) % 6 === 0) break;
    loop++;
  }

  return (n * loop) / 6;
}

// 2번 풀이
// const solution = (n) => {
//   let piece = 6

//   while(true) {
//       if (piece % n === 0) {
//           break
//       }
//       piece += 6
//   }

//   return piece / 6
// }

console.log(solution(6));
console.log(solution(10));
console.log(solution(4));
