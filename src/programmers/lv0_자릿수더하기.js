function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((a, b) => a + Number(b), 0);
}

console.log(solution(1234));
console.log(solution(930211));
