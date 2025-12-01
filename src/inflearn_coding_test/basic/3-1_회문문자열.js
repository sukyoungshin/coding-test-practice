function solution(str) {
  const newStr = str.toLowerCase();
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

console.log(solution('gooG')); // true
console.log(solution('aba')); // true
console.log(solution('abca')); // false
