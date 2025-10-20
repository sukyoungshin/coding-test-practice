function solution(arr) {
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (const item of arr) {
    if (item % 2 !== 0) {
      sum += item;

      if (item < min) min = item;
    }
  }

  return [sum, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85])); // [239, 41]
console.log(solution([24, 39, 56, 37, 81, 17, 92])); // [174, 17]
