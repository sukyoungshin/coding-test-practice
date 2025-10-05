function solution(s) {
  const stack = [];

  // ✅ forEach는 break, continue, return 등의 제어문을 사용할 수 없다.
  for (const a of [...s]) {
    const standard = '(';

    if (a === standard) {
      stack.push(a);
    } else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

// console.log(solution('()()'));
// console.log(solution('(())()'));
// console.log(solution(')()('));
// console.log(solution('(()('));
// console.log(solution('())(()'));
console.log(solution('))))(((('));
