import categories from './constant/copy.js';
import fs from 'fs';
import path from 'path';

const getData = async () => {
  // console.log('categ', categories.length)
  let totalProducts = 0;
  for (const categ of categories) {
    const category = categ.category;
    for (const sub of categ.subCategories) {
      const subCategory = sub.subCategory;
      for (const ext of sub.childItems) {
        const extensionCategory = ext.extensionCategory ? ext.extensionCategory : '';
        let productsMatched = [];
        let woolworthsData;
        let ColesData;
        const getDate = new Date();
        const month = getDate.getMonth() + 1;
        const day = getDate.getDate();
        const year = getDate.getFullYear();

        const formattedDate = `${month}-${day}-${year}`;
        try {
          woolworthsData = JSON.parse(fs.readFileSync(`woolworths/data/${formattedDate}/${category}/${category} - ${subCategory} - ${extensionCategory}.json`, 'utf8'));
          ColesData = JSON.parse(fs.readFileSync(`coles/data/${formattedDate}/${category}/${category} - ${subCategory} - ${extensionCategory}.json`, 'utf8'));
        } catch (error) {
          console.log(`Skipping ${category} - ${subCategory} - ${extensionCategory}: File(s) missing.`);
          continue; // Skip to the next extensionCategory
        }
        // console.log(` coles in ${category} - ${subCategory} - ${extensionCategory}: `, ColesData.length)
        // console.log(` woolworths in ${category} - ${subCategory} - ${extensionCategory}: `, woolworthsData.length)

        for (const data of woolworthsData) {
          const filteredProducts = ColesData.filter((p) => {
            if (p.barcode && data.barcode) {
              if (p.barcode.toString() === data.barcode.toString()) {
                return p;
              }
            } else {
            }
          });
          // console.log('filteredProducts', filteredProducts)
          if (filteredProducts && filteredProducts.length > 0) {
            const formattedProduct1 = {
              source_url: filteredProducts[0].source_url || null,
              name: filteredProducts[0].name || null,
              image_url: filteredProducts[0].image_url || null,
              barcode: filteredProducts[0].barcode || null,
              shop: filteredProducts[0].shop || null,
              category_id: filteredProducts[0].category_id,
              weight: filteredProducts[0].weight || null,
              prices: filteredProducts[0].prices,
            };
            const formattedProduct2 = {
              source_url: data.source_url || null,
              name: data.name || null,
              image_url: data.image_url || null,
              barcode: data.barcode || null,
              shop: data.shop || null,
              category_id: data.category_id,
              weight: data.weight || null,
              prices: data.prices,
            };
            productsMatched.push(formattedProduct1);
            productsMatched.push(formattedProduct2);
          }
        }
        try {
          if (productsMatched && productsMatched.length > 0) {
            console.log(`Products matched in ${category} - ${subCategory} - ${extensionCategory}`, productsMatched.length);
            totalProducts = totalProducts + productsMatched.length;
            console.log('totalProducts', totalProducts);
            const baseFolder = './matched';
            const folderPath = path.join(baseFolder, `${category}`);
            const fileName = `${category} - ${subCategory} - ${extensionCategory}.json`;
            const filePath = path.join(folderPath, fileName);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true }); // Create the folder if it doesn't exist
              console.log(`Created folder: ${folderPath}`);
            }
            fs.writeFileSync(filePath, JSON.stringify(productsMatched, null, 2)); // Pretty print with 2 spaces
            console.log(`Data saved to ${filePath}`);
          }
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
