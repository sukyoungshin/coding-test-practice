import { execSync } from 'child_process';

// 특정 날짜를 받으면 해당 월의 달력을 출력하시오.
function printCalendar(year: number, month: number) {
  const cmd = `cal ${month} ${year}`;
  const result = execSync(cmd).toString();
  console.log(result);
}

printCalendar(2025, 8);
