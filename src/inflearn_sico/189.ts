const originArray: (string | number)[] = [1, 2, 3, 4, 5];
const copiedArray1: (string | number)[] = [...originArray];
const copiedArray2: (string | number)[] = [...originArray];

// ex1) [2,3]을 추출하세요.
const ex1 = originArray.slice(1, 3); // [2, 3]
console.log('ex1:', ex1);
console.log('originArray: ', originArray);

// ex2) [3]부터 모두 다 추출하세요.
const ex2 = originArray.slice(2); // [3, 4, 5]
console.log('ex2:', ex2);
console.log('originArray: ', originArray);

// ex3) [2,3,4] 제거하기
const ex3 = originArray.splice(1, 3); // [2, 3, 4]
console.log('ex3:', ex3); // [2, 3, 4]
console.log('originArray: ', originArray); // [1, 5]

// ex4) 복원하기
const ex4 = originArray.splice(1, 0, ...[2, 3, 4]); // 결과값 : [], 이유 ? 원본 배열에 [2, 3, 4] 추가
console.log('ex4:', ex4);
console.log('originArray: ', originArray); // [1, 2, 3, 4, 5]

// ex5) [3] 부터 끝까지 제거하기
const ex5 = originArray.splice(2); // [3, 4, 5]
console.log('ex5:', ex5);
console.log('originArray: ', originArray); // [1, 2]

// ex6) 복원하기
const ex6 = originArray.splice(2, 0, ...[3, 4, 5]); // 결과값 : [], 이유 ? 원본 배열에 [3, 4, 5] 추가
console.log('ex6:', ex6);
console.log('originArray: ', originArray); // [1, 2, 3, 4, 5]

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
const ex7_1 = copiedArray1.splice(2, 3, ...['X', 'Y', 'Z', 4, 5]); // [3, 4, 5] 제거 후 ['X', 'Y', 'Z', 4, 5] 추가
console.log('ex7_1:', ex7_1); // [3, 4, 5]
console.log('copiedArray1: ', copiedArray1); // [1, 2, 'X', 'Y', 'Z', 4, 5]

const ex7_2 = copiedArray2.splice(2, 1, ...['X', 'Y', 'Z']); // [3] 제거 후 ['X', 'Y', 'Z'] 추가
console.log('ex7_2:', ex7_2); // [3]
console.log('copiedArray2: ', copiedArray2); // [1, 2, 'X', 'Y', 'Z', 4, 5]

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
console.clear();
const ex8 = originArray.slice(0, 2).concat(['X', 'Y', 'Z', 4, 5]); // [1, 2].concat(['X', 'Y', 'Z', 4, 5])
console.log('ex8:', ex8); // [1, 2, 'X', 'Y', 'Z', 4, 5]
console.log('originArray: ', originArray); // [1, 2, 3, 4, 5] (원본 배열은 변경되지 않음)
