// Source audit: original exam scans, 2013 p.12; 2014 A p.5;
// 2015 A p.3; 2019 B p.5. TG pp.322–323 and 440.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = process.argv[2] || '.';
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const study = read('raising-control_study.html');
const blog = read('blog/Ch04-Raising-Control.md');
const oxBlog = read('blog/Ch04-Raising-Control-OX.md');
const quiz = read('raising-control.html');
for (const text of [study, blog]) {
  assert(!text.includes('2013 1차 Q33'), 'Q33 is scalar implicature, not thematic roles');
  assert(!text.includes('2015 1차 기입3'), '2015 A3 is item analysis');
  assert(!text.includes('2014 1차 서술5'), 'thematic roles: 2014 A 기입13');
  assert(!text.includes('2019 1차 기입3'), 'PRO/control: 2019 B6');
  assert(text.includes('2014학년도 1차 전공 A 기입형 13번'));
  assert(text.includes('2019학년도 1차 전공 B 6번'));
  assert(/PRO를 직접 판별하는 문항은 (아니|아닙)/.test(text));
  assert(text.includes('believe that'));
}
assert(!blog.includes('| finite CP 보문 |'));
assert(blog.includes('finite CP의 허용 여부만으로 raising/control을 판별하지 않습니다'));
assert(oxBlog.includes('차이는 finite CP의 허용 여부가 아니라'));
for (const text of [study, blog, oxBlog]) assert(text.includes('일부 -ing절'));
assert(oxBlog.includes('Q29.') && oxBlog.includes('Q32.'));
assert.equal((oxBlog.match(/^### Q\d+\./gm) || []).length, 40);
const ids = [...study.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'unique HTML ids');
for (const id of ['theta-criterion', 'ssr', 'sor-ecm', 'subject-control', 'object-control', 'pro']) assert(ids.includes(id), id);
const details = [...study.matchAll(/<details class="concept">([\s\S]*?)<\/details>/g)].map(m => m[1]);
assert.equal(details.length, 3);
for (const detail of details) {
  assert(detail.includes('변형 예문'));
  assert(detail.includes('2019학년도 1차 전공 B 6번'));
  assert(detail.includes('https://etwiki.net/index.html?id=linguistics_2019_B06'));
  assert(!detail.includes('github.com/Namkicheol/testmaster'), 'public lesson must not link private originals');
  assert(!detail.includes('John') && !detail.includes('Sue'), 'new examples must be adapted');
}
assert.equal((study.match(/CP 층은 생략했다/g) || []).length, 2);
assert(study.includes('threaten (위협 의미)'));
assert(quiz.includes('threaten을 항상 control로 분류해서는 안 됩니다'));
const vm = require('node:vm');
const questions = vm.runInNewContext(quiz.match(/const Q=(\[[\s\S]*?\]);/)[1]);
assert.equal(questions.length, 40);
assert.equal(questions[23].ans, true);
assert.equal(questions[28].ans, true);
assert.equal(questions[31].ans, false);
assert.equal(questions[38].ans, false);
assert.equal(questions[39].ans, true);
assert(questions[39].why.includes('ECM에서는 believe의 matrix subject가 아니라'));
assert(oxBlog.includes('ECM에서는 believe의 matrix subject가 아니라'));
assert(blog.includes('| matrix subject에 theta-role | No | Yes | Yes | Yes |'));
assert(study.includes('<strong>SSR</strong>:'));
assert(questions[38].correct.includes('literal reading'));
assert(oxBlog.includes('literal reading까지 모두 비문이라는 뜻은 아닙니다'));
assert(!study.includes('class="eg-line eg-bad">*The analyst'));
console.log('PASS: original-exam references, CP/PRO consistency, 40 OX explanations, stable anchors.');
