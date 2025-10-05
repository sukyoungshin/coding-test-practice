function solution(money) {
  const 커피잔 = Math.floor(money / 5500);
  const 남는돈 = money - 5500 * 커피잔;

  return [커피잔, 남는돈];
}

console.log(solution(5500));
console.log(solution(15000));
