// 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
// (단, array 메소드를 사용하지 말고, destructuring을 사용하시오)

// 1. makeArray(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 2. makeReverseArray(5); // [5, 4, 3, 2, 1]
// 3. 위 makeArray를 TCO로 작성하시오.
// makeArrayTCO(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function makeArray(num: number): number[] {
  if (num <= 0) return [];
  const restArr = makeArray(num - 1);
  return [...restArr, num];
}

export function makeReverseArray(num: number): number[] {
  if (num <= 0) return [];
  const restArr = makeArray(num - 1);
  return [num, ...restArr];
}

// TODO
export function makeArrayTCO() {}

// TCO는 "Tail Call Optimization"(꼬리 호출 최적화)를 의미합니다. 이것은 특정 형태의 재귀 함수를 최적화하는 기술입니다.
// # 꼬리 호출 최적화(TCO)란?
// 꼬리 호출은 함수의 마지막 동작이 다른 함수를 호출하는 것인 경우를 말합니다. 꼬리 재귀(Tail Recursion)는 함수의 마지막 동작이 자기 자신을 호출하는 특별한 형태의 꼬리 호출입니다.
// ## TCO의 장점:
// 스택 오버플로우 방지: 일반 재귀는 각 호출마다 스택 프레임을 쌓지만, TCO는 이전 스택 프레임을 재사용
// 메모리 사용량 감소: 동일한 스택 프레임을 재활용하므로 메모리 효율적
// TCO로 makeArrayTCO 구현하기
// TCO를 구현하려면 누적자(accumulator)를 사용하여 중간 결과를 유지합니다:
// export function makeArrayTCO(num: number): number[] {
//     // 헬퍼 함수를 정의하여 누적자를 전달
//     function helper(n: number, acc: number[]): number[] {
//       if (n <= 0) return acc;
//       // 중요: 마지막 동작이 재귀 호출이어야 함 (꼬리 재귀)
//       return helper(n - 1, [n, ...acc]);
//     }

//     // 빈 배열로 시작하여 헬퍼 함수 호출
//     return helper(num, []);
//   }
//   위 함수는 makeReverseArray와 같은 결과([5, 4, 3, 2, 1])를 반환합니다.
// 만약 makeArray와 같은 오름차순 결과([1, 2, 3, 4, 5])를 원한다면:
// export function makeArrayTCO(num: number): number[] {
//     function helper(current: number, acc: number[], target: number): number[] {
//       if (current > target) return acc;
//       return helper(current + 1, [...acc, current], target);
//     }

//     return helper(1, [], num);
//   }
