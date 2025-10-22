function solution(str, char) {
  return [...str].filter((item) => item === char).length;
}

console.log(solution('COMPUTERPROGRAMMING', 'R')); // 3
console.log(solution('COMPUTERPROGRAMMING', 'G')); // 2
console.log(solution('COMPUTERPROGRAMMING', 'C')); // 1
