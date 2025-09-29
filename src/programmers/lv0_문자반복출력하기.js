function solution(my_string, n) {
  return [...my_string].map((a) => a.repeat(n)).join('');
}

console.log(solution('hello', 3));
console.log(solution('world', 2));
console.log(solution('coding', 3));
