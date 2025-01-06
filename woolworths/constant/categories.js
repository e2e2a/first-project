const categories = [
    {
        category: "Cleaning & Maintenance",
        subCategories: [
            {
                subCategory: "Bathroom",
                childItems: [
                    { extensionCategory: "Toilet Cleaners" },
                ]
            },
            {
                subCategory: "Cleaning Goods",
                childItems: [
                    { extensionCategory: "Air Fresheners" },
                    { extensionCategory: "Bathroom Cleaners" },
                    { extensionCategory: "Disinfectant & Bleach" },
                    { extensionCategory: "Drain Cleaners & Solvents" },
                    { extensionCategory: "Fabric, Metal & Furniture Care" },
                    { extensionCategory: "Floor/Carpet Cleaners" },
                    { extensionCategory: "Gloves" }, 
                    { extensionCategory: "Kitchen Cleaners" },
                    { extensionCategory: "Mops, Buckets & Brooms" },
                    { extensionCategory: "Mould & Moisture Treatments" },
                    { extensionCategory: "Multipurpose Cleaners" },
                    { extensionCategory: "Sponges, Cloths & Wipes" },
                    { extensionCategory: "Window & Glass Cleaners" }, 
                ]
            },
            {
                subCategory: "Garden & Outdoors",
                childItems: [
                    { extensionCategory: "Automotive" },
                    { extensionCategory: "Garden Décor & Accessories" },
                    { extensionCategory: "Gloves, Tools & Watering" },
                    { extensionCategory: "Insecticide & Weed Control" },
                    { extensionCategory: "Lawn Care & Plant Food" },
                    { extensionCategory: "Potting Mix & Fertilisers" },
                    { extensionCategory: "Seeds & Plants" },
                ]
            },
            {
                subCategory: "Hardware",
                childItems: [
                    { extensionCategory: "Adhesives, Glues & Tapes" },
                    { extensionCategory: "Hooks & Fasteners" },
                    { extensionCategory: "Tools & Accessories" },
                ]
            },
            {
                subCategory: "Homewares",
                childItems: [
                    { extensionCategory: "Water Filtration" },
                ]
            },
            {
                subCategory: "Kitchen",
                childItems: [
                    { extensionCategory: "​​Cling Wrap, Foil & Baking Paper:" },
                    { extensionCategory: "Dishwashing" },
                    { extensionCategory: "Garbage Bags" },
                    { extensionCategory: "Gloves" },
                    { extensionCategory: "Lunch Boxes & Drink Bottles" },
                    { extensionCategory: "Sandwich & Freezer Bags" },
                ]
            },
            {
                subCategory: "Laundry",
                childItems: [
                    { extensionCategory: "Fabric Softener" },
                    { extensionCategory: "Ironing & Accessories" },
                    { extensionCategory: "Laundry Liquid" },
                    { extensionCategory: "Laundry Powder" },
                    { extensionCategory: "Pegs, Baskets & Hangers" },
                    { extensionCategory: "Stain Removal" },
                ]
            },
            {
                subCategory: "Pest Control",
                childItems: [
                    { extensionCategory: "Crawling Insects" },
                    { extensionCategory: "Flying Insects" },
                    { extensionCategory: "Garden Pests" },
                    { extensionCategory: "Insect Repellent" },
                    { extensionCategory: "Mosquitoes" },
                    { extensionCategory: "Rodents" },
                ]
            },
        ]
    },
    {
        category: "Home & Lifestyle",
        subCategories: [
            {
                subCategory: "Clothing Accessories",
                childItems: [
                    { extensionCategory: "Hosiery" },
                    { extensionCategory: "Socks" },
                    { extensionCategory: "Underwear" },
                ]
            },
            {
                subCategory: "Parties & Entertaining",
                childItems: [
                    { extensionCategory: "Candles" },
                    { extensionCategory: "Decorations" },
                ]
            },
        ]
    },
    {
        category: "Baby",
        subCategories: [
            {
                subCategory: "Baby Accessories",
                childItems: [
                    { extensionCategory: "Baby Bibs" },
                    { extensionCategory: "Baby Health & Safety" },
                    { extensionCategory: "Baby Toys & Playtime" },
                    { extensionCategory: "Bath & Skincare" },
                    { extensionCategory: "Bottles and Baby Feeding" },
                ]
            },
            {
                subCategory: "Baby Food",
                childItems: [
                    { extensionCategory: "Baby Food 12 Months+" },
                    { extensionCategory: "Baby Food 4 Months+" },
                    { extensionCategory: "Baby Food 6 Months+" },
                    { extensionCategory: "Baby Food 8 Months+" },
                    { extensionCategory: "Baby & Toddler Snacks" },
                    { extensionCategory: "Organic Baby Food" },
                ]
            },
            {
                subCategory: "Baby Formula",
                childItems: [
                    { extensionCategory: "Infant" },
                    { extensionCategory: "Newborn" },
                    { extensionCategory: "Specialty" },
                    { extensionCategory: "Toddler" },
                ]
            },
            {
                subCategory: "Nappies Wipes",
                childItems: [
                    { extensionCategory: "Nappies 12-18 Months (9-12kg)" },
                    { extensionCategory: "Nappies 18 Months+ (10kg+)" },
                    { extensionCategory: "Nappies 3-6 Months (5-7kg)" }, //
                    { extensionCategory: "Nappies 6-12 Months (7-10kg)" },
                    { extensionCategory: "Nappy Pants" },
                    { extensionCategory: "Newborn Nappies (3-5kg)" },
                    { extensionCategory: "Swimming Nappies" },
                    { extensionCategory: "Wipes & Nappy Changing" },
                ]
            },
        ]
    },
    {
        category: "Pantry",
        subCategories: [
            {
                subCategory: "Baking",
                childItems: [
                    { extensionCategory: "Bread Mix" },
                    { extensionCategory: "Cooking Chocolate & Cocoa" },
                    { extensionCategory: "Flavouring, Essence & Food Colouring" },
                    { extensionCategory: "Flour" },
                    { extensionCategory: "Icing & Cake Decorating" },
                    { extensionCategory: "Nuts, Seeds & Coconut" },
                    { extensionCategory: "Sugar & Sweeteners" },
                    { extensionCategory: "Yeast & Baking Ingredients" },
                    { extensionCategory: "Cake & Dessert Mix" },
                    { extensionCategory: "Dried Fruit" },
                    { extensionCategory: "Gluten Free Baking" },
                ]
            },
            {
                subCategory: "Breakfast & Spreads",
                childItems: [
                    { extensionCategory: "Breakfast Cereal" },
                    { extensionCategory: "Honey" },
                    { extensionCategory: "Jam" },
                    { extensionCategory: "Savoury Spread" },
                    { extensionCategory: "Muesli & Oats" },
                    { extensionCategory: "Breakfast Snacks & Drinks" },
                    { extensionCategory: "Sweet Spread" },
                ]
            },
            {
                subCategory: "Canned Food & Instant Meals",
                childItems: [
                    { extensionCategory: "Baked Beans & Spaghetti" },
                    { extensionCategory: "Canned Fruit" },
                    { extensionCategory: "Canned Meat" },
                    { extensionCategory: "Canned Soup & Soup Ingredients" },
                    { extensionCategory: "Canned Vegetables" },
                    { extensionCategory: "Instant Meals & Sides" },
                    { extensionCategory: "Canned Tomatoes" },
                    { extensionCategory: "Canned Tuna" },
                ]
            },
            {
                subCategory: "Condiments",
                childItems: [
                    { extensionCategory: "Mustard" },
                    { extensionCategory: "Sweet Chilli & Hot Sauce" },
                    { extensionCategory: "Tomato & BBQ Sauce" },
                    { extensionCategory: "Chutney & Relish" },
                    { extensionCategory: "Fruit Sauce" },
                    { extensionCategory: "Mayonnaise" },
                    { extensionCategory: "Pickled Vegetables" },
                    { extensionCategory: "Salad Dressings" },
                ]
            },
            {
                subCategory: "Ice Cream Cones",
                childItems: [
                    { extensionCategory: "Ice Cream Cones, Syrups & Toppings" },
                ]
            },
            {
                subCategory: "Desserts",
                childItems: [
                    { extensionCategory: "Custard, Cream & Yoghurt" }, 
                    { extensionCategory: "Ice Cream Cones, Syrups & Toppings" },
                    { extensionCategory: "Jelly" },
                    { extensionCategory: "Puddings" },
                    { extensionCategory: "Ready to Freeze Ice Blocks" },
                    { extensionCategory: "Dried Herbs & Spices" },
                ]
            },
            {
                subCategory: "Health Foods",
                childItems: [
                    { extensionCategory: "Health Breakfast Food & Spread" },
                    { extensionCategory: "Health Cooking & Pasta" },
                    { extensionCategory: "Health Snacks & Drinks" },
                ]
            },
            {
                subCategory: "Herbs & Spices",
                childItems: [
                    { extensionCategory: "Dried Herbs & Spices" },
                    { extensionCategory: "Salt & Pepper" },
                    { extensionCategory: "Breadcrumbs & Stuffings" },
                    { extensionCategory: "Fresh Herbs, Garlic & Ginger Paste" },
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Asian" },
                    { extensionCategory: "European" },
                    { extensionCategory: "Indian" },
                    { extensionCategory: "Mexican" },
                    { extensionCategory: "Middle Eastern" },
                    { extensionCategory: "UK Foods" },
                    { extensionCategory: "Italian" },
                    { extensionCategory: "Kosher" },
                ]
            },
            {
                subCategory: "Pasta, Rice & Grains",
                childItems: [
                    { extensionCategory: "Beans & Legumes" },
                    { extensionCategory: "Rice" },
                    { extensionCategory: "Dried Pasta" },
                    { extensionCategory: "Gluten Free Pasta" },
                    { extensionCategory: "Pasta Meals" },
                    { extensionCategory: "Pasta Sheets" },
                    { extensionCategory: "Quinoa, Cous Cous & Other Grains" },
                ]
            },
            {
                subCategory: "Sauce, Oil & Vinegar",
                childItems: [
                    { extensionCategory: "Marinades & Seasoning" },
                    { extensionCategory: "Pizza & Pasta Sauce" },
                    { extensionCategory: "Soy & Asian Sauces" },
                    { extensionCategory: "Stock & Gravy" },
                ]
            },
            {
                subCategory: "Snacks & Confectionery",
                childItems: [
                    // { extensionCategory: "Biscuits & Cookies" },
                    { extensionCategory: "Corn Chips & Salsa" },
                    { extensionCategory: "Muesli Bars & Snack" },
                ]
            },
            {
                subCategory: "Tea & Coffee",
                childItems: [
                    { extensionCategory: "Black Tea" }, // 
                    { extensionCategory: "Green Tea" }, // 
                    { extensionCategory: "Herbal & Specialty Tea" }, // 
                    { extensionCategory: "Coffe Beans" }, // 
                    { extensionCategory: "Coffe Capsules" }, // 
                    { extensionCategory: "Ground Coffee" }, // 
                ]
            },
        ]
    },
    {
        category: "Fruit & Veg",
        subCategories: [
            /**
             * @commented because its done
             */
            {
                subCategory: "Fruit",
                childItems: [
                    { extensionCategory: "Apples & Pears" },
                    { extensionCategory: "Bananas" },
                    { extensionCategory: "Berries & Cherries" },
                    { extensionCategory: "Grapes" },
                    { extensionCategory: "Melons & Mangoes" },
                    // this 2 "Pineapples & Kiwi Fruit"
                    { extensionCategory: "Pineapples & Kiwi Fruit" },
                    { extensionCategory: "Tropical & Exotic Fruit" },
                    { extensionCategory: "Citrus Fruit" },
                    { extensionCategory: "Cut Fruit" },
                ]
            },
            {
                subCategory: "Organic",
                childItems: [
                    { extensionCategory: "Organic Salad" },
                    { extensionCategory: "Organic Fruit" },
                    { extensionCategory: "Organic Vegetables" },
                ]
            },
            {
                subCategory: "Salad",
                childItems: [
                    { extensionCategory: "Organic Salad" },
                    { extensionCategory: "Salad Bags" },
                    { extensionCategory: "Herbs" },
                    { extensionCategory: "Sprouts" },
                ]
            },
            {
                subCategory: "Vegetables",
                childItems: [
                    { extensionCategory: "Avocados" },
                    { extensionCategory: "Peas, Beans, Corn & Asparagus" },
                    { extensionCategory: "Prepacked Vegetables" },
                    { extensionCategory: "Broccoli, Cauliflower & Cabbage" },
                    { extensionCategory: "Capsicum & Mushrooms" },
                    { extensionCategory: "Onions & Leeks" },
                    { extensionCategory: "Cucumber" },
                    { extensionCategory: "Potatoes & Pumpkins" },
                    { extensionCategory: "Tomatoes" },
                    { extensionCategory: "Zucchini, Eggplant & Squash" },
                ]
            },
        ]
    },
    {
        category: "Poultry, Meat & Seafood",
        subCategories: [

            /**
             * @commented because its done
             */
            {
                subCategory: "BBQ Meat & Seafood",
                childItems: [
                    { extensionCategory: "Burgers & Sausages" },
                    { extensionCategory: "Chicken" },
                    { extensionCategory: "Lamb" },
                    { extensionCategory: "Prawns" },
                    { extensionCategory: "Pork" },
                ]
            },
            {
                subCategory: "Seafood",
                childItems: [
                    { extensionCategory: "Crab & Lobster" },
                    { extensionCategory: "Prepacked Seafood" }, // 
                ]
            },
        ]
    },
    {
        category: "Freezer",
        subCategories: [
            /**
             * @commented because its done
             */
            {
                subCategory: "Chips & Wedges",
                childItems: [
                    { extensionCategory: "Chips" },
                    { extensionCategory: "Hashbrowns" },
                    { extensionCategory: "Wedges" },
                ]
            },
            {
                subCategory: "Frozen Desserts",
                childItems: [
                    { extensionCategory: "Assorted Desserts" },
                    { extensionCategory: "Cakes & Cheesecakes" },
                    { extensionCategory: "Dessert Pies & Pastries" },
                    { extensionCategory: "Pastry Sheets" },
                ]
            },
            {
                subCategory: "Frozen Fruit",
                childItems: [
                    { extensionCategory: "Berries & Tropical" },
                ]
            },
            {
                subCategory: "Frozen Meat",
                childItems: [
                    { extensionCategory: "Chicken Pieces & Nuggets" },
                    { extensionCategory: "Whole Birds & Roasts" },
                ]
            },
            {
                subCategory: "Frozen Party Food",
                childItems: [
                    { extensionCategory: "Pastry Sheets" },
                    { extensionCategory: "Pies, Pastries & Quiches" },
                    { extensionCategory: "Pies & Quiches" },
                ]
            },
            {
                subCategory: "Frozen Pizzas",
                childItems: [
                    { extensionCategory: "Pizzas" },
                ]
            },
            {
                subCategory: "Frozen Seafood",
                childItems: [
                    { extensionCategory: "Fish Fillets" },
                    { extensionCategory: "Fish Fingers & Cakes" },
                    { extensionCategory: "Frozen Seafood" },
                ]
            },
            {
                subCategory: "Frozen Vegetables",
                childItems: [
                    { extensionCategory: "Beans & Peas" },
                    { extensionCategory: "Corn" },
                    { extensionCategory: "Mixed Vegetables" },
                    { extensionCategory: "Other Vegetables" },
                    { extensionCategory: "Steam Packs" },
                ]
            },
            {
                subCategory: "Ice Cream",
                childItems: [
                    { extensionCategory: "Frozen Yoghurt" },
                    { extensionCategory: "Gelato & Sorbet" },
                    { extensionCategory: "Ice Cream Sticks & Cones" },
                    { extensionCategory: "Ice Cream Tubs" },
                    { extensionCategory: "Premium Ice Cream" },
                ]
            },
        ]
    },
    {
        category: "Bakery",
        subCategories: [
            {
                subCategory: "In-Store Bakery",
                childItems: [
                    { extensionCategory: "Bread" },
                    { extensionCategory: "Bread Rolls" },
                    { extensionCategory: "Donuts & Cookies" },
                    { extensionCategory: "Pastries & Desserts" },
                    { extensionCategory: "Sourdough & Specialty Bread" },
                ]
            },
            {
                subCategory: "Packaged Bread & Bakery",
                childItems: [
                    { extensionCategory: "Bake At Home" },
                    { extensionCategory: "Cakes" },
                    { extensionCategory: "Crumpets & Pancakes" },
                    { extensionCategory: "Desserts & Pastries" },
                    { extensionCategory: "Gluten-Free" },
                    { extensionCategory: "Muffins, Scones & Cupcakes" },
                    { extensionCategory: "Organic Bakery" },
                    { extensionCategory: "Packaged Bread" },
                    { extensionCategory: "Pies & Quiches" },
                    { extensionCategory: "Pizza Bases" },
                    { extensionCategory: "Rolls & Bagels" },
                    { extensionCategory: "Wraps & Flatbread" },
                ]
            },
        ]
    },
    {
        category: "Pet",
        subCategories: [
            /**
             * @commented because its done
             */
            {
                subCategory: "Birds, Fish & Small Pets",
                childItems: [
                    { extensionCategory: "Bird Treats" },
                    { extensionCategory: "Small Pets Food" },
                ]
            },
            {
                subCategory: "Cat & Kitten",
                childItems: [
                    { extensionCategory: "Chilled Cat Food" },
                    { extensionCategory: "Dry Cat Food" },
                    { extensionCategory: "Kitten Food" },
                ]
            },
            {
                subCategory: "Dog & Puppy",
                childItems: [
                    { extensionCategory: "Chilled Dog Food" },
                    { extensionCategory: "Frozen Dog Food" },
                    { extensionCategory: "Puppy Food" },
                ]
            },
        ]
    },
    {
        category: "Drinks",
        subCategories: [
            {
                subCategory: "Chilled Drinks",
                childItems: [
                    { extensionCategory: "Chilled Juices, Iced Teas & Iced Coffee" },
                    { extensionCategory: "Chilled Soft Drinks & Energy Drinks" },
                    { extensionCategory: "Chilled Water" },
                ]
            },
            {
                subCategory: "Coffee",
                childItems: [
                    { extensionCategory: "Coffee Beans" },
                    { extensionCategory: "Coffee Capsules" },
                    { extensionCategory: "Ground Coffee" },
                    { extensionCategory: "Instant & Flavoured Coffee" },
                ]
            },
            {
                subCategory: "Cordials, Juices & Iced Teas",
                childItems: [
                    { extensionCategory: "Chilled Juices" },
                    { extensionCategory: "Cordials" },
                    { extensionCategory: "Iced Teas" },
                    { extensionCategory: "Juices" },
                    { extensionCategory: "Lunch Box Juice" },
                ]
            },
            {
                subCategory: "Flavoured Milk",
                childItems: [
                    { extensionCategory: "Bubble Tea" },
                    { extensionCategory: "Drinking Chocolate" },
                    { extensionCategory: "Drinks & Powders" },
                    { extensionCategory: "Kids Milk" },
                ]
            },
            {
                subCategory: "Long Life Milk",
                childItems: [
                    { extensionCategory: "Almond Milk" },
                    { extensionCategory: "Condensed & Evaporated Milk" },
                    { extensionCategory: "Lactose Free Milk" },
                    { extensionCategory: "Oat & Rice Milk" },
                    { extensionCategory: "Powdered Milk" },
                    { extensionCategory: "Soy Milk" },
                ]
            },
            {
                subCategory: "Soft Drinks",
                childItems: [
                    { extensionCategory: "Mixers" },
                    { extensionCategory: "Soft Drink Bottles" },
                    { extensionCategory: "Soft Drink Cans" },
                ]
            },
            {
                subCategory: "Sports & Energy Drinks",
                childItems: [
                    { extensionCategory: "Energy Drinks" },
                    { extensionCategory: "Sports Drinks" },
                ]
            },
            {
                subCategory: "Tea",
                childItems: [
                    { extensionCategory: "Black Tea" },
                    { extensionCategory: "Green Tea" },
                    { extensionCategory: "Herbal & Specialty Tea" },
                ]
            },
            {
                subCategory: "Water",
                childItems: [
                    { extensionCategory: "Flavoured & Coconut Water" },
                    { extensionCategory: "Sparkling Water" },
                    { extensionCategory: "Still Water" },
                ]
            },
        ]
    },
    {
        category: "Deli & Chilled Meals",
        subCategories: [
            {
                subCategory: "Deli Meats",
                childItems: [
                    { extensionCategory: "Deli Poultry" },
                    { extensionCategory: "Packaged Ham, Bacon & Salami" },
                    { extensionCategory: "Sliced & Shaved Deli Meat" },
                ]
            },
            {
                subCategory: "Deli Specialties",
                childItems: [
                    { extensionCategory: "Antipasto" },
                    { extensionCategory: "Dips & Pate" },
                    { extensionCategory: "Gourmet Cheese" },
                    { extensionCategory: "Platters" },
                ]
            },
            {
                subCategory: "Ready to Eat Meals",
                childItems: [
                    { extensionCategory: "Chilled Pizza & Garlic Bread" },
                    { extensionCategory: "Chilled Quiches & Pies" },
                    { extensionCategory: "Chilled Soup" },
                    { extensionCategory: "Entertaining & Sides" },
                    { extensionCategory: "Family Meals" },
                    { extensionCategory: "Fresh Pasta & Sauces" },
                    { extensionCategory: "Packaged Salads" },
                    { extensionCategory: "Single Serve" },
                ]
            },
            {
                subCategory: "Vegetarian & Vegan",
                childItems: [
                    { extensionCategory: "Vegan" },
                    { extensionCategory: "Vegetarian" },
                ]
            },
        ]
    },
    {
        category: "Dairy, Eggs & Fridge",
        subCategories: [
            {
                subCategory: "Cheese",
                childItems: [
                    { extensionCategory: "Block Cheese" },
                    { extensionCategory: "Cooking Cheese" },
                    { extensionCategory: "Entertaining Cheese" },
                    { extensionCategory: "Fetta & Goat's Cheese" },
                    { extensionCategory: "Grated Cheese" },
                    { extensionCategory: "Parmesan & Italian Cheese" },
                    { extensionCategory: "Ricotta, Cottage & Cream Cheese" },
                    { extensionCategory: "Sliced Cheese" },
                    { extensionCategory: "Snacking Cheese" },
                    { extensionCategory: "Soft Cheese" },
                ]
            },
            {
                subCategory: "Cream, Custard & Desserts",
                childItems: [
                    { extensionCategory: "Cream" },
                    { extensionCategory: "Custard" },
                ]
            },
            {
                subCategory: "Dips & Pate",
                childItems: [
                    { extensionCategory: "Dips" },
                    { extensionCategory: "Pate, Paste & Caviar" },
                ]
            },
            {
                subCategory: "Eggs, Butter & Margarine",
                childItems: [
                    { extensionCategory: "Butter & Margarine" },
                    { extensionCategory: "Eggs" },
                ]
            },
            {
                subCategory: "Fresh Pasta & Sauces",
                childItems: [
                    { extensionCategory: "Fresh Pasta & Noodles" },
                    { extensionCategory: "Pasta Sauces" },
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Chilled Asian" },
                ]
            },
            {
                subCategory: "Milk",
                childItems: [
                    { extensionCategory: "Flavoured Milk" },
                    { extensionCategory: "Full Cream Milk" },
                    { extensionCategory: "Lactose Free Milk" },
                    { extensionCategory: "Long Life Milk" },
                    { extensionCategory: "Skim & Reduced Fat Milk" },
                    { extensionCategory: "Soy & Speciality Milk" },
                ]
            },
            {
                subCategory: "Ready to Eat Meals",
                childItems: [
                    { extensionCategory: "Asian Meals" },
                    { extensionCategory: "Chilled Pizza & Bread" },
                    { extensionCategory: "Chilled Ready Meals" },
                    { extensionCategory: "Chilled Soup" },
                    { extensionCategory: "Indian Meals" },
                    { extensionCategory: "Italian Meals" },
                    { extensionCategory: "Packaged Salads & Sides" },
                    { extensionCategory: "Vegetarian & Meat Free" },
                ]
            },
        ]
    },
    {
        category: "Beauty & Personal Care",
        subCategories: [
            {
                subCategory: "Cosmetics",
                childItems: [
                    { extensionCategory: "Cosmetics Other" },
                    { extensionCategory: "Eyes" },
                    { extensionCategory: "Face" },
                    { extensionCategory: "Lips" },
                    { extensionCategory: "Nails" },
                ]
            },
            {
                subCategory: "Dental Care",
                childItems: [
                    { extensionCategory: "Denture Care" },
                    { extensionCategory: "Floss & Mouthwash" },
                    { extensionCategory: "Teeth Whitening" },
                    { extensionCategory: "Toothbrushes" },
                    { extensionCategory: "Toothpaste" },
                ]
            },
            {
                subCategory: "Hair Care",
                childItems: [
                    { extensionCategory: "Colouring" },
                    { extensionCategory: "Hair Accessories & Brushes" },
                    { extensionCategory: "Mens Hair Care" },
                    { extensionCategory: "Shampoo & Conditioner" },
                    { extensionCategory: "Styling Products" },
                ]
            },
            {
                subCategory: "Skin Care",
                childItems: [
                    { extensionCategory: "Body Moisturiser" },
                    { extensionCategory: "Face Masks & Treatments" },
                    { extensionCategory: "Face Moisturiser" },
                    { extensionCategory: "Facial Cleansers, Toners & Scrubs" },
                    { extensionCategory: "183 Hand Moisturiser" },
                    { extensionCategory: "Lip Care" },
                    { extensionCategory: "Self-Tanning" },
                    { extensionCategory: "Sun Protection" },
                ]
            },
        ]
    },
    {
        category: "Health & Wellness",
        subCategories: [
            {
                subCategory: "First Aid & Medicinal",
                childItems: [
                    { extensionCategory: "Bandaids & Bandages" },
                    { extensionCategory: "Cold, Flu & Allergies" },
                    { extensionCategory: "Cotton Wool & Cotton Buds" },
                    { extensionCategory: "Medicinal Oils & Ointments" },
                ]
            },
            {
                subCategory: "Vitamins",
                childItems: [
                    { extensionCategory: "Brain & Heart Health" },
                    { extensionCategory: "Detox & Digestion" },
                    { extensionCategory: "Hair, Skin & Nails" },
                    { extensionCategory: "Brain & Heart Health" },
                ]
            },
        ]
    },
]

export default categories;