function flattenArray(arr) {
  const result: number[] = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      // result.concat(flattenArray(item)); // ❌ 문제점: concat의 결과를 result에 할당하지 않음
      result.push(...flattenArray(item)); // ✅ 개선 방안: concat의 결과를 result에 할당
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(flattenArray([1, [2, [3, [4]]]]));
