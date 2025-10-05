import assert from 'assert';

function solution(chicken) {
  let couponCount = chicken; // 현재 보유 쿠폰
  let freeChickenCount = 0; // 누적 서비스 치킨

  while (couponCount >= 10) {
    const redeemedCount = Math.floor(couponCount / 10); // 교환가능한 서비스 치킨 수
    freeChickenCount += redeemedCount;

    const spentCoupon = redeemedCount * 10; // 10장씩 제출
    const newCoupon = redeemedCount * 1; // 서비스 치킨만큼 쿠폰 재발급
    couponCount = couponCount - spentCoupon + newCoupon;
  }

  return freeChickenCount;
}

assert.deepStrictEqual(solution(100), 11);
assert.deepStrictEqual(solution(1081), 120);
