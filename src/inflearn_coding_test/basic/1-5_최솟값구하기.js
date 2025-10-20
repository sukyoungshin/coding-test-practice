function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2
console.log(solution([12, 24, 15, 36, 17, 48, 39])); // 12
