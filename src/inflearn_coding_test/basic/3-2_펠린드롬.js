function solution(str) {
  const newStr = str.toLowerCase().replace(/[^a-z]/g, '');
  let isPalindrome = false;

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) {
      isPalindrome = false;
      return isPalindrome;
    } else {
      isPalindrome = true;
    }
  }

  return isPalindrome;
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof')); // YES
console.log(solution('sungminkim')); // NO
