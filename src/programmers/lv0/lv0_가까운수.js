function solution(array, n) {
  array.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);

    if (diffA !== diffB) {
      return diffA - diffB;
    }
    return a - b;
  });

  return array[0];
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
