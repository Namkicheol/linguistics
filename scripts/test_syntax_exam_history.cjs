// Original scan review is documented separately; these checks prevent citation drift.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const html = fs.readFileSync('syntax-diagnostics_study.html', 'utf8');
const units = [
  ['constituent-tests', '2014학년도 전공 A 서술형 4번', 'linguistics_2014_A04', '문제지 7쪽'],
  ['raising-control-diagnostics', '2019학년도 전공 B 6번', 'linguistics_2019_B06', '문제지 5쪽'],
];
for (const [anchor, year, card, page] of units) {
  const unit = html.split(`<section class="depth-unit" id="${anchor}">`)[1]?.split('</section>')[0];
  assert(unit, anchor);
  assert.equal((unit.match(/class="exam"/g) || []).length, 1, `${anchor}: exactly one verified history block`);
  for (const expected of [year, page, `https://etwiki.net/index.html?id=${card}`]) assert(unit.includes(expected), expected);
}
assert(html.includes('주어의 의미역으로 Raising과 Control 구별하기'));
assert(fs.readFileSync('docs/한글용어.md', 'utf8').includes('| 의미역 | thematic role |'));
assert(html.includes('해당 기출은 object control과 PRO의 여러 해석 유형까지 범위를 넓힙니다'));
assert(!/2015학년도.*기입형 3번|2019학년도.*기입형 3번/.test(html));
console.log('PASS: two original-verified exam histories, distinct question type, card links, scope caveat, and canonical Korean heading.');
