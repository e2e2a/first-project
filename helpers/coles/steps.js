import waitForElement from './waitForElement.js';
import safeNavigate from './safeNavigate.js';
import { timeout } from 'puppeteer';

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
let number
const handleSteps = async (page, loc, url) => {
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
        return handleSteps(page, loc, url); // Retry handleSteps if step1 fails
      }
      await delay(7000)
      const additional = '[data-testid="change-delivery-type"]';
      try {
        await page.click(additional, { timeout: 2000 });
      } catch (error) {
        console.log('Additional element not found or visible, skipping this step.');
      }
      if (!loc || loc.location.toLowerCase() !== 'Chadstone Shopping Centre, 1341 Dandenong Road, MALVERN EAST VIC 3145'.toLowerCase()) {

        const b = await step2(page);
        if (!b) {
          console.log('Retrying step 2...');
          return handleSteps(page, loc, url); // Retry handleSteps if step2 fails
        }
        await delay(2000)

        const c = await step3(page, loc);
        if (!c) {
          console.log('Retrying step 3...');
          return handleSteps(page, loc, url); // Retry handleSteps if step3 fails
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
          return handleSteps(page, loc, url); // Retry handleSteps if step4 fails
        }
        await delay(2000)

        const e = await step5(page, loc);
        if (!e) {
          console.log('Retrying step 5...');
          return handleSteps(page, loc, url); // Retry handleSteps if step5 fails
        }
        await delay(2000)
      }

      if (loc && loc.location.toLowerCase() === 'Chadstone Shopping Centre, 1341 Dandenong Road, MALVERN EAST VIC 3145'.toLowerCase()) {
        const c = await step3(page, loc);
        if (!c) {
          console.log('Retrying step 3...');
          return handleSteps(page, loc, url); // Retry handleSteps if step3 fails
        }
        await delay(5000)
        const d = await step4(page, loc);
        if (!d) {
          console.log('Retrying step 4...');
          number = (number || 0) + 1
          if (number > 2) {
            console.log('Failed in steps with 3 attempts, and load the page.');
            console.log('url', url)
            await safeNavigate(page, url);
            await delay(3000);
            number = 0;
          }
          return handleSteps(page, loc, url); // Retry handleSteps if step4 fails
        }
        await delay(8000)
      }

      const f = await step6(page);
      if (!f) {
        console.log('Retrying step 6...');
        return handleSteps(page, loc, url); // Retry handleSteps if step6 fails
      }
      await delay(2000)
      return { success: true, status: 201 };
    } catch (error) {

      if (toLoad > 2) {
        console.log('Failed in steps with 3 attempts, and load the page.');
        console.log('url', url)
        await safeNavigate(page, url);
        await delay(9000);
        toLoad = 0;
      }
      if (i === retries) {
        retries - 1
      };
      await delay(5000);
    }
  }
};

const step1 = async (page) => {
  const drawerButtonSelector = '#delivery-selector-button';
  await waitForElement(page, drawerButtonSelector, { visible: true, timeout: 2000 });
  await page.click(drawerButtonSelector);
  console.log('Drawer opened.');
  return true; // Return true when the step succeeds
};

const step2 = async (page) => {
  const clickCollectButtonSelector = 'button[data-testid="tab-collection"]';
  const a = await waitForElement(page, clickCollectButtonSelector, { visible: true, timeout: 2000 });
  if (!a) return false;
  await page.click(clickCollectButtonSelector);
  // console.log('Clicked on the "Click & Collect" button.');
  return true; // Return true if the step succeeded
};

const step3 = async (page, loc) => {
  let searchInputSelector
  if (loc.location.toLowerCase() === 'Chadstone Shopping Centre, 1341 Dandenong Road, MALVERN EAST VIC 3145'.toLowerCase()) {
    searchInputSelector = '#street-address-autocomplete';
  } else {
    searchInputSelector = '#suburb-postcode-autocomplete';
  }
  // console.log('in case 1: ', loc)
  const location = loc.location.split(' ')[0].replace(/[^a-zA-Z0-9]/g, ''); // Replace with the actual location

  const a = await waitForElement(page, searchInputSelector, { visible: true, timeout: 2000 });
  if (!a) return false;
  await page.focus(searchInputSelector);
  await page.type(searchInputSelector, location, { delay: 200 });
  // console.log(`Typed location: ${location}`);
  return true; // Return true if the step succeeded
};

const step4 = async (page, loc) => {
  const a = await waitForElement(page, 'div.MuiAutocomplete-popper', { visible: true, timeout: 2000 });
  if (!a) return false;
  const optionName = loc.location;

  const specificOptionSelector = `li[role="option"]`;
  try {
    const options = await page.$$(specificOptionSelector);
    for (let option of options) {
      const text = await option.evaluate((el) => el.textContent.trim());
      if (text.toLowerCase() === optionName.toLowerCase()) {
        await option.click();
        // console.log(`Clicked on "${optionName}" suggestion.`);
        return true;
      }
    }
  } catch (error) {
    console.error(`Failed to click on "${optionName}" option:`, error);
  }
};

const step5 = async (page, loc) => {
  const subLocation = loc.subLucation;

  const a = await waitForElement(page, 'div[role="radiogroup"]', { visible: true, timeout: 2000 });
  if (!a) return false;
  try {
    const options = await page.$$('div.coles-targeting-CardRadioContainer');
    // console.log('Available Options:');
    for (let option of options) {
      const text = await option.evaluate((el) => el.textContent.trim());
      // console.log(text);
    }

    let clicked = false;
    for (let option of options) {
      const text = await option.evaluate((el) => el.textContent.trim());
      if (text.includes(subLocation)) {
        await option.click();
        // console.log(`Clicked on sub-location: "${subLocation}"`);
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

const step6 = async (page) => {
  const a = await waitForElement(page, 'button[data-testid="cta-secondary"]', { visible: true, timeout: 2000 });
  if (!a) return false;
  await page.click('button[data-testid="cta-secondary"]');
  // console.log('Clicked the "Set location" button.');
  return true
};

export default handleSteps;
