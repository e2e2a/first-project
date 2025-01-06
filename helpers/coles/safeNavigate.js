import fs from 'fs';

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const safeNavigate = async (page, url, retries = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      // await page.goto(url, { waitUntil: 'networkidle2', timeout: 50000 });
      await page.setExtraHTTPHeaders({
        Referer: url,
      });
      const cookies = await page.cookies();
      await page.deleteCookie(...cookies);
      const loadedCookies = JSON.parse(fs.readFileSync('./coles/colesCookies.json', 'utf-8'));
      await page.setCookie(...loadedCookies);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 50000 });
      return;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error}`);
      if (i === retries - 1) throw error;
      await delay(2000);
    }
  }
};

export default safeNavigate;
