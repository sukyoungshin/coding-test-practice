function solution(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) result.push('D');
    else if (a[i] === 1 && b[i] === 3) result.push('A');
    else if (a[i] === 2 && b[i] === 1) result.push('A');
    else if (a[i] === 3 && b[i] === 2) result.push('A');
    else result.push('B');
  }

  return result.join(' ');
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); // A B A B D
