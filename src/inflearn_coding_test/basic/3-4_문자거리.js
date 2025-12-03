function solution(s, t) {
  const answer = [];

  let p = Number.MAX_SAFE_INTEGER;
  for (const char of s) {
    if (char === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = Number.MAX_SAFE_INTEGER;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

console.log(solution('teachermode', 'e')); // 1 0 1 2 1 0 1 2 2 1 0

// findIndex : 배열 함수
// indexOf: 문자열 함수
