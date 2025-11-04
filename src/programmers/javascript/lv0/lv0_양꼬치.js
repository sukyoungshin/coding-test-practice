function solution(n, k) {
  let foodCount = n;
  let freeDrinks = 0;

  if (foodCount >= 10) {
    foodCount = Math.floor(foodCount / 10);
    freeDrinks += foodCount;
  }

  return n * 12000 + k * 2000 - freeDrinks * 2000;
}

console.log(solution(10, 3));
console.log(solution(64, 6));
