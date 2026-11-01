/* Compact navigation for existing chapter quizzes; original quiz state remains authoritative. */
(function(){'use strict';
const nav=document.getElementById('nav');if(!nav||nav.closest('.quiz-list-fold'))return;
const controls=document.createElement('nav');controls.className='quiz-direct-nav';controls.setAttribute('aria-label','문항 바로 이동');controls.innerHTML='<button type="button" data-step="-1">← 이전</button><label for="quiz-jump-number">문제</label><input id="quiz-jump-number" type="number" inputmode="numeric" min="1" value="1" aria-describedby="quiz-jump-total"><span id="quiz-jump-total"></span><button type="button" data-go>이동</button><button type="button" data-step="1">다음 →</button><span class="quiz-jump-status" role="status"></span>';
const fold=document.createElement('details');fold.className='quiz-list-fold';const summary=document.createElement('summary');summary.textContent='문제목록 펼치기';fold.append(summary);nav.before(controls,fold);fold.append(nav);
const input=controls.querySelector('input'),total=controls.querySelector('#quiz-jump-total'),status=controls.querySelector('[role="status"]');
function buttons(){return Array.from(nav.querySelectorAll('button'));}
function current(){const bs=buttons(),i=bs.findIndex(b=>b.classList.contains('cur')||b.getAttribute('aria-current')==='true');return i<0?Math.max(0,Number(input.value)-1):i;}
function sync(){const bs=buttons(),i=current();input.max=String(bs.length);input.value=String(Math.min(i+1,bs.length)||1);total.textContent='/ '+bs.length;controls.querySelector('[data-step="-1"]').disabled=!bs.length||i<=0;controls.querySelector('[data-step="1"]').disabled=!bs.length||i>=bs.length-1;input.disabled=!bs.length;controls.querySelector('[data-go]').disabled=!bs.length;}
function go(n){const bs=buttons();if(!Number.isInteger(n)||n<1||n>bs.length){status.textContent='1부터 '+bs.length+'까지 번호를 입력하세요.';return;}status.textContent='';bs[n-1].click();input.value=String(n);sync();const q=document.getElementById('qa');if(q)q.scrollIntoView({block:'start',behavior:'auto'});}
controls.addEventListener('click',e=>{const step=e.target.closest('[data-step]');if(step)go(current()+1+Number(step.dataset.step));if(e.target.closest('[data-go]'))go(Number(input.value));});input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();go(Number(input.value));}});
fold.addEventListener('toggle',()=>{summary.textContent=fold.open?'문제목록 접기':'문제목록 펼치기';});new MutationObserver(sync).observe(nav,{childList:true});sync();
})();
