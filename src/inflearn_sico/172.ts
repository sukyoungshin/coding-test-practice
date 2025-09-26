//  template 함수를 작성하세요.
const before = () => console.log('before....');
const after = (result) => console.log('after...', result);
const someFn = (name, greeting) => {
  console.log('>> someFn ', `${greeting}, ${name}`);
  return `${greeting}, ${name}`;
};

const someFn2 = (id, nickname, email, level) => {
  console.log('>> someFn2', `${id}/${nickname}/${email}/${level}`);
  return `${id}/${nickname}/${email}/${level}`;
};

const template = (fn) => {
  return function (...args) {
    before();
    const result = fn(...args);
    after(result);
    return result;
  };
};

const temp1 = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

temp1('sico', 'hello');
temp2(1, 'sico', 'sico@gmail.com', 5);
