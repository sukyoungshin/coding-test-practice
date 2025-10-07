function solution(board, moves) {
  let count = 0;
  const basket = [];

  for (const move of moves) {
    for (let i = 0; i < board.length; i++) {
      const currDoll = board[i][move - 1];

      if (currDoll !== 0) {
        board[i][move - 1] = 0;

        const topDoll = basket[basket.length - 1];

        if (basket.length > 0 && topDoll === currDoll) {
          count += 2;
          basket.pop();
        } else {
          basket.push(currDoll);
        }
        break;
      }
    }
  }

  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
);
