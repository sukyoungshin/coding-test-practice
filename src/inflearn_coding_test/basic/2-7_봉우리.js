function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;

      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        const current = arr[i][j];
        const neighbor = arr[nx][ny];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          if (neighbor >= current) {
            flag = 0;
            break;
          }
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

const input = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(input));
