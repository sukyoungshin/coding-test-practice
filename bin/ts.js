#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';

const file = process.argv[2];

if (!file) {
  console.error('❌ 실행할 파일명을 입력하세요 (예: ts 171.ts)');
  process.exit(1);
}

const absPath = path.resolve(process.cwd(), file);

execSync(`npx tsx --no-warnings ${absPath}`, {
  stdio: 'inherit',
});
