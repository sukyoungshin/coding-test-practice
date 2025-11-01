function solution(arr) {
  const answer = Array.from({ length: arr.length }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76])); // 4 3 2 1 5
console.log(solution([95, 99, 99, 98, 100])); // 5,2,2,4,1
