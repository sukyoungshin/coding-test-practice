// 1. data = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

// 2. 위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
// dataObj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
// => [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

const data = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];
function makeObjectFromArray(arr: (string | number)[][]): object {
  const obj = {};
  for (const [key, ...values] of arr) {
    obj[key] = values;
  }
  return obj;
}
const dataObj = makeObjectFromArray(data);
console.log(dataObj); // { A: [ 10, 20 ], B: [ 30, 40 ], C: [ 50, 60, 70 ] }

function makeArrayFromObject(arr: object): (string | number)[][] {
  const result: (string | number)[][] = [];

  for (const [key, values] of Object.entries(arr)) {
    result.push([key, ...values]);
  }

  return result;
}
console.log(makeArrayFromObject(dataObj)); // [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
