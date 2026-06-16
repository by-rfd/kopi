import { CoffeeRecipe, CustomSettings, IngredientCalculation } from "../types";
import vietnamDripImg from "../assets/images/vietnam_drip_1781413876231.jpg";
import mochaccinoImg from "../assets/images/mochaccino_1781413897610.jpg";
import matchaLatteImg from "../assets/images/matcha_latte_1781413912736.jpg";
import taroLatteImg from "../assets/images/taro_latte_1781413928453.jpg";
import redVelvetImg from "../assets/images/red_velvet_1781413942549.jpg";
import brownSugarMilkImg from "../assets/images/brown_sugar_milk_1781413957360.jpg";
import strawberryMatchaImg from "../assets/images/strawberry_matcha_1781413970718.jpg";
import cookiesCreamImg from "../assets/images/cookies_cream_1781413984792.jpg";
import gulaArenImg from "../assets/images/gula_aren_1781419238042.jpg";
import cappuccinoImg from "../assets/images/cappuccino_1781419255460.jpg";
import caramelMacchiatoImg from "../assets/images/caramel_macchiato_1781419271873.jpg";
import americanoImg from "../assets/images/americano_1781419288089.jpg";
import coldBrewImg from "../assets/images/cold_brew_1781419303544.jpg";
import affogatoImg from "../assets/images/affogato_1781419318783.jpg";
import espressoImg from "../assets/images/espresso_1781419335019.jpg";
import spanishLatteImg from "../assets/images/spanish_latte_1781419352315.jpg";
import dalgonaCoffeeImg from "../assets/images/dalgona_coffee_1781419368295.jpg";
import avocadoCoffeeImg from "../assets/images/avocado_coffee_1781419382486.jpg";
import coconutLatteImg from "../assets/images/coconut_latte_1781419398001.jpg";
import matchaEspressoImg from "../assets/images/matcha_espresso_1781419415823.jpg";
import irishCoffeeImg from "../assets/images/irish_coffee_cream_1781419431682.jpg";
import v60DripImg from "../assets/images/v60_drip_1781419517880.jpg";
import butterscotchLatteImg from "../assets/images/butterscotch_latte_1781419447418.jpg";
import hazelnutLatteImg from "../assets/images/hazelnut_latte_1781419465692.jpg";
import vanillaLatteImg from "../assets/images/vanilla_latte_1781419483345.jpg";
import chocolateSignatureImg from "../assets/images/chocolate_1781419534008.jpg";
import thaiTeaImg from "../assets/images/thai_tea_1781419500353.jpg";
import lemonPassionfruitImg from "../assets/images/lemon_passion_1781419551887.jpg";
import lycheeYakultImg from "../assets/images/lychee_yakult_1781419570373.jpg";

export const COFFEE_RECIPES: CoffeeRecipe[] = [
  {
    id: "vietnam-drip",
    name: "Vietnam Drip",
    indonesianName: "Kopi Tetes Vietnam",
    description: "Kopi susu klasik ala Vietnam yang diseduh lambat menggunakan 'phin filter'. Memisahkan susu kental manis di dasar gelas dengan pekatnya tetesan kopi Robusta hangat di bagian atas.",
    image: vietnamDripImg,
    baseIngredients: {
      coffeeRatio: 12,
      liquidRatio: 73,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Robusta Sumatra / Lampung (Dark Roast) dengan gilingan medium-coarse",
    temperatureCelcius: "90°C - 93°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "susu-gula-aren",
    name: "Kopi Susu Gula Aren",
    indonesianName: "Es Kopi Susu Gula Aren",
    description: "Menu es kopi paling populer di Indonesia. Menghadirkan kombinasi seimbang antara pekatnya espresso, creaminess dari susu segar, serta gurihnya pemanis alami sirup gula aren murni.",
    image: gulaArenImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 65,
      sweetenerRatio: 10,
      iceRatio: 10
    },
    recommendedBeans: "Espresso House Blend (70% Robusta, 30% Arabica) Medium-Dark Roast",
    temperatureCelcius: "90°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "cafe-latte",
    name: "Café Latte",
    indonesianName: "Kopi Latte",
    description: "Kombinasi klasik Italia yang lembut. Mengandalkan takaran susu segar yang tebal (steamed milk) dikombinasikan dengan satu atau dua shot espresso pekat, disajikan dengan lapisan tipis microfoam di atasnya.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 85,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Mandheling atau Toraja (Medium Roast) untuk rasa cokelat & kacang yang manis",
    temperatureCelcius: "65°C - 70°C",
    isCoffee: true,
    category: "coffee-creamy"
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    indonesianName: "Kapucino",
    description: "Komposisi seimbang bertema tiga lapis: 1/3 espresso, 1/3 susu panas (steamed milk), dan 1/3 busa susu tebal (thick milk foam). Rasanya lebih kuat dan terasa 'cokelat' dibanding Cafe Latte.",
    image: cappuccinoImg,
    baseIngredients: {
      coffeeRatio: 20,
      liquidRatio: 80,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Arabica-Robusta Blend (80:20) Medium roast",
    temperatureCelcius: "60°C - 65°C",
    isCoffee: true,
    category: "coffee-creamy"
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    indonesianName: "Karamel Makiyato",
    description: "Sajian manis berlapis. Sirup vanilla di bagian dasar, ditimpa susu segar hangat, dituangkan espresso di atasnya secara perlahan untuk membuat tanda (mark), dan diakhiri dengan siraman karamel saus melingkar.",
    image: caramelMacchiatoImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 70,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Gayo Medium-Dark Roast (rasa earthy sangat cocok dengan karamel)",
    temperatureCelcius: "90°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "americano",
    name: "Americano",
    indonesianName: "Kopi Americano",
    description: "Minuman espresso hitam yang diencerkan dengan air panas. Memiliki kekuatan rasa yang mirip dengan kopi tubruk tradisional namun tanpa ampas di dasar gelas, memancarkan cita rasa acidity biji kopi murni.",
    image: americanoImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 85,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Single Origin Arabica (Gayo / Sidikalang / Kintamani) Light-Medium Roast",
    temperatureCelcius: "92°C - 95°C",
    isCoffee: true,
    category: "coffee-dark"
  },
  {
    id: "mochaccino",
    name: "Mochaccino",
    indonesianName: "Moka Kopi",
    description: "Perpaduan harmonis rasa kopi latte dengan sentuhan cokelat pekat. Sangat cocok bagi pemula yang menyukai rasa cokelat manis berpadu sensasi aroma kopi moka yang khas.",
    image: mochaccinoImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 70,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Robusta Lampung atau Java Dark Roast (menonjolkan rasa bold kakao)",
    temperatureCelcius: "90°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    indonesianName: "Kopi Seduh Dingin",
    description: "Biji kopi yang diekstraksi menggunakan air bersuhu ruangan atau air es selama 12 hingga 24 jam penuh di dalam lemari es. Menghasilkan rasa yang sangat halus, rendah asam, dan manis alami.",
    image: coldBrewImg,
    baseIngredients: {
      coffeeRatio: 20,
      liquidRatio: 80,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Single Origin Arabica Flores atau Preanger (Medium Roast untuk wangi floral/berry)",
    temperatureCelcius: "4°C - 8°C",
    isCoffee: true,
    category: "coffee-dark"
  },
  {
    id: "affogato",
    name: "Affogato",
    indonesianName: "Afogato Pas",
    description: "Sajian penutup mulut (dessert) kopi legendaris asal Italia. Berupa satu atau dua scoop es krim vanilla premium yang manis dingin kemudian 'ditenggelamkan' oleh siraman espresso panas murni.",
    image: affogatoImg,
    baseIngredients: {
      coffeeRatio: 30,
      liquidRatio: 0,
      sweetenerRatio: 70,
      iceRatio: 0
    },
    recommendedBeans: "Blend Espresso bertubuh tebal (Full Bodied Dark Roast) agar kontras dengan es krim",
    temperatureCelcius: "93°C",
    isCoffee: true,
    category: "coffee-special"
  },
  {
    id: "espresso",
    name: "Espresso",
    indonesianName: "Esprès murni",
    description: "Ekstraksi kopi murni konsentrat tinggi yang diekstrak dengan tekanan tinggi. Menghasilkan cairan kopi tebal berminyak berkilau yang dilapisi oleh busa keemasan indah bernama 'crema'.",
    image: espressoImg,
    baseIngredients: {
      coffeeRatio: 100,
      liquidRatio: 0,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Sangat disarankan memakai Arabica-Robusta Blend Premium",
    temperatureCelcius: "90°C - 94°C",
    isCoffee: true,
    category: "coffee-dark"
  },
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    indonesianName: "Kopi Latte Susu Berbumbu Spanyol",
    description: "Kopi latte kental manis bergaya Spanyol yang memadukan espresso ganda dengan susu murni berlimpah serta dicampur secara merata dengan susu kental manis pekat di awal.",
    image: spanishLatteImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 70,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Brazil Santos atau Colombia (Medium-Dark Roast) beraroma kacang gurih",
    temperatureCelcius: "65°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "kopi-tubruk",
    name: "Kopi Tubruk",
    indonesianName: "Kopi Tubruk Tradisional",
    description: "Seduhan kopi hitam tradisional terpopuler khas Indonesia. Bubuk kopi bersatu langsung dengan air mendidih tanpa filter, mereduksi keasaman dan mengeluarkan seluruh cita rasa asli biji kopi pedesaan secara utuh.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    baseIngredients: {
      coffeeRatio: 10,
      liquidRatio: 90,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Robusta Temanggung / Dampit (Dark Roast) digiling medium-fine",
    temperatureCelcius: "96°C (Air mendidih)",
    isCoffee: true,
    category: "coffee-dark"
  },
  {
    id: "dalgona-coffee",
    name: "Dalgona Coffee",
    indonesianName: "Kopi Busa Dalgona",
    description: "Sensasi kopi viral asal Korea Selatan. Terbuat dari kocokan foam kental cokelat karamel keemasan bertekstur mousse dari kopi instan & gula, diletakkan megah mengapung di atas susu UHT dingin.",
    image: dalgonaCoffeeImg,
    baseIngredients: {
      coffeeRatio: 20,
      liquidRatio: 60,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "Kopi Instan Robusta Spray-dried murni tanpa gula/krimer",
    temperatureCelcius: "Suhu Susu Cair Dingin 4°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "flat-white",
    name: "Flat White",
    indonesianName: "Kopi Flat White Klasik",
    description: "Minuman sutra halus khas Australia & Selandia Baru. Memiliki double shot ristretto/espresso dengan susu steamed bertekstur microfoam super tipis (nyaris rata) agar rasa kopi tetap tebal melimpah.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop",
    baseIngredients: {
      coffeeRatio: 22,
      liquidRatio: 78,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Ethiopian Yirgacheffe atau Kenya (Light-Medium Roast) floral asam manis",
    temperatureCelcius: "60°C",
    isCoffee: true,
    category: "coffee-creamy"
  },
  {
    id: "avocado-coffee",
    name: "Avocado Coffee",
    indonesianName: "Es Kopi Alpukat",
    description: "Kombinasi dessert kopi khas Indonesia yang sangat mewah. Puree buah alpukat mentega segar yang kental dipadu es krim vanilla manis gurih, disiram satu shot espresso hitam mengepul bersalut cokelat saus.",
    image: avocadoCoffeeImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 45,
      sweetenerRatio: 40,
      iceRatio: 0
    },
    recommendedBeans: "Robusta Toraja (Medium-Dark Roast) penyeimbang rasa creamy mentega alpukat",
    temperatureCelcius: "93°C (Espresso Panas Ekstraksi)",
    isCoffee: true,
    category: "coffee-special"
  },
  {
    id: "coconut-latte",
    name: "Coconut Latte",
    indonesianName: "Latte Kelapa Tropis",
    description: "Inovasi minuman musim panas menyegarkan. Menyatukan espresso house-blend dengan perpaduan gurih kelapa dari sirup kelapa premium atau susu kelapa (coconut milk), menciptakan aroma gurih yang eksotis.",
    image: coconutLatteImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 70,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Espresso Blend Nusantara (Bali Kintamani & Java Robusta)",
    temperatureCelcius: "65°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "matcha-espresso",
    name: "Matcha Espresso",
    indonesianName: "Kopi Teh Hijau Matcha",
    description: "Minuman multi-layer visual yang sangat indah di kafe modern. Lapisan pekat saus teh hijau matcha organik jepang murni di bawah, diikuti susu putih dingin, dan ditudungi espresso shot kehitaman di pucuknya.",
    image: matchaEspressoImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 65,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Gayo Wash Medium Roast (body clean & fruity sangat harmonis dengan matcha)",
    temperatureCelcius: "80°C (Suhu matcha) & 93°C (Espresso)",
    isCoffee: true,
    category: "coffee-special"
  },
  {
    id: "irish-coffee",
    name: "Irish Coffee Cream",
    indonesianName: "Es Kopi Ala Irlandia",
    description: "Sajian kopi aromatik non-alkohol ala kafe Eropa. Menggunakan sirup rum/irish cream sirup esensial yang wangi, dikocok bersama americano pekat, lalu disajikan dengan topping cold heavy whip cream melimpah di permukaan.",
    image: irishCoffeeImg,
    baseIngredients: {
      coffeeRatio: 20,
      liquidRatio: 60,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Lintong atau Aceh Gayo (Dark Roast) bertubuh rempah herba",
    temperatureCelcius: "92°C",
    isCoffee: true,
    category: "coffee-special"
  },
  // 4 NEW EXQUISITE COFFEE RECIPES (V60, Butterscotch, Hazelnut, Vanilla)
  {
    id: "v60-drip",
    name: "V60 Drip",
    indonesianName: "Seduh Manual V60",
    description: "Sajian filter drip manual paling ikonik. Menggunakan paper filter khusus berbentuk kerucut bersudut 60 derajat untuk menghasilkan secangkir kopi hitam dengan bodi ringan, keasaman buah (acidity) cerah, dan rasa ekstraktif jernih.",
    image: v60DripImg,
    baseIngredients: {
      coffeeRatio: 7,
      liquidRatio: 93,
      sweetenerRatio: 0,
      iceRatio: 0
    },
    recommendedBeans: "Single Origin Arabica (Gayo Wash / Toraja / Kintamani) Light-Medium Roast gilingan Medium",
    temperatureCelcius: "89°C - 92°C",
    isCoffee: true,
    category: "coffee-dark"
  },
  {
    id: "butterscotch-latte",
    name: "Butterscotch Latte",
    indonesianName: "Kopi Susu Butterskotch",
    description: "Varian espresso modern dengan cita rasa mewah. Memadukan double shot espresso, creamy steamed milk, dan sirup mentega bumbu gula merah bakar (butterscotch) yang gurih mentega harum, manis legit, dan legit.",
    image: butterscotchLatteImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 70,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Espresso Blend Arabica-Robusta (Medium-Dark Roast) berlatar rasa cokelat gurih",
    temperatureCelcius: "65°C - 70°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "hazelnut-latte",
    name: "Hazelnut Latte",
    indonesianName: "Kopi Susu Hazelnut",
    description: "Minuman kopi susu kafe klasik dengan sentuhan saus kacang Hazelnut panggang bergaya Eropa. Menghadirkan sensasi gurih aromatik kacang panggang yang seimbang dengan espresso tebal dan susu.",
    image: hazelnutLatteImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 70,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Mandheling / Flores Medium Roast",
    temperatureCelcius: "65°C",
    isCoffee: true,
    category: "coffee-sweet"
  },
  {
    id: "vanilla-latte",
    name: "Vanilla Latte",
    indonesianName: "Kopi Latte Vanila",
    description: "Sajian santai luar biasa yang menyatukan latte klasik susu manis dengan keharuman lembut dari ekstrak polong vanilla premium. Sangat aromatik, rukun manisnya, dan bersahabat bagi pemula kopi.",
    image: vanillaLatteImg,
    baseIngredients: {
      coffeeRatio: 15,
      liquidRatio: 70,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "Arabica Lintong atau Brazil Santos Medium Roast",
    temperatureCelcius: "65°C",
    isCoffee: true,
    category: "coffee-sweet"
  },

  // 10 RICH NON-COFFEE OPTIONS
  {
    id: "matcha-latte",
    name: "Pure Matcha Latte",
    indonesianName: "Matcha Latte Organik Jepang",
    description: "Sajian teh hijau Jepang (Uji Matcha) premium murni yang kaya antioksidan alami, dilarutkan hangat dan disajikan bersama susu segar berbusa microfoam lembut. Memancarkan rasa creamy herba umami.",
    image: matchaLatteImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 85,
      sweetenerRatio: 15,
      iceRatio: 0
    },
    recommendedBeans: "100% Pure Japanese Uji Matcha Kagoshima Powder (Tanpa Kopi)",
    temperatureCelcius: "75°C - 80°C",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "taro-latte",
    name: "Sweet Taro Cream",
    indonesianName: "Susu Taro Ungu Khas Kafe",
    description: "Susu krim penuh lemak kelas premium yang berpadu ekstrak keladi ungu (Taro) organik kering. Memancarkan rasa unik gurih mentega mirip roti panggang manis dengan warna ungu pastel mempesona.",
    image: taroLatteImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 80,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "Premium Sweet Purple Yam / Taro Powder (Tanpa Kopi)",
    temperatureCelcius: "65°C",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "red-velvet",
    name: "Red Velvet Velvet",
    indonesianName: "Susu Merah Red Velvet",
    description: "Perpaduan unik mengenyangkan bertema kue bolu merah cokelat khas bit (Red Velvet). Dikombinasikan dengan gurihnya susu segar UHT tebal untuk rasa empuk manis selembut beludru.",
    image: redVelvetImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 80,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "Red Velvet Pastry Cocoa Extract (Tanpa Kopi)",
    temperatureCelcius: "65°C",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "chocolate-signature",
    name: "Belgian Chocolate",
    indonesianName: "Cokelat Belgian Premium",
    description: "Sajian cokelat kental super pekat ala kafe Belgia. Menyatukan kakao hitam (double dark cocoa) murni dengan susu segar hangat and siraman saus cokelat pekat di dasar serta topping cokelat serut.",
    image: chocolateSignatureImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 80,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "High Quality West African Cocoa Blend (Pahit Gurih - Tanpa Kopi)",
    temperatureCelcius: "65°C",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "thai-tea",
    name: "Thai Tea Premium",
    indonesianName: "Teh Thai Klasik",
    description: "Minuman teh khas Negeri Gajah Putih berwarna orange jingga ikonik. Diekstrak lambat dari daun teh hitam Thailand khusus beraroma rempah adas manis, dicampur susu kental manis, digenangi es batu melimpah.",
    image: thaiTeaImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 75,
      sweetenerRatio: 25,
      iceRatio: 0
    },
    recommendedBeans: "Cha Tra Mue Original Thai Spiced Tea Leaves (Tanpa Kopi)",
    temperatureCelcius: "95°C (Ekstraksi Teh)",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "lemon-passionfruit",
    name: "Sunny Lemon Passion",
    indonesianName: "Teh Lemon Markisa Dingin",
    description: "Minuman infus teh buah tropis yang asam dingin mencerahkan hari. Menyeduh teh melati wangi dengan sirup markisa (passionfruit) asli, air perasan buah lemon segar, diakhiri daun mint pelepas dahaga.",
    image: lemonPassionfruitImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 80,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "Blended Jasmine Blossom Green Tea (Tanpa Kopi - Asam Manis Segar)",
    temperatureCelcius: "90°C",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "lychee-yakult",
    name: "Lychee Yakult Spark",
    indonesianName: "Es Leci Yakult Soda",
    description: "Sensasi kesegaran dingin modern berbusa. Kombinasi manis legit buah leci kalengan premium, prebiotik minuman Yakult yang manis asam gurih, disiram air soda tawar beku bergelembung menggelitik lidah.",
    image: lycheeYakultImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 70,
      sweetenerRatio: 30,
      iceRatio: 0
    },
    recommendedBeans: "Sirup Leci Konsentrat & Yakult Probiotic Dairy (Tanpa Kopi)",
    temperatureCelcius: "Suhu Dingin 4°C Es",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "brown-sugar-milk",
    name: "Brown Sugar Milk",
    indonesianName: "Susu Gula Aren Boba",
    description: "Sajian dingin penuh krim boba gula aren yang legit mewah. Berisi susu segar full cream murni tanpa kopi sama sekali, dilapisi lumeran tebal sirup gula aren murni pekat (brown sugar syrup) di sekeliling cangkir.",
    image: brownSugarMilkImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 80,
      sweetenerRatio: 20,
      iceRatio: 0
    },
    recommendedBeans: "Sirup Arena Gandum Organik Gurih Lamban Bakar (Tanpa Kopi)",
    temperatureCelcius: "Suhu Dingin 4°C",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha",
    indonesianName: "Es Stroberi Matcha Latte",
    description: "Inovasi minuman estetik jepang bertingkat tiga warna. Puree compote buah stroberi asli manis asam di dasar gelas, ditimpa es susu murni putih, lalu diselimuti pelan oleh seduhan pekat Uji Matcha hijau menyala di atas.",
    image: strawberryMatchaImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 75,
      sweetenerRatio: 25,
      iceRatio: 0
    },
    recommendedBeans: "Uji Matcha Powder & Homemade Strawberry Compote (Tanpa Kopi)",
    temperatureCelcius: "Suhu Dingin 4°C",
    isCoffee: false,
    category: "non-coffee"
  },
  {
    id: "cookies-cream",
    name: "Oreo Cookies Cream",
    indonesianName: "Milkshake Blender Oreo",
    description: "Sajian blender es krim vanilla premium gurih dingin yang dikocok kental bersama remahan biskuit Oreo cokelat hitam pekat, diberi tumpukan whipped cream melimpah ruah dan taburan biskuit tipis renyah.",
    image: cookiesCreamImg,
    baseIngredients: {
      coffeeRatio: 0,
      liquidRatio: 65,
      sweetenerRatio: 35,
      iceRatio: 0
    },
    recommendedBeans: "Crunchy Oreo cookies with Premium Vanilla Ice Cream (Tanpa Kopi)",
    temperatureCelcius: "Suhu Beku Es Blender",
    isCoffee: false,
    category: "non-coffee"
  }
];

// Helper to convert Cup size directly to total liquid volume (ml)
export function getVolumeInMl(size: string): number {
  switch (size) {
    case "12 oz": return 355;
    case "13 oz": return 384;
    case "14 oz": return 414;
    case "16 oz": return 473;
    case "200 ml": return 200;
    case "250 ml": return 250;
    case "500 ml": return 500;
    case "1 L": return 1000;
    default: return 350;
  }
}

export function calculateIngredients(
  recipeId: string,
  settings: CustomSettings
): IngredientCalculation[] {
  const totalVolume = getVolumeInMl(settings.cupSize);
  const calculations: IngredientCalculation[] = [];

  // Determine multipliers based on strengths / levels chosen
  let coreMultiplier = 1.0;
  if (settings.coffeeLevel === "Light") coreMultiplier = 0.6;
  if (settings.coffeeLevel === "Normal") coreMultiplier = 1.0;
  if (settings.coffeeLevel === "Strong") coreMultiplier = 1.5;
  if (settings.coffeeLevel === "Extra Strong") coreMultiplier = 2.2;

  // Ice block calculation
  let icePercent = 0;
  if (settings.iceLevel === "Less Ice") icePercent = 15;
  else if (settings.iceLevel === "Normal Ice") icePercent = 30;
  else if (settings.iceLevel === "Extra Ice") icePercent = 45;

  const iceGrams = Math.round(totalVolume * (icePercent / 100));
  const remainingVolumeForLiquids = Math.max(100, totalVolume - iceGrams);

  // Sweetness calculation volume
  let sweetPercent = 0;
  if (settings.sweetness === "Less Sugar") sweetPercent = 6;
  else if (settings.sweetness === "Normal") sweetPercent = 11;
  else if (settings.sweetness === "Sweet") sweetPercent = 16;
  else if (settings.sweetness === "Extra Sweet") sweetPercent = 22;

  const sweetnessVolume = settings.sweetness === "Non Sugar" ? 0 : Math.round(remainingVolumeForLiquids * (sweetPercent / 100));

  // --- 1. SPECIAL FIXED RECIPE CALCULATIONS ---

  if (recipeId === "espresso") {
    const baseShots = totalVolume <= 200 ? 1 : totalVolume <= 300 ? 2 : Math.max(2, Math.round(totalVolume / 150));
    const activeShots = Math.round(baseShots * coreMultiplier);
    
    if (settings.method === "Espresso") {
      calculations.push({
        name: "Ekstraksi Espresso",
        amount: activeShots * 30,
        unit: "ml",
        notes: `Kira-kira ${activeShots} shot espresso murni (${Math.round(activeShots * 9)}g biji kopi halus)`
      });
    } else {
      const gPerShot = 2.5;
      const gInstant = Math.round((activeShots * gPerShot) * 10) / 10;
      calculations.push({
        name: "Kopi Bubuk Instan (Sachet)",
        amount: gInstant,
        unit: "g",
        notes: `Dilarutkan dengan air panas sekitar ${activeShots * 25}ml`
      });
    }
    calculations.push({
      name: "Crema Foam",
      amount: activeShots * 2,
      unit: "ml",
      notes: "Lapisan minyak keemasan alami di permukaan espresso"
    });
    return calculations;
  }

  if (recipeId === "affogato") {
    const scoopsCount = totalVolume <= 250 ? 1 : totalVolume <= 400 ? 2 : totalVolume <= 600 ? 4 : 8;
    const baseShots = totalVolume <= 250 ? 1 : totalVolume <= 500 ? 2 : 4;
    const activeShots = Math.max(1, Math.round(baseShots * coreMultiplier));

    calculations.push({
      name: "Es Krim Vanilla Premium",
      amount: scoopsCount,
      unit: "Scoop",
      notes: `Sekitar ${scoopsCount * 45}g untuk mendinginkan dan memaniskan hidangan`
    });

    if (settings.method === "Espresso") {
      calculations.push({
        name: "Espresso Shot Panas",
        amount: activeShots * 30,
        unit: "ml",
        notes: `Yaitu ${activeShots} shot espresso panas yang dituangkan langsung ke atas es krim`
      });
    } else {
      calculations.push({
        name: "Konsentrat Kopi Instan Kental",
        amount: Math.round(activeShots * 3 * 10) / 10,
        unit: "g",
        notes: `Setara dengan ${activeShots} sachet kecil, dilarutkan dalam hanya ${activeShots * 15}ml air panas mendidih`
      });
    }

    if (settings.sweetness !== "Non Sugar") {
      calculations.push({
        name: "Saus Karamel / Cokelat Ekstra",
        amount: settings.sweetness === "Less Sugar" ? 5 : settings.sweetness === "Normal" ? 10 : settings.sweetness === "Sweet" ? 15 : 20,
        unit: "ml",
        notes: "Drizzle dekoratif di atas permukaan es krim"
      });
    }
    return calculations;
  }

  if (recipeId === "cold-brew") {
    const baseCoffeeGrams = Math.round((totalVolume * 0.08) * coreMultiplier);
    calculations.push({
      name: "Bubuk Kopi Cold Brew (Kasar)",
      amount: baseCoffeeGrams,
      unit: "g",
      notes: `Giling kasar (seperti garam laut) untuk menghindari rasa pahit berlebih`
    });

    calculations.push({
      name: "Air Dingin Rendaman",
      amount: Math.round(totalVolume * 0.9),
      unit: "ml",
      notes: "Direndam selama 12 - 24 jam dalam wadah tertutup di dalam kulkas"
    });

    if (iceGrams > 0) {
      calculations.push({
        name: "Sajian Es Batu Kristal",
        amount: iceGrams,
        unit: "g",
        notes: "Menjaga kopi tetap dingin menyegarkan"
      });
    }

    if (settings.sweetness !== "Non Sugar") {
      const syrupMl = settings.sweetness === "Less Sugar" ? 10 : settings.sweetness === "Normal" ? 20 : settings.sweetness === "Sweet" ? 30 : 45;
      calculations.push({
        name: "Simple Syrup cair",
        amount: syrupMl,
        unit: "ml",
        notes: "Gula sirup bening lebih mudah menyatu dengan minuman dingin"
      });
    }
    return calculations;
  }

  if (recipeId === "avocado-coffee") {
    const pureedAvocadoGrams = Math.round(totalVolume * 0.35);
    const iceCreamScoops = totalVolume <= 300 ? 1 : totalVolume <= 500 ? 2 : 3;
    const activeShots = Math.max(1, Math.round((totalVolume <= 300 ? 1 : 2) * coreMultiplier));

    calculations.push({
      name: "Daging Buah Alpukat Mentega Blender",
      amount: pureedAvocadoGrams,
      unit: "g",
      notes: "Alpukat segar di-blend halus dengan sedikit susu evaporasi"
    });

    calculations.push({
      name: "Es Krim Vanilla Premium",
      amount: iceCreamScoops,
      unit: "Scoop",
      notes: "Diletakkan tepat di atas timbunan alpukat blender"
    });

    if (settings.method === "Espresso") {
      calculations.push({
        name: "Espresso Shot",
        amount: activeShots * 30,
        unit: "ml",
        notes: `Disiram melingkar di atas es krim vanilla (${activeShots} shot espresso)`
      });
    } else {
      calculations.push({
        name: "Kopi Bubuk Instan Kental",
        amount: Math.round(activeShots * 2.5 * 10) / 10,
        unit: "g",
        notes: `Dilarutkan dengan hanya ${activeShots * 20}ml air panas mendidih`
      });
    }

    if (settings.sweetness !== "Non Sugar") {
      const sweetMl = settings.sweetness === "Less Sugar" ? 15 : settings.sweetness === "Normal" ? 30 : settings.sweetness === "Sweet" ? 45 : 60;
      calculations.push({
        name: "Susu Kental Manis / Gula Aren Cair",
        amount: sweetMl,
        unit: "ml",
        notes: "Dicampurkan langsung ke dalam blender alpukat"
      });
    }

    calculations.push({
      name: "Saus Cokelat Hershey's",
      amount: 15,
      unit: "ml",
      notes: "Saus cokelat yang disemprotkan estetik di dinding sekeliling cup"
    });
    return calculations;
  }

  if (recipeId === "kopi-tubruk") {
    const coffeeGroundsGrams = Math.round((totalVolume * 0.07) * coreMultiplier);
    calculations.push({
      name: "Kopi Bubuk Halus (Medium-Fine)",
      amount: coffeeGroundsGrams,
      unit: "g",
      notes: "Kopi langsung bercampur dengan sisa ampas di dalam gelas"
    });

    if (settings.sweetness !== "Non Sugar") {
      const sugarGrams = settings.sweetness === "Less Sugar" ? 6 : settings.sweetness === "Normal" ? 12 : settings.sweetness === "Sweet" ? 20 : 30;
      calculations.push({
        name: "Gula Pasir Tebu Murni",
        amount: sugarGrams,
        unit: "g",
        notes: "Aduk bersama bubuk kopi sebelum dituangkan air mendidih"
      });
    }

    calculations.push({
      name: "Air Mendidih (96°C)",
      amount: Math.round(totalVolume * 0.95),
      unit: "ml",
      notes: "Wajib menggunakan air bersuhu sangat tinggi agar ampas lekas turun"
    });
    return calculations;
  }

  if (recipeId === "dalgona-coffee") {
    const baseInstantGrams = totalVolume <= 250 ? 4 : totalVolume <= 500 ? 8 : 16;
    const activeInstantGrams = Math.round(baseInstantGrams * coreMultiplier);
    
    calculations.push({
      name: "Bubuk Kopi Instan (Dalgona Whip)",
      amount: activeInstantGrams,
      unit: "g",
      notes: "Kopi instan murni tanpa ampas dikocok cepat bersama gula pasir dan air"
    });

    const sugarDalgonaGrams = activeInstantGrams * (settings.sweetness === "Less Sugar" ? 1 : settings.sweetness === "Normal" ? 1.5 : settings.sweetness === "Sweet" ? 2 : 3);
    if (settings.sweetness !== "Non Sugar") {
      calculations.push({
        name: "Gula Pasir Pengembang Foam",
        amount: Math.round(sugarDalgonaGrams),
        unit: "g"
      });
    }

    calculations.push({
      name: "Air Panas Pengocok Dalgona",
      amount: activeInstantGrams,
      unit: "ml"
    });

    calculations.push({
      name: "Susu Segar Cair Penuh Lemak (UHT)",
      amount: Math.round(totalVolume * 0.55),
      unit: "ml"
    });

    if (iceGrams > 0) {
      calculations.push({
        name: "Es Batu Tube",
        amount: iceGrams,
        unit: "g"
      });
    }
    return calculations;
  }

  if (recipeId === "v60-drip") {
    // V60 Calculation (Coffee to water ratio 1:15)
    const rawGramsOfCoffee = Math.round((totalVolume * 0.065) * coreMultiplier);
    const correctWaterVolume = Math.round(totalVolume * 0.93);

    calculations.push({
      name: "Biji Kopi Giling Kasar-Medium (V60)",
      amount: rawGramsOfCoffee,
      unit: "g",
      notes: `Gunakan rasio seduh presisi 1:15 berbobot gilingan sedang`
    });

    calculations.push({
      name: "Kertas Saring khusus (Paper Filter 02)",
      amount: 1,
      unit: "Lembar",
      notes: "Gilas kertas saring sekali dengan air panas dahulu untuk membuang rasa kertas"
    });

    calculations.push({
      name: "Air Bersih Seduhan (91°C)",
      amount: correctWaterVolume,
      unit: "ml",
      notes: `Tuang bergelombang bertahap (blooming 40s diikuti 3 kali tuangan penuh)`
    });

    if (iceGrams > 0) {
      calculations.push({
        name: "Es Batu Kristal (Japanese Iced V60)",
        amount: iceGrams,
        unit: "g",
        notes: "Mendinginkan langsung tetesan kopi panas di dasar gelas caraffe"
      });
    }

    return calculations;
  }

  if (recipeId === "cookies-cream") {
    // Oreo cookies and cream milkshake blender
    const oreoSlices = totalVolume <= 250 ? 2 : totalVolume <= 500 ? 4 : 6;
    const scoopsOfIcecream = totalVolume <= 300 ? 2 : totalVolume <= 500 ? 3 : 5;
    
    calculations.push({
      name: "Biskuit Cokelat Oreo Murni",
      amount: oreoSlices,
      unit: "Keping",
      notes: "Di-blend hancur bersama es krim, simpan sebagian remahnya untuk taburan"
    });

    calculations.push({
      name: "Es Krim Vanilla Premium",
      amount: scoopsOfIcecream,
      unit: "Scoop",
      notes: "Fondasi dingin gurih tebal untuk minuman es milkshake"
    });

    calculations.push({
      name: "Susu Segar Cair (UHT) Dingin",
      amount: Math.round(totalVolume * 0.5),
      unit: "ml",
      notes: "Membantu putaran blender agar halus"
    });

    calculations.push({
      name: "Whipped Cream Semprot",
      amount: 20,
      unit: "g",
      notes: "Diletakkan gembung di paling atas cup"
    });

    return calculations;
  }

  // --- 2. GENERAL CALCULATION PIPELINE ---

  // Standard liquid coffee base (for coffees)
  let espressoVolInMl = 0;
  let instantGrams = 0;

  // Check if current recipe is Coffee
  const targetRecipe = COFFEE_RECIPES.find(r => r.id === recipeId);
  const isCoffeeItem = targetRecipe?.isCoffee !== false;

  if (isCoffeeItem) {
    if (settings.method === "Espresso") {
      const baseShots = totalVolume <= 250 ? 1 : totalVolume <= 500 ? 2 : 4;
      const actualShots = Math.round(baseShots * coreMultiplier);
      espressoVolInMl = actualShots * 30;
      calculations.push({
        name: "Espresso Shot",
        amount: actualShots,
        unit: "Shot",
        notes: `Setara dengan ${espressoVolInMl} ml cairan ekstraksi (${actualShots * 9}g biji kopi giling halus)`
      });
    } else {
      const baseGrams = totalVolume <= 200 ? 1.5 : totalVolume <= 300 ? 3 : totalVolume <= 500 ? 5 : 10;
      instantGrams = Math.round((baseGrams * coreMultiplier) * 10) / 10;
      calculations.push({
        name: "Bubuk Kopi Instan (Sachet)",
        amount: instantGrams,
        unit: "g",
        notes: `Setara dengan sachet kopi instan murni`
      });
      const hotWaterToDissolve = Math.max(20, Math.round(instantGrams * 15));
      espressoVolInMl = hotWaterToDissolve;
      calculations.push({
        name: "Air Panas Pelarut Kopi",
        amount: hotWaterToDissolve,
        unit: "ml",
        notes: "Melarutkan bubuk kopi sachet instan"
      });
    }
  }

  // Deduct components from total liquid volume
  const remainingLiquid = Math.max(40, remainingVolumeForLiquids - espressoVolInMl - sweetnessVolume);

  // Distribute based on specific drink ID
  if (recipeId === "vietnam-drip") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Susu Kental Manis (SKM) Putih",
        amount: Math.round(sweetnessVolume * 1.3),
        unit: "g",
        notes: "Menciptakan pondasi manis di dasar gelas"
      });
    }
    calculations.push({
      name: "Air Panas Penyeduh (Mendidih)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "susu-gula-aren") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Sirup Gula Aren Cair murni",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }
    const creamerMl = Math.round(totalVolume * 0.05);
    calculations.push({
      name: "Susu Evaporasi (Gurih kental)",
      amount: creamerMl,
      unit: "ml"
    });
    calculations.push({
      name: "Susu Segar Cair (UHT Penuh Lemak)",
      amount: Math.max(30, remainingLiquid - creamerMl),
      unit: "ml"
    });

  } else if (recipeId === "spanish-latte") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Susu Kental Manis (SKM) Putih",
        amount: Math.round(sweetnessVolume * 1.3),
        unit: "g"
      });
    }
    calculations.push({
      name: "Susu Segar Cair (UHT / Fresh Milk)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "coconut-latte") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Sirup Coconut / Kelapa Tropis Premium",
        amount: Math.round(sweetnessVolume * 0.6),
        unit: "ml"
      });
      calculations.push({
        name: "Simple Syrup Pembantu",
        amount: Math.round(sweetnessVolume * 0.4),
        unit: "ml"
      });
    }
    const coconutMilkPart = Math.round(remainingLiquid * 0.25);
    const freshMilkPart = Math.round(remainingLiquid * 0.75);
    calculations.push({
      name: "Krim Kelapa Cair / Santan Ringan",
      amount: coconutMilkPart,
      unit: "ml"
    });
    calculations.push({
      name: "Susu Segar Cair (UHT)",
      amount: freshMilkPart,
      unit: "ml"
    });

  } else if (recipeId === "matcha-espresso") {
    const matchaPowderGrams = Math.round(totalVolume <= 250 ? 5 : totalVolume <= 500 ? 10 : 20);
    calculations.push({
      name: "Premium Pure Japanese Uji Matcha Powder",
      amount: matchaPowderGrams,
      unit: "g",
      notes: "Bubuk teh hijau matcha Jepang premium"
    });
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Simple Syrup",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }
    calculations.push({
      name: "Susu Segar Cair Full Cream (UHT)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "butterscotch-latte") {
    // 15ml - 45ml butterscotch syrup
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Sirup Premium Butterscotch (Butterskotch saus)",
        amount: sweetnessVolume,
        unit: "ml",
        notes: "Menciptakan wangi manis karamel gurih mentega bakar khas"
      });
    }
    calculations.push({
      name: "Susu Segar Cair (UHT)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "hazelnut-latte") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Sirup Kacang Hazelnut Panggang",
        amount: sweetnessVolume,
        unit: "ml",
        notes: "Memberikan manis gurih kacang Eropa yang aromatik"
      });
    }
    calculations.push({
      name: "Susu Segar Cair (UHT)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "vanilla-latte") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Sirup Vanila Vanilla Pods Premium",
        amount: sweetnessVolume,
        unit: "ml",
        notes: "Memberikan aroma manis lembut yang disukai sejuta lidah"
      });
    }
    calculations.push({
      name: "Susu Segar Cair (UHT)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "irish-coffee") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Sirup Irish Cream (Rum non-alkohol Halal)",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }
    calculations.push({
      name: "Air Panas Dilusi Kopi",
      amount: Math.round(remainingLiquid * 0.7),
      unit: "ml"
    });
    calculations.push({
      name: "Heavy Whipping Cream Cair",
      amount: Math.round(remainingLiquid * 0.3),
      unit: "ml",
      notes: "Sebagai topping dingin"
    });

  } else if (recipeId === "cafe-latte" || recipeId === "flat-white" || recipeId === "cappuccino") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Simple Syrup",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }
    const isCold = settings.iceLevel !== "Non Ice";
    calculations.push({
      name: isCold ? "Susu Segar Cair Dingin" : "Steamed Fresh Milk (Susu Panas)",
      amount: remainingLiquid,
      unit: "ml",
      notes: recipeId === "flat-white" ? "Busa mikro super tipis 0.5cm" : recipeId === "cappuccino" ? "Busa tebal 2cm di permukaan" : "Busa microfoam normal 1cm"
    });
    if (recipeId === "cappuccino") {
      calculations.push({
        name: "Taburan Cokelat Bubuk",
        amount: 1,
        unit: "Sejumput"
      });
    }

  } else if (recipeId === "caramel-macchiato") {
    const vanillaVol = Math.max(5, Math.round(sweetnessVolume * 0.6));
    const caramelVol = Math.max(5, Math.round(sweetnessVolume * 0.4));
    calculations.push({
      name: "Sirup Vanilla Premium",
      amount: vanillaVol,
      unit: "ml"
    });
    calculations.push({
      name: "Saus Karamel (Drizzle estetik atas cup)",
      amount: caramelVol,
      unit: "ml"
    });
    calculations.push({
      name: "Susu Segar Cair (UHT)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "americano") {
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Simple Syrup",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }
    calculations.push({
      name: "Air Mineral Bersih (Pencampur)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "mochaccino") {
    const chocolateVol = sweetnessVolume > 0 ? sweetnessVolume : Math.round(totalVolume * 0.08);
    calculations.push({
      name: "Saus Chocolate Pekat / Kakao Cair",
      amount: chocolateVol,
      unit: "ml"
    });
    calculations.push({
      name: "Susu Segar Cair (UHT)",
      amount: Math.max(30, remainingLiquid - 10),
      unit: "ml"
    });
    calculations.push({
      name: "Whipped Cream Semprot",
      amount: 15,
      unit: "g"
    });

  // --- 3. FOR PURE NON-COFFEE ITEMS ---

  } else if (recipeId === "matcha-latte") {
    // Pure Matcha Latte (No coffee)
    // Multiplier scales the Matcha powder amount
    const baseMatchaGrams = totalVolume <= 250 ? 5 : totalVolume <= 500 ? 10 : 18;
    const activeMatchaGrams = Math.round(baseMatchaGrams * coreMultiplier);

    calculations.push({
      name: "Organic Pure Japanese Uji Matcha Powder",
      amount: activeMatchaGrams,
      unit: "g",
      notes: "Kepekatan Matcha asli berkualitas tinggi tinggi antioksidan"
    });

    calculations.push({
      name: "Air Hangat Pelarut Matcha (80°C)",
      amount: Math.round(totalVolume * 0.15),
      unit: "ml",
      notes: "Suhu air tidak boleh mendidih (max 80°C) agar rasa umami terjaga"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Simple Syrup Cair (Gula Tebu)",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }

    calculations.push({
      name: "Susu Segar Cair UHT / Milk Steam",
      amount: remainingLiquid - Math.round(totalVolume * 0.15),
      unit: "ml"
    });

  } else if (recipeId === "taro-latte") {
    const baseTaroGrams = totalVolume <= 250 ? 8 : totalVolume <= 500 ? 15 : 25;
    const activeTaroGrams = Math.round(baseTaroGrams * coreMultiplier);

    calculations.push({
      name: "Bubuk Taro (Keladi Ungu) Premium",
      amount: activeTaroGrams,
      unit: "g",
      notes: "Memberikan warna ungu manis dan cita rasa gurih kue kacang"
    });

    calculations.push({
      name: "Air Hangat Pelarut Bubuk",
      amount: Math.round(totalVolume * 0.15),
      unit: "ml"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Susu Kental Manis / Simple Syrup",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }

    calculations.push({
      name: "Susu Segar Cair (UHT Milk)",
      amount: remainingLiquid - Math.round(totalVolume * 0.15),
      unit: "ml"
    });

  } else if (recipeId === "red-velvet") {
    const baseGrams = totalVolume <= 250 ? 8 : totalVolume <= 500 ? 15 : 25;
    const activeGrams = Math.round(baseGrams * coreMultiplier);

    calculations.push({
      name: "Bubuk Red Velvet Premium",
      amount: activeGrams,
      unit: "g",
      notes: "Memberikan citarasa manis kue beludru cokelat bit khas"
    });

    calculations.push({
      name: "Air Hangat Pelarut Bubuk",
      amount: Math.round(totalVolume * 0.15),
      unit: "ml"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Susu Kental Manis Putih",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }

    calculations.push({
      name: "Susu Segar Cair (UHT Milk)",
      amount: remainingLiquid - Math.round(totalVolume * 0.15),
      unit: "ml"
    });

  } else if (recipeId === "chocolate-signature") {
    const baseGrams = totalVolume <= 250 ? 8 : totalVolume <= 500 ? 16 : 28;
    const activeGrams = Math.round(baseGrams * coreMultiplier);

    calculations.push({
      name: "Bubuk Kakao Premium Belgian Chocolate",
      amount: activeGrams,
      unit: "g",
      notes: "Cokelat Belgian gelap murni yang kaya rasa pahit-manis alami"
    });

    calculations.push({
      name: "Saus Cokelat Cair (Fudge)",
      amount: sweetnessVolume > 0 ? Math.round(sweetnessVolume * 0.5) : 10,
      unit: "ml",
      notes: "Disiram di dasar gelas demi rasa cokelat kental"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Simple Syrup / Gula Cair",
        amount: Math.round(sweetnessVolume * 0.5),
        unit: "ml"
      });
    }

    calculations.push({
      name: "Susu Segar Cair (UHT Full Cream)",
      amount: remainingLiquid,
      unit: "ml"
    });

  } else if (recipeId === "thai-tea") {
    const baseTeaGrams = totalVolume <= 250 ? 6 : totalVolume <= 500 ? 12 : 20;
    const activeTeaGrams = Math.round(baseTeaGrams * coreMultiplier);

    calculations.push({
      name: "Premium Thai Spiced Tea Leaves (Cha Tra Mue)",
      amount: activeTeaGrams,
      unit: "g",
      notes: "Daun teh Thailand otentik wangi vanila"
    });

    const brewWater = Math.round(totalVolume * 0.5);
    calculations.push({
      name: "Air Panas Penyeduh Teh mendidih (95°C)",
      amount: brewWater,
      unit: "ml",
      notes: "Diseduh selama 5 menit penuh lalu disaring"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Susu Kental Manis (SKM) Putih",
        amount: Math.round(sweetnessVolume * 1.4),
        unit: "g",
        notes: "Menciptakan warna manis orange susu khas Thailand"
      });
    }

    calculations.push({
      name: "Susu Evaporasi Cair (Topping gurih)",
      amount: Math.max(20, Math.round(totalVolume * 0.12)),
      unit: "ml",
      notes: "Dituangkan terakhir mengambang di atas es batu"
    });

  } else if (recipeId === "lemon-passionfruit") {
    // Jasmine tea + lemon juice + passionfruit syrup
    const baseTeaGrams = totalVolume <= 250 ? 3 : totalVolume <= 500 ? 6 : 10;
    const activeTeaGrams = Math.round(baseTeaGrams * coreMultiplier);

    calculations.push({
      name: "Daun Jasmine Blossom Green Tea",
      amount: activeTeaGrams,
      unit: "g"
    });

    const brewWater = Math.round(totalVolume * 0.6);
    calculations.push({
      name: "Air Panas Penyeduh Teh Melati",
      amount: brewWater,
      unit: "ml"
    });

    const lemonJuiceMl = totalVolume <= 250 ? 8 : totalVolume <= 500 ? 15 : 25;
    calculations.push({
      name: "Air Lemon Perasan Jeruk Segar murni",
      amount: lemonJuiceMl,
      unit: "ml"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Saus / Sirup Markisa (Passion Fruit Syrup)",
        amount: Math.round(sweetnessVolume * 0.7),
        unit: "ml",
        notes: "Memberikan keasaman aroma markisa tropis segar"
      });
      calculations.push({
        name: "Simple Syrup Cairan Manis",
        amount: Math.round(sweetnessVolume * 0.3),
        unit: "ml"
      });
    }

    return calculations;

  } else if (recipeId === "lychee-yakult") {
    // Lychee yakult soda
    const bottleCounts = totalVolume <= 250 ? 1 : totalVolume <= 500 ? 2 : 4;
    calculations.push({
      name: "Susu Fermentasi Yakult Probiotik",
      amount: bottleCounts,
      unit: "Botol",
      notes: "Unsur rasa manis asam susu kultur sehat"
    });

    const rawLycCount = totalVolume <= 250 ? 1 : totalVolume <= 500 ? 3 : 5;
    calculations.push({
      name: "Buah Leci Kalengan Premium utuh",
      amount: rawLycCount,
      unit: "Buah",
      notes: "Sebagai topping buah manis mewah di dasar cup"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Sirup Rasa Leci Konsentrat manis",
        amount: sweetnessVolume,
        unit: "ml"
      });
    }

    const sodaMl = Math.round(remainingVolumeForLiquids * 0.45);
    calculations.push({
      name: "Air Soda Tawar Bergas (Club Soda / Sprite)",
      amount: sodaMl,
      unit: "ml"
    });

  } else if (recipeId === "brown-sugar-milk") {
    // Brown Sugar Milk Boba (non-coffee)
    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Saus Gula Aren Murni Organik Pekat (Brown Sugar)",
        amount: sweetnessVolume,
        unit: "ml",
        notes: "Dituangkan tebal di sekeliling dinding gelas agar melehok artistik"
      });
    }

    calculations.push({
      name: "Boba Mentega / Tapioca Pearl Manis hangat",
      amount: totalVolume <= 250 ? 40 : totalVolume <= 500 ? 75 : 120,
      unit: "g",
      notes: "Mutiara tapioka kenyal diletakkan di dasar gelas"
    });

    calculations.push({
      name: "Susu Segar Cair (Fresh Milk Full Cream dingin)",
      amount: remainingLiquid,
      unit: "ml",
      notes: "Susu murni gurih dingin dituangkan pelan"
    });

  } else if (recipeId === "strawberry-matcha") {
    // Strawberry matcha layered latte (non-coffee)
    const baseMatchaGrams = totalVolume <= 250 ? 3 : totalVolume <= 500 ? 6 : 10;
    calculations.push({
      name: "Uji Matcha Powder (Kocok air hangat)",
      amount: baseMatchaGrams,
      unit: "g"
    });

    calculations.push({
      name: "Air Hangat pelarut Matcha",
      amount: Math.round(totalVolume * 0.12),
      unit: "ml"
    });

    const strawberryCompoteGrams = totalVolume <= 250 ? 25 : totalVolume <= 500 ? 45 : 80;
    calculations.push({
      name: "Puree / Selai Stroberi Alami Premium",
      amount: strawberryCompoteGrams,
      unit: "g",
      notes: "Sebagai fondasi warna merah pastel asam manis di dasar gelas"
    });

    if (sweetnessVolume > 0) {
      calculations.push({
        name: "Simple Syrup tambahan",
        amount: Math.round(sweetnessVolume * 0.5),
        unit: "ml"
      });
    }

    calculations.push({
      name: "Susu Segar Cair (UHT Full Cream dingin)",
      amount: remainingLiquid - Math.round(totalVolume * 0.12),
      unit: "ml"
    });
  }

  // Final validation and add global Ice cube if Cold
  if (iceGrams > 0) {
    calculations.push({
      name: "Es Batu Kepala Kristal / Tube Ice",
      amount: iceGrams,
      unit: "g",
      notes: "Mendinginkan minuman tanpa mencair instan"
    });
  }

  return calculations;
}
