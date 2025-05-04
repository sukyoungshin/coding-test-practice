// for 문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
// for (let i = 0.1; i < 1; i = i + 0.1) console.log(i); // right?

export const Example51_1 = () => {
  for (let i = 0.1; i < 1; i = i + 0.1) {
    const toFixed = i.toFixed(1);
    console.log(Number(toFixed));
  }
};
export const Example51_2 = () => {
  for (let i = 0.1; i < 1; i += 0.1) {
    const rounded = Math.round(i * 10) / 10; // 부동소숫점
    console.log(rounded);
  }
};
