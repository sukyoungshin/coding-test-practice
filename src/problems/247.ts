import assert from 'assert';

// 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오. (key: id)
const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [hong, kim, { id: 3, name: 'Park', dept: 2 }, { id: 4, name: 'Choi', dept: 2 }];

const deptMap = new Map();
for (let i = 0; i < depts.length; i++) {
  const key = i + 1;
  const value = depts[i];

  deptMap.set(key, value);
}

const empMap = new Map();
for (let i = 0; i < emps.length; i++) {
  const key = i + 1;
  const value = emps[i];

  empMap.set(key, value);
}

const empDept = new Map();
emps.forEach((e) => {
  Object.defineProperty(e, 'dept', {
    enumerable: false,
  });

  empDept.set(e, deptMap.get(e.dept));
});

console.log('deptMap >> ', deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }
console.log('empMap >> ', empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log('empDept >> ', empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name })),
);

console.log(empDept.get(kim).dname); // '개발팀'
console.log('empDept.get(kim) >> ', empDept.get(kim));
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);

function getEmp(empId) {
  const { dept, ...rest } = empMap.get(empId);

  return { ...rest, dept: deptMap.get(dept) };
}
console.log('getEmp(1) >> ', getEmp(1));
assert.deepStrictEqual(getEmp(1), { id: 1, name: 'Hong', dept: { id: 1, dname: '인사팀' } });
