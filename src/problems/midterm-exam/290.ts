import assert from 'assert';

// 1. 문자열 str에서 대문자만 골라 소문자로 변환하세요.
// 1번풀이
function swapCaseRegex(str) {
  return str?.replace(
    /([A-Z]*)([a-z]*)/g,
    (char, upper, lower) => upper.toLowerCase() + lower.toUpperCase(),
  );
}
assert.deepStrictEqual(swapCaseRegex('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
assert.deepStrictEqual(swapCaseRegex('bbbbbb JS'), 'BBBBBB js');
assert.deepStrictEqual(swapCaseRegex('ABCdEFgHIj!'), 'abcDefGhiJ!');

// 2번풀이
function swapCaseRegex2(str) {
  return str.replace(/[a-zA-Z]/g, (ch) =>
    ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase(),
  );
}
assert.deepStrictEqual(swapCaseRegex2('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
assert.deepStrictEqual(swapCaseRegex2('bbbbbb JS'), 'BBBBBB js');

// 3번풀이
function swapCaseLoop(str: string): string {
  let res = '';

  for (const ch of str) {
    const code = ch.charCodeAt(0);

    // A(65)~Z(90)
    if (code >= 65 && code <= 90) {
      res += String.fromCharCode(code + 32); // 대→소
      continue;
    }
    // a(97)~z(122)
    if (code >= 97 && code <= 122) {
      res += String.fromCharCode(code - 32); // 소→대
      continue;
    }
    res += ch; // 공백, 특수문자 등은 그대로
  }
  return res;
}
assert.deepStrictEqual(swapCaseLoop('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');

const PREFIX = Object.freeze({
  AREA: [
    '02',
    '031',
    '032',
    '033',
    '041',
    '042',
    '043',
    '051',
    '052',
    '053',
    '054',
    '055',
    '061',
    '062',
    '063',
    '064',
  ],
  SPECIAL: ['070', '080'],
  MOBILE: ['010', '011', '016', '017', '018', '019'],
  REPRESENTATIVE: ['0507', '1522', '1566', '1577', '1588'],
});
const ALL_PREFIXES = Object.values(PREFIX)
  .flat()
  .sort((a, b) => b.length - a.length);

// 2. 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
function telfmt(telNumber) {
  const prefix = ALL_PREFIXES.find((p) => telNumber.startsWith(p));
  if (!prefix) return telNumber; // 모르는 번호면 원본 반환

  const rest = telNumber.slice(prefix?.length);
  if (rest < 3) return telNumber; // 최소 길이 보장

  // ① 대표번호(0507·15xx·1577·1588…)
  if (PREFIX.REPRESENTATIVE.includes(prefix)) {
    return rest.length >= 8
      ? `${prefix}-${rest.slice(0, 4)}-${rest.slice(4)}`
      : `${prefix}-${rest}`;
  }

  // ② 일반 번호 분기
  const midLen = rest.length === 7 ? 3 : 4;
  const mid = rest.slice(0, midLen);
  const last = rest.slice(midLen);
  return `${prefix}-${mid}-${last}`;
}

telfmt('0101234567');
telfmt('01012345678');
assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');

telfmt('0212345678'); // '02-1234-5678'
telfmt('021234567'); // '02-123-4567'
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');

telfmt('0331234567'); // '033-123-4567'
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');

telfmt('15771577'); // '1577-1577'
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');

telfmt('07012341234'); // '070-1234-1234'
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');

telfmt('050712345678');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');
