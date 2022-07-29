const puppeteer = require('puppeteer');

let browser, page;

beforeEach( async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('http://localhost:8080');
});

afterEach(async () => {
  await browser.close();
});

test('We can launch a browser', async () => {
  const text = await page.$eval('h5.text-primary', el => el.innerHTML);

  expect(text).toEqual('Welcome Back ! ')
});

test('validate url forgot password', async () => {
  await page.click('div.text-center a.text-muted');
  const url = await page.url();
  expect(url).toMatch(/forgot-password/);
})