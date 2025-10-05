// 1번 풀이: sort() 사용 => 시간복잡도 O(nlogn)
// function solution(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// 2번 풀이: 두 포인터 사용 => 시간복잡도 O(n+p2)
function solution(arr1, arr2) {
  const result = [];
  let [n, m] = [arr1.length, arr2.length];
  let [p1, p2] = [0, 0];

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1++]);
    } else {
      result.push(arr2[p2++]);
    }
  }

  while (p1 < n) {
    result.push(arr1[p1++]);
  }
  while (p2 < m) {
    result.push(arr2[p2++]);
  }
  console.log({ p1, p2, result });
  return result;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
// console.log(solution([1, 3, 5, 7, 9], [2, 3, 6, 7, 9]));
