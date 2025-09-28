function solution(sides) {
  const [a, b, c] = sides.sort((a, b) => a - b);

  return a + b > c ? 1 : 2;
}

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));
