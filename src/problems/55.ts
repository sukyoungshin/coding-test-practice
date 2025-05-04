// 다음 소수 배열의 평균을 소수점 2자리까지 구해보세요.
// (단, toFixed를 사용하지 말고, 정상적인 숫자가 아닌 경우는 평균에서 제외하세요!)

export const Example55 = () => {
  function isValidNumber(value: number | string | null | undefined): value is number {
    return typeof value === 'number' && !isNaN(value);
  }

  function roundTo(value: number, decimalPrecision: number): number {
    const factor = Math.pow(10, decimalPrecision);
    return Math.round(value * factor) / factor;
  }

  function getAverage(arr: (number | string | null | undefined)[]): number {
    const validNumbers = arr.filter(isValidNumber);
    const total = validNumbers.reduce((a, b) => a + b, 0);
    const average = total / validNumbers.length;

    return roundTo(average, 2);
  }

  const input1 = getAverage([10.34, 15, 'xxx', 5.678, null, 20.9, 1.005, 0, 15, undefined, 0.5]); // avg: 8.55
  const input2 = getAverage([10.34, 19, 'xxx', 5.678, null, 20.9, 1.005, 0, undefined, 0.5]); // avg: 8.20

  console.log(input1, input2);
};
