const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
for (const index in arr) {
  console.log(index);
}

// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
for (const value of arr) {
  console.log(value);
}

const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false };
// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
for (const key in obj) {
  console.log(key); //
}

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for (const key in obj) {
  console.log(obj[key]);
}

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
// of 뒤에는 iterable이 와야하므로, Object.values()를 사용하여 객체의 값을 배열로 변환한 후 반복합니다.
for (const value of Object.values(obj)) {
  console.log(value);
}

// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오. (참고 p226)
Object.defineProperty(obj, 'level', {
  value: 1,
  enumerable: false, // 열거되지 않도록 설정
});

console.log(obj.level); // 1
console.log(Object.keys(obj)); // ['name', 'addr', 'role', 'receive']
console.log(Object.entries(obj)); // [ [ 'name', 'Kim' ], [ 'addr', 'Yongsan' ], [ 'role', 9 ], [ 'receive', false ] ]
console.log(Object.values(obj)); // [ 'Kim', 'Yongsan', 9, false ]

// 7. role 프로퍼티는 읽기전용으로 설정하시오. (참고 p226)
Object.defineProperty(obj, 'role', {
  value: 9,
  writable: false, // 읽기 전용으로 설정
});
console.log(obj); // { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }
console.log(Object.keys(obj)); // [ 'name', 'addr', 'level', 'role', 'receive' ]
console.log(Object.entries(obj)); // [ [ 'name', 'Kim' ], [ 'addr', 'Yongsan' ], [ 'level', 1 ], [ 'role', 9 ], [ 'receive', false ] ]
console.log(Object.values(obj)); // [ 'Kim', 'Yongsan', 1, 9, false ]
console.log((obj.role = 10)); // TypeError: Cannot assign to read only property 'role' of object '#<Object>'
