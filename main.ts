// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: this program only hands in the post's
// address by copying POST.json from the repository root to /output/POST.json,
// where the gate reads it. Nothing this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(src)) {
  console.error(`error: POST.json not found: ${src}`);
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
const data = readFileSync(src, 'utf8');
const post = JSON.parse(data);
if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
  throw new Error('POST.json must be a JSON object with a string url');
}
writeFileSync(dst, data);
if (statSync(dst).size !== statSync(src).size) {
  console.error(`error: copy size mismatch: ${src} vs ${dst}`);
  process.exit(1);
}
