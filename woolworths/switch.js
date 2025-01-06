import mongoose from 'mongoose';
import fs from 'fs/promises';
const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/wooly4');
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed:', error.message);
    }
};

// Define Product Schema
const ProductSchema = new mongoose.Schema(
    {
        source_url: { type: String, default: 'N/A' },
        retailer_product_id: { type: String },
        category: [{ type: String }],
        subCategory: [{ type: String }],
        extensionCategory: [{ type: String }],
        name: { type: String, default: 'N/A' },
        image_url: { type: String, default: 'N/A' },
        barcode: { type: String, default: 'N/A' },
        shop: { type: String, default: '' },
        isNew: { type: Boolean },
        weight: { type: String, default: 'N/A' },
        prices: [
            {
                state: { type: String },
                price: { type: String },
                price_per_unit: { type: String },
                price_unit: { type: String },
            },
        ],
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

const cleanUpPrices = async () => {
    await dbConnect();

    // Fetch all products
    const products = await Product.find();
    // try {
    //     await fs.writeFile('products_backup.json', JSON.stringify(products, null, 2), 'utf-8');
    //     console.log('Backup created successfully: products_backup.json');
    // } catch (error) {
    //     console.error('Failed to create backup:', error.message);
    //     process.exit(1); // Exit to avoid making changes without a backup
    // }
    for (const product of products) {
        let isModified = false;
        for (const price of product.prices) {
            if (price && price.price && price.price_per_unit) {
                // Swap the values of price and price_per_unit
                const temp = price.price;
                price.price = price.price_per_unit;
                price.price_per_unit = temp;
                isModified = true;
            }
        }

        if (isModified) {
            await product.save();
            console.log(`Updated prices for product ID: ${product.retailer_product_id}`);
        }
    }

    console.log('Finished cleaning up all products.');
    process.exit(0);
};

cleanUpPrices();
