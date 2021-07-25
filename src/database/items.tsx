// All items available to sell

const ITEMS = [
  {
    id: 0,
    rating: 4,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: {
      default: 109.95,
      unit: null,
    },
    details: {
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 1,
    rating: 4,
    name: "Levi's Casual Bell Bottom Jeans",
    price: {
      default: 22.3,
      unit: null,
    },
    details: {
      description:
        "These Made & Crafted® High Rise Flared Jeans combine a high rise with a distinctly flared leg opening. And even better — it's made with organic cotton denim.",
    },
    inventory: 20,
    category: "clothes",
    image:
      "https://i5.walmartimages.com/asr/c8c76fc3-c0b9-4e26-b146-40b3ca6fc0ad.7baf63a11f55bb9f5d5a720af66aab49.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 2,
    rating: 4,
    name: "Mens Cotton Jacket",
    price: {
      default: 55.99,
      unit: null,
    },
    details: {
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 3,
    rating: 4,
    name: "Mens Casual Slim Fit",
    price: {
      default: 15.99,
      unit: null,
    },
    details: {
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 4,
    rating: 4,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: {
      default: 695,
      unit: null,
    },
    details: {
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 5,
    rating: 4,
    name: "Solid Gold Petite Micropave ",
    price: {
      default: 168,
      unit: null,
    },
    details: {
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    rating: 4,
    name: "White Gold Plated Princess",
    price: {
      default: 9.99,
      unit: null,
    },
    details: {
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 7,
    rating: 4,
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: {
      default: 10.99,
      unit: null,
    },
    details: {
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 8,
    rating: 4,
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: {
      default: 64,
      unit: null,
    },
    details: {
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
    },
    inventory: 20,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 9,
    rating: 4,
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: {
      default: 109,
      unit: null,
    },
    details: {
      description:
        'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5" hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    },
    inventory: 20,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  {
    id: 10,
    rating: 4,
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: {
      default: 109,
      unit: null,
    },
    details: {
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    },
    inventory: 20,
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  },
  {
    id: 11,
    rating: 4,
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: {
      default: 114,
      unit: null,
    },
    details: {
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    },
    inventory: 20,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  },
  {
    id: 12,
    rating: 4,
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: {
      default: 599,
      unit: null,
    },
    details: {
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    },
    inventory: 20,
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    id: 13,
    rating: 4,
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: {
      default: 999.99,
      unit: null,
    },
    details: {
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    },
    inventory: 20,
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: 14,
    rating: 4,
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: {
      default: 56.99,
      unit: null,
    },
    details: {
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 15,
    rating: 4,
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: {
      default: 29.95,
      unit: null,
    },
    details: {
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 16,
    rating: 4,
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: {
      default: 39.99,
      unit: null,
    },
    details: {
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 17,
    rating: 4,
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: {
      default: 9.85,
      unit: null,
    },
    details: {
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 18,
    rating: 4,
    name: "Opna Women's Short Sleeve Moisture",
    price: {
      default: 7.95,
      unit: null,
    },
    details: {
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
  {
    id: 19,
    rating: 4,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    },
    inventory: 20,
    category: "clothes",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
  {
    id: 20,
    rating: 4,
    name: "Fuji Apples",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Apples, Fuji 48 oz (3 lbs) 1.36 kg Meets or exceeds US extra fancy. USDA organic. Certified organic by: Washington State Dept. of Agriculture. Fruits & Veggies: More matters. www.rainierfruit.com. Produce of USA. 48 oz (3 lbs) 1.36 kg Selah, WA 98942",
    },
    inventory: 20,
    category: "fruits",
    image:
      "https://i5.walmartimages.com/asr/c71e3862-afe6-4b88-93d2-9a1cec05f1a4_2.7e3a47bf7fe6e39a01d45c7cf792b632.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: 21,
    rating: 4,
    name: "Fresh Black Seedless Grapes, bag",
    price: {
      default: 5.85,
      unit: null,
    },
    details: {
      description:
        "Treat yourself to the delicious, juicy flavor of Fresh Black Seedless Grapes. These grapes are bursting with flavor and are completely seedless, so you can easily enjoy a handful as a fresh snack any time of day. Prized for their lush, juicy pulp, very sweet flavors, and highly aromatic skins that offer a pleasant chewiness, they are also perfect for creating stunning cheese boards and charcuterie plates by pairing them with fresh cheese, crackers, or delectable meats like prosciutto. If you want to be really creative, you can freeze them and use them and ice cubes that won't melt and release water into your favorite drinks. Treat yourself to the fresh taste of Fresh Black Seedless Grapes.",
    },
    inventory: 20,
    category: "fruits",
    image:
      "https://i5.walmartimages.com/asr/6e28c86b-522b-4c2f-9216-c90ff60ba741_2.1067c57d4630bbc11557ab28a24f02cd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 22,
    rating: 4,
    name: "Pineapples",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description: "One pineapple :D",
    },
    inventory: 20,
    category: "fruits",
    image:
      "https://i5.walmartimages.com/asr/dd2a5d3c-d358-4579-8ece-59ce1804ab5b_9.0b874251fccc645fd98ac76e797c2d2a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 23,
    rating: 4,
    name: "Clementines, 3lb bag",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description: `Mandarins: Sweet, seedless and easy to peel. Mandarins are the coveted leader of the citrus category—high in Vitamin C, and an immunity boosting superfood.
      Clementines, 3 lb`,
    },
    inventory: 20,
    category: "fruits",
    image:
      "https://i5.walmartimages.com/asr/33ea1138-975e-47a4-81ff-62d88546df67.419bf6bc44206b42dccd3becbd04f4a4.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 24,
    rating: 4,
    name: "Whole Milk",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Whole milk is more delicious. There. We?re going to say it. It?s pretty simple. Who?s going to argue with that? Nobody. It?s true! Think about it. Nobody?s going to laugh at you if you said, ?Hey everyone! Whole milk is more delicious!? Nope. They may look at you a little weird, and that?s because you just shouted a random statement about milk in a crowded area. But not because it?s not true. Because it is true! We?re just being honest with you.We could try to write some clever things about whole milk to get you to buy it. Except you just did. Anyway, this is real talk. Because this is real milk. And it is just more delicious",
    },
    inventory: 20,
    category: "frozen-food",
    image:
      "https://i5.walmartimages.com/asr/5f2e0032-b30c-4e46-b7ab-9a196b1075d2.13b5611af2c39b7e0b464ae8110d5db9.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 25,
    rating: 4,
    name: "Honey Greek Yogurt",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Yogurt, Greek, Traditional Style, Honey 6 oz (170 g) Epic taste - fit for the gods. Probiotic cultures. Gluten-free. Zoi - it's Greek for life! Indulge your taste buds with Zoi's rich flavor, revel in its luxuriously smooth texture, and tap into the nutritious bonuses of calcium, probiotics and live cultures. Now, raise your spoons to life. Zoi! Made with fresh grade A milk that contains no antibiotics or synthetic growth hormones. The FDA states that no difference has been shown between milk from rBGH-treated cows and untreated cows. Keep refrigerated. 6 oz (170 g) Auburn, WA 98001 800-950-9264",
    },
    inventory: 20,
    category: "frozen-food",
    image:
      "https://i5.walmartimages.com/asr/874cb835-c1a9-4f7d-8630-bc4831b392db.8f61ddf3d398ebd1974f0c03dd67bf70.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
  },
  {
    id: 26,
    rating: 4,
    name: "Strawberry Ice Cream",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Sun-ripened California strawberries so good! AND swirled around delicious Breyers ice cream? What could be a better dessert? Our Breyers Natural Strawberry ice cream is packed with strawberries picked at the peak of happiness! Did we mention that our strawberries are also 100% sustainably sourced? In fact, our Natural Strawberry is delicious all around. We start with ingredients like milk, fresh cream, sugar and strawberries to give you a delicious ice cream. Our strawberries are pretty great, but that milk and cream is special too! We only use 100% Grade A milk and cream from American cows not treated with artificial growth hormones*. And to boot we use colors and flavors from natural sources and sustainable vanilla from Madagascar. Breyers Strawberry is also made with Non-GMO sourced ingredients! Back in 1866 when William Breyer started his small ice cream operation in Philly, he also valued the quality of his ingredients. So much so, that he created a Pledge of Purity to stand behind the quality of his ice cream. More than 150 years later we still follow his same principles with our own Pledge to use only high quality ingredients in our desserts. We hope you agree thats what makes our Breyers Natural Strawberry so good! Give it a try and leave us a review at www.breyers.com or follow us @Breyers on Instagram! * The FDA states that no significant difference has been shown between dairy derived from rBST-treated and non-rBST-treated cows.",
    },
    inventory: 20,
    category: "frozen-food",
    image:
      "https://i5.walmartimages.com/asr/23ee409b-054a-47c8-add7-35f4dcb7f57f_1.78ea83e76694f0f7aab8f14a521d6da6.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 27,
    rating: 4,
    name: "2% Milk",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "2% is what happens when a delicious whole milk meets a delicious nonfat milk, and they decide to make the most perfect milk known to man, woman and child. It is the ideal to which all other milks aspire to?somehow impossibly creamy and smooth while remaining light,refreshing, and low fat. It?s almost unfair, how great 2% really is. But before you become jealous of a carton of milk, which would be somewhat ridiculous, have a nice tall glass of it instead and enjoy the sweet taste of perfection.",
    },
    inventory: 20,
    category: "frozen-food",
    image:
      "https://i5.walmartimages.com/asr/2f6f03d8-6d3b-42a3-b697-e071985ee4b1.68514e0d97d48ad4a39838df3b4b8a8a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 28,
    rating: 4,
    name: "Lettuce",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Romaine Hearts, Organic, Bag 12 OZ Just the sweet crunchy inner hearts of romaine. Good fresh greens. Look at these beautiful hearts. USDA organic.Certified organic by Quality Assurance International. Please wash before serving. Perishable, keep refrigerated. 12 oz (340 g) Salinas, CA 93901 2014Organic Romaine Hearts, 3 Pack",
    },
    inventory: 20,
    category: "vegetables",
    image:
      "https://i5.walmartimages.com/asr/6f9439a4-8daa-4f93-af5f-5cd4f1fc9099_1.a2e6a2cff8f2b9e05b645ebeed226ebe.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  },
  {
    id: 29,
    rating: 4,
    name: "Organic Baby Peeled Carrots 1 Lb Bag",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Add some fresh carrots to your next meal with baby carrots. They are cut, peeled, washed and ready to eat for your convenience. With their crunchy texture and fresh taste, they are equally good for snacking on their own. They are perfect for adding as an ingredient in stews, casseroles and soups. Serve them with grilled chicken breast and green beans, or use them in your own recipes. Enjoy with a side of ranch dressing or hummus for dipping. These baby carrots are certified organic, and are an excellent source of vitamin A.",
    },
    inventory: 20,
    category: "vegetables",
    image:
      "https://i5.walmartimages.com/asr/49711213-05f0-4da2-8326-04f857a55f4e_6.fde8a4e67b03d9915c2ecfc897b214fd.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
  },
  {
    id: 30,
    rating: 4,
    name: "Simply Perfect Idaho Potatoes, 5 lb Bag",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Potatoes, Idaho, Bag 5 LB Fresh ideas from the valley. Grown in Idaho. US No. 1. Russet Burbank. Great for baking! Great for baking, frying, mashing, and wedges. Visit www.idahopotato.com for recipe ideas! Quality Pledge: Green Giant Fresh potatoes are selected by our growers to ensure consistent quality and freshness. If you have any questions or comments about our products call 1-800-998-9996 weekdays 7:30 AM-5:30 PM CT. Packed in Idaho. Produce of USA. Microwave: (For the perfect fluffy baked potato). Scrub potato well under cold running water. Pierce with fork in several places. Place on paper towel. Microwave one medium potato on high 2-1/2 to 5 minutes. (For each additional potato, add 3 minutes cook time. Arrange potatoes at least 1 inch apart.) Turn once halfway through cooking. Cook until potato just begins to feel soft when pressed. Remove from microwave. Wrap in foil. Let stand 5 minutes. Note: Oven temperatures may vary, cooking times are approximate. Conventional Oven: Scrub potato well under cold running water. Pierce with fork in several places. Place potato directly on oven rack. Bake at 425 degrees F for 50 to 60 minutes. Potato is done when fork easily pierces it. Potatoes store best in a dark, dry, and well ventilated area. Optimum temperature: 40 degrees - 50 degrees F. 5 lb (2.26 kg) Idaho Falls, ID 83402 800-998-9996 General Mills 2009Idaho Potatoes, 5 lbs",
    },
    inventory: 20,
    category: "vegetables",
    image:
      "https://i5.walmartimages.com/asr/0f05e6c1-776d-42df-97d6-e64153eddd63_1.5fa737a6527dad52462c6b7cfa86ed75.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
  },
  {
    id: 31,
    rating: 4,
    name: "Sliced White Mushrooms, 8 oz",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Add flavor and texture to your meals with the Sliced White Mushrooms. This versatile ingredient is perfect for a variety of dishes, whether its for breakfast, lunch, or dinner. Mince some up and put them in your omelet with peppers and ham for a filling breakfast. Add them to a healthy salad for lunch or saute them with onion, garlic, butter, and white wine for a delicious, mouthwatering meal. White mushrooms are an excellent source of riboflavin and are naturally fat-free, cholesterol-free, and are low in calories and sodium. Enjoy the delicious taste of Sliced White Mushrooms any way you prepare them.      ",
    },
    inventory: 20,
    category: "vegetables",
    image:
      "https://i5.walmartimages.com/asr/70ca0c8a-4720-4fe9-8052-f16b7150c03c.3b1e00b3fe7411a314e4783c27dfdb5a.jpeg?odnHeight=150&odnWidth=150&odnBg=ffffff,",
  },
  {
    id: 32,
    rating: 4,
    name: "3-Shelf Standard Bookcase, Highland Oak Finish",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        'Assembled Dimensions: 24.567" L x 11.496" W x 35.276" H Two of the shelves are adjustable Enclosed Back Panel',
    },
    inventory: 20,
    category: "furniture",
    image:
      "https://i5.walmartimages.com/asr/f584512d-e442-4f77-a69e-1e189056aab1_1.c2fb5ec71d913949ee5b7b9d3768864c.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: 33,
    rating: 4,
    name: "Silver Metal Stick Lamp with Outlet and Fabric Shade",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        'Brushed steel base with charging outlet Fabric shade Uses 1 x 60W type A medium base bulb (not included) Power Outlet on base for charging your Cell phone, iPod, iPhone, iPad. Perfect for bedrooms, kids room and more. Shade Diameter: 8.50" x Height: 19.50 "',
    },
    inventory: 20,
    category: "furniture",
    image:
      "https://i5.walmartimages.com/asr/b00db1be-9ee4-4336-b6e9-4cb1c2f2792a_1.be7b5f401e3eb0cb9ee3dbe0493c0e85.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: 34,
    rating: 4,
    name: "Resin Seat & Back Folding Chair",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description:
        "Assembled Product Dimensions (L x W x H): 19.00 x 18.00 x 29.50 Inches",
    },
    inventory: 20,
    category: "furniture",
    image:
      "https://i5.walmartimages.com/asr/965d8fa9-bf0a-4e76-aed8-cd621d96c981.4757a8f1260d87b3605fe74d1f670f6d.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: 35,
    rating: 4,
    name: "Electric Standing Desk with Height Adjustable",
    price: {
      default: 12.99,
      unit: null,
    },
    details: {
      description: `-The office desk is equipped with a powerful electric motor, which can smoothly adjusts the height of the desk.
              -The larger desktop gives you a spacious work area with plenty of room for your computer, printer, and important work materials.
              `,
    },
    inventory: 20,
    category: "furniture",
    image:
      "https://i5.walmartimages.com/asr/5fdc0569-be21-434b-b2c9-c81f8396ae0f.c25c0b677de79675f4362822a028f208.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
];

export default ITEMS;
