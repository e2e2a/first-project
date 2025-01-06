import puppeteer from 'puppeteer';
import RateLimiter from '../RateLimit/index.js';
import fs from 'fs';

const WOOLWORTHS_API_ENDPOINT = 'https://www.woolworths.com.au/apis/ui/browse/category';
const CATEGORIES = [
    { id: '1_DEB537E', name: 'Bakery', url: '/shop/browse/bakery', location: '/shop/browse/bakery' },
    // { id: '1-E5BEE36E', name: 'Fruit & Veg', url: '/shop/browse/fruit-veg', location: '/shop/browse/fruit-veg' },
    // { id: '1_D5A2236', name: 'Poultry, Meat & Seafood', url: '/shop/browse/poultry-meat-seafood', location: '/shop/browse/poultry-meat-seafood' },
    // { id: '1_3151F6F', name: 'Deli & Chilled Meals', url: '/shop/browse/deli-chilled-meals', location: '/shop/browse/deli-chilled-meals' },
    // { id: '1_6E4F4E4', name: 'Dairy, Eggs & Fridge', url: '/shop/browse/dairy-eggs-fridge', location: '/shop/browse/dairy-eggs-fridge' },
    // { id: '1_9E92C35', name: 'Lunch Box', url: '/shop/browse/lunch-box', location: '/shop/browse/lunch-box' },
    // { id: '1_39FD49C', name: 'Pantry', url: '/shop/browse/pantry', location: '/shop/browse/pantry' },
    // { id: '1_F229FBE', name: 'International Foods', url: '/shop/browse/international-foods', location: '/shop/browse/international-foods' },
    // { id: '1_717445A', name: 'Snacks & Confectionery', url: '/shop/browse/snacks-confectionery', location: '/shop/browse/snacks-confectionery' },
    // { id: '1_ACA2FC2', name: 'Freezer', url: '/shop/browse/freezer', location: '/shop/browse/freezer' },
    // { id: '1_5AF3A0A', name: 'Drinks', url: '/shop/browse/drinks', location: '/shop/browse/drinks' },
    // { id: '1_8E4DA6F', name: 'Beer, Wine & Spirits', url: '/shop/browse/beer-wine-spirits', location: '/shop/browse/beer-wine-spirits' },
    // { id: '1_9851658', name: 'Health & Wellness', url: '/shop/browse/health-wellness', location: '/shop/browse/health-wellness' },
    // { id: '1_894D0A8', name: 'Beauty & Personal Care', url: '/shop/browse/beauty-personal-care', location: '/shop/browse/beauty-personal-care' },
    // { id: '1_F89E4BB', name: 'HealthyLife Pharmacy', url: '/shop/browse/healthylife-pharmacy', location: '/shop/browse/healthylife-pharmacy' },
    // { id: '1_717A94B', name: 'Baby', url: '/shop/browse/baby', location: '/shop/browse/baby' },
    // { id: '1_DEA3ED5', name: 'Home & Lifestyle', url: '/shop/browse/home-lifestyle', location: '/shop/browse/home-lifestyle' },
    // { id: '1_2432B58', name: 'Cleaning & Maintenance', url: '/shop/browse/cleaning-maintenance', location: '/shop/browse/cleaning-maintenance' },
    // { id: '1_61D6FEB', name: 'Pet', url: '/shop/browse/pet', location: '/shop/browse/pet' },
    // { id: '1_B63CF9E', name: 'Front of Store', url: '/shop/browse/front-of-store', location: '/shop/browse/front-of-store' },
];

const WOOLWORTHS_URL = 'https://www.woolworths.com.au';
const SPEED_LIMIT = 20;

class WoolworthsScraper {
    constructor() {
        this.name = 'Woolworths';
        this.rateLimit = new RateLimiter(SPEED_LIMIT, 5);
    }

    async scrapeAllCategories() {
        const userAgent =
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setUserAgent(userAgent);

        const htmlOnly = async (page) => {
            await page.setRequestInterception(true);
            page.on('request', (req) => {
                if (!['document', 'xhr', 'fetch'].includes(req.resourceType())) {
                    return req.abort();
                }
                req.continue();
            });
        };
        await htmlOnly(page);

        try {
            await page.goto(WOOLWORTHS_URL);
        } catch (err) {
            console.log('Failed to load page: ', err);
            await browser.close();
            return [];
        }

        await page.setBypassCSP(true);

        const category = CATEGORIES[0];
        const products = await this.scrapeCategory(page, category);

        await browser.close();
        return products;
    }

    async scrapeCategory(page, category) {
        console.log('Scraping category: ', category.name);

        const body = {
            categoryId: category.id,
            pageNumber: 1,
            pageSize: 36,
            sortType: 'Name',
            url: category.url,
            location: category.location,
            formatObject: `{"name":"${category.name}"}`,
            isSpecial: false,
            isBundle: false,
            isMobile: false,
            filters: [],
            token: '',
            gpBoost: 0,
            isHideUnavailableProducts: false,
            isRegisteredRewardCardPromotion: false,
            enableAdReRanking: false,
            groupEdmVariants: true,
            categoryVersion: 'v2',
        };

        const res = await this.callFetch(page, body);
        // console.log('First category response:', res);

        const numProducts = res.TotalRecordCount || 0;
        const numPages = Math.ceil(numProducts / 24);
        // console.log('Products: ', numProducts, 'Pages: ', numPages);
        console.log('Pages: ', numPages);

        const productRes = [];
        for (let i = 1; i <= numPages; i++) {
            body.pageNumber = i;
            body.location = `${category.location}?pageNumber=${i}`;
            body.url = `${category.url}?pageNumber=${i}`;
            const products = await this.scrapeURL(page, body);
            productRes.push(...products);
        }

        return productRes;
    }

    async scrapeURL(page, request) {
        const res = await this.callFetch(page, request);

        if (!res.Bundles) {
            console.log('Failed to scrape category: ', request.categoryId, res);
            return [];
        }

        const products = res.Bundles.map((bundle) => {
            const product = bundle.Products[0];
            console.log('product1:', product)
            return {
                name: product.DisplayName,
                price: product.Price || product.InstorePrice,
                discounted_from: product.WasPrice,
                img_url: product.DetailsImagePaths[0],
                retailer_name: this.name,
                retailer_product_url: `https://www.woolworths.com.au/shop/productdetails/${product.Stockcode}/${product.UrlFriendlyName}`,
                retailer_product_id: product.Stockcode,
                barcode: product.Barcode,
            };
        });

        return products;
    }

    async callFetch(page, request) {
        return await page.evaluate(
            async (request, url) => {
                return await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(request),
                })
                    .then((res) => res.json())
                    .catch((err) => ({ error: err.message }));
            },
            request,
            WOOLWORTHS_API_ENDPOINT
        );
    }
}

export default WoolworthsScraper;


// Usage Example:
(async () => {
    const scraper = new WoolworthsScraper();
    const products = await scraper.scrapeAllCategories();

    try {
        console.log('Products:', products);
        console.log('Number of products:', products.length);
        // Save products to a JSON file
        const filePath = 'productsWoolWorths - Freezer.json';
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');

        console.log(`Scraping completed. ${products.length} products saved to ${filePath}`);
    } catch (error) {
        console.error('An error occurred during scraping:', error.message);
    }
})();
