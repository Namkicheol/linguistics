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
    const returnTo = url.searchParams.get('returnTo');
    if (returnTo) {
      const back = new URL(returnTo, url);
      assert(fs.existsSync(back.pathname.slice(1)), `${file}: missing return target`);
      if (back.hash) assert(read(back.pathname.slice(1)).includes(`id="${back.hash.slice(1)}"`), `${file}: missing return anchor`);
    }
    checked++;
  }
  if (file !== 'index.html') {
    assert(html.includes('./subject-hub.css'));
    assert(html.includes('통사론 심화') && html.includes('학교문법 심화'));
    assert(!/refs\/|합격자|메가쌤|가루미/.test(html), `${file}: private validation source leaked`);
  }
}
assert.equal((read('syntax.html').match(/class="chapter-row"/g) || []).length, 5);
assert.equal((read('school-grammar.html').match(/class="chapter-row"/g) || []).length, 7);
const lessonIds = {
  'syntax-diagnostics_study.html': ['constituent-tests', 'raising-control-diagnostics'],
  'school-grammar_study.html': ['tense-aspect', 'modals-negation', 'passive-discourse', 'relative-content', 'tough-extraposition', 'inversion', 'multiword-verbs'],
};
for (const [file, ids] of Object.entries(lessonIds)) {
  const html = read(file);
  for (const id of ids) {
    assert(html.includes(`id="${id}"`));
    assert(html.includes(`id="${id}-check"`));
  }
  assert.equal((html.match(/class="core-definition"/g)||[]).length, ids.length);
  assert.equal((html.match(/class="condition-label"/g)||[]).length, ids.length);
  const expectedSourceNotes = file === 'school-grammar_study.html' ? 10 : ids.length;
  assert.equal((html.match(/class="source-note"/g)||[]).length, expectedSourceNotes);
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
console.log(`PASS: ${checked} local links/anchors; 9 source-backed lesson units, 4 accessible SVGs, exact exam links, private source boundary.`);

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
state.detail.open=false; state.listeners.pageshow({persisted:false}); assert(state.detail.open);
state.detail.open=false; state.classes.delete('open');
const scrolledBeforeRestore = state.getScrolled();
state.listeners.pageshow({persisted:true});
assert.equal(state.detail.open,false,'BFCache preserves a reader-closed disclosure');
assert(!state.classes.has('open'),'BFCache preserves a reader-closed legacy section');
assert.equal(state.getScrolled(),scrolledBeforeRestore,'BFCache preserves restored scroll position');
state.listeners.hashchange();
assert(state.detail.open && state.classes.has('open'),'Fresh hash navigation still reveals after BFCache restore');
assert.equal(state.getScrolled(),scrolledBeforeRestore+1);
for (const hash of ['', '#missing', '#%E0%A4']) assert.equal(runHash(hash).getScrolled(),0);
console.log('PASS: initial hash, hashchange and fresh pageshow reveal sections; BFCache preserves reader state; missing/malformed hashes are safe.');

// Follow real authored links through both generated return buttons, not history.back().
const origin = 'https://namkicheol.github.io';
const base = origin + '/linguistics/';
function navigationPage(href, referrer = '', source = script, extraLinks = []) {
  const location = new URL(href);
  const file = location.pathname.split('/').pop();
  const links = [...read(file).matchAll(/\bhref="([^"]+)"/g)].map(m => m[1].replaceAll('&amp;', '&')).concat(extraLinks)
    .map(href => ({href, authoredHref:href, getAttribute(k) { return this[k]; }, hasAttribute(k) { return Object.hasOwn(this,k); }, removeAttribute(k) { delete this[k]; }, closest() { return null; }}));
  const element = () => ({style:{}, appendChild(){}, setAttribute(k,v){this[k]=v;}, getAttribute(k){return this[k];}});
  const button = element();
  const document = {body:element(), referrer, currentScript:null, getElementById:id => id === 'back-btn' ? button : null,
    querySelectorAll:selector => selector === 'a[href]' ? links : [], addEventListener(){}};
  if (read(file).includes('src="./study-return.js"')) {
    vm.runInNewContext(source, {document, window:{location,addEventListener(){}}, URL, URLSearchParams});
  }
  return {links,button};
}
let chains = 0;
for (const [hub, lesson] of [['school-grammar.html','school-grammar_study.html'], ['syntax.html','syntax-diagnostics_study.html']]) {
  const hubUrl = base + hub;
  const hubPage = navigationPage(hubUrl);
  const entry = hubPage.links.find(a => new URL(a.href,hubUrl).pathname.endsWith('/' + lesson));
  assert(entry, `${hub}: authored lesson entry`);
  const lessonUrl = new URL(entry.href,hubUrl).href;
  const first = navigationPage(lessonUrl,hubUrl);
  const nestedLinks = first.links.filter(a => {
    const url = new URL(a.authoredHref,lessonUrl);
    const back = url.searchParams.get('returnTo');
    return back && new URL(back,url).pathname.endsWith('/' + lesson);
  });
  // Check required routes in their authored unit/role, not the whole-page total.
  const tree = require('./html-structure.cjs')(read(lesson));
  const contracts = hub === 'syntax.html' ? [
    ['constituent-tests', 'exam-links', ['constituency_study.html#s2', 'constituency.html']],
    ['constituent-tests', 'detail-content', ['constituency_study.html#s4', 'phrase-structure_study.html#complement-adjunct']],
    ['raising-control-diagnostics', 'exam-links', ['raising-control_study.html#ssr', 'raising-control.html']],
    ['raising-control-diagnostics', 'detail-content', ['raising-control_study.html#ssr']],
    ['raising-control-diagnostics', 'types-examples', ['raising-control_study.html#subject-control']],
  ] : [['passive-discourse', 'detail-content', ['movement_study.html#np-movement-passive']]];
  for (const [unitId, role, routes] of contracts) {
    const units = tree.all(tree.root, n => n.attrs.id === unitId);
    assert.equal(units.length, 1, unitId + ': unique source unit');
    const blocks = tree.all(units[0], n => tree.hasClass(n, role));
    assert(blocks.length > 0, unitId + ': has ' + role);
    for (const route of routes) {
      const matches = [...new Set(blocks.flatMap(block => tree.all(block, n => n.tag === 'a' && n.attrs.href)))].filter(n => {
        const target = new URL(n.attrs.href.replaceAll('&amp;', '&'), lessonUrl);
        const expected = new URL(route, lessonUrl);
        return target.origin === expected.origin && target.pathname === expected.pathname && target.hash === expected.hash;
      });
      assert.equal(matches.length, 1, unitId + '/' + role + ': unique required route ' + route);
      const target = new URL(matches[0].attrs.href.replaceAll('&amp;', '&'), lessonUrl);
      assert(target.searchParams.has('returnTo'), 'required route has return destination');
      const back = new URL(target.searchParams.get('returnTo'), target);
      assert.equal(back.origin, new URL(lessonUrl).origin, 'Return keeps the source origin');
      assert.equal(back.pathname, new URL(lessonUrl).pathname);
      assert.equal(back.hash, '#' + unitId, 'Return identifies the actual authored source unit');
    }
  }
  for (const link of nestedLinks) {
    const nextUrl = new URL(link.href,lessonUrl).href;
    const next = navigationPage(nextUrl,lessonUrl);
    const returnedUrl = new URL(next.button.href);
    assert.equal(returnedUrl.pathname, new URL(lessonUrl).pathname);
    assert(returnedUrl.hash, 'Return preserves the authored lesson section');
    assert.equal(returnedUrl.searchParams.get('returnTo'),hubUrl);
    const returned = navigationPage(returnedUrl.href,nextUrl);
    assert.equal(returned.button.href,hubUrl,'Second generated return must reach the original hub, never the child');
    assert.equal(returned.button.textContent,first.button.textContent,'Hub label survives the round trip');
    // Reload/new-tab entry must not rely on a referrer or browser history.
    assert.equal(navigationPage(returnedUrl.href).button.href,hubUrl);
    const repeated = returned.links.find(a => new URL(a.href,returnedUrl).pathname === new URL(nextUrl).pathname);
    assert.equal(new URL(repeated.href,returnedUrl).searchParams.get('returnTo'),returnedUrl.href,'Repeated round trips do not grow the chain');
    chains++;
  }
}
// Legacy card and direct/external entries retain the same allowed destination policy.
for (const search of ['', '?return=linguistics_2018_B06', '?returnTo=' + encodeURIComponent('https://etwiki.net/index.html?id=linguistics_2018_B06'), '?returnTo=javascript%3Aalert(1)']) {
  const pageUrl = base + 'school-grammar_study.html' + search;
  const page = navigationPage(pageUrl);
  const nextUrl = page.links.find(a => new URL(a.href,pageUrl).pathname.endsWith('/movement_study.html')).href;
  const next = navigationPage(nextUrl,pageUrl);
  assert.equal(navigationPage(next.button.href,nextUrl).button.href,page.button.href);
}
const untouched = ['https://evil.test/x?returnTo=school-grammar_study.html', './movement_study.html?returnTo=syntax.html', '#passive-discourse'];
const sample = navigationPage(base + 'school-grammar_study.html?returnTo=school-grammar.html','',script,untouched);
assert.deepEqual(sample.links.slice(-untouched.length).map(a=>a.href),untouched);
console.log(`PASS: ${chains} nested reading/OX return chains reach their original hubs, preserve section/label, survive reload, and remain stable on repeat; legacy/direct/unsafe routes covered.`);

// Follow the new authored unit entry through the existing return helper.
const relativeHub = navigationPage(base + 'school-grammar.html');
const relativeEntry = relativeHub.links.find(a => new URL(a.href, base).hash === '#relative-content');
assert(relativeEntry, 'Relative/content unit has an authored hub entry');
const relativeUrl = new URL(relativeEntry.href, base);
assert.equal(relativeUrl.pathname, '/linguistics/school-grammar_study.html');
assert.equal(navigationPage(relativeUrl.href, base + 'school-grammar.html').button.href, base + 'school-grammar.html');
console.log('PASS: relative/content hub entry retains its section and returns to school grammar.');

// New authored UNIT05 route and its actual decorated dictionary link.
const toughEntry = relativeHub.links.find(a => new URL(a.href, base).hash === '#tough-extraposition');
assert(toughEntry, 'Tough unit has an authored hub entry');
const toughUrl = new URL(toughEntry.href, base);
const toughPage = navigationPage(toughUrl.href, base + 'school-grammar.html');
assert.equal(toughPage.button.href, base + 'school-grammar.html');
const toughKeyword = toughPage.links.find(a => new URL(a.href, toughUrl).searchParams.get('term') === 'tough movement');
assert(toughKeyword);
const dictUrl = new URL(toughKeyword.href, toughUrl);
const returnNote = new URL(dictUrl.searchParams.get('studyNoteReturn'));
assert.equal(returnNote.pathname, toughUrl.pathname);
assert.equal(returnNote.hash, '#tough-extraposition');
assert.equal(returnNote.searchParams.get('returnTo'), 'school-grammar.html');
console.log('PASS: UNIT05 hub return and dictionary study-note return preserve the authored source section.');

// UNIT06: inspect the authored unit and its own entry, not global link counts.
const inversionTree = require('./html-structure.cjs')(read('school-grammar_study.html'));
const inversionUnits = inversionTree.all(inversionTree.root, n => n.attrs.id === 'inversion');
assert.equal(inversionUnits.length, 1);
const inversionUnit = inversionUnits[0];
for (const id of ['inversion-so-types','inversion-negative-types','inversion-locative-types','inversion-discourse','inversion-there-boundary','inversion-comparisons','inversion-sources']) {
  const ds = inversionTree.all(inversionUnit, n => n.tag === 'details' && n.attrs.id === id);
  assert.equal(ds.length, 1, id + ': unique disclosure in UNIT06');
  assert(!Object.hasOwn(ds[0].attrs, 'open'), id + ': initially closed');
}
assert.equal(inversionTree.all(inversionUnit, n => inversionTree.hasClass(n, 'self-check')).length, 0);
assert.equal(inversionTree.all(inversionUnit, n => n.tag === 'u').length, 0);
const inversionEntry = relativeHub.links.filter(a => new URL(a.href, base).hash === '#inversion');
assert.equal(inversionEntry.length, 1);
const inversionUrl = new URL(inversionEntry[0].href, base);
assert.equal(inversionUrl.pathname, '/linguistics/school-grammar_study.html');
assert.equal(navigationPage(inversionUrl.href, base + 'school-grammar.html').button.href, base + 'school-grammar.html');
const inversionLinks = inversionTree.all(inversionUnit, n => n.tag === 'a' && n.attrs.href).map(n => new URL(n.attrs.href.replaceAll('&amp;', '&'), inversionUrl));
for (const id of ['linguistics_2010_X31','linguistics_2013_X32','linguistics_2017_A12','linguistics_2021_A07']) assert(inversionLinks.some(u => u.hostname === 'etwiki.net' && u.searchParams.get('id') === id));
assert(inversionLinks.some(u => u.pathname === inversionUrl.pathname && u.hash === '#passive-discourse'));
console.log('PASS: UNIT06 scoped disclosures, explanatory comparisons, four exam routes, UNIT03 connection and hub return.');

// UNIT07 uses the same tested return helper; assert full target and return routes.
const multiwordEntries = relativeHub.links.filter(a => new URL(a.href, base).hash === '#multiword-verbs');
assert.equal(multiwordEntries.length, 1);
const multiwordUrl = new URL(multiwordEntries[0].href, base);
assert.equal(multiwordUrl.origin, origin);
assert.equal(multiwordUrl.pathname, '/linguistics/school-grammar_study.html');
const multiwordPage = navigationPage(multiwordUrl.href, base + 'school-grammar.html');
assert.equal(multiwordPage.button.href, base + 'school-grammar.html');
const multiwordKeyword = multiwordPage.links.find(a => new URL(a.href, multiwordUrl).searchParams.get('term') === 'particle movement');
assert(multiwordKeyword);
const multiwordDict = new URL(multiwordKeyword.href, multiwordUrl);
assert.equal(multiwordDict.origin, 'https://etwiki.net');
assert.equal(multiwordDict.pathname, '/concept.html');
const multiwordReturn = new URL(multiwordDict.searchParams.get('studyNoteReturn'));
assert.equal(multiwordReturn.origin, origin);
assert.equal(multiwordReturn.pathname, multiwordUrl.pathname);
assert.equal(multiwordReturn.hash, '#multiword-verbs');
assert.equal(multiwordReturn.searchParams.get('returnTo'), 'school-grammar.html');
console.log('PASS: UNIT07 exact hub, return and dictionary study-note routes.');
