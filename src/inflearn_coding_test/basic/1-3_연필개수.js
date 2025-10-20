function solution(students) {
  const dozen = 12;
  const pencils = Math.ceil(students / dozen);

  return pencils;
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15
console.log(solution(200)); // 17
