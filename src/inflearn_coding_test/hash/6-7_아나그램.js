function solution(s1, s2) {
  if (s1.length !== s2.length) return 'NO';

  const hash = new Map();
  for (const char of [...s1]) {
    if (hash.has(char)) {
      hash.set(char, hash.get(char) + 1);
    } else {
      hash.set(char, 1);
    }
  }

  for (const char of s2) {
    if (!hash.has(char) || hash.get(char) === 0) return 'NO';
    hash.set(char, hash.get(char) - 1);
  }

  return 'YES';
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
