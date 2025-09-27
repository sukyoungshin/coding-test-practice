function solution(n) {
  if (n <= 7) return 1;

  return Math.ceil(n / 7);
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
