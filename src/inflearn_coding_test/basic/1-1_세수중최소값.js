function solution(a, b, c) {
  let min = Number.MAX_SAFE_INTEGER;

  if (a < min) min = a;
  if (b < min) min = b;
  if (c < min) min = c;

  return min;
}

console.log(solution(6, 5, 11));
console.log(solution(2, 1, 3));
console.log(solution(10, 10, 10));
