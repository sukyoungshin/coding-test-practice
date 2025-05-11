// 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.
// function getValueExceptInitial(k) {
//     const (가) = user;
//     const (나) = [...val];
//     return (다);
// }

export function Problem118() {
  const user = { name: 'Hong', passwd: 'xyz', addr: 'Seoul' };
  function getValueExceptInitial(k: keyof typeof user) {
    const { name, passwd, addr } = user;
    // 1번 풀이
    // const [first, ...rest] = { name, passwd, addr }[k];
    // return rest.join('');

    // 2번 풀이
    const val = { name, passwd, addr }[k];
    return val.slice(1);
  }

  console.log(getValueExceptInitial('name')); // 'ong'
  console.log(getValueExceptInitial('passwd')); // 'yz'
  console.log(getValueExceptInitial('addr')); // 'eoul'
}
