function solution(s) {
  const stack = [];

  for (const char of [...s]) {
    if (char === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
