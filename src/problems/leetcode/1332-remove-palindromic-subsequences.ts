// 규칙
// - s가 팰린드롬이면 → 1
// - 아니면 (a와 b가 섞여있으면) → 2

// 1번 풀이
// function removePalindromeSub(s: string): number {
//   if (s === '') return 0;
//   return isPalindrome(s) ? 1 : 2;

//   function isPalindrome(str: string): boolean {
//     return str === str.split('').reverse().join('');
//   }
// }

// 2번 풀이 Two Pointer
function removePalindromeSub(s: string): number {
  function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }

    return true;
  }

  return isPalindrome(s) ? 1 : 2;
}

const input1 = 'ababa'; // 1
const input2 = 'abb'; // 2
const input3 = 'baabb'; // 2

console.log(removePalindromeSub(input1));
console.log(removePalindromeSub(input2));
console.log(removePalindromeSub(input3));
