// 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해보고, switch 문을 사용하지 않은 더 간단한 방법도 찾아보세요.
// 오늘은 금요일입니다.

export const problem53_1 = () => {
  function getToday(day) {
    switch (day) {
      case 0:
        return '일';
      case 1:
        return '월';
      case 2:
        return '화';
      case 3:
        return '수';
      case 4:
        return '목';
      case 5:
        return '금';
      case 6:
        return '토';
      default:
        return '';
    }
  }
  const today = new Date();
  const day = getToday(today.getDay());
  console.log(`오늘은 ${day}요일입니다.`);
};

export const problem53_2 = () => {
  const today = new Date();
  const index = today.getDay(); // 요일번호 0 ~ 6
  const WEEK_NAMES = '일월화수목금토';

  console.log(`오늘은 ${WEEK_NAMES[index]}요일입니다.`);
};

// 3 TemporalAPI => 아직 Stage3이라 브라우저 콘솔에서 실험안됨
