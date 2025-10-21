function solution(day, arr) {
  let count = 0;
  for (const carNum of arr) {
    if (day === carNum % 10) count++;
  }

  return count;
}

console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])); // 3
console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); // 3
