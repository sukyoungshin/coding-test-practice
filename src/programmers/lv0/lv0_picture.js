import assert from 'assert';

function solution(picture, k) {
  return picture.reduce((prev, cur) => {
    const stretched = [...cur].map((char) => char.repeat(k)).join('');
    const repeatedRow = Array.from({ length: k }, () => stretched);
    return prev.concat(repeatedRow);
  }, []);
}

const input1 = [
    '.xx...xx.',
    'x..x.x..x',
    'x...x...x',
    '.x.....x.',
    '..x...x..',
    '...x.x...',
    '....x....',
  ],
  k1 = 2;
const input2 = ['x.x', '.x.', 'x.x'],
  k2 = 3;

assert.deepStrictEqual(solution(input1, k1), [
  '..xxxx......xxxx..',
  '..xxxx......xxxx..',
  'xx....xx..xx....xx',
  'xx....xx..xx....xx',
  'xx......xx......xx',
  'xx......xx......xx',
  '..xx..........xx..',
  '..xx..........xx..',
  '....xx......xx....',
  '....xx......xx....',
  '......xx..xx......',
  '......xx..xx......',
  '........xx........',
  '........xx........',
]);
assert.deepStrictEqual(solution(input2, k2), [
  'xxx...xxx',
  'xxx...xxx',
  'xxx...xxx',
  '...xxx...',
  '...xxx...',
  '...xxx...',
  'xxx...xxx',
  'xxx...xxx',
  'xxx...xxx',
]);
