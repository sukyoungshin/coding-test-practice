// getNextWeek 함수는 widx변수에 부수 효과(side effect)가 있다.
// 이를 부수 효과가 없도록 변경하시오.  (hint: closure, IIFE)

// 1. 클로저 closure
{
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const getNextWeek = () => {
    let widx = -1;
    return function () {
      widx += 1;
      if (widx >= weeks.length) widx = 0;
      return `${weeks[widx]}요일`;
    };
  };
  let cnt = 0;
  const getNextWeekFn = getNextWeek();
  const intl = setInterval(() => {
    console.log('call', cnt, getNextWeekFn());
    if ((cnt += 1) === 8) clearInterval(intl);
  }, 1000);
}

// 2. 즉시 실행 함수(IIFE)
{
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const getNextWeek = (() => {
    let widx = -1;
    return () => {
      widx = (widx + 1) % weeks.length;
      return `${weeks[widx]}요일`;
    };
  })();

  let cnt = 0;
  const intl = setInterval(() => {
    console.log('call', cnt, getNextWeek());
    if ((cnt += 1) === 8) clearInterval(intl);
  }, 1000);
}
