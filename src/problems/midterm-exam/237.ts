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

function getSubways(args) {
  const [s, e] = args;

  const start = LINE2.findIndex((a) => a === s);
  const end = LINE2.findIndex((a) => a === e);

  return start < end
    ? LINE2.slice(start, end + 1)
    : [...LINE2.slice(start), ...LINE2.slice(0, end + 1)];
}

class Subway {
  protected list: string[];

  constructor(...args) {
    this.list = args ? getSubways(args) : [];
  }

  *[Symbol.iterator]() {
    for (const station of this.list) {
      yield station;
    }
  }
}

const routes1 = new Subway('문래', '신림');
console.log('🚀 ~ [...routes1] >> ', [...routes1]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log('🚀 ~ [...routes1].length >> ', [...routes1].length); // 5

const it1 = routes1[Symbol.iterator]();
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '대림', done: false }
console.log(it1.next()); // { value: '구로디지털단지', done: false }
console.log(it1.next()); // { value: '신대방', done: false }
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }

const routes2 = new Subway('구로디지털단지', '성수'); // 32개 정거장
console.log('🚀 ~ routes2 >> ', [...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
console.log('🚀 ~ routes2.length >> ', [...routes2].length); // 32
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log('it2 >> ', x);
  if (x.done) break;
}
const route3 = new Subway('문래', '합정'); // 46개 정거장이면 통과!
console.log('🚀 ~ route3.length >> ', [...route3].length); // 46

const route4 = new Subway('신도림', '을지로입구'); // 48개 정거장이면 통과!
console.log('🚀 ~ route4.length >> ', [...route4].length); // 48
