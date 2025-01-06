import axios from 'axios'
import axiosRetry from 'axios-retry';
import Product from './models/products.js';
import dbConnect from './db/dbConnect.js'

const axiosInstance = axios.create({
    timeout: 60000 // 10 seconds
});

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

axiosRetry(axiosInstance, {
    retries: 15, // Number of retries
    retryDelay: (retryCount) => retryCount * 3000,
    retryCondition: (error) => {
        return axiosRetry.isNetworkOrIdempotentRequestError(error);
    },
});

const getBarcode = async () => {
    try {
        await dbConnect();
        const products = await Product.find()
        console.log('products length:', products.length)

        let i = 1
        for (const product of products) {
            // await delay(5000)
            try {
                const { data } = await axiosInstance.get(`https://barcodes.groceryscraper.mc.hzuccon.com/barcode?product=${product.coles_product_id}`)
                console.log(`data${i}`, `${data}-${product.name}`)
                product.barcode = data
                await product.save()
            } catch (error) {
                console.log('no product found', 'skip')
            }
            i++
        }
        return
    } catch (err) {
        console.error('Error Details:', {
            message: err.message,
            config: err.config,
            code: err.code,
            response: err.response?.data,
        });
        return ''
    }
}

(async () => {
    const a = await getBarcode();
    console.log('a', a)
})();