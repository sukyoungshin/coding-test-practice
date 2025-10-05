function solution(n) {
  return Array.from({ length: n + 1 }, (_, i) => {
    if (n % i !== 0) return;
    return i;
  }).filter((a) => a);
}

console.log(solution(24));
console.log(solution(29));
