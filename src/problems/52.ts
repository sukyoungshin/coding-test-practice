// 1~10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
// Math.sqrt() 사용, 무리수만 출력!

// 2 1.414
// …
// 7 2.646
// …
// 10 3.162

export const Example52_1 = () => {
  for (let i = 1; i <= 10; i++) {
    const sqrt = Math.sqrt(i);
    if (sqrt % 1 !== 0) {
      console.log(i + ': ' + sqrt.toFixed(3));
    }
  }
};

export const Example52_2 = () => {
  for (let i = 1; i <= 10; i++) {
    const n = Math.sqrt(i);

    if (!Number.isInteger(n)) {
      console.log(`${i} : ${n.toFixed(3)}`);
    }
  }
};

// NOTE:
// - 정수는 끝이 있는 수
// - 무리수는 끝이 안 보이는 수
