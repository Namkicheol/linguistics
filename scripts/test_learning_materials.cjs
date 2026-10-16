const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),cp=require('node:child_process');
const baseline=process.env.CONTENT_BASELINE || 'a9bcf2153b77d914b7d31113140a9d0a49298452';
const topics=['constituency','phrase-structure','movement','raising-control','binding','morphology','semantics','pragmatics'];
let total=0;
for(const topic of topics){
 const html=fs.readFileSync(topic+'.html','utf8');
 const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];for(const s of scripts)new vm.Script(s[1]);
 const readQ=s=>vm.runInNewContext(s.slice(s.indexOf('const Q=['),s.indexOf('const TOTAL='))+';Q');
 const q=readQ(html),old=readQ(cp.execFileSync('git',['show',baseline+':'+topic+'.html'],{encoding:'utf8'}));
 assert.equal(q.length,old.length);assert.deepEqual(Array.from(q,x=>x.ans),Array.from(old,x=>x.ans),'No key flips');
 assert.equal(html.match(/const SAVE_KEY='([^']+)'/)[1],cp.execFileSync('git',['show',baseline+':'+topic+'.html'],{encoding:'utf8'}).match(/const SAVE_KEY='([^']+)'/)[1]);
 for(const item of q)for(const key of ['text','correct','why','source'])assert.equal(typeof item[key],'string');
 const note=fs.readFileSync(topic+'_study.html','utf8');
 const oldnote=cp.execFileSync('git',['show',baseline+':'+topic+'_study.html'],{encoding:'utf8'});
 const ids=s=>[...s.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
 for(const id of ids(oldnote))assert(ids(note).includes(id),'Preserve anchor '+id);
 for(const html of [note,fs.readFileSync(topic+'.html','utf8')]){
 assert(html.includes('./learning.css'));
 for(const s of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))new vm.Script(s[1]);
 }
 total+=q.length;
}
const index=fs.readFileSync('index.html','utf8');assert.equal((index.match(/class="chapter-row"/g)||[]).length,8);
for(const t of topics)for(const suffix of ['.html','_study.html'])assert(index.includes('./'+t+suffix));
assert(!index.includes('100%'));assert(!index.includes('Concept Master'));
new vm.Script(fs.readFileSync('study-return.js','utf8'));
console.log(`PASS: ${topics.length} chapters, ${total} OX items, keys/save IDs/anchors preserved, scripts compile, 16 navigation links.`);
function returnLink(search='',referrer=''){
 const nodes=[];const element=()=>({style:{},children:[],appendChild(n){this.children.push(n)},setAttribute(k,v){this[k]=v},getAttribute(k){return this[k]}});
 const document={referrer,currentScript:null,getElementById(){return null},createElement(){const n=element();nodes.push(n);return n},body:element()};
 vm.runInNewContext(fs.readFileSync('study-return.js','utf8'),{document,window:{location:{href:'https://namkicheol.github.io/linguistics/constituency.html'+search,origin:'https://namkicheol.github.io',search}},URL,URLSearchParams});
 return nodes.find(n=>n.id==='back-btn');
}
assert.equal(returnLink().href,'https://namkicheol.github.io/linguistics/index.html');
assert.equal(returnLink('?returnTo='+encodeURIComponent('https://etwiki.net/index.html?id=linguistics_2018_B06')).href,'https://etwiki.net/index.html?id=linguistics_2018_B06');
assert.equal(returnLink('?returnTo='+encodeURIComponent('javascript:alert(1)')).href,'https://namkicheol.github.io/linguistics/index.html');
assert.equal(returnLink('?return=linguistics_2018_B06').href,'https://etwiki.net/index.html?id=linguistics_2018_B06');
assert(returnLink().style.cssText.includes('position:relative'));
console.log('PASS: return links preserve allowed destinations, reject unsafe URLs, and use normal flow.');
