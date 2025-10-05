// 1번 풀이
function solution(hp) {
  const generalAnts = Math.floor(hp / 5);
  hp %= 5;

  const soldierAnts = Math.floor(hp / 3);
  hp %= 3;

  const workerAnts = hp;

  return generalAnts + soldierAnts + workerAnts;
}

// 2번 풀이
// function solution(hp) {
//   const 장군개미 = Math.floor(hp / 5);
//   const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
//   const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
//   return 장군개미 + 병정개미 + 일개미;
// }

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
