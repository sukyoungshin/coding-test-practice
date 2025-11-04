function solution(s) {
  let [resultX, resultY] = [0, 0];

  const obj = { x: {}, y: {} };
  for (let i = 0; i < s.length; i++) {
    const [x, y] = s[i];

    obj.x[x] = (obj.x[x] ?? 0) + 1;
    obj.y[y] = (obj.y[y] ?? 0) + 1;
  }

  for (const [key, value] of Object.entries(obj.x)) {
    if (value === 1) resultX = Number(key);
  }

  for (const [key, value] of Object.entries(obj.y)) {
    if (value === 1) resultY = Number(key);
  }

  return [resultX, resultY];
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ]),
);
console.log(
  solution([
    [1, 1],
    [2, 2],
    [1, 2],
  ]),
);
