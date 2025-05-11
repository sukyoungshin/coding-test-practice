// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
// (destructuring 활용)

export function Problem117() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

  // 1번 풀이
  const [id1, id2, id3] = arr.flat().map((item) => item.id);

  // 2번 풀이
  const [id11, id12, id13] = [...arr[0], ...arr[1]].map((item) => item.id);

  console.log(id1, id2, id3); // 출력결과: 1 2 3
  console.log(id11, id12, id13); // 출력결과: 1 2 3
}
