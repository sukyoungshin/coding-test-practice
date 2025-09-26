class Dog {
  name: string;
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  fn() {
    return 'FN';
  }

  static sfn() {
    return 'SFN';
  }
}

const lucy = new Dog('Lucy');
const { getName } = lucy;

// ❌ 이렇게 호출하면 에러 발생:
// console.log(getName());
// 메서드를 분리하면 내부의 this가 (Dog 객체가 아닌) undefined가 되어 TypeError 발생

// ✅ 해결 방법들
console.log(getName.bind(lucy)());
console.log(getName.bind(lucy)());
