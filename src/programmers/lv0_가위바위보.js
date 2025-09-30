// 1번 풀이
// function solution(rsp) {
//   return [...rsp].reduce((acc, cur) => {
//     if (cur === '2') {
//       acc += '0';
//     } else if (cur === '0') {
//       acc += 5;
//     } else {
//       acc += 2;
//     }
//     return acc;
//   }, '');
// }

// 2번 풀이
function solution(rsp) {
  const object = {
    2: '0',
    0: '5',
    5: '2',
  };

  return [...rsp].map((item) => object[item]).join('');
}

// 3번 풀이
// function solution(rsp) {
//   const object = {
//     2: '0',
//     0: '5',
//     5: '2',
//   };

//   return [...rsp].reduce((acc, cur) => {
//     acc += object[cur];
//     return acc;
//   }, '');
// }

console.log(solution('2'));
console.log(solution('0'));
console.log(solution('5'));
