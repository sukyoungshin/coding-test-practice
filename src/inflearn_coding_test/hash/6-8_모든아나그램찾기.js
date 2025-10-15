function isAnagram(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (const [map1Key, map1Val] of map1) {
    if (!map2.has(map1Key) || map2.get(map1Key) !== map1Val) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  const tHash = new Map();
  const sHash = new Map();

  for (const char of t) {
    tHash.set(char, (tHash.get(char) ?? 0) + 1);
  }

  const len = t.length - 1;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    sHash.set(char, (sHash.get(char) ?? 0) + 1);
  }

  let left = 0;
  for (let right = len; right < s.length; right++) {
    const char = s[right];
    sHash.set(char, (sHash.get(char) ?? 0) + 1);

    if (isAnagram(tHash, sHash)) answer++;

    sHash.set(s[left], sHash.get(s[left]) - 1);
    if (sHash.get(s[left]) === 0) sHash.delete(s[left]);
    left++;
  }

  return answer;
}

console.log(solution('bacaAacba', 'abc')); // 3
