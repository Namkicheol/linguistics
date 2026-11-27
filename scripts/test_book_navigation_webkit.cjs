const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {webkit} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const home = pathToFileURL(path.resolve(__dirname, '../index.html')).href;
const books = {
  tg: ['The Teacher’s Grammar of English', 'tg', 'school-grammar.html'],
  tf: ['Transformational Grammar', 'transform-new', 'transformational-grammar/index.html#chapters'],
  aep: ['Applied English Phonology', 'aep-new', 'phonetics-phonology/phonetics.html'],
};

(async () => {
  const browser = await webkit.launch();
  try {
    const page = await browser.newPage({viewport: {width: 320, height: 768}, reducedMotion: 'reduce'});
    await page.route('https://**', route => route.abort());
    for (const width of [320, 390]) {
      await page.setViewportSize({width, height: 768});
      await page.goto(home);
      for (const [book, [title]] of Object.entries(books)) {
        const heading = page.locator('#book-' + book + ' h3');
        assert.match(await heading.innerText(), new RegExp(title));
        const box = await heading.boundingBox();
        assert.ok(box.y >= 0 && box.y + box.height <= 768, book + ' title in first viewport at ' + width);
      }
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    }
    for (const [book, [, bank, concept]] of Object.entries(books)) {
      await page.goto(home + '#book-' + book);
      const card = page.locator('#book-' + book);
      const link = card.getByRole('link', {name: '개념 정리'});
      assert.ok((await link.getAttribute('href')).endsWith(concept), book + ' concept destination');
      const box = await link.boundingBox();
      assert.ok(box.y >= 44 && box.y + box.height <= 768, book + ' deep link reveals concept and OX controls');
      await card.getByRole('link', {name: '개념·자료 OX'}).click();
      await page.locator('#question .question-card').waitFor();
      assert.equal(new URL(page.url()).searchParams.get('bank'), bank);
      const bookConcept = page.getByRole('link', {name: '이 원서의 개념 정리'});
      assert.ok((await bookConcept.getAttribute('href')).endsWith(concept), book + ' quiz links to active concepts');
      await page.getByRole('link', {name: '원서 목록'}).click();
      assert.equal(new URL(page.url()).hash, '#book-' + book);
    }
    await page.getByRole('link', {name: '단원별 학습'}).click();
    assert.equal(await page.locator('#chapters .chapter-row').count(), 8);
    assert.ok(await page.locator('#chapters').isVisible());
    assert.equal(await page.locator('#book-practice').isVisible(), false);
    console.log('PASS: WebKit 320/390, all three books visible, book anchors, quiz destinations, concept/return links, chapter tab');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
