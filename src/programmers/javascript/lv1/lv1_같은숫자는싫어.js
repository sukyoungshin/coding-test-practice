// function solution(arr) {
//   let answer = [];

//   for (const item of arr) {
//     if (answer[answer.length - 1] !== item) {
//       answer.push(item);
//     }
//   }

//   return answer;
// }

function solution(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
