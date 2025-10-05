function solution(my_str, n) {
  var answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    if (i + n) {
      answer.push(my_str.slice(i, i + n));
    } else {
      answer.push(my_str.slice(i));
    }
  }

  return answer;
}

console.log(solution('abc1Addfggg4556b', 6));
console.log(solution('abcdef123', 3));
