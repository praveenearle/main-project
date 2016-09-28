//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {

    this.products = [
        new product("APL", "Apple", "Eat one every day to keep the doctor away.", 90, 90, 0, 2, 0, 1, 2),
        new product("AVC", "Avocado", "Guacamole anyone?", 300, 90, 0, 1, 1, 1, 2),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 30, 120, 0, 2, 1, 2, 2),
        new product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 400, 100, 0, 0, 0, 1, 2),
        new product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 70, 50, 4, 4, 1, 1, 1),
        new product("GRP", "Grape", "Wine is great, but grapes are even better.", 50, 100, 0, 3, 0, 1, 1),
        new product("GUA", "Guava", "Exotic, fragrant, tasty!", 15, 50, 4, 4, 0, 1, 2),
        new product("KIW", "Kiwi", "These come from New Zealand.", 250, 90, 1, 4, 0, 2, 2),
        new product("LYC", "Lychee", "Unusual and highly addictive!", 80, 125, 1, 4, 0, 2, 2),
        new product("MAN", "Mango", "Messy to eat, but well worth it.", 40, 70, 3, 4, 0, 1, 1),
        new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 60, 70, 1, 4, 2, 1, 2),
        new product("PAP", "Papaya", "Super-popular for breakfast.", 25, 60, 3, 4, 2, 2, 2),
        new product("PCH", "Peach", "Add some cream and enjoy.", 350, 70, 1, 2, 0, 1, 2),
        new product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 300, 100, 0, 2, 0, 1, 2),
        new product("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 140, 110, 0, 2, 0, 2, 0),
        new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 40, 60, 0, 3, 0, 0, 1),
        new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 500, 40, 0, 4, 1, 1, 2),
        new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 250, 90, 4, 4, 0, 1, 1),

        new product("BEA", "Beans", "Beans can are the least expensive source of protein, especially when compared to fresh meat.", 20, 90, 3, 1, 2, 4, 0),
        new product("BRI", "Brinjal", "brinjals are great for your heart.", 30, 90, 4, 0, 4, 3, 2),
        new product("CAP", "Capsicum", "These colorful and attractive vegetables are enjoyed all over the world in a variety of cuisines.", 40, 120, 3, 2, 1, 3, 4),
        new product("CAR", "Carrot", "carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese.", 30, 100, 2, 2, 4, 4, 3),
        new product("COL", "Coliflower", "one serving of cauliflower contains 77 percent of the recommended daily value of vitamin C.", 25, 50, 4, 0, 4, 2, 1),
        new product("CHI", "Green chilli", "Green chili is known for its rich source of vitamin C, vitamin B6, vitamin A, iron, copper, potassium with small amount of protein and carbohydrates too. ", 13, 100, 0, 3, 0, 1, 1),
        new product("ONI", "Onions", "The phytochemicals in onions along with their vitamin C help improve immunity.", 15, 50, 4, 0, 3, 1, 2),
        new product("SPA", "Spanich", "Spinach is a super food loaded with tons of nutrients in a low calorie package.", 18, 90, 4, 0, 0, 2, 3),
        new product("TOM", "Tomato", "Tomatoes are also a good source of potassium, manganese, magnesium, phosphorous, and copper.", 7, 125, 2, 0, 4, 4, 2),
        new product("POT", "Potato", "Potatoes: Health Benefits, Risks & Nutrition Fact.", 17, 125, 4, 4, 4, 3, 3),

       new product("BOO", "Boost", "Boost is a nutritional supplement drink from Nestle Nutrition, and varieties include regular.", 80),
       new product("COR", "Corn Flakes", "Cornflakes are a rich source of minerals, folate, dietary fiber along with proteins and carbohydrates.", 120),
       new product("RED", "Dabur Red", "Best herbal and ayurvedic toothpaste.", 40),
       new product("DET", "Dettol Soap", "Use Dettol Antiseptic Disinfectant Liquid to kill germs on the skin.", 25),
       new product("HON", "Honey", "Prevent cancer and heart disease: Honey contains flavonoids, antioxidants which help reduce the risk of some cancers and heart disease.", 200),
       new product("NIR", "Niram", "Washing powder.", 15),
       new product("LAB", "Red Label", "Red label is an ideal beverage, as it can be sipped hot or cold.", 70),
       new product("SAF", "Saffola oil", "Saffola Active is a unique blend of 80% refined rice bran oil and 20% soybean oil.", 300),
       new product("TAT", "Tata Salt", " The brand is now the biggest packaged salt brand in India, with a market share of 17%.", 20),
       new product("VIM", "Vim Bar", "With the power of 100 Lemons :P", 23)
    ];

    this.fruits = [
        new product("APL", "Apple", "Eat one every day to keep the doctor away.", 90, 90, 0, 2, 0, 1, 2),
        new product("AVC", "Avocado", "Guacamole anyone?", 300, 90, 0, 1, 1, 1, 2),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 30, 120, 0, 2, 1, 2, 2),
        new product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 400, 100, 0, 0, 0, 1, 2),
        new product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 70, 50, 4, 4, 1, 1, 1),
        new product("GRP", "Grape", "Wine is great, but grapes are even better.", 50, 100, 0, 3, 0, 1, 1),
        new product("GUA", "Guava", "Exotic, fragrant, tasty!", 15, 50, 4, 4, 0, 1, 2),
        new product("KIW", "Kiwi", "These come from New Zealand.", 250, 90, 1, 4, 0, 2, 2),
        new product("LYC", "Lychee", "Unusual and highly addictive!",80, 125, 1, 4, 0, 2, 2),
        new product("MAN", "Mango", "Messy to eat, but well worth it.", 40, 70, 3, 4, 0, 1, 1),
        new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 60, 70, 1, 4, 2, 1, 2),
        new product("PAP", "Papaya", "Super-popular for breakfast.", 25, 60, 3, 4, 2, 2, 2),
        new product("PCH", "Peach", "Add some cream and enjoy.", 350, 70, 1, 2, 0, 1, 2),
        new product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 300, 100, 0, 2, 0, 1, 2),
        new product("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!",140, 110, 0, 2, 0, 2, 0),
        new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 40, 60, 0, 3, 0, 0, 1),
        new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 500, 40, 0, 4, 1, 1, 2),
        new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 250, 90, 4, 4, 0, 1, 1)
    ];

    this.vegetables = [
        new product("BEA", "Beans", "Beans can are the least expensive source of protein, especially when compared to fresh meat.", 20, 90, 0, 2, 0, 1, 2),
        new product("BRI", "Brinjal", "brinjals are great for your heart.", 30, 90, 0, 1, 1, 1, 2),
        new product("CAP", "Capsicum", "These colorful and attractive vegetables are enjoyed all over the world in a variety of cuisines.", 40, 120, 0, 2, 1, 2, 2),
        new product("CAR", "Carrot", "carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese.", 30, 100, 0, 0, 0, 1, 2),
        new product("COL", "Coliflower", "one serving of cauliflower contains 77 percent of the recommended daily value of vitamin C.", 25, 50, 4, 4, 1, 1, 1),
        new product("CHI", "Green chilli", "Green chili is known for its rich source of vitamin C, vitamin B6, vitamin A, iron, copper, potassium with small amount of protein and carbohydrates too. ", 13, 100, 0, 3, 0, 1, 1),
        new product("ONI", "Onions", "The phytochemicals in onions along with their vitamin C help improve immunity.", 15, 50, 4, 4, 0, 1, 2),
        new product("SPA", "Spanich", "Spinach is a super food loaded with tons of nutrients in a low calorie package.", 18, 90, 1, 4, 0, 2, 2),
        new product("TOM", "Tomato", "Tomatoes are also a good source of potassium, manganese, magnesium, phosphorous, and copper.", 7, 125, 1, 4, 0, 2, 2),
        new product("POT", "Potato", "Potatoes: Health Benefits, Risks & Nutrition Facts.", 17, 125, 1, 4, 0, 2, 2)

    ];

    this.groceries = [
       new product("BOO", "Boost", "Boost is a nutritional supplement drink from Nestle Nutrition, and varieties include regular.", 80, 90, 0, 2, 0, 1, 2),
       new product("COR", "Corn Flakes", "Cornflakes are a rich source of minerals, folate, dietary fiber along with proteins and carbohydrates.", 120, 90, 0, 1, 1, 1, 2),
       new product("RED", "Dabur Red", "Best herbal and ayurvedic toothpaste.", 40, 120, 0, 2, 1, 2, 2),
       new product("DET", "Dettol Soap", "Dettol Soap", "Use Dettol Antiseptic Disinfectant Liquid to kill germs on the skin.", 25, 100, 0, 0, 0, 1, 2),
       new product("HON", "Honey", "Prevent cancer and heart disease: Honey contains flavonoids, antioxidants which help reduce the risk of some cancers and heart disease.", 200, 50, 4, 4, 1, 1, 1),
       new product("NIR", "Niram", "Washing powder.", 15, 100, 0, 3, 0, 1, 1),
       new product("LAB", "Red Label", "Red label is an ideal beverage, as it can be sipped hot or cold.", 70, 50, 4, 4, 0, 1, 2),
       new product("SAF", "Saffola oil", "Saffola Active is a unique blend of 80% refined rice bran oil and 20% soybean oil.", 300, 90, 1, 4, 0, 2, 2),
       new product("TAT", "Tata Salt", " The brand is now the biggest packaged salt brand in India, with a market share of 17%.", 20, 125, 1, 4, 0, 2, 2),
       new product("VIM", "Vim Bar", "With the power of 100 lemons :p ", 23, 125, 1, 4, 0, 2, 2)

    ];

    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku === sku) {
            return this.products[i];
        }
    }
    return null;
}
