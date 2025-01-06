import categories from '../constant/categories.js';
import fs from 'fs';
import path from 'path';
import Product from './models/products.js';
import dbConnect from './db/dbConnect.js';

const categoriesId = [
  { id: '15603', name: 'Baby' },
  { id: '8892906', name: 'Bakery' },
  { id: '1300', name: 'Dairy, Eggs & Fridge' },
  { id: '8892715', name: 'Deli & Chilled Meats' },
  { id: '11456', name: 'Drinks' },
  { id: '85471', name: 'Freezer' },
  { id: '2100', name: 'Fruit & Veg' },
  { id: '15083', name: 'Health & Beauty' },
  { id: '14003', name: 'Household' },
  { id: '10302', name: 'Pantry' },
  { id: '16427', name: 'Pet' },
  { id: '7238', name: 'Poultry, Meat & Seafood' },
  // { id: '17490', name: 'Tobacco' },
];

const getData = async () => {
  await dbConnect();
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
        const a = await Product.find({ category: category, subCategory: subCategory, extensionCategory: extensionCategory }).exec();
        const productsData = a.map((product) => {
          const productObj = product.toObject();
          const cleanedPrices = productObj.prices.map((price) => {
            const { _id, ...rest } = price; // Destructure to exclude _id
            return rest; // Return the remaining price object without _id
          });
          const formattedProduct = {
            source_url: productObj.source_url || null,
            name: productObj.name || null,
            image_url: productObj.image_url || null,
            source_id: `Coles - ${productObj.coles_product_id}` || null,
            barcode: productObj.barcode || '',
            category_id: categId || '',
            shop: productObj.shop || null,
            weight: productObj.weight || '',
            prices: cleanedPrices,
          };

          return formattedProduct;
        });
        const baseFolder = './colesJSON';
        const folderPath = path.join(baseFolder, category);

        // Ensure the folder exists
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true }); // Create the folder if it doesn't exist
          console.log(`Created folder: ${folderPath}`);
        }

        const fileName = `${category} - ${subCategory} ${extensionCategory ? `- ${extensionCategory}` : ''}.json`;
        const filePath = path.join(folderPath, fileName);
        // Check if the file already exists
        if (fs.existsSync(filePath)) {
          console.log(`File already exists: ${filePath}. Skipping save.`);
          // return; // Skip saving the file
        }
        try {
          console.log(`${fileName} - ${productsData.length} products`);
          fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2)); // Pretty print with 2 spaces
          console.log(`Data saved to ${filePath}`);
        } catch (error) {
          console.error('Error writing data to file:', error);
        }
      }
    }
  }
};

(async () => {
  await getData();
})();
