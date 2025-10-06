function solution(target, arr) {
  let [left, right] = [0, 0];
  let count = 0;
  let sum = 0;

  while (right < arr.length) {
    sum += arr[right++];

    while (sum >= target) {
      if (sum === target) count++;
      sum -= arr[left++];
    }
  }

  return count;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
console.log(solution(2, [1, 1, 2, 5]));
