function solution(numbers) {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const productOfSmallestTwo = sortedNumbers[0] * sortedNumbers[1];
  const productOfLargestTwo =
    sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2];

  return Math.max(productOfSmallestTwo, productOfLargestTwo);
}

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 10]));
