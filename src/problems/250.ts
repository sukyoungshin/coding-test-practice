import assert from 'assert';

// 깊은 복사 deepCopy 함수 작성
// (Map, Set, WeakMap, WeakSet도 복사)
const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: 'Hong', dept: 'HR' };

const kim = {
  nid: 3,
  addr: 'Pusan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol('symbol2'),
  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[hong, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};

function deepCopy(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (seen.has(obj)) return seen.get(obj);

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Set) {
    const copy = new Set();
    seen.set(obj, copy);
    obj.forEach((v) => copy.add(deepCopy(v, seen)));
    return copy;
  }
  if (obj instanceof Map) {
    const copy = new Map();
    seen.set(obj, copy);
    obj.forEach((v, k) => copy.set(k, deepCopy(v, seen)));
    return copy;
  }
  if (obj instanceof WeakMap || obj instanceof WeakSet) {
    console.warn('⚠️ WeakMap/WeakSet은 복사되지 않습니다.');
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);

  for (const key of Object.keys(obj)) {
    copy[key] = deepCopy(obj[key], seen);
  }
  for (const sym of Object.getOwnPropertySymbols(obj)) {
    copy[sym] = deepCopy(obj[sym], seen);
  }

  return copy;
}

const newKim = deepCopy(kim);
assert.deepStrictEqual(newKim, kim, 'deepCopy equal fail!');
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
assert.notDeepStrictEqual(newKim, kim, 'Not Valid Deep Copy!');
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], 'pass2: 다르지 않아요!');
assert.notStrictEqual(kim.oo.addr.city, newKim.oo.addr.city, 'Not Pass3: city가 다르지 않아요!');
