import assert from 'assert';

// 다음의 지하철 노선 중에서, 출발역 ~ 도착역까지만을 반환하는 클래스를 작성하시오. (단방향만!)
const LINE2 = [
  '신도림',
  '성수',
  '신설동',
  '용두',
  '신답',
  '용답',
  '시청',
  '충정로',
  '아현',
  '이대',
  '신촌',
  '공항철도',
  '홍대입구',
  '합정',
  '당산',
  '영등포구청',
  '문래',
  '대림',
  '구로디지털단지',
  '신대방',
  '신림',
  '봉천',
  '서울대입구',
  '낙성대',
  '사당',
  '방배',
  '서초',
  '교대',
  '강남',
  '역삼',
  '선릉',
  '삼성',
  '종합운동장',
  '신천',
  '잠실',
  '잠실나루',
  '강변',
  '구의',
  '건대입구',
  '뚝섬',
  '한양대',
  '왕십리',
  '상왕십리',
  '신당',
  '동대문역사문화공원',
  '을지로4가',
  '을지로3가',
  '을지로입구',
];

function getSubwayStations(args) {
  const [s, e] = args;

  const start = LINE2.findIndex((line) => line === s);
  const end = LINE2.findIndex((line) => line === e);

  return start < end
    ? LINE2.slice(start, end + 1)
    : [...LINE2.slice(start), ...LINE2.slice(0, end + 1)];
}

class Subway {
  protected stations: string[];

  constructor(...args) {
    this.stations = args ? getSubwayStations(args) : [];
  }

  *[Symbol.iterator]() {
    for (const station of this.stations) {
      yield station;
    }
  }
}

// ================== 테스트케이스1 ==================
const routes1 = new Subway('문래', '신림');
assert.deepStrictEqual([...routes1].length, 5); // 5개 정류장
assert.deepStrictEqual([...routes1], ['문래', '대림', '구로디지털단지', '신대방', '신림']);

const it1 = routes1[Symbol.iterator]();
['문래', '대림', '구로디지털단지', '신대방', '신림'].forEach((value, i) => {
  assert.deepStrictEqual(it1.next(), { value, done: false });
  console.log(i, routes1.toString());
});
assert.deepStrictEqual(it1.next(), { value: undefined, done: true });

// ================== 테스트케이스2 ==================
const routes2 = new Subway('구로디지털단지', '성수');
assert.deepStrictEqual([...routes2].length, 32); // 32개 정류장
assert.deepStrictEqual(
  [...routes2],
  [
    '구로디지털단지',
    '신대방',
    '신림',
    '봉천',
    '서울대입구',
    '낙성대',
    '사당',
    '방배',
    '서초',
    '교대',
    '강남',
    '역삼',
    '선릉',
    '삼성',
    '종합운동장',
    '신천',
    '잠실',
    '잠실나루',
    '강변',
    '구의',
    '건대입구',
    '뚝섬',
    '한양대',
    '왕십리',
    '상왕십리',
    '신당',
    '동대문역사문화공원',
    '을지로4가',
    '을지로3가',
    '을지로입구',
    '신도림',
    '성수',
  ],
);

const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}

// ================== 테스트케이스3 ==================
const route3 = new Subway('문래', '합정');
assert.strictEqual([...route3].length, 46); // 46개 정거장이면 통과!

// ================== 테스트케이스4 ==================
const route4 = new Subway('신도림', '을지로입구');
assert.strictEqual([...route4].length, 48); // 48개 정거장이면 통과!
