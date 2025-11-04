function solution(array) {
  const mid = Math.floor(array.length / 2);

  return array.sort((a, b) => a - b)[mid];
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
