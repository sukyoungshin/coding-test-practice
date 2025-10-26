function solution(arr) {
  let results = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (results[results.length - 1] < arr[i]) {
      results.push(arr[i]);
    }
  }

  return results.length;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])); // 5
console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 4
console.log(solution([150, 135, 145, 147, 148])); // 3
