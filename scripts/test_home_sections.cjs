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
assert.equal(tree.all(practice, node => node.tag === 'article').length, 4);
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
for (const hash of ['#general-practice-heading', '#chapters', '#book-practice', '#exams', '', '#unknown']) {
  location.hash = hash;
  events.hashchange();
  const ox = hash === '#book-practice' || hash === '#general-practice-heading';
  assert.equal(practice.hidden, !ox);
  assert.equal(chapters.hidden, ox);
  assert.equal(syntax.hidden, ox);
  assert.equal(byId('skip-to-topic').href, ox ? '#book-practice' : '#chapters');
  assert.deepEqual(links.filter(link => link.attrs['aria-current']).map(link => link.hash), [ox ? '#book-practice' : '#area-study']);
}
console.log('PASS: both sections, eight chapters, four practice groups and legacy deep links');
