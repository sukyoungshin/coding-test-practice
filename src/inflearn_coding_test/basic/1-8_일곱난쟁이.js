function solution(arr) {
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  const target = total - 100;

  let excludeIndexI = -1,
    excludeIndexJ = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        excludeIndexI = i;
        excludeIndexJ = j;
        break;
      }
    }

    if (excludeIndexI !== -1 && excludeIndexJ !== -1) break;
  }

  return arr.filter((_, index) => index !== excludeIndexI && index !== excludeIndexJ);
}

// console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); // [20, 7, 23, 19, 10, 8, 13]
console.log(solution([22, 7, 21, 19, 10, 15, 25, 8, 13])); // [ 22, 7, 10, 15, 25, 8, 13] 또는 [22, 7, 21, 19, 10, 8, 13]
