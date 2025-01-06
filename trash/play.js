const play = {
    "source_url": "https://www.woolworths.com.au/shop/productdetails/253493/woolworths-cheese-bacon-rolls",
    "name": "Woolworths Cheese & Bacon Rolls 4 Pack",
    "image_url": "https://cdn1.woolworths.media/content/wowproductimages/large/253493.jpg",
    "source_id": "Woolworths - 253493",
    "barcode": "9339687319398",
    "shop": "Woolworths",
    "weight": "1EA",
    "prices": [
        null,
        {
            "state": "VIC",
            "price": "480",
            "price_per_unit": "120",
            "price_unit": "EA"
        }
    ]
};

// Filter the `prices` array to remove null/undefined entries
const filteredPrices = play.prices.filter((p) => p !== null && p !== undefined);

// Reconstruct the object with updated `prices`
const updatedPlay = {
    ...play,
    prices: filteredPrices
};

console.log('Updated play:', updatedPlay);
