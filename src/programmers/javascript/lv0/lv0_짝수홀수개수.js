// 1번 풀이
// function solution(num_list) {
//   let [짝수개수, 홀수개수] = [0, 0];

//   for (const num of num_list) {
//     if (num % 2 === 0) {
//       짝수개수++;
//     } else {
//       홀수개수++;
//     }
//   }

//   return [짝수개수, 홀수개수];
// }

// 2번 풀이
function solution(num_list) {
  return [...num_list].reduce(
    (acc, cur) => {
      if (cur % 2 === 0) {
        acc[0]++;
      } else {
        acc[1]++;
      }
      return acc;
    },
    [0, 0],
  );
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
