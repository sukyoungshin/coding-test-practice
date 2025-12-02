function solution(str) {
  return Number(str.replace(/[^0-9]/g, ''));
}

function solution2(str) {
  let answer = 0;

  for (const x of str) {
    if (!isNaN(x)) {
      answer = answer * 10 + Number(x);
    }
  }
  return answer;
}

console.log(solution('tge0a1h205er')); // 1205
console.log(solution('g0en2T0s8eSoft')); // 208
console.log(solution2('g0en2T0s8eSoft')); // 208
