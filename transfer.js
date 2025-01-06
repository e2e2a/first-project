import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
const dbConnect = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1/transfer1');
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

const getData = async () => {
    try {
        // Connect to the database
        await dbConnect();

        // Path to the JSON file
        const jsonData = JSON.parse(fs.readFileSync(`aaaaa.json`, 'utf8'));

        // Insert each product into the database
        for (const product of jsonData) {
            // Check if the product already exists based on some unique identifier, e.g., barcode
            // Insert the product if it does not exist
            await Product.create(product);
            console.log(`Inserted product: ${product.name}`);

        }

        console.log('Data transfer completed.');
    } catch (error) {
        console.error('Error during data transfer:', error.message);
    }
};

await getData();