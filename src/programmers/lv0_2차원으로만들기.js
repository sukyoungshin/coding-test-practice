function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    const chunk = num_list.slice(i, i + n);
    answer.push(chunk);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
