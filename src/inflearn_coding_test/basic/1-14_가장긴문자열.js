function solution(str) {
  let longest = 0;
  let answer = '';

  for (const item of str) {
    if (item.length <= longest) continue;

    longest = item.length;
    answer = item;
  }

  return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good'])); // beautiful
console.log(solution(['a', 'abc', 'ab', 'c'])); // abc
