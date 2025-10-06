// 1번 풀이
function getDiscountRate(price) {
  if (price >= 500_000) {
    return 20;
  } else if (price >= 300_000) {
    return 10;
  } else if (price >= 100_000) {
    return 5;
  } else {
    return 0;
  }
}

function solution(price) {
  const discount = getDiscountRate(price);
  return Math.floor(price * (1 - discount / 100));
}

console.log(solution(150000));
console.log(solution(580000));

// 2번 풀이
const priceArray = [
  [500_000, 20],
  [300_000, 10],
  [100_000, 5],
];

function solution2(price) {
  for (const array of priceArray) {
    const [clothPrice, discountRate] = array;

    if (price >= clothPrice) {
      return Math.floor(price * (1 - discountRate / 100));
    }
  }
  return price;
}

console.log(solution2(150000));
console.log(solution2(580000));
