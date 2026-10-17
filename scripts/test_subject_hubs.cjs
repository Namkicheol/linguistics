// Focused regression checks for the two advanced hubs and their reading pages.
// Run from the repository root: node scripts/test_subject_hubs.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const pages = ['index.html', 'syntax.html', 'school-grammar.html', 'syntax-diagnostics_study.html', 'school-grammar_study.html'];
const read = p => fs.readFileSync(p, 'utf8');
let checked = 0;
for (const file of pages) {
  const html = read(file);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${file}: duplicate IDs`);
  for (const m of html.matchAll(/\bhref="([^"]+)"/g)) {
    const href = m[1].replaceAll('&amp;', '&');
    const url = new URL(href, 'https://example.test/' + file);
    if (url.origin !== 'https://example.test') continue;
    const target = decodeURIComponent(url.pathname.slice(1));
    assert(fs.existsSync(target), `${file}: missing ${target}`);
    if (url.hash) assert(read(target).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${file}: missing anchor ${href}`);
    checked++;
  }
  if (file !== 'index.html') {
    assert(html.includes('./subject-hub.css'));
    assert(html.includes('통사론 심화') && html.includes('학교문법 심화'));
    assert(!/refs\/|합격자|메가쌤|가루미/.test(html), `${file}: private validation source leaked`);
  }
}
assert.equal((read('syntax.html').match(/class="chapter-row"/g) || []).length, 5);
assert.equal((read('school-grammar.html').match(/class="chapter-row"/g) || []).length, 3);
const lessonIds = {
  'syntax-diagnostics_study.html': ['constituent-tests', 'raising-control-diagnostics'],
  'school-grammar_study.html': ['tense-aspect', 'modals-negation', 'passive-discourse'],
};
for (const [file, ids] of Object.entries(lessonIds)) {
  const html = read(file);
  for (const id of ids) {
    assert(html.includes(`id="${id}"`));
    assert(html.includes(`id="${id}-check"`));
  }
  assert.equal((html.match(/class="core-definition"/g)||[]).length, ids.length);
  assert.equal((html.match(/class="condition-label"/g)||[]).length, ids.length);
  assert.equal((html.match(/class="source-note"/g)||[]).length, ids.length);
  assert(html.includes('학습용 예문'));
  for (const svg of html.matchAll(/<svg([\s\S]*?)<\/svg>/g)) {
    assert(svg[1].includes('role="img"'));
    const label = svg[1].match(/aria-labelledby="([^"]+)"/);
    assert(label);
    for (const id of label[1].split(' ')) assert(svg[1].includes(`id="${id}"`));
  }
}
for (const id of ['lexical-aspect','future-time-clauses','given-new-contract','end-weight']) assert(read('school-grammar_study.html').includes(`id="${id}"`));
for (const id of ['linguistics_2018_B04','linguistics_2026_A09','linguistics_2024_B05','linguistics_2026_B04']) assert(read('school-grammar_study.html').includes('https://etwiki.net/index.html?id=' + id));
assert(read('school-grammar_study.html').includes('viewBox="0 0 320 340"'));
console.log(`PASS: ${checked} local links/anchors; 5 source-backed lesson units, 3 accessible SVGs, exact exam links, private source boundary.`);

// Execute the actual shared script against DOM-shaped mocks, including nested disclosures.
const script = read('study-return.js');
function runHash(hash) {
  const classes = new Set(['sec']);
  const body = {appendChild(){}};
  const legacy = {tagName:'SECTION', parentElement:body, classList:{contains:k=>classes.has(k),add:k=>classes.add(k)}};
  const detail = {tagName:'DETAILS', open:false, parentElement:legacy};
  let scrolled = 0;
  const target = {tagName:'H3', parentElement:detail, scrollIntoView(){scrolled++;}};
  const listeners = {};
  const button = {style:{},setAttribute(k,v){this[k]=v},getAttribute(k){return this[k]}};
  const document = {body,referrer:'',currentScript:null,getElementById:id=>id==='target' ? target : id==='back-btn' ? button : null};
  const window = {location:{href:'https://namkicheol.github.io/linguistics/school-grammar_study.html'+hash,origin:'https://namkicheol.github.io',search:'',hash},addEventListener:(k,v)=>{listeners[k]=v;}};
  vm.runInNewContext(script, {document,window,URL,URLSearchParams});
  return {window,listeners,detail,classes,getScrolled:()=>scrolled};
}
const state = runHash('#target');
assert(state.detail.open && state.classes.has('open'));
assert.equal(state.getScrolled(),1);
state.detail.open=false; state.listeners.hashchange(); assert(state.detail.open);
state.detail.open=false; state.listeners.pageshow(); assert(state.detail.open);
for (const hash of ['', '#missing', '#%E0%A4']) assert.equal(runHash(hash).getScrolled(),0);
console.log('PASS: initial hash, hashchange and pageshow reveal nested details/legacy sections; missing/malformed hashes are safe.');
