const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const copies = ['', 'book-ox-cards/concepts'];
const date = '2026-11-27';
const sample = {id: 'aep-new', questions: ['first', 'second', 'third'].map(id => ({id}))};
const aepRetired = [
  ...Array.from({length:20},(_,i)=>'AN07-'+String(i+1).padStart(2,'0')),
  'AN01-05','AN01-07','AN01-09','AN05-07','AN06-03',
  'AN08-04','AN08-05','AN08-06','AN08-08','AN08-09','AN08-12','AN08-13','AN08-16','AN08-17','AN08-18','AN08-19',
  'AN09-01','AN09-04','AN09-05','AN09-07','AN09-08','AN09-09','AN09-11','AN09-12','AN09-13',
];
const tfRetired = ['TFA01-05','TFA01-08','TFA02-06','TFA03-05','TFA03-07','TFA07-07','TFA08-01','TFA09-04'];

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
  assert.deepEqual(validSession({...saved, order: ['first', 'AN09-04', 'second', 'AN05-07', 'AN06-03', 'third']}, sample, config, date).order, ['first', 'second', 'third']);
  for(const id of aepRetired){const result=validSession({...saved,order:['first',id,'second','third'],answers:{first:true,second:false,[id]:true},cursor:2},sample,config,date);assert.deepEqual(result.order,['first','second','third'],id);assert.deepEqual(result.answers,{first:true,second:false},id);assert.equal(result.cursor,1,id);}
  assert.equal(validSession({...saved, order: ['first', 'AN09-06']}, sample, config, date), null);
  assert.equal(validSession({...saved, order: ['first', 'first', 'AN07-01']}, sample, config, date), null);
  const daily = {...config, mode: 'daily', size: 5};
  const repaired = validSession({...saved, key: sessionKey(daily, date), order: ['first', 'AN07-03', 'second']}, sample, daily, date);
  assert.deepEqual(repaired.order, ['first', 'second', 'third']);
  assert.deepEqual(repaired.answers, {first: true, second: false});
  const tgConfig = {...config, bank: 'tg'};
  const tgSample = {...sample, id: 'tg'};
  const oldTg = {...saved,
    key: sessionKey(tgConfig, date),
    order: ['first', 'TGD04-016', 'second', 'TGD26-023', 'third'],
    answers: {first: true, second: false, 'TGD04-016': false},
  };
  const resumedTg = validSession(oldTg, tgSample, tgConfig, date);
  assert.deepEqual(resumedTg.order, ['first', 'second', 'third']);
  assert.deepEqual(resumedTg.answers, {first: true, second: false});
  const tfConfig={...config,bank:'transform-new'},tfSample={...sample,id:'transform-new'};
  for(const id of tfRetired){const old={...saved,key:sessionKey(tfConfig,date),order:['first',id,'second','third'],answers:{first:true,second:false,[id]:true},cursor:2};const result=validSession(old,tfSample,tfConfig,date);assert.deepEqual(result.order,['first','second','third'],id);assert.deepEqual(result.answers,{first:true,second:false},id);assert.equal(result.cursor,1,id);}

  const data = fs.readFileSync(path.join(root, 'example-ox-data.js'), 'utf8');
  assert(!/aep-data-notes\.html|tg-detail-concepts\.html|transform-data-notes\.html/.test(data));
  const context = {window: {}};
  vm.runInNewContext(data, context);
  const banks = context.window.EXAMPLE_OX_BANKS;
  const aep = banks.find(bank => bank.id === 'aep-new');
  assert.equal(aep.questions.length, 70);
  assert(!aep.questions.some(question => /^AN07-/.test(question.id)));
  for (const id of aepRetired) assert(!aep.questions.some(question => question.id === id), id);
  const tf=banks.find(bank=>bank.id==='transform-new');assert.equal(tf.questions.length,90);for(const id of tfRetired)assert(!tf.questions.some(question=>question.id===id),id);
  for(const [id,expected] of [['TFA08-07',true],['TFA09-09',true],['TFA09-10',false],['TFA10-01',true],['TFA10-04',true]])assert.equal(tf.questions.find(question=>question.id===id)?.ans,expected,id+' preserves saved answer meaning');
  assert(!tf.questions.find(question=>question.id==='TFA10-04').data.includes('앞 도식은 기존 빈 자리를 채우고'), 'comparison answer is not given before the question');
  for (const unit of aep.units) assert(aep.questions.some(question => question.unit === unit.id), 'AEP unit must contain questions: ' + unit.id);
  const tg = banks.find(bank => bank.id === 'tg');
  assert.equal(tg.questions.length, 711);
  assert(!tg.questions.some(question => ['TGD04-016', 'TGD26-023'].includes(question.id)));
  for (const id of ['aep', 'tg', 'transform-new', 'general', 'transform']) assert(banks.find(bank => bank.id === id)?.questions.length);
}

const source = path.resolve(__dirname, '..');
assert.equal(
  fs.readFileSync(path.join(source, 'example-ox-data.js'), 'utf8'),
  fs.readFileSync(path.join(source, 'book-ox-cards/concepts/example-ox-data.js'), 'utf8'),
);
console.log('PASS: matched OX banks, retired guidance links and acoustics set removed, saved answer and daily progress migration');
