function solution(order) {
  return order.reduce((sum, item) => {
    const isLatte = item.includes('cafelatte');
    const price = isLatte ? 5000 : 4500;

    return sum + price;
  }, 0);
}

const input1 = ['cafelatte', 'americanoice', 'hotcafelatte', 'anything']; // 19000
const input2 = ['americanoice', 'americano', 'iceamericano']; // 13500

console.log(solution(input1));
console.log(solution(input2));
