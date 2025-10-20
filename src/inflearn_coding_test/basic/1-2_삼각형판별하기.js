function solution(a, b, c) {
  let max = 0;
  let total = a + b + c;
  if (a > max) max = a;
  if (b > max) max = b;
  if (c > max) max = c;

  return max <= total - max ? 'YES' : 'NO';
}

console.log(solution(13, 33, 17)); // NO
console.log(solution(9, 3, 17)); // NO
console.log(solution(5, 5, 5)); // YES
