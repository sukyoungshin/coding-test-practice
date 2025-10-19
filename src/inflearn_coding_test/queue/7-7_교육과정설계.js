function solution(need, plan) {
  const queue = [...need];

  for (const item of plan) {
    if (queue.includes(item)) {
      if (item !== queue.shift()) return 'NO';
    }
  }

  return queue.length > 0 ? 'NO' : 'YES';
}

console.log(solution('CBA', 'CBDAGE'));
