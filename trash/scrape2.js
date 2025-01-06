import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--proxy-server=brd.superproxy.io:33335'] // Set Bright Data proxy server
    });

    const page = await browser.newPage();

    // Authenticate with Bright Data proxy
    await page.authenticate({
        username: 'brd-customer-hl_fd6d5be7-zone-residential_proxy1-country-au',
        password: 'n2z12g3d3wan'
    });

    // Extract and log the IP address
    await page.goto('http://ipinfo.io/json', { waitUntil: 'networkidle2' });
    const ipInfo = await page.evaluate(() => JSON.parse(document.body.innerText));
    console.log('Public IP:', ipInfo.ip);

    await browser.close();
})();
