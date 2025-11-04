function solution(num, k) {
  return String(num).indexOf(String(k)) > 0 ? String(num).indexOf(String(k)) + 1 : -1;
}

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
