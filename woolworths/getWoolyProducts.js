import categories from './constant/categories.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Product from './models/products.js';
import cleanUpPrices from './clean.js';
import dbConnect from './db/dbConnect.js';
import { createArrayCsvWriter } from 'csv-writer';
const getDate = new Date();
const month = getDate.getMonth() + 1;
const day = getDate.getDate();
const year = getDate.getFullYear();

const formattedDate = `${month}-${day}-${year}`;
const csvWriter = createArrayCsvWriter({
  path: `./woolworths/output_${formattedDate}.csv`,
  header: ['Category', 'SubCategory', 'Extension', 'Products'],
});

const categoriesId = [
  // { id: '1_717A94B', name: 'Baby', url: '/shop/browse/baby', location: '/shop/browse/baby' },
  // { id: '1_DEB537E', name: 'Bakery', url: '/shop/browse/bakery', location: '/shop/browse/bakery' },
  // { id: '1_6E4F4E4', name: 'Dairy, Eggs & Fridge', url: '/shop/browse/dairy-eggs-fridge', location: '/shop/browse/dairy-eggs-fridge' },
  // { id: '1_3151F6F', name: 'Deli & Chilled Meats', url: '/shop/browse/deli-chilled-meals', location: '/shop/browse/deli-chilled-meals' },
  // { id: '1_5AF3A0A', name: 'Drinks', url: '/shop/browse/drinks', location: '/shop/browse/drinks' },
  // { id: '1_ACA2FC2', name: 'Freezer', url: '/shop/browse/freezer', location: '/shop/browse/freezer' },
  // { id: '1-E5BEE36E', name: 'Fruit & Veg', url: '/shop/browse/fruit-veg', location: '/shop/browse/fruit-veg' },
  // { id: '1_894D0A8', name: 'Health & Beauty', url: '/shop/browse/beauty-personal-care', location: '/shop/browse/beauty-personal-care' },
  // { id: '1_9851658', name: 'Health & Wellness', url: '/shop/browse/health-wellness', location: '/shop/browse/health-wellness' },
  // { id: '1_D5A2236', name: 'Poultry, Meat & Seafood', url: '/shop/browse/poultry-meat-seafood', location: '/shop/browse/poultry-meat-seafood' },
  // { id: '1_2432B58', name: 'Household', url: '/shop/browse/cleaning-maintenance', location: '/shop/browse/cleaning-maintenance' },
  // { id: '1_39FD49C', name: 'Pantry', url: '/shop/browse/pantry', location: '/shop/browse/pantry' },
  // { id: '1_61D6FEB', name: 'Pet', url: '/shop/browse/pet', location: '/shop/browse/pet' },
  // { id: '1_DEA3ED5', name: 'Home & Lifestyle', url: '/shop/browse/home-lifestyle', location: '/shop/browse/home-lifestyle' }, // but no products in the list of categ

  { id: '1_DEB537E', name: 'Bakery', url: '/shop/browse/bakery', location: '/shop/browse/bakery' },
  { id: '1-E5BEE36E', name: 'Fruit & Veg', url: '/shop/browse/fruit-veg', location: '/shop/browse/fruit-veg' },
  { id: '1_D5A2236', name: 'Poultry, Meat & Seafood', url: '/shop/browse/poultry-meat-seafood', location: '/shop/browse/poultry-meat-seafood' },
  { id: '1_3151F6F', name: 'Deli & Chilled Meals', url: '/shop/browse/deli-chilled-meals', location: '/shop/browse/deli-chilled-meals' },
  { id: '1_6E4F4E4', name: 'Dairy, Eggs & Fridge', url: '/shop/browse/dairy-eggs-fridge', location: '/shop/browse/dairy-eggs-fridge' },
  { id: '1_39FD49C', name: 'Pantry', url: '/shop/browse/pantry', location: '/shop/browse/pantry' },
  { id: '1_ACA2FC2', name: 'Freezer', url: '/shop/browse/freezer', location: '/shop/browse/freezer' },
  { id: '1_5AF3A0A', name: 'Drinks', url: '/shop/browse/drinks', location: '/shop/browse/drinks' },
  { id: '1_9851658', name: 'Health & Wellness', url: '/shop/browse/health-wellness', location: '/shop/browse/health-wellness' },
  { id: '1_894D0A8', name: 'Beauty & Personal Care', url: '/shop/browse/beauty-personal-care', location: '/shop/browse/beauty-personal-care' },
  { id: '1_717A94B', name: 'Baby', url: '/shop/browse/baby', location: '/shop/browse/baby' },
  { id: '1_DEA3ED5', name: 'Home & Lifestyle', url: '/shop/browse/home-lifestyle', location: '/shop/browse/home-lifestyle' },
  { id: '1_2432B58', name: 'Cleaning & Maintenance', url: '/shop/browse/cleaning-maintenance', location: '/shop/browse/cleaning-maintenance' },
  { id: '1_61D6FEB', name: 'Pet', url: '/shop/browse/pet', location: '/shop/browse/pet' },
  { id: '1_B63CF9E', name: 'Front of Store', url: '/shop/browse/front-of-store', location: '/shop/browse/front-of-store' },
];
const getData = async () => {
  console.log('start clean');
  await cleanUpPrices();
  console.log('end clean');
  await dbConnect();
  const a = await Product.find().exec();
  let data = [];
  for (const categ of categories) {
    const category = categ.category;
    let categId = '';
    const matchedCategory = categoriesId.find((cat) => cat.name === category);
    if (matchedCategory) {
      categId = matchedCategory.id;
    } else {
      console.warn(`Category "${category}" not found in categoriesId`);
    }
    for (const sub of categ.subCategories) {
      const subCategory = sub.subCategory;
      for (const ext of sub.childItems) {
        const extensionCategory = ext.extensionCategory ? ext.extensionCategory : '';
        // { category: category, subCategory: subCategory, extensionCategory: extensionCategory }
        // Filter products matching the current category, subCategory, and extensionCategory
        const filteredProducts = a.filter((product) => {
          // Parse the stringified arrays
          const parsedFields = {
            productCategories: product.category.flatMap((cat) => JSON.parse(cat)),
            productSubCategories: product.subCategory.flatMap((sub) => JSON.parse(sub)),
            productExtensionSubCategories: product.extensionCategory.flatMap((ext) => JSON.parse(ext)),
          };

          // console.log('mycat', mycat)
          // First, check if category matches
          const hasCategory = parsedFields.productCategories.some((cat) => cat.toLowerCase() === category.toLowerCase());
          if (!hasCategory) return false;

          let mySubCategory;
          mySubCategory = subCategory;
          if (category === 'Poultry, Meat & Seafood' && subCategory === 'BBQ Meat & Seafood') mySubCategory = 'BBQ Meat';
          if (category === 'Baby' && subCategory === 'Baby Formula') mySubCategory = 'Baby Formula & Toddler Milk';
          if (category === 'Baby' && subCategory === 'Nappies Wipes') mySubCategory = 'Nappies';
          //   if (category === 'Household' && subCategory === 'Clothing Accessories') mySubCategory = 'Clothing & Accessories'
          //   if (category === 'Household' && subCategory === 'Parties & Entertaining') mySubCategory = 'Party Supplies'
          if (category === 'Cleaning & Maintenance' && subCategory === 'Bathroom') mySubCategory = 'Toilet Paper, Tissues & Paper Towels';

          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Baby Health & Safety') mySubCategory = 'Health & Safety';
          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Baby Toys & Playtime') mySubCategory = 'Toys & Playtime';
          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Bath & Skincare') mySubCategory = 'Bath & Skincare';
          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Bottles and Baby Feeding')
            mySubCategory = 'Bottles & Baby Feeding';
          // Next, filter by subCategory only for matching categories
          // console.log('mySubCategory', mySubCategory)
          const hasSubCategory = parsedFields.productSubCategories.some((sub) => sub.toLowerCase() === mySubCategory.toLowerCase());

          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Baby Health & Safety') return hasSubCategory;
          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Baby Toys & Playtime') return hasSubCategory;
          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Bath & Skincare') return hasSubCategory;
          if (category === 'Baby' && subCategory === 'Baby Accessories' && extensionCategory === 'Bottles & Baby Feeding') return hasSubCategory;
          // If no matching subCategory, skip this product
          if (!hasSubCategory) return false;

          let mySubCategoryExtension;
          mySubCategoryExtension = extensionCategory;
          if (category === 'Poultry, Meat & Seafood' && subCategory === 'Seafood' && extensionCategory === 'Fish')
            mySubCategoryExtension = 'Salmon & Other Fish';
          if (category === 'Health & Wellness' && subCategory === 'Vitamins' && extensionCategory === 'Brain & Heart Health')
            mySubCategoryExtension = 'Brain & Heart';
          if (category === 'Health & Wellness' && subCategory === 'First Aid & Medicinal' && extensionCategory === 'Bandaids & Bandages')
            mySubCategoryExtension = 'First Aid & Bandages';
          if (category === 'Cleaning & Maintenance' && subCategory === 'Bathroom' && extensionCategory === 'Toilet Cleaners')
            mySubCategoryExtension = 'Toilet Paper';
          if (category === 'Home & Lifestyle' && subCategory === 'Clothing Accessories' && extensionCategory === 'Socks')
            mySubCategoryExtension = 'Boys & Girls Socks';
          if (category === 'Home & Lifestyle' && subCategory === 'Clothing Accessories' && extensionCategory === 'Underwear')
            mySubCategoryExtension = 'Boys & Girls Underwear';
          const hasExtensionSubCategories = parsedFields.productExtensionSubCategories.some(
            (ext) => ext.toLowerCase() === mySubCategoryExtension.toLowerCase()
          );

          return hasExtensionSubCategories;
        });

        let mycat = category;
        mycat = category;
        if (category === 'Deli & Chilled Meals') mycat = 'Deli & Chilled Meats';
        if (category === 'Health & Wellness') mycat = 'Beauty & Personal Care';
        if (category === 'Beauty & Personal Care') mycat = 'Beauty & Personal Care';
        if (category === 'Home & Lifestyle') mycat = 'Household';
        if (category === 'Cleaning & Maintenance') mycat = 'Household';

        const toPush = [mycat, subCategory, extensionCategory, filteredProducts.length];
        data.push(toPush);
        const productsData = filteredProducts.map((product) => {
          const productObj = product.toObject();
          // console.log('productObj', productObj)
          const filteredPrices = productObj.prices.filter((p) => p !== null && p !== undefined);
          const cleanedPrices = filteredPrices.map((price) => {
            if (!price || price === null) return;
            const { _id, ...rest } = price; // Destructure to exclude _id
            return rest; // Return the remaining price object without _id
          });

          const formattedProduct = {
            source_url: productObj.source_url || null,
            name: productObj.name || null,
            image_url: productObj.image_url || null,
            source_id: `Woolworths - ${productObj.retailer_product_id}` || null,
            barcode: productObj.barcode || null,
            category_id: categId || '',
            shop: productObj.shop || null,
            weight: productObj.weight || null,
            prices: cleanedPrices,
          };

          return formattedProduct;
        });
        // console.log('Filtered product format:', productsData[0])
        if (productsData && productsData.length > 0) {
          const getDate = new Date();
          const month = getDate.getMonth() + 1;
          const day = getDate.getDate();
          const year = getDate.getFullYear();

          const formattedDate = `${month}-${day}-${year}`;
          const baseFolder = `./woolworths/data/${formattedDate}`;
          const folderPath = path.join(baseFolder, mycat);

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Created folder: ${folderPath}`);
          }

          const fileName = `${mycat} - ${subCategory} ${
            extensionCategory ? `- ${extensionCategory === 'Floor/Carpet Cleaners' ? 'Floor - Carpet Cleaners' : extensionCategory}` : ''
          }.json`;
          const filePath = path.join(folderPath, fileName);
          if (fs.existsSync(filePath)) {
            console.log(`File already exists: ${filePath}. Skipping save.`);
            // return; // Skip saving the file
          }
          try {
            console.log(`${fileName} - ${productsData.length} products`);
            fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2));
            console.log(`Data saved to ${filePath}`);
          } catch (error) {
            console.error('Error writing data to file:', error);
          }
        }
      }
    }
  }

  csvWriter
    .writeRecords(data)
    .then(() => {
      console.log('CSV file created successfully!');
    })
    .catch((err) => {
      console.error('Error writing CSV file:', err);
    });
};

(async () => {
  await getData();
})();
