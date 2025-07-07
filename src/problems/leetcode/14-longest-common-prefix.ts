// https://leetcode.com/problems/longest-common-prefix/

// 1.
export function longestCommonPrefix1(strs: string[]): string {
  if (strs.length === 0) return '';

  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; // 첫 단어의 i번째 글자

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix; // 하나라도 다르면 바로 종료
      }
    }

    prefix += char;
  }

  return prefix;
}

// 2. brute force
export function longestCommonPrefix2(strs: string[]): string {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const current = strs[i];

    while (!current.startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // 뒤에서부터 하나씩 제거
      if (prefix === '') return '';
    }
  }

  return prefix;
}
// slice(0, -1)	마지막 글자 제외한 앞부분
// slice(-1)	마지막 글자 하나만

// 3. Trie
type TrieNode = {
  children: { [key: string]: TrieNode };
  isEnd: boolean;
};

export function longestCommonPrefix3(strs: string[]): string {
  if (strs.length === 0) return '';

  // 1. Trie root 생성
  const root: TrieNode = {
    children: {},
    isEnd: false,
  };

  // 2. Trie에 단어 삽입
  for (const word of strs) {
    let node = root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = {
          children: {},
          isEnd: false,
        };
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  // 3. Trie 순회하며 공통 접두어 추출
  let prefix = '';
  let node = root;

  while (Object.keys(node.children).length === 1 && !node.isEnd) {
    const char = Object.keys(node.children)[0]; // 유일한 자식 키
    prefix += char;
    node = node.children[char];
  }

  return prefix;
}
