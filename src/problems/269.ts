import { addDays, eachDayOfInterval, format } from 'date-fns';

const { today, year, month, date } = getTodayInfo();

// 1. 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
function getDiffMilliseconds(a, b) {
  const date1 = new Date(a).getTime();
  const date2 = new Date(b).getTime();

  return Math.abs(date1 - date2) / 1000;
}
console.log(
  '🚀 1970년 1월 1일과 1970년 1월 2일의 차이 : ',
  getDiffMilliseconds('1970-01-01', '1970-01-02'),
);

// 2. 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
function getRandomDatesOfThisMonth(count = 5) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysInMonth = eachDayOfInterval({ start: firstDay, end: lastDay });
  const randomDates = [];

  while (randomDates.length < count) {
    const randIndex = Math.floor(Math.random() * daysInMonth.length);
    const candidate = daysInMonth[randIndex];

    if (!randomDates.some((d) => d.getDate() === candidate.getDate())) {
      randomDates.push(candidate);
    }
  }

  return randomDates.sort((a, b) => b - a).map((d) => format(d, 'yyyy-MM-dd'));
}

console.log('🎲 무작위 날짜 5개 (역순):', getRandomDatesOfThisMonth());

// 3. 내년(2026년)의 오늘의 요일을 출력하시오.
function getNextYearToday() {
  const nextYearToday = new Date(year + 1, month, date);
  const dayOfWeekNames = ['일', '월', '화', '수', '목', '금', '토'];

  return `${nextYearToday.toLocaleDateString()}은 ${dayOfWeekNames[nextYearToday.getDay()]}요일입니다.`;
}
console.log('🚀 내년(2026년)의 오늘의 요일:', getNextYearToday());

// 4. 오늘로 부터 100일 후의 날짜는?
const after100Days = addDays(today, 100);
console.log('🚀 오늘로부터 100일 후:', format(after100Days, 'yyyy-MM-dd'));

function getTodayInfo() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed
  const date = today.getDate();

  return { today, year, month, date };
}
