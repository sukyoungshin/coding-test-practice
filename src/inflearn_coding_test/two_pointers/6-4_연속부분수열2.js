function solution(m, arr) {
  let count = 0,
    sum = 0,
    left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > m) {
      sum -= arr[left];
      left++;
    }
    count += right - left + 1;
  }

  return count;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
