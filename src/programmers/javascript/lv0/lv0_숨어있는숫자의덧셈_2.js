function solution(my_string) {
  return my_string
    .split(/[a-zA-Z]/g)
    .filter((a) => a)
    .reduce((a, b) => a + Number(b), 0);
}

console.log(solution('aAb1B2cC34oOp'));
console.log(solution('1a2b3c4d123'));
