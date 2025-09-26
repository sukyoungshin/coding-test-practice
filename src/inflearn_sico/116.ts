// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo라는 변수에 할당하시오.

const user: { id: number; name: string; passwd?: string; addr: string } = {
  id: 1,
  name: 'Hong',
  passwd: 'xxx',
  addr: 'Seoul',
};

// 1번 방법
const userInfo1 = { id: user.id, name: user.name, addr: user.addr };
console.log(userInfo1); // 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

// 2번 방법
// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
const { passwd, ...userInfo2 } = user;
console.log(userInfo2); // 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

// 3번 방법
const userInfo3 = Object.fromEntries(Object.entries(user).filter(([key]) => key !== 'passwd'));
console.log(userInfo3);

// 4번 방법
const userInfo4 = { ...user };
delete userInfo4.passwd;
console.log(userInfo4); // 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

// 5번 방법
const userInfo5 = JSON.parse(JSON.stringify(user));
delete userInfo5.passwd;
console.log(userInfo5); // 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}
