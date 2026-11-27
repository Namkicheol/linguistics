const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const copies = ['', 'book-ox-cards/concepts'];
const date = '2026-11-27';
const sample = {id: 'aep-new', questions: ['first', 'second', 'third'].map(id => ({id}))};

for (const copy of copies) {
  const root = path.resolve(__dirname, '..', copy);
  const {sessionKey, validSession} = require(path.join(root, 'example-ox.js'));
  const config = {bank: sample.id, mode: 'random', level: 'detail', unit: 0};
  const saved = {
    version: 1,
    key: sessionKey(config, date),
    order: ['first', 'AN07-01', 'second', 'AN07-20', 'third'],
    answers: {first: true, second: false, 'AN07-01': true},
    cursor: 3,
  };
  assert.deepEqual(validSession(saved, sample, config, date), {
    ...saved, order: ['first', 'second', 'third'], answers: {first: true, second: false}, cursor: 2,
  });
  assert.equal(validSession({...saved, order: ['first', 'AN07-21']}, sample, config, date), null);
  assert.equal(validSession({...saved, order: ['first', 'first', 'AN07-01']}, sample, config, date), null);
  const daily = {...config, mode: 'daily', size: 5};
  const repaired = validSession({...saved, key: sessionKey(daily, date), order: ['first', 'AN07-03', 'second']}, sample, daily, date);
  assert.deepEqual(repaired.order, ['first', 'second', 'third']);
  assert.deepEqual(repaired.answers, {first: true, second: false});

  const data = fs.readFileSync(path.join(root, 'example-ox-data.js'), 'utf8');
  assert(!/aep-data-notes\.html|tg-detail-concepts\.html|transform-data-notes\.html/.test(data));
  const context = {window: {}};
  vm.runInNewContext(data, context);
  const banks = context.window.EXAMPLE_OX_BANKS;
  const aep = banks.find(bank => bank.id === 'aep-new');
  assert.equal(aep.questions.length, 95);
  assert(!aep.questions.some(question => /^AN07-/.test(question.id)));
  for (const unit of aep.units) assert(aep.questions.some(question => question.unit === unit.id), 'AEP unit must contain questions: ' + unit.id);
  for (const id of ['aep', 'tg', 'transform-new', 'general', 'transform']) assert(banks.find(bank => bank.id === id)?.questions.length);
}

const source = path.resolve(__dirname, '..');
assert.equal(
  fs.readFileSync(path.join(source, 'example-ox-data.js'), 'utf8'),
  fs.readFileSync(path.join(source, 'book-ox-cards/concepts/example-ox-data.js'), 'utf8'),
);
console.log('PASS: matched OX banks, retired guidance links and acoustics set removed, saved answer and daily progress migration');
