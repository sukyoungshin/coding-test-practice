// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)

// 0.21354 + 0.1   // 0.31354000000000004
// 0.14 + 0.28     // 0.42000000000000004
// 0.34 + 0.226    // 0.5660000000000001

export const Example54 = () => {
  function getDecimalPrecision(numberValue: number): number {
    if (numberValue % 1 === 0) return 0;
    return 1 + getDecimalPrecision(numberValue * 10);
  }
  function roundWithPrecision(value: number, precision: number): number {
    const multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
  }
  function addPoints(x: number, y: number) {
    const precision = Math.max(getDecimalPrecision(x), getDecimalPrecision(y));

    return roundWithPrecision(x + y, precision);
  }

  const input1 = addPoints(0.21354, 0.1); // 0.31354
  const input2 = addPoints(0.14, 0.28); // 0.42
  const input3 = addPoints(0.34, 0.226); // 0.566
  const input4 = addPoints(10.34, 200.226); // 210.566
  const input5 = addPoints(0.143, -10.28); // -10.137
  const input6 = addPoints(0.143, -10); // -9.857

  console.log(input1, input2, input3, input4, input5, input6);
};
