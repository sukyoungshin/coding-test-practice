function solution(numbers, direction) {
  if (direction === 'right') {
    const last = numbers[numbers.length - 1];
    const rest = numbers.slice(0, numbers.length - 1);
    return [last, ...rest];
  }

  const [first, ...rest] = numbers;
  return [...rest, first];
}

console.log(solution([1, 2, 3], 'right'));
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
