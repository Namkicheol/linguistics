// Run from repository root: node scripts/test_adjective_distribution_content.cjs
const fs=require('node:fs'), assert=require('node:assert/strict'), parse=require('./html-structure.cjs');
const html=fs.readFileSync('school-grammar_study.html','utf8'), t=parse(html);
const us=t.all(t.root,n=>n.attrs.id==='adjective-distribution');assert.equal(us.length,1);const u=us[0];
assert(t.hasClass(u,'reading-comfort'));assert(t.text(u).includes('UNIT 09'));
const ids=['adjective-positions','adjective-attributive-meanings','adjective-participle-context','adjective-two-diagnostics'];
const expectedLabels=[['학습용 대조 예문 · 새로 작성','원서 변형 예문 · Cowan의 former 대조'],['원서 예시 확장 · Cowan의 utter disaster','원서 변형 예문 · Cowan의 occasional 유형','학습용 비교 예문 · 새로 작성','기출 원문 일부 · 2019학년도 전공 B 1번'],['원서 변형 예문 · Cowan의 closed와 시간 표현 대조','기출 원문 · 2020학년도 전공 B 8번 B'],['학습용 대조 예문 · 새로 작성','기출 적용 변형 예문 · 2020학년도 전공 B 8번의 두 진단']];
const ds=t.all(u,n=>n.tag==='details');assert.equal(ds.length,5);for(const d of ds)assert(!Object.hasOwn(d.attrs,'open'));
for(let i=0;i<ids.length;i++){
 const a=t.all(u,n=>n.tag==='details'&&n.attrs.id===ids[i]);assert.equal(a.length,1);assert(u.children.includes(a[0]));
 const bs=a[0].children.filter(n=>t.hasClass(n,'detail-content'));assert.equal(bs.length,1);assert(t.text(bs[0]).length>500);
 const sets=t.all(bs[0],n=>t.hasClass(n,'example-set'));assert.equal(sets.length,expectedLabels[i].length);
 assert.deepEqual(sets.map(s=>t.text(t.all(s,n=>t.hasClass(n,'example-label'))[0]).trim()),expectedLabels[i]);
 for(const s of sets)assert(t.all(s,n=>n.tag==='strong').length>=2);
}
const src=t.all(ds.find(d=>d.attrs.id==='adjective-two-diagnostics'),n=>n.tag==='details'&&n.attrs.id==='adjective-sources');assert.equal(src.length,1);
for(const name of ['Cowan','Greenbaum','Quirk','Aarts'])assert(t.text(src[0]).includes(name));
const txt=t.text(u);for(const term of ['Adjectives of Degree','Quantifying Adjectives','Adjectives of Time and Location','Associative Adjectives','very가 불가능하다는 사실만으로 verb라고 판정할 수 없습니다','By-phrase만으로 passive라고 판정하지 않습니다','remain 뒤에는 adjective만 온다고 일반화하지 않습니다','non-gradable 혼인 상태의 해석','같은 의미','모든 문맥에서 predicative 불가능'])assert(txt.includes(term),term);
assert(t.source(u).includes('A visitor who came <strong>only occasionally</strong> interrupted the work.'));
assert(txt.includes('amount, quantity, frequency'));
assert(!txt.includes('Someone visited'));
assert(!/carbon-free|impossible|refs\/|source-ledger|SHA|OCR|빈출/.test(t.source(u)));
assert(t.source(u).includes('*They were <strong>very married</strong> until last Christmas.'));
assert(t.source(u).includes('They <strong>remained married</strong> until last Christmas.'));
const links=t.all(u,n=>n.tag==='a'&&n.attrs.href), exams=links.filter(n=>n.attrs.href.includes('index.html?id='));
const examIds=['linguistics_2019_B01','linguistics_2020_B08'];
for(const a of exams)assert(examIds.includes(new URL(a.attrs.href).searchParams.get('id')));
const badges=exams.filter(n=>t.hasClass(n,'exam-year'));assert.deepEqual(badges.map(n=>new URL(n.attrs.href).searchParams.get('id')),examIds);
assert.deepEqual(links.filter(n=>n.attrs.href.includes('/concept.html?')).map(n=>new URL(n.attrs.href).searchParams.get('term')),['attributive-only adjective','degree modifier']);
assert.equal(t.all(u,n=>['table','svg','iframe','button','input'].includes(n.tag)).length,0);
const hubHtml=fs.readFileSync('school-grammar.html','utf8'),h=parse(hubHtml);assert.equal(h.all(h.root,n=>h.hasClass(n,'chapter-row')).length,9);assert(hubHtml.includes('핵심 9개 단원')&&hubHtml.includes('위의 9개 단원'));
const entries=h.all(h.root,n=>n.tag==='a'&&n.attrs.href?.includes('#adjective-distribution'));assert.equal(entries.length,1);const url=new URL(entries[0].attrs.href.replaceAll('&amp;','&'),'https://namkicheol.github.io/linguistics/');assert.equal(url.pathname,'/linguistics/school-grammar_study.html');assert.equal(url.searchParams.get('returnTo'),'school-grammar.html');assert.equal(url.searchParams.get('returnLabel'),'학교문법 심화');
const toc=t.all(t.root,n=>t.hasClass(n,'study-toc'));assert.equal(toc.length,1);assert.equal(t.all(toc[0],n=>n.tag==='a'&&n.attrs.href==='#adjective-distribution').length,1);
console.log('PASS: UNIT09 four closed reading sections, ten accurately labelled comparison sets, two exam badges, diagnostic limits, nested bibliography, dictionary routes and nine-unit hub.');
