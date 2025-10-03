function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const [maxBoardX, maxBoardY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  for (const direction of keyinput) {
    if (direction === 'left') {
      if (x <= -maxBoardX) continue;
      x -= 1;
    } else if (direction === 'right') {
      if (x >= maxBoardX) continue;
      x += 1;
    } else if (direction === 'up') {
      if (y >= maxBoardY) continue;
      y += 1;
    } else if (direction === 'down') {
      if (y <= -maxBoardY) continue;
      y -= 1;
    }
  }

  return [x, y];
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
