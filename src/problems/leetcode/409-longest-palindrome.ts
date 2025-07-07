// 1번 풀이: Greedy + HashMap
function longestPalindrome1(s: string): number {
  if (s.length === 1) return 1;

  const hashTable: Record<string, number> = {};
  for (const char of s) {
    hashTable[char] = (hashTable[char] ?? 0) + 1;
  }

  let result = 0;
  let hasOdd = false;
  for (const count of Object.values(hashTable)) {
    if (count % 2 === 0) {
      result += count;
    } else {
      result += count - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? result + 1 : result;
}

// 2번 풀이
function longestPalindrome2(s: string): number {
  const set = new Set<string>();
  let length = 0;

  for (const char of s) {
    if (set.has(char)) {
      set.delete(char); // 두 개가 쌍을 이룸
      length += 2;
    } else {
      set.add(char);
    }
  }

  return set.size > 0 ? length + 1 : length;
}

const input1 = 'abccccdd'; // 7
const input2 = 'a'; // 1
const input3 = 'Aa'; // 1
const input4 = ''; // 0
const input5 = 'aa'; // 2
const input6 = 'ccc'; // 3

console.log(longestPalindrome1(input1));
console.log(longestPalindrome1(input2));
console.log(longestPalindrome1(input3));
console.log(longestPalindrome2(input4));
console.log(longestPalindrome2(input5));
console.log(longestPalindrome2(input6));
