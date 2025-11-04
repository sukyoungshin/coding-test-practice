function solution(my_string, letter) {
  // 1번
  return my_string.replaceAll(letter, '');

  // 2번
  // return [...my_string].filter(a => a !== letter).join('');

  // 3번
  // return my_string.split(letter).join('');
}

console.log(solution('hello', 'e'));
console.log(solution('programmers', 'p'));
console.log(solution('aaaaaa', 'a'));
