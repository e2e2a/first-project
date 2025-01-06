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
        coles_product_id: { type: String },
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
    return name.replace(/[^a-zA-Z0-9\s]/g, '')      // Remove non-alphanumeric characters
        .replace(/\s+/g, ' ')              // Replace multiple spaces with a single space
        .trim();
}
const getData = async () => {
    let productsMatched = []
    await dbConnect();

    const products = await Product.find();

    // Update the extensionCategory of each product
    const updatePromises = products.map((product) => {
        // product.coles_product_id = product.barcode
        product.barcode = '';
        return product.save(); // Save the updated product back to the database
    });

    // Wait for all updates to complete
    await Promise.all(updatePromises);
    console.log('All products updated', products[0]);
}

(async () => {
    await getData();
})();
