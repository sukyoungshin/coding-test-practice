function solution(str) {
  let answer = '';
  let count = 1;
  str = str + ' '; // 마지막 문자에 대한 처리를 위해 빈 문자 추가 (Sentinel Value)

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const nextChar = str[i + 1];

    if (char === nextChar) count++;
    else {
      answer += char;
      if (count > 1) answer += String(count);
      count = 1;
    }
  }

  return answer;
}

console.log(solution('KKHSSSSSSSE')); // K2HS7E
