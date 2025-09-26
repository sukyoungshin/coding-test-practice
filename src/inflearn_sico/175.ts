function getDiffMilliSecond(dt1: string, dt2: string): number {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);

  const { getTime: getTime1 } = d1;
  const { getTime: getTime2 } = d2;

  // ❌ 이렇게 호출하면 에러 발생:
  // getTime1() - getTime2();
  // 메서드를 분리하면 내부의 this가 (Date 객체가 아닌) undefined가 되어 TypeError 발생

  // ✅ 해결방법들
  console.log('bind 사용:', getTime1.bind(d1)() - getTime2.bind(d2)());
  console.log('화살표 함수 사용:', (() => d1.getTime())() - (() => d2.getTime())());
  console.log('call 사용:', getTime1.call(d1) - getTime2.call(d2));
  console.log('apply 사용:', getTime1.apply(d1) - getTime2.apply(d2));
  console.log('직접 호출:', d1.getTime() - d2.getTime()); // 가장 일반적인 방식

  return d1.getTime() - d2.getTime();
}

getDiffMilliSecond('2021-01-01', '2021-01-02');
