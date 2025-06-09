// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.
function* add() {
  const x = yield '첫번째 수?';
  console.log('→ ', x);
  const y = yield '두번째 수?';
  console.log('→ ', y);

  return `Total : ${x + y}`;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);
