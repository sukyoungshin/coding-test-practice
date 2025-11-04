// 1번 풀이
function solution(my_string) {
  const 모음 = ['a', 'e', 'i', 'o', 'u'];

  return [...my_string].reduce((acc, cur) => {
    if (!모음.includes(cur)) {
      acc += cur;
    }
    return acc;
  }, '');
}

// 2번 풀이 (정규표현식)
// function solution(my_string) {
//     return my_string.replace(/[aeiou]/g, '');
// }

console.log(solution('hello'));
console.log(solution('world'));
console.log(solution('coding'));
