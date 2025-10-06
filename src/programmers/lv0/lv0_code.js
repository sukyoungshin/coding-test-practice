function solution(code) {
  var answer = '';
  let mode = 0;
  let idx = 0;

  while (idx < code.length) {
    if (mode === 0) {
      if (code[idx] !== '1' && idx % 2 === 0) {
        answer += code[idx];
      }
      if (code[idx] === '1') {
        mode = 1;
      }
    } else {
      if (code[idx] !== '1' && idx % 2 !== 0) {
        answer += code[idx];
      }
      if (code[idx] === '1') {
        mode = 0;
      }
    }
    idx++;
  }

  return answer === '' ? 'EMPTY' : answer;
}

const input1 = 'abc1abc1abc'; // "acbac"

console.log(solution(input1));
