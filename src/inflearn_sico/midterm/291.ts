import assert from 'assert';

// 1) 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.
const CONSONANTS = Object.freeze({
  NUMERIC: [...'013678'].map((char) => char.charCodeAt(0)),
  ENGLISH: [...'LMNRlmnr'].map((char) => char.charCodeAt(0)),
  KOREAN: [...'ㄱㅎ'].map((a) => a.charCodeAt(0)), // ㄱ~ㅎ 범위의 한글 자음
  HANGUL_SYLLABLE_START: '가'.charCodeAt(0),
  HANGUL_SYLLABLE_END: '힣'.charCodeAt(0),
  HANGUL_SYLLABLE_CYCLE: 28, // 한글 음절 주기 (받침 포함 여부 확인용)
});

function isEndWithConsonant(str) {
  if (!str || typeof str !== 'string') return false;

  const lastChar = str.charCodeAt(str.length - 1);

  // 1. 숫자형 자음 (0, 1, 3, 6, 7, 8)
  if (CONSONANTS.NUMERIC.includes(lastChar)) return true;

  // 2. 영어 자음 (l, m, n, r 등 일부)
  if (CONSONANTS.ENGLISH.includes(lastChar)) return true;

  // 3. 한글 자음(ㄱ~ㅎ)
  const [KOREAN_MIN, KOREAN_MAX] = CONSONANTS.KOREAN;
  if (lastChar >= KOREAN_MIN && lastChar <= KOREAN_MAX) return true;

  // 4. 완성형 한글이며 받침이 있는 글자인 경우
  const {
    HANGUL_SYLLABLE_START: start,
    HANGUL_SYLLABLE_END: end,
    HANGUL_SYLLABLE_CYCLE: unit,
  } = CONSONANTS;
  if (lastChar >= start && lastChar <= end && (lastChar - start) % unit !== 0) return true;

  return false;
}
assert.equal(isEndWithConsonant('아지오'), false);
assert.equal(isEndWithConsonant('북한강'), true);
assert.equal(isEndWithConsonant('뷁'), true);
assert.equal(isEndWithConsonant('강원도'), false);
assert.equal(isEndWithConsonant('바라당'), true);
assert.equal(isEndWithConsonant('ㅜㅜ'), false);
assert.equal(isEndWithConsonant('케잌'), true);
assert.equal(isEndWithConsonant('점수 A'), false);
assert.equal(isEndWithConsonant('알파벳L'), true);
assert.equal(isEndWithConsonant('24'), false);
assert.equal(isEndWithConsonant('23'), true);
assert.equal(isEndWithConsonant('강'), true); // true (받침 ㄱ)
assert.equal(isEndWithConsonant('가'), false); // false (받침 없음)
assert.equal(isEndWithConsonant('ㄴ'), true); // true (한글 자음)
assert.equal(isEndWithConsonant('L'), true); // true (영어 자음)
assert.equal(isEndWithConsonant('9'), false); // false

// 2) 조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
function getPostposition(str, type: 'iga' | 'eulul' | 'eunun' | 'eyuya') {
  const endsWithConsonant = isEndWithConsonant(str);

  const postpositionMap = {
    iga: endsWithConsonant ? '이' : '가',
    eulul: endsWithConsonant ? '을' : '를',
    eunun: endsWithConsonant ? '은' : '는',
    eyuya: endsWithConsonant ? '이어야' : '이랑',
  };

  return postpositionMap[type] ?? '';
}

assert.equal(`고성군${getPostposition('고성군', 'iga')}`, '고성군이');
assert.equal(`강원도${getPostposition('강원도', 'iga')}`, '강원도가');
assert.equal(`강원도${getPostposition('강원도', 'eunun')}`, '강원도는');
assert.equal(`고성군${getPostposition('고성군', 'eunun')}`, '고성군은');
assert.equal(`고성군${getPostposition('고성군', 'eulul')}`, '고성군을');
assert.equal(`강원도${getPostposition('강원도', 'eulul')}`, '강원도를');
assert.equal(`복면${getPostposition('복면', 'eyuya')}`, '복면이어야');
