const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const parse = require('./html-structure.cjs');

const html = fs.readFileSync('index.html', 'utf8');
const tree = parse(html);
const byId = id => tree.all(tree.root, node => node.attrs.id === id)[0];
const practice = byId('book-practice');
const chapters = byId('area-study');
const syntax = byId('advanced-study');
const links = tree.all(tree.root, node => tree.hasClass(node, 'hub-overview'))[0].children;
assert.equal(tree.all(chapters, node => tree.hasClass(node, 'chapter-row')).length, 8);
const chapterLinks = tree.all(chapters, node => node.tag === 'a');
assert.equal(chapterLinks.length, 16);
for (const chapterLink of chapterLinks) {
  const lesson = new URL(chapterLink.attrs.href, 'https://namkicheol.github.io/linguistics/');
  assert.equal(lesson.searchParams.get('returnTo'), 'index.html#area-study');
}
assert.equal(tree.all(practice, node => node.tag === 'article').length, 4);
const bookRoutes = {
  tg: ['./school-grammar.html', 'tg'],
  tf: ['https://namkicheol.github.io/transformational-grammar/index.html#chapters', 'transform-new'],
  aep: ['https://namkicheol.github.io/phonetics-phonology/phonetics.html', 'aep-new'],
};
for (const [book, [concept, bank]] of Object.entries(bookRoutes)) {
  const directLinks = tree.all(byId('book-' + book), node => node.tag === 'nav')[0].children;
  assert.equal(directLinks[0].attrs.href, concept);
  const quiz = new URL(directLinks[1].attrs.href.replaceAll('&amp;', '&'), 'https://namkicheol.github.io/linguistics/');
  assert.equal(quiz.pathname, '/linguistics/book-ox-cards/concepts/example-ox.html');
  assert.equal(quiz.searchParams.get('bank'), bank);
}
for (const [retired, concept] of Object.entries({
  'aep-data-notes.html': '../phonetics-phonology/phonetics.html',
  'tg-detail-concepts.html': './school-grammar.html',
})) {
  assert(!html.includes(retired), 'Retired note is no longer listed: ' + retired);
  const note = fs.readFileSync(retired, 'utf8');
  assert(note.includes(`http-equiv="refresh" content="0; url=${concept}"`));
  assert(note.includes(`href="${concept}"`));
  assert(!note.includes('<section'), 'Old explanatory text is removed: ' + retired);
}
assert(!html.includes('transform-data-notes.html'), 'Duplicate TF material is not a home action');
const tfNotes = fs.readFileSync('transform-data-notes.html', 'utf8');
assert(!tfNotes.includes('<strong>판단 순서:</strong>'));
assert(tfNotes.includes('id="c-command"') && tfNotes.includes('id="chapter-10"'), 'TF concept references and chapter anchors remain');
for (const section of [practice, chapters, syntax]) assert(!('hidden' in section.attrs));
const targets = new Set(tree.all(practice, () => true));
practice.contains = node => node === practice || targets.has(node);
for (const link of links) {
  link.hash = link.attrs.href;
  link.setAttribute = (key, value) => { link.attrs[key] = value; };
  link.removeAttribute = key => { delete link.attrs[key]; };
}
const events = {};
const location = {hash:'#general-practice-heading'};
const document = {getElementById:byId, querySelectorAll:() => links};
const script = html.match(/<script>\s*(\(\(\) => \{[\s\S]*?)<\/script>/)[1];
vm.runInNewContext(script, {document, location, window:{addEventListener:(type, fn) => { events[type] = fn; }}});
for (const hash of ['#general-practice-heading', '#chapters', '#book-practice', '#exams', '', '#unknown', '#book-tg', '#book-tf', '#book-aep']) {
  location.hash = hash;
  events.hashchange();
  const ox = !hash || hash.startsWith('#book-') || hash === '#general-practice-heading';
  assert.equal(practice.hidden, !ox);
  assert.equal(chapters.hidden, ox);
  assert.equal(syntax.hidden, ox);
  assert.equal(byId('skip-to-topic').href, ox ? '#book-practice' : '#chapters');
  assert.deepEqual(links.filter(link => link.attrs['aria-current']).map(link => link.hash), [ox ? '#book-practice' : '#area-study']);
}
console.log('PASS: both sections, eight chapters, three book anchors with concept and OX actions, and legacy deep links');
