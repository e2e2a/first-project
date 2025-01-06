const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    // Launch the browser
    const browser = await puppeteer.launch({
        headless: true, // Set to false if you want to see the browser in action
    });

    // Open a new page
    const page = await browser.newPage();

    // Intercept network requests
    await page.setRequestInterception(true);

    // Listen to network requests
    page.on('request', (request) => {
        request.continue(); // Continue with the request
    });

    page.on('response', async (response) => {
        // Check if the response URL includes 'frozen.json'
        if (response.url().includes('frozen.json')) {
            console.log(`Captured response from: ${response.url()}`);

            try {
                // Get the JSON data
                const jsonData = await response.json();

                // Save to a file or log to the console
                fs.writeFileSync('frozen.json', JSON.stringify(jsonData, null, 2));
                console.log('frozen.json saved successfully.');
            } catch (err) {
                console.error('Error processing the response:', err);
            }
        }
    });

    // Navigate to the target website
    await page.goto('https://www.coles.com.au', {
        waitUntil: 'networkidle2',
    });

    // Perform any required actions, such as navigating or interacting with the page
    // Example: Search for "Frozen products"
    await page.type('#search-input', 'Frozen');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000); // Wait for the results to load

    // Close the browser
    await browser.close();
})();
