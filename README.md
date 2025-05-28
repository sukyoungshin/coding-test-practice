# JS/TS Practice Template

![Node.js](https://img.shields.io/badge/Node.js-v23.11.0-green)
![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue)

---

TypeScript 및 JavaScript 연습 문제를 손쉽게 작성하고 실행해볼 수 있는 템플릿입니다.  
간단한 설치 후 바로 문제를 풀고 결과를 확인할 수 있어요!

---

## 📦 설치

필요한 패키지를 설치하세요:

```shell
npm install
```

Node.js 버전을 프로젝트에 맞게 설정합니다:

```shell
nvm use        # .nvmrc 기준으로 자동 설정
nvm install    # .nvmrc에 지정된 버전이 없다면 자동 설치
```

## ▶ 사용 방법

### 1. 연습 문제 작성

**📌 TypeScript 문제**

- `src/problems/` 디렉토리에 `페이지명.ts` 형식으로 작성합니다.
- 예시: `src/problems/example.ts`

예시 🔽

```ts
// src/problems/example.ts

export const example1 = () => {
  console.log('🚀 example1');
};

// ✅ 하나의 파일에 여러 문제 풀이를 함께 작성해도 됩니다.
export const example2 = () => {
  console.log('🚀 example2');
};
```

**📌 JavaScript 문제**

- TypeScript가 익숙하지 않다면 .js 확장자를 사용해도 됩니다.
- 예시: `src/problems/js-example.js`

예시 🔽

```js
// src/problems/js-example.js

export const example3 = () => {
  console.log('✅ JavaScript example1');
};
```

## 2. 문제 실행 방법 (택 1)

### 2-1. `ts` 명령어로 실행하기 (로컬 CLI)

루트에 등록된 실행기(`ts`)를 통해 `.ts` 파일을 간편하게 실행할 수 있습니다.

예를 들어 `src/problems/example.ts`를 실행하려면:

```shell
> ts src/problems/example.ts
```

또는 해당 디렉토리(src/problems)로 이동한 후:

```shell
> ts example.ts
```

> ts 명령어는 내부적으로 npx tsx를 사용하며, 입력한 경로는 현재 디렉토리 기준으로 해석됩니다.
> npm link를 통해 전역 CLI처럼 등록되어 있습니다.

실행결과 예시

```ts
🚀 example1
🚀 example2
```

### 2-2. 여러 문제를 `src/index.ts`에 import하여 실행하기

```ts
// src/index.ts
import { example1, example2 } from './problems/example';
import { example3 } from './problems/js-example.js';

example1();
example2();
example3();
```

> ⚠️ 참고: `.js` 파일을 import할 때는 `.js` 확장자를 반드시 명시해야 합니다.

실행

```shell
npm run start
```

예시 출력:

```shell
> npm run start

> basic-typescript-practice@0.0.1 start
> tsx src/index.ts

🚀 TypeScript example1
🚀 TypeScript example2
✅ JavaScript example3
```

---

## 🧹 코드 정리 (Lint & Format)

본 프로젝트는 ESLint와 Prettier로 코드 품질을 유지하며, GitHub에 코드를 푸시할 때 GitHub Actions를 통해 자동으로 검사 및 포맷을 수행합니다.<br/>
로컬 환경에서 직접 린트 및 포맷을 실행하려면 아래 명령어를 사용하세요:

```shell
npm run lint     # 코드 스타일 및 규칙 검사 (ESLint)
npm run format   # 코드 자동 포맷 (Prettier)
```

💡 VSCode 사용자라면 저장 시 자동 포맷 및 린트 적용을 위해 아래 설정을 `.vscode/settings.json`에 추가하세요:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript"]
}
```

> 위 설정을 적용하면 저장 시 Prettier로 자동 포맷되고, ESLint에 따라 사용되지 않는 코드(import 등)도 자동으로 제거됩니다.
