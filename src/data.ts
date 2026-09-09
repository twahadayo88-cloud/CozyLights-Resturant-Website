/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Review, GalleryItem } from "./types";

// Explicit paths to the generated high-quality images
export const IMAGES = {
  heroBg: "/src/assets/images/hero_bg_1780226857235.png",
  chefMascot: "/src/assets/images/anime_chef_1780226879113.png",
  wagyuRamen: "/src/assets/images/dish_ramen_1780226896014.png",
  matchaDessert: "/src/assets/images/dish_dessert_1780226915206.png",
  CozyCocktail: "/src/assets/images/dish_cocktail_1780226933463.png",
};

export const MENU_ITEMS: MenuItem[] = [
  // --- STARTERS ---
  {
    id: "starters-1",
    name: "Truffle Sake Gyoza",
    nativeName: "トリュフ鮭餃子",
    description: "Delicate pan-seared wrappers filled with Atlantic king salmon, black winter truffle essence, served on high-contrast saffron lemongrass emulsion.",
    price: 24,
    category: "Starters",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800",
    tags: ["Signature", "Truffle", "Seafood"],
    isVegetarian: false,
    spicyLevel: 1
  },
  {
    id: "starters-2",
    name: "Golden Cardamom Paneer Tataki",
    nativeName: "タタキ風炭火チーズ",
    description: "Lightly seared organic tandoori paneer, infused with fresh green cardamom, served over smoked tataki gel and yuzu-wasabi glaze.",
    price: 22,
    category: "Starters",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
    tags: ["Vegetarian", "Royal Pakistan", "Wasabi Glasswear"],
    isVegetarian: true,
    spicyLevel: 1
  },
  {
    id: "starters-3",
    name: "Gold Leaf Bluefin Tataki",
    nativeName: "金箔本まぐろタタキ",
    description: "Slices of premium fat bluefin tuna crusted in Shichimi Togarashi and 24K edible gold leaf, resting on charred avocado-cream and sweet tamari dashi.",
    price: 32,
    category: "Starters",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    tags: ["Luxury", "Seafood", "Keto"],
    isVegetarian: false,
    spicyLevel: 0
  },

  // --- MAIN COURSE ---
  {
    id: "mains-1",
    name: "Royal Golden Saffron Ramen",
    nativeName: "極上サフラン和牛ラーメン",
    description: "Creamy imperial saffron-dashi broth, hand-cut wheat noodles, butter-tender sliced Miyazaki A5 Wagyu beef, crowned with 24-karat gold foil, soft organic shoyu egg, and fresh Cozy blossoms.",
    price: 68,
    category: "Main Course",
    imageUrl: IMAGES.wagyuRamen,
    tags: ["Chef's Special", "Wagyu", "A5 Luxury"],
    isVegetarian: false,
    spicyLevel: 1
  },
  {
    id: "mains-2",
    name: "Imperial Tandoori Lobster Thermidor",
    nativeName: "ロブスター・テルミドール・窯焼き",
    description: "Spiny lobster clay-oven roasted with Kashmiri chili and Japanese white miso, baked with gruyère-shitake cream and served with truffle-infused saffron jasmine rice.",
    price: 74,
    category: "Main Course",
    imageUrl: "https://i0.wp.com/themaplecuttingboard.com/wp-content/uploads/2019/11/Termidor.jpeg?resize=1024%2C768&ssl=1",
    tags: ["Royal Grand Special", "Seafood", "Mild Spicy"],
    isVegetarian: false,
    spicyLevel: 2
  },
  {
    id: "mains-3",
    name: "Cozy Crusted Venison Fillet",
    nativeName: "鹿肉の桜ロースト",
    description: "Premium New Zealand venison loin, crusted with freeze-dried Cozy blossoms and pink peppercorns, served with sweet kabocha pumpkin purée, roasted wild matsutake mushrooms, and red plum reduction.",
    price: 58,
    category: "Main Course",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    tags: ["Exotic", "Cozy Taste"],
    isVegetarian: false,
    spicyLevel: 0
  },
  {
    id: "mains-4",
    name: "Shitake Truffle Katsu Curry",
    nativeName: "松露椎茸カツカレー",
    description: "Crispy panko-breaded portobello and king oyster mushrooms stuffed with white truffle paste, over royal rich cardamom-infused Japanese curry and ceremonial black rice.",
    price: 36,
    category: "Main Course",
    imageUrl: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800",
    tags: ["Vegetarian", "Gluten-Free Available"],
    isVegetarian: true,
    spicyLevel: 1
  },

  // --- DESSERTS ---
  {
    id: "desserts-1",
    name: "Golden Matcha Soufflé",
    nativeName: "金粉宇治抹茶スフレ",
    description: "Fluffy award-winning Uji matcha soufflé infused with gold dust, surrounded by delicate white chocolate cherry blossom branches and rich ruby raspberry dew drops.",
    price: 25,
    category: "Desserts",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663700665687/TU68iqbefpKgs66W8a23ui/hero-matcha-v3-CHBDwCzpyhiZdFNKs5orVi.webp",
    tags: ["Signature Dessert", "Uji Matcha", "Hot Soufflé"],
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: "desserts-2",
    name: "Cozy Lychee Rose Mousse",
    nativeName: "桜ライチローズムース",
    description: "Silky light dome mousse made with organic white chocolate, fresh lychees, and infused with imported rosewater, set on a buttery pistachio financier crust.",
    price: 22,
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    tags: ["Floral", "Gluten-Free"],
    isVegetarian: true,
    spicyLevel: 0
  },

  // --- BEVERAGES ---
  {
    id: "beverages-1",
    name: "Cozy Royal Shimmering Elixir",
    nativeName: "桜ロワイヤル・カクテル",
    description: "Shimmering rose-tinted fine crystal glass blend of pure Cozy botanical distillate, elderflower liqueur, champagne bubbles, and edible liquid gold flakes.",
    price: 28,
    category: "Beverages",
    imageUrl: IMAGES.CozyCocktail,
    tags: ["Signature Elixir", "Alcoholic", "Shimmering"],
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: "beverages-2",
    name: "Ceremonial Smoked Gyokuro Tea",
    nativeName: "燻製玉露茶",
    description: "Highest michelin-grade Japanese Gyokuro green tea leaves, delicately hot-smoked with applewood branches, presented in gold-lined luxury iron cast pot, releasing soothing earthy mist.",
    price: 18,
    category: "Beverages",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    tags: ["Ceremonial", "Non-Alcoholic", "Aromatic"],
    isVegetarian: true,
    spicyLevel: 0
  },

  // --- CHEF'S SPECIALS ---
  {
    id: "specials-1",
    name: "Royal Wagyu Wellington with Masala Demiglace",
    nativeName: "宮崎和牛ウェリントン・極み",
    description: "Supreme Miyazaki A5 Wagyu tenderloin wrapped in butter puff pastry and truffle duxelles, baked to perfect pink. Finished with high-end reduction of Garam Masala and Japanese port wine.",
    price: 95,
    category: "Chef's Specials",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800",
    tags: ["Limited Portions", "Highly Culinary Cross-Over"],
    isVegetarian: false,
    spicyLevel: 1
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Cozy Pavilion",
    category: "Interiors",
    imageUrl: IMAGES.heroBg,
    description: "Our main dining pavilion combining high-contrast structural arches, luxury cherry blossoms elements, and Tokyo starlight panorama."
  },
  {
    id: "gal-2",
    title: "Signature Golden Saffron Ramen",
    category: "Dishes",
    imageUrl: IMAGES.wagyuRamen,
    description: "The ultimate culinary blend showcasing A5 Miyazki Wagyu beef and gold leaf in rich imperial broth."
  },
  {
    id: "gal-3",
    title: "Matcha gold Soufflé plating",
    category: "Dishes",
    imageUrl: IMAGES.matchaDessert,
    description: "Award-winning dessert crafted by our dessert artisans, painted with raspberry droplets and edible golden stems."
  },
  {
    id: "gal-4",
    title: "Chef Kenji Preparing Sashimi",
    category: "Chef Moments",
    imageUrl: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=800",
    description: "Our head master chef using visual precision with his hand-forged Tamahagane steel steel knife."
  },
  {
    id: "gal-5",
    title: "The Shimmering Lounge Bar",
    category: "Interiors",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    description: "Elegant cocktail bar styled with gold mirrors, deep blue velvet lounge chairs, and dry ice masterworks."
  },
  {
    id: "gal-6",
    title: "Imperial Cozy Banquet Night",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    description: "An exclusive monthly wine and dine hosting high-end artists, Michelin inspectors, and patrons of food craft."
  }
];

export const REVIEWS_LIST: Review[] = [
  {
    id: "rev-1",
    name: "Lady Valerie Sterling",
    role: "Michelin Guide Reviewer",
    text: "An ethereal marriage of historical Japanese patience and Pakistan royal aroma. The Royal Saffron Ramen was an emotional experience. The gold leaf shimmered in Tokyo's night lights perfectly.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    date: "May 2026"
  },
  {
    id: "rev-2",
    name: "Seiji Takahashi",
    role: "Culinary Historian & Novelist",
    text: "As someone who writes stories, Cozy Lights looks like it was plucked straight from a Royal Palace anime scene. Every dynamic hover detail, the subtle sound of Gyokuro steam, and Chef's warm recommendations makes me feel like a king.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    date: "April 2026"
  },
  {
    id: "rev-3",
    name: "Dr. Ananya Iyer",
    role: "Luxury Lifestyle Collector",
    text: "A masterpiece of sensory fine dining. The Cardamom Tataki Starter combined with their golden infused matcha is purely genius. Worth every single rupee and yen. Absolute top notch hospitality.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    date: "May 2026"
  }
];
