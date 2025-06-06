import assert from 'assert';

class Emp {
  [x: string]: unknown;
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, fullNameHandler); // 실제 인스턴스(this)는 Proxy가 감싸고 있는 상태가 됨
  }
}

const fullNameHandler = {
  get(target, prop, receiver) {
    if (prop === 'fullName') {
      const [first, last = ''] = target[prop].split(' ');
      return `${first} ${last.toUpperCase()}`;
    }
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === 'fullName') {
      if (value.split(' ').length === 2) {
        const [first, last = ''] = value.split(' ');
        target.firstName = first;
        target.lastName = last;
      } else {
        target.lastName = value.toUpperCase();
      }
    }

    return Reflect.set(target, prop, value, receiver);
  },
};

const hong = new Emp(); // 1. constructor 실행
hong.fullName = 'Kildong Hong'; // 2. Proxy의 set 트랩이 실행 -> Emp 인스턴스(= Proxy의 타깃 객체)에 fullName 프로퍼티가 동적으로 추가됨
assert.deepStrictEqual(hong.fullName, 'Kildong HONG'); // 3. Proxy의 get 트랩이 발동 -> 'Kildong HONG'이 반환됨

hong.fullName = 'Lee';
assert.deepStrictEqual(hong.firstName, 'Kildong');
assert.deepStrictEqual(hong.lastName, 'LEE');
