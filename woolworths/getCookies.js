import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import RateLimiter from '../RateLimit/index.js';
import fs from 'fs';
import mongoose from 'mongoose';

// Add stealth plugin


(async () => {

  const browser = await puppeteer.launch({
    headless: false, // Set to false if you want to see the browser in action
  });

  const page = await browser.newPage();

  // Set a user agent to mimic a real browser
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  );

  // Navigate to the target website

  await page.goto('https://www.woolworths.com.au', { waitUntil: 'domcontentloaded' });

  // Optionally wait for a specific element to load
  await page.waitForSelector('h1');

  // Extract cookies
  const cookies = await page.cookies();
  console.log('Extracted Cookies:', cookies);

  // Save cookies to a file or database (optional)
  fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));

  // Close the browser after extracting cookies
  await browser.close();
  
})();



