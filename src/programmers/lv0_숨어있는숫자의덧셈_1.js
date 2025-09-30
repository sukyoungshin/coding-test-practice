function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
}

console.log(solution('aAb1B2cC34oOp'));
console.log(solution('1a2b3c4d123'));
