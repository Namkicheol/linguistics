const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const read=name=>fs.readFileSync(require('node:path').join(__dirname,'..',name),'utf8');
const source=read('school-grammar-ox.html');
const script=s=>s.match(/<script>\s*(const UNIT_NAMES=[\s\S]*?)<\/script>/)[1];
const bank=s=>JSON.parse(script(s).match(/const Q=(\[[\s\S]*?\n\]);/)[1]);
const q=bank(source);
assert.equal(new Set(q.map(item=>item.id)).size,q.length);
const legacy='ox_school_grammar_v1',v2='ox_school_grammar_v2:';
function seed(unit,order,answers,cur,mode='normal',retry=false){
 const slots=Array(36).fill(null);Object.assign(slots,answers);
 return JSON.stringify({v:1,unit,order,answers:slots,cur,mode,retry},null,1);
}
function open(storage,unit,s=source,fail=false){
 const fields={};const events={};
 const location=new URL('https://example.test/quiz?from=study'+(unit===undefined?'':'&unit='+unit)+'#keep');
 const context=vm.createContext({
  localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>{if(fail)throw Error('quota');storage.set(k,v);}},
  URLSearchParams,URL,location,history:{replaceState:(_,__,url)=>{location.href=url.href;}},
  document:{getElementById:key=>fields[key]??={style:{},classList:{toggle(){},add(){},remove(){}}}},
  window:{addEventListener:(key,fn)=>events[key]=fn}
 });
 const run=expr=>vm.runInContext(expr,context);
 run(script(s));
 return {run,events,fields,location,state:()=>JSON.parse(run('JSON.stringify({unit,retry,...snapshot(),score:getScore()})'))};
}
{
 const original=seed(1,[0,1,2,3],{0:true,1:false},1);
 const storage=new Map([[legacy,original]]);
 let tab=open(storage,9);
 assert.equal(storage.has(v2+1),false,'wrong scope must not adopt v1');
 assert.deepEqual(tab.state().answers,{});
 tab.run('pick(false);next()');
 tab.run('setUnit(1)');
 assert.equal(tab.location.search,'?from=study&unit=1');assert.equal(tab.location.hash,'#keep');
 assert.equal(open(storage,tab.location.searchParams.get('unit')).state().unit,1);
 assert.deepEqual(tab.state().answers,{'SG01-01':true,'SG01-02':false});
 assert.equal(tab.state().current,'SG01-02');
 assert.equal(tab.state().score,2);
 tab.run('setMode("random");setUnit(9)');
 assert.equal(tab.state().current,'SG09-02');
 tab=open(storage,9);
 assert.deepEqual(tab.state().answers,{'SG09-01':false});
 tab.run('restart();setUnit(1)');
 assert.equal(tab.state().score,2);
 assert.equal(tab.state().mode,'random');
 assert.equal(storage.get(legacy),original);
}
{
 const original=seed(9,[35,32,34,33],{32:false,35:true},1,'random');
 const relocated=q.slice().reverse();
 for(const id of ['SG09-TEST-EXTRA-A','SG09-TEST-EXTRA-B'])relocated.unshift({...q.find(item=>item.id==='SG09-01'),id});
 const updated=source.replace(/const Q=\[[\s\S]*?\n\];/, 'const Q='+JSON.stringify(relocated)+'\n;');
 for(const s of [updated,source.replace(/const Q=\[[\s\S]*?\n\];/,'const Q='+JSON.stringify(q.slice().reverse())+'\n;')]){
  const storage=new Map([[legacy,original]]);
  let tab=open(storage,9,s);assert.deepEqual(tab.state().answers,{'SG09-01':false,'SG09-04':true});
  assert.equal(tab.state().current,'SG09-01');assert.equal(tab.state().mode,'random');
  const v=storage.get(v2+9);tab=open(storage,9,s);assert.equal(storage.get(v2+9),v);
  assert.equal(storage.get(legacy),original);
  assert.deepEqual(tab.state().order.slice(0,4),['SG09-04','SG09-01','SG09-03','SG09-02']);
 }
 const allDone=seed(9,[32,33,34,35],{32:false,33:true,34:true,35:false},4);
 assert.equal(open(new Map([[legacy,allDone]]),9,updated).state().done,false);
 assert.equal(open(new Map([[legacy,allDone]]),9).state().done,true);
}
{
 const storage=new Map(),a=open(storage,1),b=open(storage,1);
 a.run('pick(false);next()');
 b.run('pick(true)'); // stale UI action rejected, not on new current question
 assert.deepEqual(b.state().answers,{'SG01-01':false});
 b.run('pick(false);retryWrong()');
 assert.equal(b.state().retry,true);
 let t=open(storage,1);assert.equal(t.state().retry,true);
 t.run('pick(true);next();resumePrimary()');
 assert.equal(t.state().retry,false);
 assert.deepEqual(t.state().answers,{'SG01-01':false,'SG01-02':false});
 a.events.storage({key:v2+1});
 assert.deepEqual(a.state().answers,t.state().answers);
 t.run('setUnit(0);pick(true);setUnit(1)');
 assert.equal(t.state().score,1);
 assert.deepEqual(open(storage,0).state().answers,{'SG01-01':true});
 t.run('restart();pick(true)');
 a.events.pageshow(); // restored from another document / back-forward cache
 assert.deepEqual(a.state().answers,{'SG01-01':true});
}
{
 const original=seed(1,[0],{0:true},1,'normal',true);
 const storage=new Map([[legacy,original]]);
 const tab=open(storage,1);
 assert.equal(tab.state().retry,true);
 assert.equal(tab.state().done,true);
 assert.deepEqual(tab.state().answers,{'SG01-01':true});
 assert.equal(storage.get(legacy),original);
}
{
 const storage=new Map(),unwritable=open(storage,9,source,true);
 unwritable.run('pick(false)');
 assert.match(unwritable.fields['progress-save-status'].textContent,/저장하지 못했습니다/);
 assert.deepEqual(unwritable.state().answers,{'SG09-01':false});
 assert.equal(storage.has(v2+9),false);
 assert.match(source,/onclick="restart\(\)"[^>]*>현재 회차 처음부터<\/button>/);
 assert.doesNotMatch(source,/freshStart\(/);
}
console.log('TG OX: legacy preservation, per-scope resume/reset, stable-ID expansion/reorder, retry and concurrent-tab fixtures passed');
