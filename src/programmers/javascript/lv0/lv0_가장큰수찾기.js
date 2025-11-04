function solution(array) {
  const maxNumber = Math.max(...array);
  const index = array.indexOf(maxNumber);
  return [maxNumber, index];
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
