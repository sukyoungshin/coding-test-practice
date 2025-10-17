function solution(N, K) {
  let queue = Array.from({ length: N }, (_, index) => index + 1);
  let answer;

  while (queue.length) {
    for (let i = 0; i < K - 1; i++) {
      const first = queue.shift();
      if (first) queue.push(first);
    }
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));
