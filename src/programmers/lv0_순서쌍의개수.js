function solution(n) {
  let answer = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) answer++;
  }
  return answer;
}

console.log(solution(20));
console.log(solution(100));
