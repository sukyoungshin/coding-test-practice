import assert from 'assert';

export {};

declare global {
  interface Array<T> {
    uniqBy(condition: keyof T): unknown[];
  }
}

// Array.prototype에 Set을 이용하여 uniqBy() 함수를 추가하시오.
const hong = { id: 1, name: 'Hong', dept: 'HR' };
const kim = { id: 2, name: 'Kim', dept: 'Server' };
const lee = { id: 3, name: 'Lee', dept: 'Front' };
const park = { id: 4, name: 'Park', dept: 'HR' };
const ko = { id: 7, name: 'Ko', dept: 'Server' };
const loon = { id: 6, name: 'Loon', dept: 'Sales' };
const choi = { id: 5, name: 'Choi', dept: 'Front' };
const users = [hong, kim, lee, park, ko, loon, choi];

Array.prototype.uniqBy = function (condition) {
  const result = new Set();

  for (let i = 0; i < this.length; i++) {
    result.add(this[i][condition]);
  }

  return [...result];
};

assert.deepStrictEqual(users.uniqBy('dept'), ['HR', 'Server', 'Front', 'Sales']);
