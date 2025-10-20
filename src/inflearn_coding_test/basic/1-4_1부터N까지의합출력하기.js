function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(6)); // 21
console.log(solution(10)); // 55
