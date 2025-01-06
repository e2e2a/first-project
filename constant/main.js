const main = [
    {
        category: "Baby",
        subCategories: [
            {
                subCategory: "Baby Accessories",
                childItems: [
                    // { extensionCategory: "Baby Bibs" }, // not found
                    // { extensionCategory: "Baby Clothes & Blankets" }, // not found
                    { extensionCategory: "Baby Health & Safety" },
                    // { extensionCategory: "Baby Teething & Soothers" }, // not found
                    // { extensionCategory: "Baby Toys & Playtime" }, // not found
                    // { extensionCategory: "Bath & Skincare" }, // found but different api https://www.coles.com.au/browse/baby/bath-skincare
                    // { extensionCategory: "Bottles and Baby Feeding" }, // not found
                ]
            },
            /**
             * @problems
             * 1. subcategory is not found
             */
            // {
            //     subCategory: "Baby Food", 
            //     childItems: [
            //         { extensionCategory: "Baby Food 12 Months+" },
            //         { extensionCategory: "Baby Food 4 Months+" },
            //         { extensionCategory: "Baby Food 6 Months+" },
            //         { extensionCategory: "Baby Food 8 Months+" },
            //         { extensionCategory: "Baby & Toddler Snacks" },
            //         { extensionCategory: "Organic Baby Food" },
            //     ]
            // },
            {
                subCategory: "Baby Formula",
                childItems: [
                    // { extensionCategory: "Infant" }, // not found
                    // { extensionCategory: "Newborn" }, // not found
                    { extensionCategory: "Specialty" },
                    // { extensionCategory: "Toddler" }, // not found
                ]
            },
            {
                subCategory: "Nappies Wipes",
                childItems: [
                    { extensionCategory: "Nappies 12-18 Months (9-12kg)" },
                    { extensionCategory: "Nappies 18 Months+ (10kg+)" },
                    { extensionCategory: "Nappies 3-6 Months (5-7kg)" },
                    { extensionCategory: "Nappies 6-12 Months (7-10kg)" },
                    { extensionCategory: "Nappy Pants" }, // done
                    { extensionCategory: "Newborn Nappies (3-5kg)" },
                    { extensionCategory: "Swimming Nappies" },
                    { extensionCategory: "Wipes & Nappy Changing" },
                ]
            },
            {
                subCategory: "Nappies qwe",
                childItems: [
                    { extensionCategory: "Specialty" },
                ]
            },
        ]
    },
];

export default main;