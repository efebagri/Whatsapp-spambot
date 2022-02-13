const spambot = require("puppeteer");

async function scrape(url) {
  const browser = await spambot.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span [title='YOUR_CONTACT_NAME']");
  const target = await page.$("span [title='YOUR_CONTACT_NAME']");
  await target.click();
  const inp = await page.$(
    "COPY_SELECTOR"
  );

  for (let i = 0; i < 99999999999; i++) {
    await inp.type("YOUR_MESSAGE");
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");