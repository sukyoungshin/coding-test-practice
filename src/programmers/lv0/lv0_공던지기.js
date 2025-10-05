function solution(numbers, k) {
  let arr = [...numbers];

  while (arr.length < k * 2) {
    arr = [...arr, ...arr];
  }

  arr = arr.filter((item, index) => index % 2 === 0);
  return arr[k - 1];
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3], 3));
