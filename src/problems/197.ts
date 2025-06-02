function isValidNumber(val: unknown): val is number {
  return typeof val === 'number' && !isNaN(val);
}

// Array.reduce 함수를 고차 함수로 직접 구현하시오.
const reduce = (arr, fn, initValue?: number) => {
  if (arr.length === 0 && initValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let acc = isValidNumber(initValue) ? initValue : arr[0];
  const startIndex = isValidNumber(initValue) ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }

  return acc;
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6
console.log(
  '✅ 6 >>',
  reduce([1, 2, 3], (a, b) => a + b, 0),
);
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15
console.log(
  '✅ 15 >>',
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
);
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120
console.log(
  '✅ 120 >>',
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
);
reduce([2, 2, 2], (a, b) => a * b); // 8
console.log(
  '✅ 8 >> ',
  reduce([2, 2, 2], (a, b) => a * b),
);
reduce([3, 3, 3], (a, b) => a * b, 0); // 0
console.log(
  '✅ 0 >> ',
  reduce([3, 3, 3], (a, b) => a * b, 0),
); // 0

{
  const kim = { id: 2, name: 'kim' };
  const lee = { id: 3, name: 'Lee' };
  const park = { id: 4, name: 'Park' };
  const users = [kim, lee, park];

  reduce(users, (acc, user) => acc + user.name); // [object Object]LeePark
  console.log(
    '✅ [object Object]LeePark >> ',
    reduce(users, (acc, user) => acc + user.name),
  );
}
