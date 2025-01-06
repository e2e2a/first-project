import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import safeNavigate from '../controllers/helpers/coles/safeNavigate.js';
import waitForElement from '../controllers/helpers/coles/waitForElement.js';
import handleSteps from '../controllers/helpers/coles/steps.js';
import mongoose from 'mongoose';
import path from 'path';
import locations from '../constant/location.js'
import categories from '../constant/categories.js'

puppeteer.use(StealthPlugin());

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1/excoles1');
        console.log('database connected');
        return conn;
    } catch (error) {
        console.log('database error');
    }
};

const ProductSchema = new mongoose.Schema(
    {
        source_url: { type: String, default: 'N/A' },
        coles_product_id: { type: String },
        category: { type: String },
        subCategory: { type: String },
        extensionCategory: { type: String },
        name: { type: String, default: 'N/A' },
        image_url: { type: String, default: 'N/A' },
        barcode: { type: String, default: 'N/A' },
        shop: { type: String, default: '' },
        weight: { type: String, default: 'N/A' },
        prices: [{
            state: { type: String },
            price: { type: String },
            price_per_unit: { type: String },
            price_unit: { type: String }
        }],
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
const getPrices = (location, priceInCents, priceInCentsPerUnits, unit) => {
    const prices = [];
    let loc
    if (location.toLowerCase() === 'Sydney, NSW 2000'.toLowerCase()) loc = 'NSW'
    if (location.toLowerCase() === 'Chadstone Shopping Centre, 1341 Dandenong Road, MALVERN EAST VIC 3145'.toLowerCase()) loc = 'VIC'
    if (location.toLowerCase() === 'Kedron, QLD 4031'.toLowerCase()) loc = 'QLD'
    if (location.toLowerCase() === 'Perth, WA 6000'.toLowerCase()) loc = 'QLD'
    if (location.toLowerCase() === 'Kilburn, SA 5084'.toLowerCase()) loc = 'SA'
    if (location.toLowerCase() === 'Hobart, TAS 7000'.toLowerCase()) loc = 'TAS'
    if (location.toLowerCase() === 'Acton, ACT 2601'.toLowerCase()) loc = 'ACT'
    if (location.toLowerCase() === 'Casuarina, NT 0810'.toLowerCase()) loc = 'NT'
    if (priceInCents && priceInCentsPerUnits) {
        if (loc.toLowerCase() === 'nsw') {
            prices.push({
                state: 'nsw'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
        if (loc.toLowerCase() === 'vic') {
            prices.push({
                state: 'vic'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
        if (loc.toLowerCase() === 'qld') {
            prices.push({
                state: 'qld'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
        if (loc.toLowerCase() === 'wa') {
            prices.push({
                state: 'wa'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
        if (loc.toLowerCase() === 'sa') {
            prices.push({
                state: 'sa'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
        if (loc.toLowerCase() === 'tas') {
            prices.push({
                state: 'tas'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
        if (loc.toLowerCase() === 'act') {
            prices.push({
                state: 'act'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
        if (loc.toLowerCase() === 'nt') {
            prices.push({
                state: 'nt'.toUpperCase(),
                price: parseFloat(Number(priceInCents).toFixed(2)),
                price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                price_unit: unit,
            });
        }
    }

    return prices;
};

const scraper = async () => {
    await dbConnect();

    // page = await browser.newPage();

    try {
        for (const loc of locations) {
            const browser = await puppeteer.launch({
                headless: false,
                // args: [
                //   '--ignore-certificate-errors',
                //   '--disable-setuid-sandbox',
                //   '--proxy-server=http://ip.nimbleway.com:7000'  // Replace with your proxy server URL
                // ]
            });
            // const context = await browser.createBrowserContext();
            let page

            page = await browser.newPage();
            // await page.authenticate({
            //   username: 'brd-customer-hl_ed1f1246-zone-residential_proxy1-country-au',
            //   password: '2lr70jp1a89d',
            // });
            // await page.authenticate({
            //   username: 'account-techguys_p3hrqa-pipeline-nimbleip-country-AU',
            //   password: 'X30c9A8i4P7O',
            // });
            await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
            await safeNavigate(page, 'http://coles.com.au');
            const a = await handleSteps(page, loc, 'http://coles.com.au');
            for (const categ of categories) {
                let category
                category = categ.category
                for (const sub of categ.subCategories) {
                    let subCategory
                    subCategory = sub.subCategory
                    if (subCategory === 'Nappies Wipes') subCategory = 'Nappies & Nappy Pants'
                    for (const ext of sub.childItems) {
                        let extensionCategory
                        extensionCategory = ext.extensionCategory

                        // baby category logic
                        if (extensionCategory === 'Specialty') extensionCategory = 'Specialty Formula'
                        if (extensionCategory === 'Swimming Nappies') extensionCategory = 'Swimmers'


                        const updatedCategory = category.replace(/[^\w\s-]/g, '') // Remove special characters
                            .replace(/\s+/g, '-') // Replace one or more spaces with a single hyphen
                            .replace(/-+/g, '-');
                        const updatedSubCategory = subCategory.replace(/[^\w\s-]/g, '') // Remove special characters
                            .replace(/\s+/g, '-')
                            .replace(/-+/g, '-');
                        const updatedextensionCategory = extensionCategory.replace(/[^\w\s-]/g, '') // Remove special characters
                            .replace(/\s+/g, '-')
                            .replace(/-+/g, '-');

                        // bakery category logic
                        // if (subCategory === 'In-Store Bakery') extensionCategory = ''
                        // if (subCategory === 'Packaged Bread & Bakery') extensionCategory = ''

                        let url
                        if (extensionCategory) {
                            url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/${updatedSubCategory.toLowerCase()}/${updatedextensionCategory.toLowerCase()}`;
                        } else {
                            url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/${updatedSubCategory.toLowerCase()}`;
                        }
                        // Baby category
                        if (category === 'Baby') {
                            if (sub.subCategory === 'Baby Accessories') {
                                if (ext.extensionCategory === 'Baby Bibs') url = `https://www.coles.com.au/browse/baby/baby-clothing/baby-bibs`
                                if (ext.extensionCategory === 'Baby Teething & Soothers') url = `https://www.coles.com.au/browse/baby/dummies-teething/soothers-teethers`
                                if (ext.extensionCategory === 'Bath & Skincare') url = `https://www.coles.com.au/browse/baby/bath-skincare`
                                if (ext.extensionCategory === 'Bottles and Baby Feeding') url = `https://www.coles.com.au/browse/baby/bottles-feeding`
                            }
                            if (sub.subCategory === 'Baby Food') {
                                if (ext.extensionCategory === 'Baby & Toddler Snacks') url = `https://www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks`
                            }
                        }
                        // bakery category
                        if (category === 'Bakery') {
                            if (sub.subCategory === 'In-Store Bakery') {
                                if (ext.extensionCategory === 'Bread Rolls') url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/instore-bakery-breads-and-rolls`
                                // 2 url if Donuts & Cookies
                                if (ext.extensionCategory === 'Cookies') url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/instore-bakery-sweet-treats/cookies`
                                if (ext.extensionCategory === 'Donuts') url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/instore-bakery-sweet-treats/donuts`
                            }
                            if (sub.subCategory === 'Packaged Bread & Bakery') {
                                if (ext.extensionCategory === 'Gluten Free Bakery') url = `https://www.coles.com.au/browse/bakery/gluten-free-range`
                                if (ext.extensionCategory === 'Packaged Bread') url = `https://www.coles.com.au/browse/${updatedCategory.toLowerCase()}/packaged-breads`
                                if (ext.extensionCategory === 'Pizza Bases') url = `https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/pizza-bases`
                            }
                        }
                        // category Dairy, Eggs & Fridge 
                        if (category === 'Dairy, Eggs & Fridge') {
                            if (sub.subCategory === 'Cream, Custard & Desserts') {
                                if (ext.extensionCategory === 'Cream') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/cream`
                                if (ext.extensionCategory === 'Custard') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/custards`
                            }
                            if (sub.subCategory === 'Dips & Pate') {
                                if (ext.extensionCategory === 'Dips') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/dips`
                                if (ext.extensionCategory === 'Pate') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/pate`
                                if (ext.extensionCategory === 'Paste') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/paste`
                            }
                            if (sub.subCategory === 'Eggs, Butter & Margarine') {
                                if (ext.extensionCategory === 'Butter & Margarine') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine`
                                if (ext.extensionCategory === 'Eggs') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/eggs`
                            }
                            if (sub.subCategory === 'Milk') {
                                if (ext.extensionCategory === 'Long Life Milk') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/long-life-milk/long-life-milk`
                                if (ext.extensionCategory === 'Lactose Free Milk') url = `https://www.coles.com.au/browse/dairy-eggs-fridge/long-life-milk/lactose-free-milk`
                            }
                        }
                        // category Deli & Chilled Meats
                        if (category === 'Deli & Chilled Meats') {
                            if (sub.subCategory === 'Deli Meats') {
                                if (ext.extensionCategory === 'Deli Poultry') url = `https://www.coles.com.au/browse/deli/deli-poultry`
                                if (ext.extensionCategory === 'Sliced & Shaved Deli Meat') url = `https://www.coles.com.au/browse/deli/deli-meats/other-sliced-meats`
                            }
                            if (sub.subCategory === 'Deli Specialties') {
                                if (ext.extensionCategory === 'Antipasto') url = `https://www.coles.com.au/browse/deli/olives-antipasto/antipasto`
                                if (ext.extensionCategory === 'Gourmet Cheese') url = `https://www.coles.com.au/browse/deli/deli-gourmet-cheese`
                                if (ext.extensionCategory === 'Platters') url = `https://www.coles.com.au/browse/deli/pre-made-platters`
                            }
                            if (sub.subCategory === 'Ready to Eat Meals') {
                                if (ext.extensionCategory === 'Chilled Quiches & Pies') url = `https://www.coles.com.au/browse/deli/deli-chilled-meals`
                            }
                        }
                        // category Drinks
                        if (category === 'Drinks') {
                            if (sub.subCategory === 'Chilled Drinks') {
                                if (ext.extensionCategory === 'Soft Drinks') url = `https://www.coles.com.au/browse/drinks/cold-drinks/cold-soft-drinks`
                                if (ext.extensionCategory === 'Energy Drinks') url = `https://www.coles.com.au/browse/drinks/cold-drinks/other-cold-drinks`
                                if (ext.extensionCategory === 'Chilled Water') url = `https://www.coles.com.au/browse/drinks/cold-drinks/cold-water`
                            }
                            if (sub.subCategory === 'Coffee') {
                                if (ext.extensionCategory === 'Coffee Beans') url = `https://www.coles.com.au/browse/drinks/coffee-drinks/beans-coffee`
                                if (ext.extensionCategory === 'Coffee Capsules') url = `https://www.coles.com.au/browse/drinks/coffee-drinks/coffee-capsules`
                                if (ext.extensionCategory === 'Ground Coffee') url = `https://www.coles.com.au/browse/drinks/coffee-drinks/coffee-ground`
                                if (ext.extensionCategory === 'Instant & Flavoured Coffee') url = `https://www.coles.com.au/browse/drinks/coffee-drinks/coffee-instant`
                            }
                            if (sub.subCategory === 'Cordials, Juices & Iced Teas') {
                                if (ext.extensionCategory === 'Chilled Juices') url = `https://www.coles.com.au/browse/drinks/juice/chilled-juice`
                                if (ext.extensionCategory === 'Cordials') url = `https://www.coles.com.au/browse/drinks/cordials`
                                if (ext.extensionCategory === 'Iced Teas') url = `https://www.coles.com.au/browse/drinks/iced-tea`
                            }
                            if (sub.subCategory === 'Flavoured Milk') {
                                if (ext.extensionCategory === 'Drinking Chocolate') url = `https://www.coles.com.au/browse/drinks/flavoured-milk/drinking-chocolate`
                                if (ext.extensionCategory === 'Drinks & Powders') url = `https://www.coles.com.au/browse/drinks/flavoured-milk/drinks-powders`
                                if (ext.extensionCategory === 'Kids Milk') url = `https://www.coles.com.au/browse/drinks/flavoured-milk/kids-milk`
                            }
                            if (sub.subCategory === 'Long Life Milk') {
                                if (ext.extensionCategory === 'Almond Milk') url = `https://www.coles.com.au/browse/drinks/long-life-milk/almond-milk`
                                if (ext.extensionCategory === 'Lactose Free Milk') url = `https://www.coles.com.au/browse/drinks/long-life-milk/lactose-free-milk`
                                if (ext.extensionCategory === 'Oat & Rice Milk') url = `https://www.coles.com.au/browse/drinks/long-life-milk/oat-rice-milks`
                                if (ext.extensionCategory === 'Powdered Milk') url = `https://www.coles.com.au/browse/drinks/long-life-milk/powdered-milk`
                                if (ext.extensionCategory === 'Soy Milk') url = `https://www.coles.com.au/browse/drinks/long-life-milk/soy-milk-long-life`
                            }
                            if (sub.subCategory === 'Soft Drinks') {
                                if (ext.extensionCategory === 'Mixers') url = `https://www.coles.com.au/browse/drinks/soft-drinks/mixers`
                                if (ext.extensionCategory === 'Soft Drink Bottles') url = `https://www.coles.com.au/browse/drinks/soft-drinks/soft-drink-bottles`
                                if (ext.extensionCategory === 'Soft Drink Cans') url = `https://www.coles.com.au/browse/drinks/soft-drinks/soft-drink-cans`
                            }
                            if (sub.subCategory === 'Sports & Energy Drinks') {
                                if (ext.extensionCategory === 'Energy Drinks') url = `https://www.coles.com.au/browse/drinks/energy-drinks`
                                if (ext.extensionCategory === 'Sports Drinks') url = `https://www.coles.com.au/browse/drinks/sports-drinks`
                            }
                            if (sub.subCategory === 'Tea') {
                                if (ext.extensionCategory === 'Black Tea') url = `https://www.coles.com.au/browse/drinks/tea-drinks/tea-black`
                                if (ext.extensionCategory === 'Green Tea') url = `https://www.coles.com.au/browse/drinks/tea-drinks/tea-green`
                                if (ext.extensionCategory === 'Herbal & Specialty Tea') url = `https://www.coles.com.au/browse/drinks/tea-drinks/tea-herbal`
                            }
                            if (sub.subCategory === 'Water') {
                                if (ext.extensionCategory === 'Flavoured & Coconut Water') url = `https://www.coles.com.au/browse/drinks/water/flavoured-water`
                                if (ext.extensionCategory === 'Sparkling Water') url = `https://www.coles.com.au/browse/drinks/water/sparkling-water`
                                if (ext.extensionCategory === 'Still Water') url = `https://www.coles.com.au/browse/drinks/water/still-water`
                            }
                        }
                        // category Freezer
                        if (category === 'Freezer') {
                            if (sub.subCategory === 'Frozen Desserts') {
                                if (ext.extensionCategory === 'Assorted Desserts') url = `https://www.coles.com.au/browse/frozen/frozen-desserts/assorted-desserts`
                                if (ext.extensionCategory === 'Cakes & Cheesecakes') url = `https://www.coles.com.au/browse/frozen/frozen-desserts/cakes-cheesecakes`
                                if (ext.extensionCategory === 'Dessert Pies & Pastries') url = `https://www.coles.com.au/browse/frozen/frozen-desserts/dessert-pies`
                            }
                            if (sub.subCategory === 'Frozen Fruit') {
                                if (ext.extensionCategory === 'Berries') url = `https://www.coles.com.au/browse/frozen/frozen-fruit/berries`
                                if (ext.extensionCategory === 'Tropical') url = `https://www.coles.com.au/browse/frozen/frozen-fruit/tropical`
                            }
                            if (sub.subCategory === 'Frozen Meat') {
                                if (ext.extensionCategory === 'Chicken Pieces & Nuggets') url = `https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/chicken-pieces-nuggets`
                                if (ext.extensionCategory === 'Whole Birds & Roasts') url = `https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/whole-birds-roasts`
                            }
                            if (sub.subCategory === 'Frozen Party Food') {
                                if (ext.extensionCategory === 'Pastry Sheets') url = `https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastry-sheets`
                                if (ext.extensionCategory === 'Pastries') url = `https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastries`
                                if (ext.extensionCategory === 'Pies & Quiches') url = `https://www.coles.com.au/browse/frozen/frozen-pastry-party-food/pies-quiches`
                            }
                            if (sub.subCategory === 'Frozen Pizzas') {
                                if (ext.extensionCategory === 'Pizzas') url = `https://www.coles.com.au/browse/frozen/frozen-pizza-bases/pizzas`
                            }
                            if (sub.subCategory === 'Frozen Seafood') {
                                if (ext.extensionCategory === 'Fish Fillets') url = `https://www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fillets`
                                if (ext.extensionCategory === 'Fish Fingers & Cakes') url = `https://www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fingers-cakes`
                                if (ext.extensionCategory === 'Frozen Seafood') url = `https://www.coles.com.au/browse/frozen/frozen-fish-seafood/seafood-frozen`
                            }
                            if (sub.subCategory === 'Frozen Vegetables') {
                                if (ext.extensionCategory === 'Beans') url = `https://www.coles.com.au/browse/frozen/frozen-vegetables/beans`
                                if (ext.extensionCategory === 'Peas') url = `https://www.coles.com.au/browse/frozen/frozen-vegetables/peas`
                                if (ext.extensionCategory === 'Corn') url = `https://www.coles.com.au/browse/frozen/frozen-vegetables/corn`
                                if (ext.extensionCategory === 'Mixed Vegetables') url = `https://www.coles.com.au/browse/frozen/frozen-vegetables/mixed-vegetables`
                                if (ext.extensionCategory === 'Other Vegetables') url = `https://www.coles.com.au/browse/frozen/frozen-vegetables/other-vegetables`
                                if (ext.extensionCategory === 'Steam Packs') url = `https://www.coles.com.au/browse/frozen/frozen-vegetables/steaming`
                            }
                            if (sub.subCategory === 'Ice Cream') {
                                if (ext.extensionCategory === 'Frozen Yoghurt') url = `https://www.coles.com.au/browse/frozen/ice-cream/frozen-yoghurt`
                                if (ext.extensionCategory === 'Gelato & Sorbet') url = `https://www.coles.com.au/browse/frozen/ice-cream/sorbet-gelato`
                                if (ext.extensionCategory === 'Ice Cream Sticks & Cones') url = `https://www.coles.com.au/browse/frozen/ice-cream/ice-cream-sticks`
                                if (ext.extensionCategory === 'Ice Cream Tubs') url = `https://www.coles.com.au/browse/frozen/ice-cream/ice-cream-tubs`
                                if (ext.extensionCategory === 'Premium Ice Cream') url = `https://www.coles.com.au/browse/frozen/ice-cream/premium-ice-cream`
                            }
                        }
                        // category Fruit & Veg
                        if (category === 'Fruit & Veg') {
                            if (sub.subCategory === 'Fruit') {
                                if (ext.extensionCategory === 'Apples') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/apples`
                                if (ext.extensionCategory === 'Pears') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/pears`
                                if (ext.extensionCategory === 'Bananas') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/bananas`
                                if (ext.extensionCategory === 'Berries & Cherries') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/berries-cherries`
                                if (ext.extensionCategory === 'Grapes') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/grapes`
                                if (ext.extensionCategory === 'Melons') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/melons`
                                if (ext.extensionCategory === 'Mangoes') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/mangoes`
                                if (ext.extensionCategory === 'Pineapples') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/pineapples`
                                if (ext.extensionCategory === 'Kiwi Fruit') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/kiwi-fruit`
                                if (ext.extensionCategory === 'Tropical & Exotic Fruit') url = `https://www.coles.com.au/browse/fruit-vegetables/fruit/tropical-exotic-fruit`
                            }
                            if (sub.subCategory === 'Organic') {
                                if (ext.extensionCategory === 'Organic Fruit') url = `https://www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-fruits`
                                if (ext.extensionCategory === 'Organic Vegetables') url = `https://www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-vegetables`
                            }
                            if (sub.subCategory === 'Salad') {
                                if (ext.extensionCategory === 'Herbs') url = `https://www.coles.com.au/browse/fruit-vegetables/salad-herbs/herbs`
                                if (ext.extensionCategory === 'Sprouts') url = `https://www.coles.com.au/browse/fruit-vegetables/salad-herbs/sprouts`
                            }
                            if (sub.subCategory === 'Vegetables') {
                                if (ext.extensionCategory === 'Broccoli, Cauliflower & Cabbage') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/broccoli-cauliflower`
                                if (ext.extensionCategory === 'Capsicum & Mushrooms') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/mushrooms`
                                if (ext.extensionCategory === 'Onions & Leeks') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/onion-leeks`
                                if (ext.extensionCategory === 'Cucumber') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/cucumber`
                                if (ext.extensionCategory === 'Potatoes') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/potatoes`
                                if (ext.extensionCategory === 'Pumpkins') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/pumpkin`
                                if (ext.extensionCategory === 'Tomatoes') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/tomatoes`
                                if (ext.extensionCategory === 'Eggplant') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/eggplant`
                                if (ext.extensionCategory === 'Zucchini & Squash') url = `https://www.coles.com.au/browse/fruit-vegetables/vegetables/zucchini-squash`
                            }
                        }
                        // category Health & Beauty
                        if (category === 'Health & Beauty') {
                            if (sub.subCategory === 'Cosmetics') {
                                if (ext.extensionCategory === 'Lips') url = `https://www.coles.com.au/browse/health-beauty/cosmetics/lips`
                                if (ext.extensionCategory === 'Nails') url = `https://www.coles.com.au/browse/health-beauty/cosmetics/nails`
                            }
                            if (sub.subCategory === 'Dental Care') {
                                if (ext.extensionCategory === 'Denture Care') url = `https://www.coles.com.au/browse/health-beauty/dental-care/denture-care`
                                if (ext.extensionCategory === 'Toothbrushes') url = `https://www.coles.com.au/browse/health-beauty/dental-care/toothbrushes`
                                if (ext.extensionCategory === 'Toothpaste') url = `https://www.coles.com.au/browse/health-beauty/dental-care/toothpaste`
                            }
                            if (sub.subCategory === 'First Aid & Medicinal') {
                                if (ext.extensionCategory === 'Antiseptic') url = `https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/antiseptic`
                                if (ext.extensionCategory === 'Cold, Flu & Allergies') url = `https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/cold-flu-and-allergy`
                                if (ext.extensionCategory === 'Cotton Wool & Cotton Buds') url = `https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/cotton-wool-cotton-buds`
                                if (ext.extensionCategory === 'Medicinal Oils & Ointments') url = `https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/medicinal-oils-ointments`
                                if (ext.extensionCategory === 'Quit Smoking') url = `https://www.coles.com.au/browse/health-beauty/first-aid-medicinal/quit-smoking`
                            }
                            if (sub.subCategory === 'Hair Care') {
                                if (ext.extensionCategory === 'Colouring') url = `https://www.coles.com.au/browse/health-beauty/hair-care/colouring`
                                if (ext.extensionCategory === 'Hair Accessories & Brushes') url = `https://www.coles.com.au/browse/health-beauty/hair-care/hair-brushes-combs-accessories`
                                if (ext.extensionCategory === 'Mens Hair Care') url = `https://www.coles.com.au/browse/health-beauty/hair-care/mens-hair-care`
                                if (ext.extensionCategory === 'Shampoo & Conditioner') url = `https://www.coles.com.au/browse/health-beauty/hair-care/shampoo-conditioner`
                                if (ext.extensionCategory === 'Styling Products') url = `https://www.coles.com.au/browse/health-beauty/hair-care/gel-mousse-styling`
                            }
                            if (sub.subCategory === 'Personal Care & Hygiene') {
                                if (ext.extensionCategory === 'Contraception & Sexual Health') url = `https://www.coles.com.au/browse/health-beauty/personal-care/sexual-health`
                                if (ext.extensionCategory === 'Female Deodorants & Body Sprays') url = `https://www.coles.com.au/browse/health-beauty/personal-care/womens-deodorants`
                                if (ext.extensionCategory === 'Male Deodorants & Body Sprays') url = `https://www.coles.com.au/browse/health-beauty/personal-care/mens-deodorants`
                                if (ext.extensionCategory === 'Pregnancy Tests') url = `https://www.coles.com.au/browse/health-beauty/personal-care/pregnancy-tests`
                            }
                            if (sub.subCategory === 'Shaving & Hair Removal') {
                                if (ext.extensionCategory === 'After Shave Care') url = `https://www.coles.com.au/browse/health-beauty/shaving-hair-removal/after-shave-care`
                                if (ext.extensionCategory === 'Shave Gel & Foam') url = `https://www.coles.com.au/browse/health-beauty/shaving-hair-removal/shave-gel-foam`
                            }
                            if (sub.subCategory === 'Skin Care') {
                                if (ext.extensionCategory === 'Body Moisturiser') url = `https://www.coles.com.au/browse/health-beauty/skin-care/body-moisturiser`
                                if (ext.extensionCategory === 'Face Moisturiser') url = `https://www.coles.com.au/browse/health-beauty/skin-care/face-moisturiser`
                                if (ext.extensionCategory === '183 Hand Moisturiser') url = `https://www.coles.com.au/browse/health-beauty/skin-care/hand-moisturiser`
                                if (ext.extensionCategory === 'Lip Care') url = `https://www.coles.com.au/browse/health-beauty/skin-care/lip-care`
                                if (ext.extensionCategory === 'Self-Tanning') url = `https://www.coles.com.au/browse/health-beauty/skin-care/self-tanning`
                            }
                            if (sub.subCategory === 'Vitamins') {
                                if (ext.extensionCategory === 'Brain & Heart Health') url = `https://www.coles.com.au/browse/health-beauty/vitamins-supplements/brain-eye-and-heart-health`
                                if (ext.extensionCategory === 'Detox & Digestion') url = `https://www.coles.com.au/browse/health-beauty/vitamins-supplements/detox-and-digestive-health`
                                if (ext.extensionCategory === 'Hair, Skin & Nails') url = `https://www.coles.com.au/browse/health-beauty/vitamins-supplements/hair-skin-nails`
                                if (ext.extensionCategory === 'Others') url = `https://www.coles.com.au/browse/health-beauty/vitamins-supplements/other-vitamins`
                            }
                        }
                        // category Household
                        if (category === 'Household') {
                            if (sub.subCategory === 'Cleaning Goods') {
                                if (ext.extensionCategory === 'Bathroom Cleaners') url = `https://www.coles.com.au/browse/household/cleaning-goods/bathroom-cleaners`
                                if (ext.extensionCategory === 'Disinfectant & Bleach') url = `https://www.coles.com.au/browse/household/cleaning-goods/bleach`
                                if (ext.extensionCategory === 'Drain Cleaners & Solvents') url = `https://www.coles.com.au/browse/household/cleaning-goods/drain-solvents`
                                if (ext.extensionCategory === 'Fabric, Metal & Furniture Care') url = `https://www.coles.com.au/browse/household/cleaning-goods/fabric-metal-furniture`
                                if (ext.extensionCategory === 'Floor/Carpet Cleaners') url = `https://www.coles.com.au/browse/household/cleaning-goods/floor-carpet-cleaners`
                                if (ext.extensionCategory === 'Gloves') url = `https://www.coles.com.au/browse/household/cleaning-goods/cleaning-gloves`
                                if (ext.extensionCategory === 'Kitchen Cleaners') url = `https://www.coles.com.au/browse/household/cleaning-goods/kitchen-cleaners`
                                if (ext.extensionCategory === 'Mops, Buckets & Brooms') url = `https://www.coles.com.au/browse/household/cleaning-goods/mops-buckets-brooms`
                                if (ext.extensionCategory === 'Multipurpose Cleaners') url = `https://www.coles.com.au/browse/household/cleaning-goods/multipurpose-cleaners`
                                if (ext.extensionCategory === 'Sponges, Cloths & Wipes') url = `https://www.coles.com.au/browse/household/cleaning-goods/sponges-cloths-wipes`
                                if (ext.extensionCategory === 'Window & Glass Cleaners') url = `https://www.coles.com.au/browse/household/cleaning-goods/windows-glass`
                            }
                            if (sub.subCategory === 'Homewares') {
                                if (ext.extensionCategory === 'Water Filtration') url = `https://www.coles.com.au/browse/household/homewares/water-filtration`
                            }
                            if (sub.subCategory === 'Kitchen') {
                                if (ext.extensionCategory === 'Sandwich & Freezer Bags') url = `https://www.coles.com.au/browse/household/kitchen/sandwich-freezer-bags`
                            }
                            if (sub.subCategory === 'Laundry') {
                                if (ext.extensionCategory === 'Fabric Softener') url = `https://www.coles.com.au/browse/household/laundry/fabric-softener`
                                if (ext.extensionCategory === 'Ironing') url = `https://www.coles.com.au/browse/household/laundry/ironing-aids`
                                if (ext.extensionCategory === 'Accessories') url = `https://www.coles.com.au/browse/household/laundry/laundry-accessories`
                                if (ext.extensionCategory === 'Laundry Liquid') url = `https://www.coles.com.au/browse/household/laundry/laundry-liquid`
                                if (ext.extensionCategory === 'Laundry Powder') url = `https://www.coles.com.au/browse/household/laundry/laundry-powder`
                                if (ext.extensionCategory === 'Pegs, Baskets & Hangers') url = `https://www.coles.com.au/browse/household/laundry/pegs-baskets-hangers`
                            }
                            if (sub.subCategory === 'Parties & Entertaining') {
                                if (ext.extensionCategory === 'Candles') url = `https://www.coles.com.au/browse/household/party-supplies/candles`
                                if (ext.extensionCategory === 'Decorations') url = `https://www.coles.com.au/browse/household/party-supplies/decorations`
                            }
                            if (sub.subCategory === 'Pest Control') {
                                if (ext.extensionCategory === 'Crawling Insects') url = `https://www.coles.com.au/browse/household/pest-control/crawling-insects`
                                if (ext.extensionCategory === 'Flying Insects') url = `https://www.coles.com.au/browse/household/pest-control/flying-insects`
                                if (ext.extensionCategory === 'Garden Pests') url = `https://www.coles.com.au/browse/household/pest-control/garden-pests`
                                if (ext.extensionCategory === 'Mosquitoes') url = `https://www.coles.com.au/browse/household/pest-control/mosquitos`
                                if (ext.extensionCategory === 'Rodents') url = `https://www.coles.com.au/browse/household/pest-control/rodents`
                            }
                        }
                        // category Pantry
                        if (category === 'Pantry') {
                            if (sub.subCategory === 'Baking') {
                                if (ext.extensionCategory === 'Cooking Chocolate & Cocoa') url = `https://www.coles.com.au/browse/pantry/baking/cooking-chocolate-cocoa`
                                if (ext.extensionCategory === 'Flavouring, Essence & Food Colouring') url = `https://www.coles.com.au/browse/pantry/baking/essence-food-colouring`
                                if (ext.extensionCategory === 'Flour') url = `https://www.coles.com.au/browse/pantry/baking/flour`
                                if (ext.extensionCategory === 'Icing & Cake Decorating') url = `https://www.coles.com.au/browse/pantry/baking/cake-decorating`
                                if (ext.extensionCategory === 'Nuts, Seeds & Coconut') url = `https://www.coles.com.au/browse/pantry/baking/nuts-for-baking`
                                if (ext.extensionCategory === 'Sugar & Sweeteners') url = `https://www.coles.com.au/browse/pantry/baking/sugar-sweeteners`
                                if (ext.extensionCategory === 'Yeast & Baking Ingredients') url = `https://www.coles.com.au/browse/pantry/baking/yeast-baking-agents`
                            }
                            if (sub.subCategory === 'Breakfast & Spreads') {
                                if (ext.extensionCategory === 'Breakfast Cereal') url = `https://www.coles.com.au/browse/pantry/breakfast/breakfast-cereal`
                                if (ext.extensionCategory === 'Honey') url = `https://www.coles.com.au/browse/pantry/jams-honey-spreads/honey`
                                if (ext.extensionCategory === 'Jam') url = `https://www.coles.com.au/browse/pantry/jams-honey-spreads/jams`
                                if (ext.extensionCategory === 'Savoury Spread') url = `https://www.coles.com.au/browse/pantry/jams-honey-spreads/savoury-spreads`
                                if (ext.extensionCategory === 'Muesli') url = `https://www.coles.com.au/browse/pantry/breakfast/breakfast-muesli`
                                if (ext.extensionCategory === 'Oats') url = `https://www.coles.com.au/browse/pantry/breakfast/breakfast-oats`
                            }
                            if (sub.subCategory === 'Canned Food & Instant Meals') {
                                if (ext.extensionCategory === 'Baked Beans & Spaghetti') url = `https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/baked-beans-spaghetti`
                                if (ext.extensionCategory === 'Canned Fruit') url = `https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-fruit`
                                if (ext.extensionCategory === 'Canned Meat') url = `https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-meat`
                                if (ext.extensionCategory === 'Canned Soup & Soup Ingredients') url = `https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/soups`
                                if (ext.extensionCategory === 'Canned Vegetables') url = `https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-vegetables`
                                if (ext.extensionCategory === 'Instant Meals & Sides') url = `https://www.coles.com.au/browse/pantry/canned-food-soups-noodles/instant-meals-sides`
                            }
                            if (sub.subCategory === 'Condiments') {
                                if (ext.extensionCategory === 'Mustard') url = `https://www.coles.com.au/browse/pantry/sauces/mustards`
                                if (ext.extensionCategory === 'Sweet Chilli & Hot Sauce') url = `https://www.coles.com.au/browse/pantry/sauces/sweet-chilli-hot`
                                if (ext.extensionCategory === 'Tomato & BBQ Sauce') url = `https://www.coles.com.au/browse/pantry/sauces/tomato-bbq`
                            }
                            if (sub.subCategory === 'Desserts') {
                                if (ext.extensionCategory === 'Custard, Cream & Yoghurt') url = `https://www.coles.com.au/browse/pantry/desserts/custard-cream-yoghurt-desserts`
                                if (ext.extensionCategory === 'Ice Cream Cones, Syrups & Toppings') url = `https://www.coles.com.au/browse/pantry/desserts/icecream-cones-syrups-toppings`
                                if (ext.extensionCategory === 'Jelly') url = `https://www.coles.com.au/browse/pantry/desserts/jelly`
                                if (ext.extensionCategory === 'Puddings') url = `https://www.coles.com.au/browse/pantry/desserts/puddings`
                                if (ext.extensionCategory === 'Ready to Freeze Ice Blocks') url = `https://www.coles.com.au/browse/pantry/desserts/ready-to-freeze-ice-blocks`
                            }
                            if (sub.subCategory === 'Health Foods') {
                                if (ext.extensionCategory === 'Health Breakfast Food & Spread') url = `https://www.coles.com.au/browse/pantry/health-foods/healthy-breakfasts`
                                if (ext.extensionCategory === 'Health Cooking & Pasta') url = `https://www.coles.com.au/browse/pantry/health-foods/healthy-cooking`
                                if (ext.extensionCategory === 'Health Snacks & Drinks') url = `https://www.coles.com.au/browse/pantry/health-foods/healthy-snacks`
                            }
                            if (sub.subCategory === 'Herbs & Spices') {
                                if (ext.extensionCategory === 'Dried Herbs & Spices') url = `https://www.coles.com.au/browse/pantry/herbs-spices/dried-herbs-spices`
                                if (ext.extensionCategory === 'Salt & Pepper') url = `https://www.coles.com.au/browse/pantry/herbs-spices/salt-pepper`
                            }
                            if (sub.subCategory === 'International Foods') {
                                if (ext.extensionCategory === 'Asian') url = `https://www.coles.com.au/browse/pantry/international-foods/asian`
                                if (ext.extensionCategory === 'European') url = `https://www.coles.com.au/browse/pantry/international-foods/european`
                                if (ext.extensionCategory === 'Indian') url = `https://www.coles.com.au/browse/pantry/international-foods/indian`
                                if (ext.extensionCategory === 'Mexican') url = `https://www.coles.com.au/browse/pantry/international-foods/mexican`
                                if (ext.extensionCategory === 'Middle Eastern') url = `https://www.coles.com.au/browse/pantry/international-foods/middle-eastern`
                                if (ext.extensionCategory === 'UK Foods') url = `https://www.coles.com.au/browse/pantry/international-foods/uk`
                            }
                            if (sub.subCategory === 'Pasta, Rice & Grains') {
                                if (ext.extensionCategory === 'Beans & Legumes') url = `https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/beans-legumes`
                                if (ext.extensionCategory === 'Rice') url = `https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/rice`
                            }
                            if (sub.subCategory === 'Sauce, Oil & Vinegar') {
                                if (ext.extensionCategory === 'Marinades & Seasoning') url = `https://www.coles.com.au/browse/pantry/sauces/marinades`
                                if (ext.extensionCategory === 'Pizza & Pasta Sauce') url = `https://www.coles.com.au/browse/pantry/sauces/pizza-pasta`
                                if (ext.extensionCategory === 'Soy & Asian Sauces') url = `https://www.coles.com.au/browse/pantry/sauces/soy-asian`
                                if (ext.extensionCategory === 'Stock & Gravy') url = `https://www.coles.com.au/browse/pantry/stocks-gravy`
                            }
                            if (sub.subCategory === 'Snacks & Confectionery') {
                                if (ext.extensionCategory === 'Biscuits & Cookies') url = `https://www.coles.com.au/browse/pantry/chips-crackers-snacks/biscuits-cookies`
                                if (ext.extensionCategory === 'Corn Chips & Salsa') url = `https://www.coles.com.au/browse/pantry/chips-crackers-snacks/corn-chips-salsa`
                                if (ext.extensionCategory === 'Muesli Bars & Snack') url = `https://www.coles.com.au/browse/pantry/chips-crackers-snacks/muesli-bars-fruit-snacks`
                            }
                        }
                        // category Pet
                        if (category === 'Pet') {
                            if (sub.subCategory === 'Birds, Fish & Small Pets') {
                                if (ext.extensionCategory === 'Bird Treats') url = `https://www.coles.com.au/browse/pet/birds/bird-treats`
                                if (ext.extensionCategory === 'Small Pets Food') url = `https://www.coles.com.au/browse/pet/small-pets/small-pets-food`
                            }
                            if (sub.subCategory === 'Cat & Kitten') {
                                if (ext.extensionCategory === 'Dry Cat Food') url = `https://www.coles.com.au/browse/pet/cat-kitten/dry-cat-food`
                                if (ext.extensionCategory === 'Kitten Food') url = `https://www.coles.com.au/browse/pet/cat-kitten/kitten-food-treats-milk`
                            }
                            if (sub.subCategory === 'Dog & Puppy') {
                                if (ext.extensionCategory === 'Puppy Food') url = `https://www.coles.com.au/browse/pet/dog-puppy/puppy-food-treats-milk`
                            }
                        }
                        if (category === 'Poultry, Meat & Seafood') {
                            if (sub.subCategory === 'BBQ Meat & Seafood') {
                                if (ext.extensionCategory === 'Burgers') url = `https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/burgers-rissoles`
                                if (ext.extensionCategory === 'Sausages') url = `https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausages`
                                if (ext.extensionCategory === 'Kebabs') url = `https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/kebabs`
                            }
                            if (sub.subCategory === 'Seafood') {
                                if (ext.extensionCategory === 'Crab & Lobster') url = `https://www.coles.com.au/browse/meat-seafood/seafood/deli-crab-lobster`
                                if (ext.extensionCategory === 'Prepacked Seafood') url = `https://www.coles.com.au/browse/meat-seafood/seafood/prepacked-seafood`
                            }
                        }

                        console.log('Page loaded successfully.');
                        await delay(6000);
                        await page.waitForSelector('body', { timeout: 90000 });
                        // deleted here
                        await safeNavigate(page, url);
                        await delay(5000);
                        console.log('Scrolling...');
                        await page.evaluate(async () => {
                            const totalHeight = document.body.scrollHeight; // Total page height
                            const scrollStep = window.innerHeight; // Scroll step (viewport height)
                            let scrollPosition = 0;

                            while (scrollPosition < totalHeight) {
                                window.scrollBy(0, scrollStep); // Scroll by one step
                                scrollPosition += scrollStep;
                                await new Promise(resolve => setTimeout(resolve, 1500)); // Wait 500ms between steps
                            }
                        });
                        // await delay(8000);

                        let hasProducts = true;
                        let i = 1;
                        while (hasProducts) {
                            if (i !== 1) {
                                const url2 = `${url}?page=${i}`;
                                await safeNavigate(page, url2);
                                await delay(9000);
                            }
                            try {
                                await page.waitForSelector('section[data-testid="product-tile"]', { timeout: 7000 });
                            } catch (error) {
                                hasProducts = false;
                                // await browser.close();
                                // await delay(10000);
                                break;
                            }
                            // console.log('Products found, extracting data...');

                            // Extract product data
                            const productData = await page.evaluate(
                                (category, subCategory, extensionCategory, loc) => {
                                    const products = document.querySelectorAll('section[data-testid="product-tile"]');
                                    if (!products || products.length === 0) return [];
                                    return Array.from(products).map((product) => {
                                        const getPrices = (location, priceInCents, priceInCentsPerUnits, unit) => {
                                            const prices = [];
                                            let loc
                                            if (location.toLowerCase() === 'Sydney, NSW 2000'.toLowerCase()) loc = 'NSW'
                                            if (location.toLowerCase() === 'Chadstone Shopping Centre, 1341 Dandenong Road, MALVERN EAST VIC 3145'.toLowerCase()) loc = 'VIC'
                                            if (location.toLowerCase() === 'Kedron, QLD 4031'.toLowerCase()) loc = 'QLD'
                                            if (location.toLowerCase() === 'Perth, WA 6000'.toLowerCase()) loc = 'WA'
                                            if (location.toLowerCase() === 'Kilburn, SA 5084'.toLowerCase()) loc = 'SA'
                                            if (location.toLowerCase() === 'Hobart, TAS 7000'.toLowerCase()) loc = 'TAS'
                                            if (location.toLowerCase() === 'Acton, ACT 2601'.toLowerCase()) loc = 'ACT'
                                            if (location.toLowerCase() === 'Casuarina, NT 0810'.toLowerCase()) loc = 'NT'
                                            if (priceInCents && priceInCentsPerUnits) {
                                                if (loc.toLowerCase() === 'nsw') {
                                                    prices.push({
                                                        state: 'nsw'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                                if (loc.toLowerCase() === 'vic') {
                                                    prices.push({
                                                        state: 'vic'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                                if (loc.toLowerCase() === 'qld') {
                                                    prices.push({
                                                        state: 'qld'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                                if (loc.toLowerCase() === 'wa') {
                                                    prices.push({
                                                        state: 'wa'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                                if (loc.toLowerCase() === 'sa') {
                                                    prices.push({
                                                        state: 'sa'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                                if (loc.toLowerCase() === 'tas') {
                                                    prices.push({
                                                        state: 'tas'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                                if (loc.toLowerCase() === 'act') {
                                                    prices.push({
                                                        state: 'act'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                                if (loc.toLowerCase() === 'nt') {
                                                    prices.push({
                                                        state: 'nt'.toUpperCase(),
                                                        price: parseFloat(Number(priceInCents).toFixed(2)),
                                                        price_per_unit: parseFloat(Number(priceInCentsPerUnits).toFixed(2)),
                                                        price_unit: unit,
                                                    });
                                                }
                                            }

                                            return prices;
                                        };
                                        const href = product.querySelector('.product__image_area a')?.href || 'N/A';

                                        let weight = 'N/A';
                                        let coles_product_id = 'N/A';
                                        let unit = null;

                                        if (href !== 'N/A') {
                                            const parts = href.split('-');
                                            const potentialWeight = parts.length > 2 ? parts[parts.length - 2] : 'N/A';

                                            if (/\d/.test(potentialWeight)) {
                                                weight = potentialWeight;
                                                unit = weight.replace(/[\d\s]/g, '');
                                            } else {
                                                weight = parts.length > 3 ? parts[parts.length - 3] + potentialWeight : 'N/A';
                                                unit = potentialWeight;
                                            }

                                            coles_product_id = parts.length > 0 ? parts[parts.length - 1] : 'N/A';
                                        }

                                        // Extract and convert price to cents
                                        const priceText = product.querySelector('.price__value')?.textContent.trim() || 'N/A';
                                        let pricePerUnit = 'N/A';
                                        if (priceText !== 'N/A' && priceText.startsWith('$')) {
                                            pricePerUnit = Math.round(parseFloat(priceText.replace('$', '')) * 100);
                                        }

                                        // Extract price per unit
                                        const pricePerUnitText = product.querySelector('.price__calculation_method')?.textContent.trim() || 'N/A';
                                        let priceInCents = 'N/A';
                                        if (pricePerUnitText !== 'N/A') {
                                            const match = pricePerUnitText.match(/\$(\d+(\.\d+)?)/); // Regex to extract "$5.95"
                                            if (match && match[1]) {
                                                priceInCents = Math.round(parseFloat(match[1]) * 100); // Convert to cents
                                            }
                                        }
                                        let sub
                                        sub = subCategory

                                        let ext
                                        ext = extensionCategory

                                        // baby category
                                        if (subCategory === 'Nappies & Nappy Pants') sub = 'Nappies Wipes'
                                        if (extensionCategory === 'Specialty Formula') ext = 'Specialty'
                                        if (extensionCategory === 'Swimmers') ext = 'Swimming Nappies'

                                        // bakery category
                                        if (subCategory === 'In-Store Bakery') {
                                            sub = `In-Store Bakery`
                                            if (ext === 'Donuts') ext = "Donuts & Cookies"
                                            if (ext === 'Cookies') ext = "Donuts & Cookies"
                                        }
                                        if (subCategory === 'Packaged Bread & Bakery') {
                                            sub = `Packaged Bread & Bakery`
                                        }

                                        // category Dairy, Eggs & Fridge
                                        if (category === 'Dairy, Eggs & Fridge') {
                                            if (subCategory === 'Dips & Pate') {
                                                if (extensionCategory === 'Pate') ext = 'Pate, Paste & Caviar'
                                                if (extensionCategory === 'Paste') ext = 'Pate, Paste & Caviar'
                                            }
                                        }
                                        // category Drinks
                                        if (category === 'Drinks') {
                                            if (subCategory === 'Chilled Drinks') {
                                                if (extensionCategory === 'Soft Drinks' || extensionCategory === 'Energy Drinks') ext = 'Chilled Soft Drinks & Energy Drinks'
                                            }
                                        }
                                        // category Freezer
                                        if (category === 'Freezer') {
                                            if (subCategory === 'Frozen Fruit') {
                                                if (extensionCategory === 'Berries' || extensionCategory === 'Tropical') ext = 'Berries & Tropical'
                                            }
                                            if (subCategory === 'Frozen Party Food') {
                                                if (extensionCategory === 'Pastries' || extensionCategory === 'Pies & Quiches') ext = 'Pies, Pastries & Quiches'
                                            }
                                            if (subCategory === 'Frozen Vegetables') {
                                                if (extensionCategory === 'Beans' || extensionCategory === 'Peas') ext = 'Beans & Peas'
                                            }
                                        }
                                        // category Fruit & Veg
                                        if (category === 'Fruit & Veg') {
                                            if (subCategory === 'Fruit') {
                                                if (extensionCategory === 'Apples' || extensionCategory === 'Pears') ext = 'Apples & Pears'
                                                if (extensionCategory === 'Melons' || extensionCategory === 'Mangoes') ext = 'Melons & Mangoes'
                                                if (extensionCategory === 'Pineapples' || extensionCategory === 'Kiwi Fruit') ext = 'Pineapples & Kiwi Fruit'
                                            }
                                            if (subCategory === 'Vegetables') {
                                                if (extensionCategory === 'Potatoes' || extensionCategory === 'Pumpkins') ext = 'Potatoes & Pumpkins'
                                                if (extensionCategory === 'Eggplant' || extensionCategory === 'Zucchini & Squash') ext = 'Zucchini, Eggplant & Squash'
                                            }
                                        }
                                        // category Household
                                        if (category === 'Household') {
                                            if (subCategory === 'Laundry') {
                                                if (extensionCategory === 'Ironing' || extensionCategory === 'Accessories') ext = `Ironing & Accessories`
                                            }
                                        }
                                        // category Pantry
                                        if (category === 'Pantry') {
                                            if (subCategory === 'Breakfast & Spreads') {
                                                if (extensionCategory === 'Muesli' || extensionCategory === 'Oats') ext = `Muesli & Oats`
                                            }
                                        }
                                        // category Poultry, Meat & Seafood
                                        if (category === 'Poultry, Meat & Seafood') {
                                            if (subCategory === 'BBQ Meat & Seafood') {
                                                if (extensionCategory === 'Burgers' || extensionCategory === 'Sausages') ext = `Burgers & Sausages`
                                            }
                                        }

                                        return {
                                            source_url: href !== 'N/A' ? href : 'N/A',
                                            category: category,
                                            subCategory: sub,
                                            extensionCategory: ext,
                                            name: product.querySelector('.product__title')?.textContent.trim() || 'N/A',
                                            image_url: product.querySelector('img[data-testid="product-image"]')?.src || 'N/A',
                                            coles_product_id: coles_product_id,
                                            barcode: '',
                                            shop: 'coles',
                                            weight: weight,
                                            prices: getPrices(loc.location, priceInCents, pricePerUnit, unit),
                                        };
                                    });
                                },
                                category,
                                subCategory,
                                extensionCategory,
                                loc,
                            );

                            if (productData.length > 0) {
                                for (const data of productData) {
                                    const q = await Product.findOne({ category: data.category, subCategory: data.subCategory, extensionCategory: data.extensionCategory, coles_product_id: data.coles_product_id })
                                    if (!q) {
                                        const createdProduct = await Product.create({ ...data });
                                    } else {
                                        const updatedPrices = [...q.prices];
                                        let priceUpdated = false;

                                        for (let i = 0; i < updatedPrices.length; i++) {
                                            if (updatedPrices[i].state.toLowerCase() === data.prices[0].state.toLowerCase()) { // Compare location
                                                updatedPrices[i].price = data.prices[0].price;
                                                updatedPrices[i].price_per_unit = data.prices[0].price_per_unit;
                                                updatedPrices[i].price_unit = data.prices[0].price_unit;
                                                priceUpdated = true;
                                                break;
                                            }
                                        }

                                        // If no match, push the new price data
                                        if (!priceUpdated) {
                                            updatedPrices.push(data.prices[0]);
                                        }

                                        // Update the document in MongoDB
                                        await Product.findByIdAndUpdate(
                                            q._id,
                                            { $set: { prices: updatedPrices } },
                                            { new: true }
                                        );
                                        // await Product.findByIdAndUpdate(q._id, { $set: { prices: updatedPrice } }, { new: true })
                                    }
                                }
                            }
                            i = i + 1;

                            // console.log('length find...', productData.length);
                            // await delay(9000);
                        }
                        console.log('done Child Items:', extensionCategory)
                    }
                    console.log('done Sub Category:', subCategory)
                }
                console.log('done Category:', category)
            }
            await browser.close();
        }
        console.log('done all')

    } catch (error) {
        console.error('Error:', error);
        // await page.screenshot({ path: 'error_screenshot.png' });
    } finally {
        // await browser.close();
    }
};

(async () => {
    await scraper();
})();
