// 1. 함수를 한번만 실행하게 하는 once 함수를 작성하시오
function once(fn) {
  let isCalled = false;

  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
    return undefined;
  };
}

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

// 2. 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
function onceAgain(fn, rebirthDelay = 1000) {
  let isCalled = false;

  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      setTimeout(() => {
        isCalled = false;
      }, rebirthDelay);
      return fn(...args);
    }

    return undefined;
  };
}

const fn2 = onceAgain((x, y) => `🚗 ${x}, ${y} 금일 운행금지!`, 2000);
console.log(fn2(1, 6)); // 실행됨
console.log(fn2(2, 7)); // undefined

setTimeout(() => {
  console.log(fn2(3, 8)); // 실행됨 (2초 후)
  console.log(fn2(4, 9)); // undefined
}, 2100);
