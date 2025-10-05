// 1번 풀이
// function solution(s) {
//   const hash = {};
//   for (const char of [...s]) {
//     hash[char] = (hash[char] ?? 0) + 1;
//   }

//   let max = 0;
//   let answer = '';

// ✅ object는 반복 가능한 객체가 아니므로, Object.entries()를 사용하여 배열로 변환한 후 반복합니다.
//   for (const [char, count] of Object.entries(hash)) {
//     if (count > max) {
//       max = count;
//       answer = char;
//     }
//   }

//   return answer;
// }

// 2번풀이
function solution(s) {
  const hash = new Map();
  for (const char of [...s]) {
    if (hash.has(char)) {
      hash.set(char, hash.get(char) + 1);
    } else {
      hash.set(char, 1);
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  let answer = '';
  // ✅ Map()은 반복 가능한 객체이므로 for...of 문으로 순회 가능
  for (const [char, count] of hash) {
    if (count > max) {
      max = count;
      answer = char;
    }
  }

  return answer;
}

console.log(solution('BACBACCACCBDEDE'));
