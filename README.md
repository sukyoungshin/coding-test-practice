# TypeScript Practice

## 📦 설치

필요한 모듈을 설치합니다:

```shell
npm install
```

## ▶ 실행 방법

### 1. 연습 문제 작성

**📌 TypeScript 문제**

- src/problems/ 디렉토리에 페이지명.ts 형식으로 작성합니다.
- 예: `src/problems/1.ts`

예시 🔽

```ts
// src/problems/example.ts

export const Example1 = () => {
  console.log('🚀 Example1');
};

// ✅ 필요하다면 여러 개의 문제 풀이를 추가할 수 있습니다.
export const Example2 = () => {
  console.log('🚀 Example2');
};
```

**📌 JavaScript 문제 (선택)**

- TypeScript가 익숙하지 않다면 .js 확장자를 사용해도 됩니다.
- 예: `src/problems/js-example.js`

예시 🔽

```js
// src/problems/js-example.js

export const Example1_js = () => {
  console.log('✅ JavaScript Example1');
};
```

### 2. 실행할 문제를 `src/index.ts`에서 import 합니다.

```ts
// src/index.ts
import { Example1, Example2 } from './problems/example';
import { Example1_js } from './problems/js-example.js';

Example1();
Example2();
Example1_js();
```

> ⚠️ 참고: JS 파일을 import할 때는 `.js` 확장자를 반드시 붙여야 합니다.

### 3. 아래 명령어로 실행하고, 터미널에서 결과를 확인하세요:

```shell
npm run start
```

터미널 결과 예시 🔽

```shell
> npm run start

> basic-typescript-practice@0.0.1 start
> tsx src/index.ts

🚀 Typescript Example1
🚀 Typescript Example2
✅ JavaScript Example1
```

---

## 🔧 코드 정리 (Lint & Format)

코드 스타일 검사 및 자동 포맷은 아래 명령어로 실행할 수 있습니다:

```shell
npm run lint     # 코드 스타일 및 규칙 검사 (EsLint)
npm run format   # 코드 자동 포맷 (Prettier)
```

💡 VSCode 사용자라면, 저장 시 자동 포맷을 원할 경우 아래 설정을 .vscode/settings.json에 추가하세요:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
