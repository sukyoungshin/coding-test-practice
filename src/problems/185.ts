import assert from 'assert';

function isPrime(num) {
  // 1 이하의 수는 소수X
  if (num <= 1) return false;
  // 약수가 1과 자기 자신뿐인 자연수 (ex. 2, 3, 5, 7, 11 ...)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const inputArray1 = [1, 2, 3];
const inputArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1번. 특정 배열의 원소 중 소수가 존재하는지 체크하는 함수
const hasPrime = (arr) => arr.some(isPrime); // 특정 배열의 원소 중 소수가 존재하는지 체크하는 함수
console.log(`✔ hasPrime(${inputArray1}) →`, hasPrime(inputArray1)); // true
assert.strictEqual(hasPrime(inputArray1), true); // 결과가 true가 아니면 AssertionError 발생

// 2번. 특정 배열의 원소 중 소수만 추출하는 함수
const primeNumbers = (arr) => arr.filter(isPrime); // 특정 배열의 원소 중 소수만 추출하는 함수
console.log(`✔ primeNumbers(${inputArray2}) →`, primeNumbers(inputArray2)); // [2, 3, 5, 7]
assert.deepStrictEqual(primeNumbers(inputArray2), [2, 3, 5, 7]); // 결과가 true가 아니면 AssertionError 발생
