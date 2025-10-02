function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);

  return emergency.map((a) => sorted.indexOf(a) + 1);
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
