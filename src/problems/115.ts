// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)

export function Problem115() {
  function f1(user) {
    const { id, name } = user;
    console.log(`${id}, '${name}'`);
  }
  function f2({ id, name }) {
    console.log(`${id}, '${name}'`);
  }
  const f3 = ({ id, name }) => {
    console.log(`${id}, '${name}'`);
  };

  const hong = { id: 1, name: 'Hong' };

  f1(hong); // 1, 'Hong'
  f2({ id: 2, name: 'Lee' }); // 2, 'Lee'
  f3({ id: 3, name: 'Kim' }); // 3, 'Kim'
}
