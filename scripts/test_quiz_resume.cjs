// Run from any directory: node scripts/test_quiz_resume.cjs [repository-root]
// Execute each real quiz script in a fresh VM/DOM stub for each simulated reload.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = process.argv[2] || path.resolve(__dirname, '..');
const files = fs.readdirSync(root).filter(file => file.endsWith('.html') &&
  fs.readFileSync(path.join(root, file), 'utf8').includes('function pick(val)'));
assert.equal(files.length, 8, 'Exercise the complete quiz set');

function load(file, storage, failWrites = false) {
  const nodes = new Map();
  const document = {getElementById(id) {
    if (!nodes.has(id)) {
      const classes = new Set();
      nodes.set(id, {style: {}, innerHTML: '', textContent: '', disabled: false,
        classList: {add: c => classes.add(c), remove: c => classes.delete(c), contains: c => classes.has(c),
          toggle(c, on) {on ? classes.add(c) : classes.delete(c);}}});
    }
    return nodes.get(id);
  }};
  const localStorage = {getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => {
      if (failWrites) throw new Error('Storage disabled or quota exceeded');
      storage.set(key, value);
    }, removeItem: key => storage.delete(key)};
  const context = vm.createContext({document, localStorage, window: {}, setTimeout() {}});
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    vm.runInContext(match[1], context, {filename: file});
  }
  const run = code => vm.runInContext(code, context);
  const state = () => JSON.parse(run('JSON.stringify({cur,answers,mode,order,score:getScore(),total:TOTAL})'));
  return {run, state, node: id => document.getElementById(id), key: run('SAVE_KEY')};
}

for (const file of files) {
  for (const correct of [true, false]) {
    const storage = new Map();
    const app = load(file, storage, true);
    assert.doesNotThrow(() => app.run(`pick(${correct ? '' : '!'}Q[order[cur]].ans)`),
      `${file}: failed save must not interrupt answer feedback`);
    assert.equal(app.state().score, Number(correct));
    assert.equal(app.node('ob').disabled, true);
    assert.equal(app.node('xb').disabled, true);
    assert(app.node('bd').textContent.length > 0, 'Feedback still renders');
    assert(app.node('ep').innerHTML.includes('exp show'), 'Explanation still renders');
    assert(app.node('nb').classList.contains('show'), 'Next button is visible');
    assert.equal(app.node('ps').textContent, `정답 ${Number(correct)}개`);
    assert.equal(storage.size, 0, 'Failed write must not pretend to persist');
    assert.doesNotThrow(() => app.run('next()'), 'Next remains usable after failed save');
    assert.equal(app.state().cur, 1);
    assert(app.node('qa').innerHTML.includes('Q2'), 'Next question still renders');
  }
  for (const mode of ['normal', 'random']) for (const correct of [true, false]) {
    const storage = new Map();
    let app = load(file, storage);
    app.run(`setMode('${mode}')`);
    app.run(`pick(${correct ? '' : '!'}Q[order[cur]].ans)`);
    const picked = app.state();
    assert.equal(picked.score, Number(correct));
    assert(storage.has(app.key), `${file}: pick must save before Next`);
    assert.equal(JSON.parse(storage.get(app.key)).answers[0].picked, picked.answers[0].picked,
      `${file}: persist before Next`);
    app = load(file, storage);
    assert.deepEqual(app.state(), picked, `${file}: pick → reload restores answer and order`);
    assert.equal((app.node('qa').innerHTML.match(/disabled/g) || []).length, 2,
      'Restored answer cannot be picked a second time');
    assert(app.node('qa').innerHTML.includes('next-btn show'));
    assert.equal(app.node('rb').style.display, 'block');
    app.run('render(); render();');
    app = load(file, storage);
    assert.deepEqual(app.state(), picked, 'Repeated render/reload cannot double-score');
    app.run('next()');
    app = load(file, storage);
    assert.equal(app.state().cur, 1);
    assert.equal(app.state().score, Number(correct), 'Next cannot double-score');
    app.run('pick(Q[order[cur]].ans)');
    app = load(file, storage);
    assert.equal(app.state().score, Number(correct) + 1, 'Second answer counts exactly once');

    // Switching modes discards prior answers as before, and the next pick persists the new mode.
    const nextMode = mode === 'normal' ? 'random' : 'normal';
    app.run(`setMode('${nextMode}')`);
    assert.equal(storage.has(app.key), false);
    assert(app.state().answers.every(a => a === null));
    app.run('pick(Q[order[cur]].ans)');
    app = load(file, storage);
    assert.equal(app.state().mode, nextMode);
    assert.equal(app.state().score, 1);
    app.run('restart()');
    assert.equal(storage.has(app.key), false);
    app = load(file, storage);
    assert.equal(app.state().score, 0);
    assert(app.state().answers.every(a => a === null));
  }

  const storage = new Map();
  let app = load(file, storage);
  app.run('pick(Q[order[cur]].ans); freshStart()');
  assert.equal(app.state().score, 0);
  app = load(file, storage);
  assert(app.state().answers.every(a => a === null), 'Fresh start never revives prior answers');
  // Save the final answer until the explicit result transition; completion still clears progress.
  const total = app.state().total;
  for (let i = 0; i < total; i++) {
    app.run('pick(Q[order[cur]].ans)');
    if (i < total - 1) app.run('next()');
  }
  app = load(file, storage);
  assert.equal(app.state().cur, total - 1);
  assert.equal(app.state().score, total);
  app.run('next()');
  assert.equal(storage.has(app.key), false, 'Viewing results clears completed session');
  assert.equal(Number(app.node('fs').textContent), total);
  app = load(file, storage);
  assert.equal(app.state().cur, 0);
  assert.equal(app.state().score, 0, 'Completed session is not resumed');
  console.log(`PASS: ${file}: immediate reload, both answers/modes, stable score/order, Next, reset, completion, failed writes`);
}
