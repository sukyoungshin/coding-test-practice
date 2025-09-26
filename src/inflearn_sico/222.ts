import assert from 'assert';

const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: 'Hing' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];

// 1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy() 구현
Array.prototype.mapBy = function (key) {
  return this.map((arr) => arr[key]);
};

Array.prototype.filterBy = function (key, value, positive) {
  function isInclude(arr, value, positive) {
    if (typeof value === 'number') {
      return arr === value;
    }

    const has = arr.includes(value);
    return positive ? has : !has;
  }

  return this.filter((arr) => isInclude(arr[key], value, positive));
};

Array.prototype.rejectBy = function (key, value, positive) {
  return this.filter((arr) => {
    if (typeof value === 'number') {
      return arr[key] !== value;
    }

    const has = arr[key].includes(value);
    return !positive ? has : !has;
  });
};

Array.prototype.findBy = function (key, value) {
  return this.find((arr) => arr[key] === value);
};

Array.prototype.sortBy = function (keyWithOrder) {
  // 1번풀이
  const [prop, order] = keyWithOrder.split(':');
  const descending = order === 'desc';

  return this.sort((a, b) => {
    const x = a[prop].toLowerCase();
    const y = b[prop].toLowerCase();

    if (x < y) return descending ? 1 : -1;
    if (x > y) return descending ? -1 : 1;
    return 0;
  });

  // 2번풀이
  // if (key.includes('desc')) {
  //   return this.sort((a, b) => b.name.localeCompare(a.name));
  // }

  // return this.sort((a, b) => a.name.localeCompare(b.name));
};

// 2) firstObject, lastObject
Object.defineProperty(Array.prototype, 'firstObject', {
  get() {
    return this.length > 0 ? this[0] : undefined;
  },
  set(newItem) {
    this.unshift(newItem);
  },
});

Object.defineProperty(Array.prototype, 'lastObject', {
  get() {
    return this.length > 0 ? this[this.length - 1] : undefined;
  },
  set(newItem) {
    this.push(newItem);
  },
});

assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']);
assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]);
assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]);
assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, lee);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);
