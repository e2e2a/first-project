const categories = [
  {
      category: "Baby",
      subCategories: [
          {
              subCategory: "Baby Accessories",
              childItems: [
                  { extensionCategory: "Baby Bibs" },
                  { extensionCategory: "Baby Health & Safety" },
                  { extensionCategory: "Baby Teething & Soothers" },
                  { extensionCategory: "Bath & Skincare" },
                  { extensionCategory: "Bottles and Baby Feeding" },
              ]
          },
          {
              subCategory: "Baby Food",
              childItems: [
                  { extensionCategory: "Baby & Toddler Snacks" },
              ]
          },
          {
              subCategory: "Baby Formula",
              childItems: [
                  { extensionCategory: "Specialty" },
              ]
          },
          {
              subCategory: "Nappies Wipes",
              childItems: [
                  { extensionCategory: "Nappy Pants" },
                  { extensionCategory: "Swimming Nappies" },
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
                  { extensionCategory: "Bread Rolls" },
                  // Note: the extensionCategory must be "Donuts & Cookies"
                  // { extensionCategory: "Donuts & Cookies" },
                  { extensionCategory: "Donuts" },
                  { extensionCategory: "Cookies" },
              ]
          },
          {
              subCategory: "Packaged Bread & Bakery",
              childItems: [
                  { extensionCategory: "Gluten Free Bakery" },
                //   { extensionCategory: "Packaged Bread" },
                //   { extensionCategory: "Pizza Bases" },
              ]
          },
      ]
  },
    // {
    //     category: "Dairy, Eggs & Fridge",
    //     subCategories: [
    //         {
    //             subCategory: "Cheese",
    //             childItems: [
    //                 { extensionCategory: "Block Cheese" },
    //                 { extensionCategory: "Grated Cheese" },
    //                 { extensionCategory: "Sliced Cheese" },
    //             ]
    //         },
    //         {
    //             subCategory: "Cream, Custard & Desserts",
    //             childItems: [
    //                 { extensionCategory: "Cream" },
    //                 { extensionCategory: "Custard" },
    //             ]
    //         },
    //         {
    //             subCategory: "Dips & Pate",
    //             childItems: [
    //                 { extensionCategory: "Dips" },
    //                 // The extensionCategory should be "Pate, Paste & Caviar"
    //                 // { extensionCategory: "Pate, Paste & Caviar" },
    //                 { extensionCategory: "Pate" },
    //                 { extensionCategory: "Paste" },
    //             ]
    //         },
    //         /**
    //          * @commented because its done
    //          */
    //         {
    //             subCategory: "Eggs, Butter & Margarine",
    //             childItems: [
    //                 { extensionCategory: "Butter & Margarine" },
    //                 { extensionCategory: "Eggs" },
    //             ]
    //         },
    //         {
    //             subCategory: "Fresh Pasta & Sauces",
    //             childItems: [
    //                 { extensionCategory: "Fresh Pasta & Noodles" },
    //                 // { extensionCategory: "Pasta Sauces" },
    //             ]
    //         },
    //         // {
    //         //     subCategory: "Milk",
    //         //     childItems: [
    //         //         { extensionCategory: "Long Life Milk" },
    //         //         { extensionCategory: "Lactose Free Milk" },
    //         //     ]
    //         // },
    //     ]
    // },
  //   {
  //       category: "Deli & Chilled Meats",
  //       subCategories: [
  //           {
  //               subCategory: "Deli Meats",
  //               childItems: [
  //                   { extensionCategory: "Deli Poultry" },
  //                   { extensionCategory: "Sliced & Shaved Deli Meat" },
  //               ]
  //           },
  //         //   {
  //         //       subCategory: "Deli Specialties",
  //         //       childItems: [
  //         //           { extensionCategory: "Antipasto" },
  //         //           { extensionCategory: "Gourmet Cheese" },
  //         //           { extensionCategory: "Platters" },
  //         //       ]
  //         //   },
  //         //   {
  //         //       subCategory: "Ready to Eat Meals",
  //         //       childItems: [
  //         //           { extensionCategory: "Chilled Quiches & Pies" },
  //         //       ]
  //         //   },
  //       ]
  //   },
  //   {
  //       category: "Drinks",
  //       subCategories: [
  //           {
  //               subCategory: "Chilled Drinks",
  //               childItems: [
  //                   // this 2 will be "Chilled Soft Drinks & Energy Drinks"
  //                   // { extensionCategory: "Chilled Soft Drinks & Energy Drinks" },
  //                   { extensionCategory: "Soft Drinks" },
  //                   { extensionCategory: "Energy Drinks" },
  //                   { extensionCategory: "Chilled Water" },
  //               ]
  //           },
  //           {
  //               subCategory: "Coffee",
  //               childItems: [
  //                   { extensionCategory: "Coffee Beans" },
  //                   { extensionCategory: "Coffee Capsules" },
  //                   { extensionCategory: "Ground Coffee" },
  //                 //   { extensionCategory: "Instant & Flavoured Coffee" },
  //               ]
  //           },
  //         //   {
  //         //       subCategory: "Cordials, Juices & Iced Teas",
  //         //       childItems: [
  //         //           { extensionCategory: "Chilled Juices" },
  //         //           { extensionCategory: "Cordials" },
  //         //           { extensionCategory: "Iced Teas" },
  //         //       ]
  //         //   },
  //         //   {
  //         //       subCategory: "Flavoured Milk",
  //         //       childItems: [
  //         //           { extensionCategory: "Drinking Chocolate" },
  //         //           { extensionCategory: "Drinks & Powders" },
  //         //           { extensionCategory: "Kids Milk" },
  //         //       ]
  //         //   },
  //         //   {
  //         //       subCategory: "Long Life Milk",
  //         //       childItems: [
  //         //           { extensionCategory: "Almond Milk" },
  //         //           { extensionCategory: "Lactose Free Milk" },
  //         //           { extensionCategory: "Oat & Rice Milk" },
  //         //           { extensionCategory: "Powdered Milk" },
  //         //           { extensionCategory: "Soy Milk" },
  //         //       ]
  //         //   },
  //         //   {
  //         //       subCategory: "Soft Drinks",
  //         //       childItems: [
  //         //           { extensionCategory: "Mixers" },
  //         //           { extensionCategory: "Soft Drink Bottles" },
  //         //           { extensionCategory: "Soft Drink Cans" },
  //         //       ]
  //         //   },
  //         //   {
  //         //       subCategory: "Sports & Energy Drinks",
  //         //       childItems: [
  //         //           { extensionCategory: "Energy Drinks" },
  //         //           { extensionCategory: "Sports Drinks" },
  //         //       ]
  //         //   },
  //         //   {
  //         //       subCategory: "Tea",
  //         //       childItems: [
  //         //           { extensionCategory: "Black Tea" },
  //         //           { extensionCategory: "Green Tea" },
  //         //           { extensionCategory: "Herbal & Specialty Tea" },
  //         //       ]
  //         //   },
  //         //   {
  //         //       subCategory: "Water",
  //         //       childItems: [
  //         //           { extensionCategory: "Flavoured & Coconut Water" },
  //         //           { extensionCategory: "Sparkling Water" },
  //         //           { extensionCategory: "Still Water" },
  //         //       ]
  //         //   },
  //       ]
  //   },
  //   {
  //     category: 'Freezer',
  //     subCategories: [
  //     //   {
  //     //     subCategory: 'Frozen Desserts',
  //     //     childItems: [
  //     //       { extensionCategory: 'Assorted Desserts' },
  //     //       { extensionCategory: 'Cakes & Cheesecakes' },
  //     //       { extensionCategory: 'Dessert Pies & Pastries' },
  //     //     ],
  //     //   },
  //     //   {
  //     //     subCategory: 'Frozen Fruit',
  //     //     childItems: [
  //     //       // 2 extension must be Berries & Tropical
  //     //       // { extensionCategory: "Berries & Tropical" },
  //     //       { extensionCategory: 'Berries' },
  //     //       { extensionCategory: 'Tropical' },
  //     //     ],
  //     //   },
  //         // {
  //         //     subCategory: "Frozen Meat",
  //         //     childItems: [
  //         //         { extensionCategory: "Chicken Pieces & Nuggets" },
  //         //         { extensionCategory: "Whole Birds & Roasts" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Frozen Party Food",
  //         //     childItems: [
  //         //         { extensionCategory: "Pastry Sheets" },
  //         //         // this 2 main extCategory "Pies, Pastries & Quiches"
  //         //         // { extensionCategory: "Pies, Pastries & Quiches" },
  //         //         { extensionCategory: "Pastries" },
  //         //         { extensionCategory: "Pies & Quiches" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Frozen Pizzas",
  //         //     childItems: [
  //         //         { extensionCategory: "Pizzas" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Frozen Seafood",
  //         //     childItems: [
  //         //         { extensionCategory: "Fish Fillets" },
  //         //         { extensionCategory: "Fish Fingers & Cakes" },
  //         //         { extensionCategory: "Frozen Seafood" },
  //         //     ]
  //         // },
  //         {
  //             subCategory: "Frozen Vegetables",
  //             childItems: [
  //                 // this 2 is "Beans & Peas"
  //                 // { extensionCategory: "Beans & Peas" },
  //                 // { extensionCategory: "Beans" },
  //                 // { extensionCategory: "Peas" },
  //                 // { extensionCategory: "Corn" },
  //                 // { extensionCategory: "Mixed Vegetables" },
  //                 { extensionCategory: "Other Vegetables" },
  //                 { extensionCategory: "Steam Packs" },
  //             ]
  //         },
  //         {
  //             subCategory: "Ice Cream",
  //             childItems: [
  //                 { extensionCategory: "Frozen Yoghurt" },
  //                 { extensionCategory: "Gelato & Sorbet" },
  //                 { extensionCategory: "Ice Cream Sticks & Cones" },
  //                 { extensionCategory: "Ice Cream Tubs" },
  //                 { extensionCategory: "Premium Ice Cream" },
  //             ]
  //         },
  //     ],
  //   },
  //   {
  //     category: 'Fruit & Veg',
  //     subCategories: [
  //       //   {
  //       //       subCategory: "Fruit",
  //       //       childItems: [
  //       //           // this 2 "Apples & Pears"
  //       //           // { extensionCategory: "Apples & Pears" },
  //       //           { extensionCategory: "Apples" },
  //       //           { extensionCategory: "Pears" },
  //       //           { extensionCategory: "Bananas" },
  //       //           { extensionCategory: "Berries & Cherries" },
  //       //           { extensionCategory: "Grapes" },
  //       //           // this 2 "Melons & Mangoes"
  //       //           // { extensionCategory: "Melons & Mangoes" }, //
  //       //           { extensionCategory: "Melons" },
  //       //           { extensionCategory: "Mangoes" },
  //       //           // this 2 "Pineapples & Kiwi Fruit"
  //       //           // { extensionCategory: "Pineapples & Kiwi Fruit" }, //
  //       //           { extensionCategory: "Pineapples" },
  //       //           { extensionCategory: "Kiwi Fruit" },
  //       //           { extensionCategory: "Tropical & Exotic Fruit" },
  //       //       ]
  //       //   },
  //       //   {
  //       //       subCategory: "Organic",
  //       //       childItems: [
  //       //           { extensionCategory: "Organic Fruit" },
  //       //           { extensionCategory: "Organic Vegetables" },
  //       //       ]
  //       //   },
  //       //   {
  //       //       subCategory: "Salad",
  //       //       childItems: [
  //       //           { extensionCategory: "Herbs" },
  //       //           { extensionCategory: "Sprouts" },
  //       //       ]
  //       //   },
  //       {
  //         subCategory: 'Vegetables',
  //         childItems: [
  //           //   { extensionCategory: "Broccoli, Cauliflower & Cabbage" },
  //           //   { extensionCategory: "Capsicum & Mushrooms" },
  //           //   { extensionCategory: "Onions & Leeks" },
  //           { extensionCategory: 'Cucumber' },
  //           // this 2 "Potatoes & Pumpkins"
  //           // { extensionCategory: "Potatoes & Pumpkins" },
  //           { extensionCategory: 'Potatoes' },
  //           { extensionCategory: 'Pumpkins' },
  //           { extensionCategory: 'Tomatoes' },
  //           // this 2 "Zucchini, Eggplant & Squash"
  //           // { extensionCategory: "Zucchini, Eggplant & Squash" },
  //           { extensionCategory: 'Eggplant' },
  //           { extensionCategory: 'Zucchini & Squash' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     category: 'Health & Beauty',
  //     subCategories: [
  //       //   {
  //       //       subCategory: "Cosmetics",
  //       //       childItems: [
  //       //           { extensionCategory: "Lips" },
  //       //           { extensionCategory: "Nails" },
  //       //       ]
  //       //   },
  //       //   {
  //       //       subCategory: "Dental Care",
  //       //       childItems: [
  //       //           { extensionCategory: "Denture Care" },
  //       //           { extensionCategory: "Toothbrushes" },
  //       //           { extensionCategory: "Toothpaste" },
  //       //       ]
  //       //   },
  //       {
  //         subCategory: 'First Aid & Medicinal',
  //         childItems: [
  //           //   { extensionCategory: "Antiseptic" },
  //           //   { extensionCategory: "Cold, Flu & Allergies" },
  //           { extensionCategory: 'Cotton Wool & Cotton Buds' },
  //           { extensionCategory: 'Medicinal Oils & Ointments' },
  //           { extensionCategory: 'Quit Smoking' },
  //         ],
  //       },
  //       {
  //         subCategory: 'Hair Care',
  //         childItems: [
  //           { extensionCategory: 'Colouring' },
  //           { extensionCategory: 'Hair Accessories & Brushes' },
  //           { extensionCategory: 'Mens Hair Care' },
  //           { extensionCategory: 'Shampoo & Conditioner' },
  //           { extensionCategory: 'Styling Products' },
  //         ],
  //       },
  //       {
  //         subCategory: 'Personal Care & Hygiene',
  //         childItems: [
  //           { extensionCategory: 'Contraception & Sexual Health' },
  //           { extensionCategory: 'Female Deodorants & Body Sprays' },
  //           //   { extensionCategory: "Male Deodorants & Body Sprays" },
  //           //   { extensionCategory: "Pregnancy Tests" },
  //         ],
  //       },
  //       //   {
  //       //       subCategory: "Shaving & Hair Removal",
  //       //       childItems: [
  //       //           { extensionCategory: "After Shave Care" },
  //       //           { extensionCategory: "Shave Gel & Foam" },
  //       //       ]
  //       //   },
  //       //   {
  //       //       subCategory: "Skin Care",
  //       //       childItems: [
  //       //           { extensionCategory: "Body Moisturiser" },
  //       //           { extensionCategory: "Face Moisturiser" },
  //       //           { extensionCategory: "183 Hand Moisturiser" },
  //       //           { extensionCategory: "Lip Care" },
  //       //           { extensionCategory: "Self-Tanning" },
  //       //       ]
  //       //   },
  //       //   {
  //       //       subCategory: "Vitamins",
  //       //       childItems: [
  //       //           { extensionCategory: "Brain & Heart Health" },
  //       //           { extensionCategory: "Detox & Digestion" },
  //       //           { extensionCategory: "Hair, Skin & Nails" },
  //       //           { extensionCategory: "Others" },
  //       //       ]
  //       //   },
  //     ],
  //   },
  //   {
  //     category: 'Household',
  //     subCategories: [
  //     //   {
  //     //     subCategory: 'Cleaning Goods',
  //     //     childItems: [
  //     //       // { extensionCategory: "Bathroom Cleaners" },
  //     //       // { extensionCategory: "Disinfectant & Bleach" },
  //     //       // { extensionCategory: "Drain Cleaners & Solvents" },
  //     //       { extensionCategory: 'Fabric, Metal & Furniture Care' },
  //     //       { extensionCategory: 'Floor/Carpet Cleaners' },
  //     //       { extensionCategory: 'Gloves' },
  //     //       { extensionCategory: 'Kitchen Cleaners' },
  //     //       { extensionCategory: 'Mops, Buckets & Brooms' },
  //     //       { extensionCategory: 'Multipurpose Cleaners' },
  //     //       { extensionCategory: 'Sponges, Cloths & Wipes' },
  //     //       { extensionCategory: 'Window & Glass Cleaners' },
  //     //     ],
  //     //   },
  //     //   {
  //     //     subCategory: 'Homewares',
  //     //     childItems: [{ extensionCategory: 'Water Filtration' }],
  //     //   },
  //     //   {
  //     //     subCategory: 'Kitchen',
  //     //     childItems: [{ extensionCategory: 'Sandwich & Freezer Bags' }],
  //     //   },
  //       {
  //           subCategory: "Laundry",
  //           childItems: [
  //               { extensionCategory: "Fabric Softener" },
  //               // 2 "Ironing & Accessories"
  //               // { extensionCategory: "Ironing & Accessories" },
  //               { extensionCategory: "Ironing" },
  //               { extensionCategory: "Accessories" },
  //               { extensionCategory: "Laundry Liquid" },
  //               { extensionCategory: "Laundry Powder" },
  //               { extensionCategory: "Pegs, Baskets & Hangers" },
  //           ]
  //       },
  //       {
  //           subCategory: "Parties & Entertaining",
  //           childItems: [
  //               { extensionCategory: "Candles" },
  //               { extensionCategory: "Decorations" },
  //           ]
  //       },
  //       {
  //           subCategory: "Pest Control",
  //           childItems: [
  //               { extensionCategory: "Crawling Insects" },
  //               { extensionCategory: "Flying Insects" },
  //             //   { extensionCategory: "Garden Pests" },
  //             //   { extensionCategory: "Mosquitoes" },
  //             //   { extensionCategory: "Rodents" },
  //           ]
  //       },
  //     ],
  //   },
  // {
  //     category: "Pantry",
  //     subCategories: [
  //         /**
  //          * @commented because its done
  //          */
  //         // {
  //         //     subCategory: "Baking",
  //         //     childItems: [
  //         //         { extensionCategory: "Cooking Chocolate & Cocoa" },
  //         //         { extensionCategory: "Flavouring, Essence & Food Colouring" },
  //         //         { extensionCategory: "Flour" },
  //         //         { extensionCategory: "Icing & Cake Decorating" },
  //         //         { extensionCategory: "Nuts, Seeds & Coconut" },
  //         //         { extensionCategory: "Sugar & Sweeteners" },
  //         //         { extensionCategory: "Yeast & Baking Ingredients" }, // process1
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Breakfast & Spreads",
  //         //     childItems: [
  //         //         // { extensionCategory: "Breakfast Cereal" },
  //         //         // { extensionCategory: "Honey" },
  //         //         { extensionCategory: "Jam" },
  //         //         { extensionCategory: "Savoury Spread" },
  //         //         // 2 "Muesli & Oats"
  //         //         { extensionCategory: "Muesli & Oats" },
  //         //         { extensionCategory: "Muesli" },
  //         //         { extensionCategory: "Oats" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Canned Food & Instant Meals",
  //         //     childItems: [
  //         //         { extensionCategory: "Baked Beans & Spaghetti" },
  //         //         { extensionCategory: "Canned Fruit" },
  //         //         // { extensionCategory: "Canned Meat" },
  //         //         // { extensionCategory: "Canned Soup & Soup Ingredients" },
  //         //         // { extensionCategory: "Canned Vegetables" },
  //         //         // { extensionCategory: "Instant Meals & Sides" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Condiments",
  //         //     childItems: [
  //         //         { extensionCategory: "Mustard" },
  //         //         { extensionCategory: "Sweet Chilli & Hot Sauce" },
  //         //         { extensionCategory: "Tomato & BBQ Sauce" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Desserts",
  //         //     childItems: [
  //         //         { extensionCategory: "Custard, Cream & Yoghurt" },
  //         //         { extensionCategory: "Ice Cream Cones, Syrups & Toppings" },
  //         //         { extensionCategory: "Jelly" },
  //         //         { extensionCategory: "Puddings" },
  //         //         { extensionCategory: "Ready to Freeze Ice Blocks" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Health Foods",
  //         //     childItems: [
  //         //         // { extensionCategory: "Health Breakfast Food & Spread" },
  //         //         // { extensionCategory: "Health Cooking & Pasta" },
  //         //         { extensionCategory: "Health Snacks & Drinks" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Herbs & Spices",
  //         //     childItems: [
  //         //         { extensionCategory: "Dried Herbs & Spices" },
  //         //         { extensionCategory: "Salt & Pepper" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "International Foods",
  //         //     childItems: [
  //         //         // { extensionCategory: "Asian" },
  //         //         // { extensionCategory: "European" },
  //         //         // { extensionCategory: "Indian" },
  //         //         // { extensionCategory: "Mexican" },
  //         //         { extensionCategory: "Middle Eastern" },
  //         //         { extensionCategory: "UK Foods" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Pasta, Rice & Grains",
  //         //     childItems: [
  //         //         { extensionCategory: "Beans & Legumes" },
  //         //         { extensionCategory: "Rice" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Sauce, Oil & Vinegar",
  //         //     childItems: [
  //         //         { extensionCategory: "Marinades & Seasoning" },
  //         //         { extensionCategory: "Pizza & Pasta Sauce" },
  //         //         { extensionCategory: "Soy & Asian Sauces" },
  //         //         { extensionCategory: "Stock & Gravy" },
  //         //     ]
  //         // },
  //         {
  //             subCategory: "Snacks & Confectionery",
  //             childItems: [
  //                 { extensionCategory: "Biscuits & Cookies" },
  //                 { extensionCategory: "Corn Chips & Salsa" },
  //                 { extensionCategory: "Muesli Bars & Snack" },
  //             ]
  //         },
  //         {
  //             subCategory: "Tea & Coffee",
  //             childItems: [
  //                 { extensionCategory: "Black Tea" },
  //                 { extensionCategory: "Green Tea" },
  //                 { extensionCategory: "Herbal & Specialty Tea" },
  //             ]
  //         },
  //     ]
  // },
  // {
  //     category: "Pet",
  //     subCategories: [
  //         // {
  //         //     subCategory: "Birds, Fish & Small Pets",
  //         //     childItems: [
  //         //         { extensionCategory: "Bird Treats" },
  //         //         { extensionCategory: "Small Pets Food" },
  //         //     ]
  //         // },
  //         // {
  //         //     subCategory: "Cat & Kitten",
  //         //     childItems: [
  //         //         { extensionCategory: "Dry Cat Food" },
  //         //         { extensionCategory: "Kitten Food" },
  //         //     ]
  //         // },
  //         {
  //             subCategory: "Dog & Puppy",
  //             childItems: [
  //                 { extensionCategory: "Puppy Food" },
  //             ]
  //         },
  //     ]
  // },
  // {
  //     category: "Poultry, Meat & Seafood",
  //     subCategories: [
  //         {
  //             subCategory: "BBQ Meat & Seafood",
  //             childItems: [
  //                 // 2 "Burgers & Sausages"
  //                 // { extensionCategory: "Burgers & Sausages" },
  //                 { extensionCategory: "Burgers" },
  //                 { extensionCategory: "Sausages" },
  //                 { extensionCategory: "Kebabs" },
  //             ]
  //         },
  //         {
  //             subCategory: "Seafood",
  //             childItems: [
  //                 { extensionCategory: "Crab & Lobster" },
  //                 { extensionCategory: "Prepacked Seafood" },
  //             ]
  //         },
  //     ]
  // },
];

export default categories;
