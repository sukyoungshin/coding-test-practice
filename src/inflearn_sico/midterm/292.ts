import assert from 'assert';

const locations = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];
const HANGUL_INITIAL_CONSONANTS = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const HANGUL_INITIAL_SYLLABLES = '가까나다따라마바빠사싸아자짜차카타파하';

// 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.
function searchByHangulInitials(dataList, input) {
  const patternStr = [...input].reduce((acc, inputChar) => {
    const i = HANGUL_INITIAL_CONSONANTS.indexOf(inputChar);
    const start = HANGUL_INITIAL_SYLLABLES[i];
    const end = String.fromCharCode(HANGUL_INITIAL_SYLLABLES[i + 1].charCodeAt(0) - 1);

    return `${acc}[${inputChar}${start}-${end}]+`;
  }, '');

  const pattern = new RegExp(patternStr);
  return dataList.filter((d) => pattern.test(d));
}

assert.deepStrictEqual(searchByHangulInitials(locations, 'ㄱㅅㄱ'), [
  '강원도 고성군',
  '고성군 토성면',
]);
assert.deepStrictEqual(searchByHangulInitials(locations, 'ㅌㅅㅁ'), [
  '고성군 토성면',
  '토성면 북면',
]);
assert.deepStrictEqual(searchByHangulInitials(locations, 'ㅂㅁ'), ['토성면 북면', '북면']);
assert.deepStrictEqual(searchByHangulInitials(locations, 'ㅍㅁ'), []);
assert.deepStrictEqual(searchByHangulInitials(locations, 'ㄱ1ㅅ'), ['김1수']);
