// 1번 풀이. 시간복잡도 O(N * K)
// function solution(k, arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length - k; i++) {
//     const currentSum = arr.slice(i, i + k).reduce((acc, curr) => acc + curr, 0);

//     if (currentSum > sum) {
//       sum = currentSum;
//     }
//   }

//   return sum;
// }

// 2번 풀이. 시간복잡도 (O(N))
function solution(k, arr) {
  let answer;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];

    answer = Math.max(answer, sum);
  }

  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56
