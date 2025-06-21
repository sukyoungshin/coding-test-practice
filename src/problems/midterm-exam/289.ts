// 오른 쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오.
// ex. 주문합계: 45,000원
// ex. 주문합계: 4,500원

const total = { price: 45000, vat: 4500 };

function fmt(strs, value) {
  const [total, currency] = strs;
  const amount = value.toLocaleString().padStart(8);

  return total + amount + currency;
}

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);
