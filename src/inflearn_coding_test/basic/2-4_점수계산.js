function solution(arr) {
  let answer = 0;
  let count = 0;

  for (const curr of arr) {
    if (curr === 1) {
      answer += curr + count;
      count++;
    } else {
      count = 0;
    }
  }

  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
