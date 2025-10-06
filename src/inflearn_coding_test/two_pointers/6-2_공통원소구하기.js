// 1번풀이: 2중 for문 사용 => 시간복잡도 O(n^2)
// function solution(arr1, arr2) {
//   const result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         result.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return result.sort((a, b) => a - b);
// }

// 2번풀이: 투포인터 사용 => 시간복잡도 O(n+m)
function solution(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const result = [];
  let [p1, p2] = [0, 0];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
