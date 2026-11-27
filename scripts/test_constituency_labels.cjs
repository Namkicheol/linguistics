const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const {webkit} = require('playwright');

const root = path.resolve(__dirname, '..');
const server = http.createServer((req, res) => {
  const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + name);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) return res.writeHead(404).end();
  res.setHeader('Content-Type', name.endsWith('.html') ? 'text/html' : name.endsWith('.js') ? 'text/javascript' : name.endsWith('.css') ? 'text/css' : 'application/octet-stream');
  res.end(fs.readFileSync(file));
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await webkit.launch();
  try {
    const page = await browser.newPage({viewport:{width:320, height:844}});
    await page.goto(`http://127.0.0.1:${server.address().port}/constituency.html`);
    // Persisted v2 data from before the label-only change has no new fields.
    await page.evaluate(() => {
      const answers = Array(40).fill(null);
      answers[21] = {picked:true, correct:true};
      localStorage.setItem('ox_constituency_v2', JSON.stringify({cur:21, answers, mode:'normal', order:Array.from({length:40}, (_, i) => i)}));
    });
    await page.reload();
    assert.match(await page.locator('#rb-msg').textContent(), /1\/40/);
    assert.equal(await page.locator('.q-src').textContent(), 'Constituency Test');
    assert.equal(await page.locator('.q-cat').textContent(), 'Movement · Heavy NP Shift');
    assert.match(await page.locator('.exp').textContent(), /해설/);
    await page.evaluate(() => localStorage.removeItem('ox_constituency_v2'));
    await page.reload();
    for (const [index, answer, category] of [[21,true,'Movement · Heavy NP Shift'],[22,false,'Fragment · ellipsis'],[23,false,'Substitution · selection']]) {
      await page.evaluate(index => jumpTo(index), index);
      assert.equal(await page.locator('.q-src').textContent(), 'Constituency Test');
      assert.equal(await page.locator('.q-cat').textContent(), category);
      await page.locator(answer ? '#ob' : '#xb').click();
      assert.match(await page.locator('#bd').textContent(), /정답/);
      assert.match(await page.locator('.def-box').last().textContent(), /Radford/);
      await page.evaluate(index => jumpTo(index), index);
      assert.equal(await page.locator('.q-src').textContent(), 'Constituency Test');
      assert.match(await page.locator('.exp').textContent(), /해설/);
    }
    await page.reload();
    assert.match(await page.locator('#rb-msg').textContent(), /3\/40/);
    assert.equal(await page.locator('.q-src').textContent(), 'Constituency Test');
    assert.equal(await page.locator('.q-cat').textContent(), 'Substitution · selection');
    assert.match(await page.locator('.exp').textContent(), /해설/);
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('ox_constituency_v2')));
    assert.equal(saved.answers.filter(Boolean).length, 3);
    assert.deepEqual(saved.answers.slice(21,24).map(item => item.picked), [true,false,false]);
    console.log('GREEN WebKit: Q22–24 topic labels, answer/review source, v2 saved progress and reload');
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode = 1; server.close(); });
