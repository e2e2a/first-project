const categories = [
    {
        category: "Household",
        subCategories: [
            {
                subCategory: "Bathroom",
                childItems: [
                    { extensionCategory: "Toilet Cleaners" }, // done
                ]
            },
            {
                subCategory: "Cleaning Goods",
                childItems: [
                    { extensionCategory: "Air Fresheners" }, // done
                    { extensionCategory: "Bathroom Cleaners" }, // done
                    { extensionCategory: "Disinfectant & Bleach" }, // done
                    { extensionCategory: "Drain Cleaners & Solvents" }, // done
                    { extensionCategory: "Fabric, Metal & Furniture Care" }, // done
                    { extensionCategory: "Floor-Carpet Cleaners" }, // done
                    { extensionCategory: "Gloves" },  // done
                    { extensionCategory: "Kitchen Cleaners" }, // done
                    { extensionCategory: "Mops, Buckets & Brooms" }, // done
                    { extensionCategory: "Mould & Moisture Treatments" }, // done
                    { extensionCategory: "Multipurpose Cleaners" }, // done
                    { extensionCategory: "Sponges, Cloths & Wipes" }, // done
                    { extensionCategory: "Window & Glass Cleaners" },  // done
                ]
            },
            {
                subCategory: "Clothing Accessories",
                childItems: [
                    { extensionCategory: "Hosiery" }, // done
                    { extensionCategory: "Socks" }, // done
                    { extensionCategory: "Underwear" }, // done
                ]
            },
            {
                subCategory: "Garden & Outdoors",
                childItems: [
                    { extensionCategory: "Automotive" }, // done
                    { extensionCategory: "Garden Décor & Accessories" }, // done
                    { extensionCategory: "Gloves, Tools & Watering" }, // done
                    { extensionCategory: "Insecticide & Weed Control" }, // done
                    { extensionCategory: "Lawn Care & Plant Food" }, // done
                    { extensionCategory: "Potting Mix & Fertilisers" }, // done
                    { extensionCategory: "Seeds & Plants" }, // done
                ]
            },
            {
                subCategory: "Hardware",
                childItems: [
                    { extensionCategory: "Adhesives, Glues & Tapes" }, // done
                    { extensionCategory: "Hooks & Fasteners" }, // done
                    { extensionCategory: "Tools & Accessories" }, // done
                ]
            },
            {
                subCategory: "Homewares",
                childItems: [
                    { extensionCategory: "Water Filtration" }, // done
                ]
            },
            {
                subCategory: "Kitchen",
                childItems: [
                    { extensionCategory: "​​Cling Wrap, Foil & Baking Paper:" }, // done
                    { extensionCategory: "Dishwashing" }, // done
                    { extensionCategory: "Garbage Bags" }, // done
                    { extensionCategory: "Gloves" }, // done
                    { extensionCategory: "Lunch Boxes & Drink Bottles" }, // done
                    { extensionCategory: "Sandwich & Freezer Bags" }, // done
                ]
            },
            {
                subCategory: "Laundry",
                childItems: [
                    { extensionCategory: "Fabric Softener" }, // done
                    { extensionCategory: "Ironing & Accessories" }, // done
                    { extensionCategory: "Laundry Liquid" }, // done
                    { extensionCategory: "Laundry Powder" }, // done
                    { extensionCategory: "Pegs, Baskets & Hangers" }, // done
                    { extensionCategory: "Stain Removal" }, // done
                ]
            },
            {
                subCategory: "Parties & Entertaining",
                childItems: [
                    { extensionCategory: "Candles" }, // done
                    { extensionCategory: "Decorations" }, // done
                ]
            },
            {
                subCategory: "Pest Control",
                childItems: [
                    { extensionCategory: "Crawling Insects" }, // done
                    { extensionCategory: "Flying Insects" }, // done
                    { extensionCategory: "Garden Pests" }, // done
                    { extensionCategory: "Insect Repellent" }, // done
                    { extensionCategory: "Mosquitoes" }, // done
                    { extensionCategory: "Rodents" }, // done
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
            /**
             * @commented because its done
             */
            {
                subCategory: "Baking",
                childItems: [
                    { extensionCategory: "Bread Mix" }, // done
                    { extensionCategory: "Cooking Chocolate & Cocoa" }, // done
                    { extensionCategory: "Flavouring, Essence & Food Colouring" }, // done
                    { extensionCategory: "Flour" }, // done
                    { extensionCategory: "Icing & Cake Decorating" }, // done
                    { extensionCategory: "Nuts, Seeds & Coconut" }, // done
                    { extensionCategory: "Sugar & Sweeteners" }, // done
                    { extensionCategory: "Yeast & Baking Ingredients" }, // process1
                    { extensionCategory: "Cake & Dessert Mix" }, // done
                    { extensionCategory: "Dried Fruit" }, // done
                    { extensionCategory: "Gluten Free Baking" }, // done
                ]
            },
            {
                subCategory: "Breakfast & Spreads",
                childItems: [
                    { extensionCategory: "Breakfast Cereal" }, // done
                    { extensionCategory: "Honey" }, // done
                    { extensionCategory: "Jam" }, // done
                    { extensionCategory: "Savoury Spread" }, // done
                    { extensionCategory: "Muesli & Oats" }, // done
                    { extensionCategory: "Breakfast Snacks & Drinks" }, // done
                    { extensionCategory: "Sweet Spread" }, // done
                ]
            },
            {
                subCategory: "Canned Food & Instant Meals",
                childItems: [
                    { extensionCategory: "Baked Beans & Spaghetti" }, // done
                    { extensionCategory: "Canned Fruit" }, // done
                    { extensionCategory: "Canned Meat" }, // done
                    { extensionCategory: "Canned Soup & Soup Ingredients" }, // done
                    { extensionCategory: "Canned Vegetables" }, // done
                    { extensionCategory: "Instant Meals & Sides" }, // done
                    { extensionCategory: "Canned Tomatoes" }, // done
                    { extensionCategory: "Canned Tuna" }, // done
                ]
            },
            {
                subCategory: "Condiments",
                childItems: [
                    { extensionCategory: "Mustard" }, // done
                    { extensionCategory: "Sweet Chilli & Hot Sauce" }, // done
                    { extensionCategory: "Tomato & BBQ Sauce" }, // done
                    { extensionCategory: "Chutney & Relish" }, // done
                    { extensionCategory: "Fruit Sauce" }, // done
                    { extensionCategory: "Mayonnaise" }, // done
                    { extensionCategory: "Pickled Vegetables" }, // done
                    { extensionCategory: "Salad Dressings" }, // done
                ]
            },
            {
                subCategory: "Ice Cream Cones",
                childItems: [
                    { extensionCategory: "Ice Cream Cones, Syrups & Toppings" }, // done
                ]
            },
            {
                subCategory: "Desserts",
                childItems: [
                    { extensionCategory: "Custard, Cream & Yoghurt" }, // done 
                    { extensionCategory: "Ice Cream Cones, Syrups & Toppings" }, // done
                    { extensionCategory: "Jelly" }, // done
                    { extensionCategory: "Puddings" }, // done
                    { extensionCategory: "Ready to Freeze Ice Blocks" }, // done // but this is exist in ice cream category
                    { extensionCategory: "Dried Herbs & Spices" }, // done // but this is exist in ice cream category
                ]
            },
            {
                subCategory: "Health Foods",
                childItems: [
                    { extensionCategory: "Health Breakfast Food & Spread" }, // done
                    { extensionCategory: "Health Cooking & Pasta" }, // done
                    { extensionCategory: "Health Snacks & Drinks" }, // done
                ]
            },
            {
                subCategory: "Herbs & Spices",
                childItems: [
                    { extensionCategory: "Dried Herbs & Spices" }, // done
                    { extensionCategory: "Salt & Pepper" }, // done
                    { extensionCategory: "Breadcrumbs & Stuffings" }, // done
                    { extensionCategory: "Fresh Herbs, Garlic & Ginger Paste" }, // done
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Asian" }, // done
                    { extensionCategory: "European" }, // done
                    { extensionCategory: "Indian" }, // done
                    { extensionCategory: "Mexican" }, // done
                    { extensionCategory: "Middle Eastern" }, // done
                    { extensionCategory: "UK Foods" }, // done
                    { extensionCategory: "Italian" }, // done
                    { extensionCategory: "Kosher" }, // done
                ]
            },
            {
                subCategory: "Pasta, Rice & Grains",
                childItems: [
                    { extensionCategory: "Beans & Legumes" }, // done
                    { extensionCategory: "Rice" }, // done
                    { extensionCategory: "Dried Pasta" }, // done
                    { extensionCategory: "Gluten Free Pasta" }, // done
                    { extensionCategory: "Pasta Meals" }, // done
                    { extensionCategory: "Pasta Sheets" }, // done
                    { extensionCategory: "Quinoa, Cous Cous & Other Grains" }, // done
                ]
            },
            {
                subCategory: "Sauce, Oil & Vinegar",
                childItems: [
                    { extensionCategory: "Marinades & Seasoning" }, // done
                    { extensionCategory: "Pizza & Pasta Sauce" }, // done
                    { extensionCategory: "Soy & Asian Sauces" }, // done
                    { extensionCategory: "Stock & Gravy" }, // done
                ]
            },
            {
                subCategory: "Snacks & Confectionery",
                childItems: [
                    // { extensionCategory: "Biscuits & Cookies" }, // done
                    { extensionCategory: "Corn Chips & Salsa" }, // done
                    { extensionCategory: "Muesli Bars & Snack" }, // done
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
                    { extensionCategory: "Apples & Pears" }, // done
                    { extensionCategory: "Bananas" }, // done
                    { extensionCategory: "Berries & Cherries" }, // done
                    { extensionCategory: "Grapes" }, // done
                    { extensionCategory: "Melons & Mangoes" }, //done
                    // this 2 "Pineapples & Kiwi Fruit"
                    { extensionCategory: "Pineapples & Kiwi Fruit" }, //done
                    { extensionCategory: "Tropical & Exotic Fruit" }, // done
                    { extensionCategory: "Citrus Fruit" }, // done
                    { extensionCategory: "Cut Fruit" }, // done
                ]
            },
            {
                subCategory: "Organic",
                childItems: [
                    { extensionCategory: "Organic Salad" }, //done
                    { extensionCategory: "Organic Fruit" }, //done
                    { extensionCategory: "Organic Vegetables" }, //done
                ]
            },
            {
                subCategory: "Salad",
                childItems: [
                    { extensionCategory: "Organic Salad" }, //done
                    { extensionCategory: "Salad Bags" }, //done
                    { extensionCategory: "Herbs" }, //done
                    { extensionCategory: "Sprouts" }, //done
                ]
            },
            {
                subCategory: "Vegetables",
                childItems: [
                    { extensionCategory: "Avocados" }, // done
                    { extensionCategory: "Peas, Beans, Corn & Asparagus" }, // done
                    { extensionCategory: "Prepacked Vegetables" }, // done
                    { extensionCategory: "Broccoli, Cauliflower & Cabbage" }, // done
                    { extensionCategory: "Capsicum & Mushrooms" }, // done
                    { extensionCategory: "Onions & Leeks" },// done
                    { extensionCategory: "Cucumber" },
                    { extensionCategory: "Potatoes & Pumpkins" },
                    { extensionCategory: "Tomatoes" },
                    { extensionCategory: "Zucchini, Eggplant & Squash" }, // done
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
                    { extensionCategory: "Burgers & Sausages" }, // done
                    { extensionCategory: "Chicken" }, // done
                    { extensionCategory: "Lamb" }, // done
                    { extensionCategory: "Prawns" }, // done
                    { extensionCategory: "Pork" }, // done
                ]
            },
            {
                subCategory: "Seafood",
                childItems: [
                    { extensionCategory: "Crab & Lobster" }, // done
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
            /**
             * @commented because its done
             */
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
                    { extensionCategory: "Bird Treats" }, // done
                    { extensionCategory: "Small Pets Food" }, // done
                ]
            },
            {
                subCategory: "Cat & Kitten",
                childItems: [
                    { extensionCategory: "Chilled Cat Food" }, // done
                    { extensionCategory: "Dry Cat Food" }, // done
                    { extensionCategory: "Kitten Food" }, // done
                ]
            },
            {
                subCategory: "Dog & Puppy",
                childItems: [
                    { extensionCategory: "Chilled Dog Food" }, // done
                    { extensionCategory: "Frozen Dog Food" }, // done
                    { extensionCategory: "Puppy Food" }, // done
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
        category: "Deli & Chilled Meats",
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
        category: "Health & Beauty",
        subCategories: [
            {
                subCategory: "Cosmetics",
                childItems: [
                    { extensionCategory: "Cosmetics Other" }, // done
                    { extensionCategory: "Eyes" }, // done
                    { extensionCategory: "Face" }, // done
                    { extensionCategory: "Lips" }, // done
                    { extensionCategory: "Nails" }, // done
                ]
            },
            {
                subCategory: "Dental Care",
                childItems: [
                    { extensionCategory: "Denture Care" }, // done
                    { extensionCategory: "Floss & Mouthwash" }, // done
                    { extensionCategory: "Teeth Whitening" }, // done
                    { extensionCategory: "Toothbrushes" }, // done
                    { extensionCategory: "Toothpaste" }, // done
                ]
            },
            {
                subCategory: "Hair Care",
                childItems: [
                    { extensionCategory: "Colouring" }, // done
                    { extensionCategory: "Hair Accessories & Brushes" }, // done
                    { extensionCategory: "Mens Hair Care" }, // done
                    { extensionCategory: "Shampoo & Conditioner" }, // done
                    { extensionCategory: "Styling Products" }, // done
                ]
            },
            {
                subCategory: "Skin Care",
                childItems: [
                    { extensionCategory: "Body Moisturiser" }, // done
                    { extensionCategory: "Face Masks & Treatments" }, // done
                    { extensionCategory: "Face Moisturiser" }, // done
                    { extensionCategory: "Facial Cleansers, Toners & Scrubs" }, // done
                    { extensionCategory: "183 Hand Moisturiser" }, // done
                    { extensionCategory: "Lip Care" }, // done
                    { extensionCategory: "Self-Tanning" }, // done
                    { extensionCategory: "Sun Protection" }, // done
                ]
            },
            {
                subCategory: "First Aid & Medicinal",
                childItems: [
                    { extensionCategory: "Bandaids & Bandages" },
                    { extensionCategory: "Cold, Flu & Allergies" }, // done
                    { extensionCategory: "Cotton Wool & Cotton Buds" }, // done
                    { extensionCategory: "Medicinal Oils & Ointments" }, // done
                ]
            },
            {
                subCategory: "Vitamins",
                childItems: [
                    { extensionCategory: "Brain & Heart Health" }, // done
                    { extensionCategory: "Detox & Digestion" }, // done
                    { extensionCategory: "Hair, Skin & Nails" }, // done
                    { extensionCategory: "Brain & Heart Health" }, // done
                ]
            },
        ]
    },
]

export default categories;