// 1번 풀이
function solution1(nums) {
  let answer = [];

  for (const num of nums) {
    const reverse = Number(num.toString().split('').reverse().join(''));

    if (isPrime(reverse)) answer.push(reverse);
  }

  return answer;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 2번 풀이
function solution2(nums) {
  let answer = [];

  for (const num of nums) {
    let first = num % 10;
    let last = Math.floor(num / 10);

    while (last >= 10) {
      first = first * 10 + (last % 10);
      last = Math.floor(last / 10);
    }

    const newNum = first * 10 + last;

    if (isPrime(newNum)) answer.push(newNum);
  }

  return answer;
}

console.log(solution1([32, 55, 62, 20, 250, 370, 200, 30, 100])); // [23, 2, 73, 2, 3]
console.log(solution2([32, 55, 62, 20, 250, 370, 200, 30, 100])); // [23, 2, 73, 2, 3]
