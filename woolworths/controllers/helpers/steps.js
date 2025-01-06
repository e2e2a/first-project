import waitForElement from '../../../controllers/helpers/coles/waitForElement.js';
import safeNavigate from '../../../controllers/helpers/coles/safeNavigate.js';
import location from '../../../constant/woolworths/location.js';
import { timeout } from 'puppeteer';

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
let number
const handleSteps = async (page, loca, url) => {
  const loc = await location.find((l) => l.name.toLowerCase() === loca.toLowerCase())
  let retries
  retries = 100000
  let toLoad = 0
  for (let i = 0; i < retries; i++) {
    toLoad++
    console.log('number: ', number)
    try {
      const a = await step1(page);
      if (!a) {
        console.log('Retrying step 1...');
        return handleSteps(page, loca, url); // Retry handleSteps if step1 fails
      }
      await delay(3000)
        const b = await step2(page, loc);
        if (!b) {
          console.log('Retrying step 2...');
          return handleSteps(page, loca, url); // Retry handleSteps if step2 fails
        }
        await delay(6000)

        if(loca !== 'qld') {
          const c = await step3(page, loc);
          if (!c) {
            console.log('Retrying step 3...');
            return handleSteps(page, loca, url); // Retry handleSteps if step3 fails
          }
        } else{
          await page.waitForSelector('.view-more-button.ng-star-inserted', { visible: true });
          await page.click('.view-more-button.ng-star-inserted');
          console.log('waiting')
          const c = await step3(page, loc);
          if (!c) {
            console.log('Retrying step 3...');
            return handleSteps(page, loca, url); // Retry handleSteps if step3 fails
          }
        }
        await delay(1000);

        const d = await step4(page, loc);
        if (!d) {
          console.log('Retrying step 4...');
          number = (number || 0) + 1;
          if (number > 2) {
            console.log('Failed in steps with 3 attempts, and load the page.');
            console.log('url', url)
            await safeNavigate(page, url);
            await delay(3000);
            number = 0;
          }
          return handleSteps(page, loca, url); // Retry handleSteps if step4 fails
        }
      return { success: true, status: 201 };
    } catch (error) {
      console.log('error', error);
      if (toLoad > 2) {
        console.log('Failed in steps with 3 attempts, and load the page.');
        console.log('url', url)
        // await safeNavigate(page, url);
        await page.reload()
        await delay(9000);
        toLoad = 0;
      }
      if (i === retries) {
        retries - 1
      };
      await delay(3000);
    }
  }
};

const step1 = async (page) => {
  await page.waitForSelector('.wx-header__fulfilment-active-message');
  await page.click('.wx-header__fulfilment-active-message');
  console.log('Drawer opened.');
  return true; // Return true when the step succeeds
};

const step2 = async (page, loc) => {
  let searchInputSelector
    searchInputSelector = 'input[id="pickupAddressSelector"]';
  // console.log('in case 1: ', loc)
  const location = loc.location.split(' ')[0].replace(/[^a-zA-Z0-9]/g, ''); // Replace with the actual location

  const a = await waitForElement(page, searchInputSelector, { visible: true, timeout: 2000 });
  if (!a) return false;
  await page.focus(searchInputSelector);
  await page.type(searchInputSelector, location, { delay: 200 });
  // console.log(`Typed location: ${location}`);
  return true; // Return true if the step succeeded
};

const step3 = async (page, loc) => {
  const subLocation = loc.subLucation;

  const a = await waitForElement(page, 'div.stores.ng-star-inserted', { visible: true, timeout: 2000 });
  if (!a) return false;
  try {
    const options = await page.$$('.store-details');
    let clicked = false;
    for (let option of options) {
      const text = await option.evaluate((el) => el.querySelector('.store-name.body-medium')?.textContent.trim());
      if (text.includes(subLocation)) {
        await option.click();
        clicked = true;
        return true;
      }
    }

    if (!clicked) {
      throw new Error(`Sub-location "${subLocation}" not found.`);
    }
  } catch (error) {
    console.error(`Failed to click on sub-location: "${subLocation}"`, error);
  }
};

const step4 = async (page) => {
  const a = await page.waitForSelector('.button.shopper-action.m.full-width.mobile-full-width', { visible: true });
  if (!a) return false;
  await page.click('.button.shopper-action.m.full-width.mobile-full-width');
  // console.log('Clicked the"Set location" button.');
  return true
};

export default handleSteps;
