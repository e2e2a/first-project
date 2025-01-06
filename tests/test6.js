import categories from '../constant/categories.js'
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1/scrape');
        console.log('database connected');
        return conn;
    } catch (error) {
        console.log('database error');
    }
};

const ProductSchema = new mongoose.Schema(
    {
        source_url: { type: String, default: 'N/A' },
        category: { type: String },
        subCategory: { type: String },
        extensionCategory: { type: String },
        name: { type: String, default: 'N/A' },
        image_url: { type: String, default: 'N/A' },
        barcode: { type: String, default: 'N/A' },
        shop: { type: String, default: '' },
        weight: { type: String, default: 'N/A' },
        prices: {
            nsw: { type: String },
            nsw_price_per_unit: { type: String },
            nsw_unit: { type: String },
            vic: { type: String },
            qld: { type: String },
            wa: { type: String },
            sa: { type: String },
            tas: { type: String },
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
function cleanProductName(name) {
    // Remove special characters like | and trim extra spaces
    return name.replace(/\b(?:coles|woolworths|bakery)\b/gi, '')
        .replace(/[^a-zA-Z0-9\s]/g, '')      // Remove non-alphanumeric characters
        .replace(/\s+/g, ' ')              // Replace multiple spaces with a single space
        .trim();
}
// const jsonArrays = ['Baby--BabyToys&Playtime132-products.json']
const jsonArrays = ['Dairy,Eggs&Fridge-Milk-LongLifeMilk.json']
const getData = async () => {
    let productsMatched = []
    await dbConnect();
    for (const jsonArray of jsonArrays) {
        const jsonData = JSON.parse(fs.readFileSync(`woolworths/${jsonArray}`, 'utf8'));
        for (const data of jsonData) {
            let name1 = data.name;
            const products = await Product.find({ category: 'Deli & Chilled Meats', subCategory: 'Deli Meats' });
            // const filteredProducts = products.filter((p) => {
            //     const nam1 = cleanProductName(p.name)
            //     const nam2 = cleanProductName(name1)
            //     if (nam1.toLowerCase() === nam2.toLowerCase()) {
            //         return p
            //     }
            // })

            const filteredProducts = products.filter((p) => p.barcode.toString() === data.barcode.toString())
            console.log('filteredProducts', filteredProducts)
            if (filteredProducts && filteredProducts.length > 0) {
                const formattedProduct1 = {
                    source_url: filteredProducts[0].source_url || null,
                    name: filteredProducts[0].name || null,
                    image_url: filteredProducts[0].image_url || null,
                    barcode: filteredProducts[0].barcode || null,
                    shop: filteredProducts[0].shop || null,
                    weight: filteredProducts[0].weight || null,
                    prices: { ...filteredProducts[0].prices },
                };
                const formattedProduct2 = {
                    source_url: data.source_url || null,
                    name: data.name || null,
                    image_url: data.image_url || null,
                    barcode: data.barcode || null,
                    shop: data.shop || null,
                    weight: data.weight || null,
                    prices: { ...data.prices },
                };
                productsMatched.push(formattedProduct1)
                productsMatched.push(formattedProduct2)
            }
        }

        fs.writeFileSync('MatchProducts123.json', JSON.stringify(productsMatched, null, 2), 'utf8');
        console.log('Products found', productsMatched)
        return
    }
}

(async () => {
    await getData();
})();
