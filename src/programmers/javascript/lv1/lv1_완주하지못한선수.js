function solution(participant, completion) {
  const hash = new Map();
  for (const person of participant) {
    hash.set(person, (hash.get(person) || 0) + 1);
  }

  for (const person of completion) {
    hash.set(person, hash.get(person) - 1);
  }

  for (const [person, count] of hash) {
    if (count !== 0) return person;
  }
}

console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  ),
);
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
