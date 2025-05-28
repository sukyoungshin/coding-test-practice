// 피보나치 수열구현

// 1) for문
function loopFibonacci(n: number): number[] {
  const fibArr: number[] = [0, 1];
  if (n <= 1) return fibArr;

  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
  }

  return fibArr;
}

loopFibonacci(5); // [ 0, 1, 1, 2, 3, 5 ]

// 2) 재귀함수
function recurFibonacci(n: number): number[] {
  if (n <= 1) return [0, 1];

  const fibArr = recurFibonacci(n - 1);
  fibArr.push(fibArr[n - 2] + fibArr[n - 1]);
  return fibArr;
}
recurFibonacci(7);

// 3) memoization
function memoized(fn) {
  const memoizedTable = {};
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFactorial = memoized(function A(n) {
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});
console.log(memoizedFactorial(3));
