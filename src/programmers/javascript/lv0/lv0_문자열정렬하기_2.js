// TIP:
// - sort() 메서드는 숫자정렬 시, 파라미터를 전달한다.
// - 문자열 정렬시엔 기본적으로 유니코드 코드 포인트 순서대로 정렬된다. (파라미터 전달X)
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join('');
}

console.log(solution('Bcad')); // 'abcd'
console.log(solution('heLLo')); // 'ehllo'
console.log(solution('Python')); // 'hnopty'
