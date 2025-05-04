# TypeScript Practice

## 📦 설치
필요한 모듈을 설치합니다:

```shell
npm install
```

## ▶ 실행 방법

1. 연습 문제는 src/problems/ 디렉토리에 페이지명.ts 형식으로 작성합니다.

- 예: `src/problems/1.ts`


2. 예시 🔽
```ts
// src/problems/example.ts

export const Example1 = () => {
  console.log("🚀 Example1");
};

// ✅ 필요하다면 여러 개의 문제 풀이를 추가할 수 있습니다.
export const Example2 = () => {
  console.log("🚀 Example2");
};
```


3. 실행할 문제를 src/index.ts에서 import 합니다.

```ts
// src/index.ts
import {Example1, Example2} from './problems/example.ts';

Example1();
Example2();
```

4. 아래 명령어로 실행 후, 터미널에서 결과를 확인하세요.

```shell
npm run start
```
