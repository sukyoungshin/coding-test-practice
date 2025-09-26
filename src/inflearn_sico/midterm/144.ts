// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를  사용하지 말고 작성하시오.

// 1) shallow copy
function shallowCopy<T extends object>(obj: T): T {
  return Object.assign({}, obj);
}
const kim1 = { nid: 3, nm: 'Kim', addr: 'Pusan' };
const newKim1 = shallowCopy(kim1);
newKim1.addr = 'Daegu';
console.log(kim1.addr !== newKim1.addr); // true면 통과!

// 2) deep copy
function deepCopy<T extends object>(obj: T): T {
  // 1번 풀이
  // return JSON.parse(JSON.stringify(obj));
  // 2번 풀이
  return structuredClone(obj);
}
const kim2 = { nid: 3, nm: 'Kim', addr: { city: 'Pusan', road: 'Haeundaero', zip: null } };
const newKim2 = deepCopy(kim2);
newKim2.addr.city = 'Daegu';
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
