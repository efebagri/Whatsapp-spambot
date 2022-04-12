const spambot = require("puppeteer");
require('dotenv').config()

async function scrape(url) {
  const browser = await spambot.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span [title='" + process.env.YOUR_CONTACT_NAME + "']");
  const target = await page.$("span [title='" + process.env.YOUR_CONTACT_NAME + "']");
  await target.click();
  const inp = await page.$(
    process.env.SELECTOR
  );

  for (let i = 0; i < 99999999999; i++) {
    await inp.type(process.env.YOUR_MESSAGE);
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");
