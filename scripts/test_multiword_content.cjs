// Run from the repository root: node scripts/test_multiword_content.cjs
const fs = require('node:fs');
const assert = require('node:assert/strict');
const structure = require('./html-structure.cjs');
const html = fs.readFileSync('school-grammar_study.html', 'utf8');
const tree = structure(html);
const units = tree.all(tree.root, n => n.attrs.id === 'multiword-verbs');
assert.equal(units.length, 1);
const unit = units[0];
assert(tree.hasClass(unit, 'reading-comfort'));
const disclosures = ['multiword-diagnostics', 'multiword-object-placement', 'multiword-fronting', 'multiword-weight-exams'];
assert.equal(tree.all(unit, n => n.tag === 'details').length, 5);
const bodies = {};
for (const id of disclosures) {
  const ds = tree.all(unit, n => n.tag === 'details' && n.attrs.id === id);
  assert.equal(ds.length, 1, `${id}: scoped disclosure`);
  assert(!Object.hasOwn(ds[0].attrs, 'open'), `${id}: initially closed`);
  const content = ds[0].children.filter(n => tree.hasClass(n, 'detail-content'));
  assert.equal(content.length, 1);
  assert(tree.text(content[0]).trim().length > 180, `${id}: substantive explanation`);
  bodies[id] = content[0];
}
const examples = id => tree.all(bodies[id], n => tree.hasClass(n, 'example-set'));
for (const [id, expected] of [['multiword-object-placement', 1], ['multiword-fronting', 2], ['multiword-weight-exams', 1]]) {
  const sets = examples(id);
  assert.equal(sets.length, expected, id + ': examples belong to this section');
  for (const set of sets) {
    if (id === 'multiword-fronting' && set === sets[1]) {
      assert(tree.text(set).includes('기출 변형 예문 · 2011학년도 1차 34번'));
      assert(!tree.text(set).includes('새로 작성'));
    } else {
      assert(tree.text(set).includes('학습용 대조 예문'));
      assert(tree.text(set).includes('새로 작성'));
    }
    assert(tree.all(set, n => n.tag === 'strong').length >= 2);
  }
}
const sourceDetails = tree.all(bodies['multiword-weight-exams'], n => n.tag === 'details' && n.attrs.id === 'multiword-sources');
assert.equal(sourceDetails.length, 1);
assert(!Object.hasOwn(sourceDetails[0].attrs, 'open'));
assert(tree.text(sourceDetails[0]).includes('Cowan'));
assert(!tree.text(unit).includes('용어 사전:'));
const placementText = tree.text(bodies['multiword-object-placement']);
assert(placementText.includes('unstressed personal pronoun'));
assert(placementText.includes('separable'));
assert(placementText.includes('Indefinite pronoun'));
const frontingText = tree.text(bodies['multiword-fronting']);
assert(frontingText.includes('investigate') && frontingText.includes('literal spatial reading'));
assert(tree.source(bodies['multiword-fronting']).includes('*<strong>Into what</strong>'));
const tables = tree.all(bodies['multiword-diagnostics'], n => n.tag === 'table');
assert.equal(tables.length, 1);
assert.equal(tree.all(tables[0], n => n.tag === 'tr').length, 4);
assert(/Inseparable transitive\s+phrasal verb/.test(tree.text(tables[0])));
assert(tree.text(bodies['multiword-diagnostics']).includes('Cowan'));
const scroll = tree.all(bodies['multiword-diagnostics'], n => tree.hasClass(n, 'multiword-table-scroll'));
assert.equal(scroll.length, 1);
assert.equal(scroll[0].attrs.tabindex, '0');
assert.equal(scroll[0].attrs.role, 'region');
assert(html.includes('#multiword-verbs .multiword-table-scroll{max-width:100%;overflow-x:auto}'));
for (const set of examples('multiword-weight-exams')) assert(!tree.text(set).includes('*'), 'Heavy NP is not starred');
assert(tree.text(bodies['multiword-weight-exams']).includes('같은 도출이라고'));
assert.equal(tree.all(unit, n => ['svg', 'iframe', 'button', 'input'].includes(n.tag) || tree.hasClass(n, 'self-check')).length, 0);
assert(!tree.source(unit).includes('linguistics_2010_X28'));
const base = new URL('https://namkicheol.github.io/linguistics/school-grammar_study.html');
const links = tree.all(unit, n => n.tag === 'a' && n.attrs.href).map(n => new URL(n.attrs.href.replaceAll('&amp;', '&'), base));
for (const id of ['linguistics_2011_X34', 'linguistics_2021_A03']) {
  assert(links.some(u => u.origin === 'https://etwiki.net' && u.pathname === '/index.html' && u.searchParams.get('id') === id));
}
const terms = ['phrasal verbs', 'prepositional verbs', 'particle movement', 'End weight'];
for (const term of terms) assert(links.some(u => u.origin === 'https://etwiki.net' && u.pathname === '/concept.html' && u.searchParams.get('term') === term));
const hub = structure(fs.readFileSync('school-grammar.html', 'utf8'));
const entries = hub.all(hub.root, n => n.tag === 'a' && n.attrs.href && new URL(n.attrs.href.replaceAll('&amp;', '&'), base).hash === '#multiword-verbs');
assert.equal(entries.length, 1);
const entry = new URL(entries[0].attrs.href.replaceAll('&amp;', '&'), base);
assert.equal(entry.origin, base.origin);
assert.equal(entry.pathname, base.pathname);
assert.equal(entry.searchParams.get('returnTo'), 'school-grammar.html');
assert.equal(entry.searchParams.get('returnLabel'), '학교문법 심화');
assert.equal(hub.all(hub.root, n => hub.hasClass(n, 'chapter-row')).length, 9);
const hubHtml = fs.readFileSync('school-grammar.html', 'utf8');
assert(hubHtml.includes('핵심 9개 단원') && hubHtml.includes('위의 9개 단원'));
assert(!/핵심 [1-8]개 단원|위의 [1-8]개 단원/.test(hubHtml));
console.log('PASS: UNIT07 four closed scoped disclosures, four comparison sets with exact provenance labels, two diagnostics, scoped table, lexical/analysis limits, exact exam/dictionary routes and nine-unit hub.');
