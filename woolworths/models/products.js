import mongoose from 'mongoose';

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

export default Product;