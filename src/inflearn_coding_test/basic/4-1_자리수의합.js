function solution(nums) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (const num of nums) {
    let temp = num;
    let sum = temp % 10;

    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = num;
    } else if (sum === max) {
      answer = Math.max(answer, num);
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 122])); // 137
console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 17
