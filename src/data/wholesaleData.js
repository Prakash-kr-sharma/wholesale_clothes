export const OCCASIONS = [
  {
    id: "all",
    name: "All Occasions",
    icon: "Sparkles",
    tagline: "Complete Wholesale Wardrobe",
    itemCount: "5,000+ Designs"
  },
  {
    id: "wedding",
    name: "Wedding & Reception",
    icon: "Crown",
    tagline: "Grand Bridal, Sherwanis & Tuxedos",
    itemCount: "1,200+ Designs",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "Raw Silk, Velvet, Georgette, Brocade",
    avgMargin: "65% - 80%"
  },
  {
    id: "festive",
    name: "Festive & Traditional",
    icon: "Flame",
    tagline: "Diwali, Eid, Navratri & Puja Outfits",
    itemCount: "1,650+ Designs",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "Chanderi Silk, Rayon Viscose, Cotton Blend",
    avgMargin: "55% - 70%"
  },
  {
    id: "corporate",
    name: "Corporate & Formal",
    icon: "Briefcase",
    tagline: "Office Suits, Blouses, Wrinkle-Free Shirts",
    itemCount: "820+ Designs",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "Egyptian Giza Cotton, Terry Rayon, Poly-Wool",
    avgMargin: "50% - 65%"
  },
  {
    id: "casual",
    name: "Casual & Streetwear",
    icon: "Shirt",
    tagline: "Heavyweight 240 GSM Tees, Baggy Denims & Co-ords",
    itemCount: "2,100+ Designs",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "100% Combed Cotton, French Terry, Slub Denim",
    avgMargin: "60% - 75%"
  },
  {
    id: "party",
    name: "Party & Clubwear",
    icon: "GlassWater",
    tagline: "Sequin Dresses, Satin Shirts & Velvet Blazers",
    itemCount: "740+ Designs",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "Liquid Satin, Metallic Spandex, Shimmer Crepe",
    avgMargin: "65% - 85%"
  },
  {
    id: "athleisure",
    name: "Athleisure & Gym",
    icon: "Activity",
    tagline: "Dry-Fit Performance Tees, Joggers & Yoga Sets",
    itemCount: "680+ Designs",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "Nylon-Spandex 4-Way Stretch, Dry-Tech Poly",
    avgMargin: "50% - 65%"
  },
  {
    id: "resort",
    name: "Resort & Holiday",
    icon: "Palmtree",
    tagline: "Cuban Collar Floral Shirts & Linen Maxi Dresses",
    itemCount: "590+ Designs",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "Pure Flax Linen, Modal, Poplin Cotton",
    avgMargin: "60% - 75%"
  },
  {
    id: "seasonal",
    name: "Winter & Layering",
    icon: "Snowflake",
    tagline: "Fleece Hoodies, Bonded Jackets & Wool Blend Coats",
    itemCount: "450+ Designs",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    popularFabrics: "Polar Fleece 380 GSM, Cashmere Blend, Puffer Nylon",
    avgMargin: "55% - 70%"
  }
];

export const WHOLESALE_PRODUCTS = [
  // WEDDING
  {
    id: "prod-w01",
    name: "Imperial Hand-Embroidered Velvet Sherwani Set",
    occasion: "wedding",
    category: "Men",
    wholesalePrice: 2850,
    retailPrice: 8999,
    moq: 15,
    fabric: "Micro Velvet with Zari & Stone Craft",
    gsm: "340 GSM",
    colors: ["#3b0914", "#0a192f", "#1e1e1e", "#4a3525"],
    sizes: ["38", "40", "42", "44"],
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 84,
    badge: "Wedding Hot Pick",
    description: "Full royal 3-piece sherwani set with churidar and designer stole. Heavy handwork collar and placket.",
    tierPricing: [
      { qty: "15 - 49 pcs", price: 2850 },
      { qty: "50 - 99 pcs", price: 2650 },
      { qty: "100+ pcs", price: 2400 }
    ]
  },
  {
    id: "prod-w02",
    name: "Heritage Heritage Semi-Stitched Raw Silk Bridal Lehenga",
    occasion: "wedding",
    category: "Women",
    wholesalePrice: 3450,
    retailPrice: 11499,
    moq: 10,
    fabric: "Pure Raw Silk with Multi-Thread Dori Work",
    gsm: "380 GSM",
    colors: ["#800020", "#b76e79", "#d4af37", "#4b0082"],
    sizes: ["Semi-Stitched (Fits up to 44 Bust)"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    reviewsCount: 112,
    badge: "70% Retail Margin",
    description: "Includes heavy flair lehenga (4.2m can-can included), matching blouse fabric, and double dupatta.",
    tierPricing: [
      { qty: "10 - 29 pcs", price: 3450 },
      { qty: "30 - 79 pcs", price: 3200 },
      { qty: "80+ pcs", price: 2950 }
    ]
  },
  {
    id: "prod-w03",
    name: "Royal Tuxedo 3-Piece Peak Lapel Suit",
    occasion: "wedding",
    category: "Men",
    wholesalePrice: 2200,
    retailPrice: 6999,
    moq: 20,
    fabric: "Italian Wool-Blend Terry Rayon",
    gsm: "290 GSM",
    colors: ["#0f172a", "#18181b", "#312e81"],
    sizes: ["36", "38", "40", "42", "44"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 65,
    badge: "Boutique Best Seller",
    description: "Satin shawl collar blazer, slim-fit trouser and double-breasted waistcoat. Wrinkle resistant.",
    tierPricing: [
      { qty: "20 - 49 pcs", price: 2200 },
      { qty: "50 - 99 pcs", price: 1980 },
      { qty: "100+ pcs", price: 1800 }
    ]
  },

  // FESTIVE
  {
    id: "prod-f01",
    name: "Lucknowi Chikankari Chanderi Silk Kurta Set",
    occasion: "festive",
    category: "Men",
    wholesalePrice: 790,
    retailPrice: 2299,
    moq: 30,
    fabric: "Chanderi Cotton Silk with Cotton Voile Lining",
    gsm: "180 GSM",
    colors: ["#fef08a", "#bae6fd", "#fbcfe8", "#bbf7d0", "#ffffff"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 140,
    badge: "Fast Mover",
    description: "Delicate Chikankari embroidery on soft festive hues. Pre-washed and colorfast certified.",
    tierPricing: [
      { qty: "30 - 74 pcs", price: 790 },
      { qty: "75 - 199 pcs", price: 720 },
      { qty: "200+ pcs", price: 650 }
    ]
  },
  {
    id: "prod-f02",
    name: "Embroidered Georgette Anarkali 3-Piece Suit",
    occasion: "festive",
    category: "Women",
    wholesalePrice: 950,
    retailPrice: 2999,
    moq: 25,
    fabric: "Heavy Fox Georgette with Santoon Bottom & Nazmin Dupatta",
    gsm: "190 GSM",
    colors: ["#16a34a", "#dc2626", "#2563eb", "#d97706"],
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1583391733975-27a3c3160a02?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 96,
    badge: "Festive Ready",
    description: "Flowy 3.5m flare Anarkali with mirror-like sequence yoke and borders. Ready-to-ship stock.",
    tierPricing: [
      { qty: "25 - 59 pcs", price: 950 },
      { qty: "60 - 149 pcs", price: 870 },
      { qty: "150+ pcs", price: 799 }
    ]
  },
  {
    id: "prod-f03",
    name: "Festive Printed Nehru Jacket & Kurta Set (Kids)",
    occasion: "festive",
    category: "Kids",
    wholesalePrice: 480,
    retailPrice: 1499,
    moq: 40,
    fabric: "Jacquard Banarasi Silk Jacket with Cotton Kurta Pajama",
    gsm: "210 GSM",
    colors: ["#f59e0b", "#ec4899", "#3b82f6"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 52,
    badge: "High Volume",
    description: "Kid-friendly skin-safe stitching with inner soft cotton lining. Vibrant festive jacquard patterns.",
    tierPricing: [
      { qty: "40 - 99 pcs", price: 480 },
      { qty: "100 - 249 pcs", price: 430 },
      { qty: "250+ pcs", price: 390 }
    ]
  },

  // CORPORATE / FORMAL
  {
    id: "prod-c01",
    name: "Giza Cotton Wrinkle-Free Executive Formal Shirt",
    occasion: "corporate",
    category: "Men",
    wholesalePrice: 420,
    retailPrice: 1299,
    moq: 50,
    fabric: "100% Egyptian Giza 60s Compact Cotton",
    gsm: "145 GSM",
    colors: ["#ffffff", "#e0f2fe", "#f1f5f9", "#cbd5e1", "#fdf4ff"],
    sizes: ["38", "39", "40", "42", "44"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 180,
    badge: "Office Uniform Hero",
    description: "Micro-twill finish with easy iron coating. French placket and sturdy fused collar.",
    tierPricing: [
      { qty: "50 - 149 pcs", price: 420 },
      { qty: "150 - 499 pcs", price: 375 },
      { qty: "500+ pcs", price: 330 }
    ]
  },
  {
    id: "prod-c02",
    name: "Tailored Smart-Stretch Corporate Trousers",
    occasion: "corporate",
    category: "Men",
    wholesalePrice: 490,
    retailPrice: 1499,
    moq: 40,
    fabric: "Poly-Viscose Spandex Mechanical Stretch",
    gsm: "260 GSM",
    colors: ["#0f172a", "#334155", "#1c1917", "#78716c"],
    sizes: ["30", "32", "34", "36", "38"],
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 130,
    badge: "Uniform Staple",
    description: "Permanent crease front, shirt-gripper inner waistband, double back welt pockets.",
    tierPricing: [
      { qty: "40 - 99 pcs", price: 490 },
      { qty: "100 - 299 pcs", price: 440 },
      { qty: "300+ pcs", price: 395 }
    ]
  },
  {
    id: "prod-c03",
    name: "Executive Power Blazer & Pencil Skirt Co-ord",
    occasion: "corporate",
    category: "Women",
    wholesalePrice: 1100,
    retailPrice: 3499,
    moq: 20,
    fabric: "Premium Structured Crepe with Poly Taffeta Lining",
    gsm: "270 GSM",
    colors: ["#09090b", "#1e293b", "#0f766e", "#831843"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 77,
    badge: "Premium Corporate",
    description: "Modern notched lapel single-button blazer paired with high-waist formal midi skirt.",
    tierPricing: [
      { qty: "20 - 49 pcs", price: 1100 },
      { qty: "50 - 99 pcs", price: 990 },
      { qty: "100+ pcs", price: 890 }
    ]
  },

  // CASUAL & STREETWEAR
  {
    id: "prod-cs01",
    name: "Heavyweight 240 GSM Drop-Shoulder Oversized Tee",
    occasion: "casual",
    category: "Unisex",
    wholesalePrice: 240,
    retailPrice: 899,
    moq: 60,
    fabric: "100% Super-Combed Bio-Washed Ring-Spun Cotton",
    gsm: "240 GSM Heavyweight",
    colors: ["#09090b", "#ffffff", "#4b5563", "#78350f", "#14532d", "#312e81"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 320,
    badge: "Gen-Z Top Seller #1",
    description: "Denser Lycra ribbed collar that doesn't loosen. Perfect for streetwear brands and custom screen printing.",
    tierPricing: [
      { qty: "60 - 199 pcs", price: 240 },
      { qty: "200 - 499 pcs", price: 215 },
      { qty: "500+ pcs", price: 185 }
    ]
  },
  {
    id: "prod-cs02",
    name: "Korean Fit Pleated Relaxed Chino Trouser",
    occasion: "casual",
    category: "Men",
    wholesalePrice: 520,
    retailPrice: 1699,
    moq: 30,
    fabric: "Heavy Cotton Twill with Vintage Bio Wash",
    gsm: "290 GSM",
    colors: ["#d6d3d1", "#292524", "#78716c", "#1c1917"],
    sizes: ["30", "32", "34", "36"],
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 94,
    badge: "Trending Fit",
    description: "Double front pleats with baggy tapered hem. Top seller in metro city boutiques.",
    tierPricing: [
      { qty: "30 - 74 pcs", price: 520 },
      { qty: "75 - 199 pcs", price: 470 },
      { qty: "200+ pcs", price: 420 }
    ]
  },
  {
    id: "prod-cs03",
    name: "Women's Relaxed Linen-Cotton Co-ord Set",
    occasion: "casual",
    category: "Women",
    wholesalePrice: 620,
    retailPrice: 1999,
    moq: 25,
    fabric: "Pre-Shrunk Linen Cotton Slub",
    gsm: "200 GSM",
    colors: ["#ecfdf5", "#fef3c7", "#fdf2f8", "#f3f4f6"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 110,
    badge: "Summer Essential",
    description: "Oversized button-down shirt paired with elasticated drawstring wide-leg pants.",
    tierPricing: [
      { qty: "25 - 59 pcs", price: 620 },
      { qty: "60 - 149 pcs", price: 560 },
      { qty: "150+ pcs", price: 499 }
    ]
  },

  // PARTY & EVENING
  {
    id: "prod-p01",
    name: "Luxe Midnight Velvet Sequin Blazer",
    occasion: "party",
    category: "Men",
    wholesalePrice: 1450,
    retailPrice: 4499,
    moq: 20,
    fabric: "German Micro Velvet with Micro Shimmer Sequins",
    gsm: "320 GSM",
    colors: ["#000000", "#1e1b4b", "#450a0a", "#14532d"],
    sizes: ["38", "40", "42", "44"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 73,
    badge: "Club Night Special",
    description: "Sleek satin trim pocket flaps and shawl lapel. Adds instant luxury to partywear racks.",
    tierPricing: [
      { qty: "20 - 49 pcs", price: 1450 },
      { qty: "50 - 99 pcs", price: 1320 },
      { qty: "100+ pcs", price: 1180 }
    ]
  },
  {
    id: "prod-p02",
    name: "Draped Liquid Satin Cocktail Slip Dress",
    occasion: "party",
    category: "Women",
    wholesalePrice: 580,
    retailPrice: 1899,
    moq: 30,
    fabric: "High-Density Liquid Silk Satin",
    gsm: "160 GSM",
    colors: ["#be123c", "#0f172a", "#d97706", "#047857"],
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 145,
    badge: "69% Profit Margin",
    description: "Cowl neck with bias cut for flattering drape and adjustable criss-cross back straps.",
    tierPricing: [
      { qty: "30 - 74 pcs", price: 580 },
      { qty: "75 - 199 pcs", price: 520 },
      { qty: "200+ pcs", price: 460 }
    ]
  },

  // ATHLEISURE & GYM
  {
    id: "prod-a01",
    name: "Pro-Performance Seamless 4-Way Stretch Gym Set",
    occasion: "athleisure",
    category: "Women",
    wholesalePrice: 480,
    retailPrice: 1599,
    moq: 40,
    fabric: "88% Nylon + 12% Spandex QuickDry Knit",
    gsm: "280 GSM Squat Proof",
    colors: ["#18181b", "#065f46", "#831843", "#1e3a8a"],
    sizes: ["S", "M", "L"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 88,
    badge: "Gym Grade Squat Proof",
    description: "High-waisted tummy control leggings + removable pad sports bra combo.",
    tierPricing: [
      { qty: "40 - 99 pcs", price: 480 },
      { qty: "100 - 249 pcs", price: 430 },
      { qty: "250+ pcs", price: 380 }
    ]
  },
  {
    id: "prod-a02",
    name: "Rapid-Dry Muscle Fit Gym T-Shirt & Shorts Combo",
    occasion: "athleisure",
    category: "Men",
    wholesalePrice: 380,
    retailPrice: 1199,
    moq: 50,
    fabric: "Hex-Mesh Breathable Dry-Tech Polyester",
    gsm: "170 GSM",
    colors: ["#1e293b", "#dc2626", "#2563eb", "#475569"],
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1483721074574-069150024991?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 92,
    badge: "Bulk Fast Mover",
    description: "Anti-odor silver ion treated fabric. Elastic waistband shorts with zip phone pockets.",
    tierPricing: [
      { qty: "50 - 149 pcs", price: 380 },
      { qty: "150 - 399 pcs", price: 340 },
      { qty: "400+ pcs", price: 299 }
    ]
  },

  // RESORT & VACATION
  {
    id: "prod-r01",
    name: "Cuban Camp Collar Tropical Floral Linen Shirt",
    occasion: "resort",
    category: "Men",
    wholesalePrice: 360,
    retailPrice: 1199,
    moq: 40,
    fabric: "70% Rayon + 30% Cotton Slub Breathable Weave",
    gsm: "150 GSM",
    colors: ["#0f766e", "#b45309", "#4338ca", "#047857"],
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 104,
    badge: "Resort Favorite",
    description: "Relaxed resort cut with coconut shell buttons. Perfect for beach and casual summer tourism racks.",
    tierPricing: [
      { qty: "40 - 99 pcs", price: 360 },
      { qty: "100 - 249 pcs", price: 320 },
      { qty: "250+ pcs", price: 285 }
    ]
  },
  {
    id: "prod-r02",
    name: "Boho Tiered Maxi Sundress with Belt",
    occasion: "resort",
    category: "Women",
    wholesalePrice: 490,
    retailPrice: 1599,
    moq: 30,
    fabric: "100% Cotton Gauze Double-Cloth",
    gsm: "165 GSM",
    colors: ["#fef08a", "#fdba74", "#f472b6", "#a7f3d0"],
    sizes: ["Free Size (Fits S to XL)"],
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 68,
    badge: "Trending Vacation",
    description: "Smocked elastic bodice with tiered ankle-length skirt and braided macrame belt.",
    tierPricing: [
      { qty: "30 - 74 pcs", price: 490 },
      { qty: "75 - 199 pcs", price: 440 },
      { qty: "200+ pcs", price: 395 }
    ]
  },

  // WINTER & SEASONAL
  {
    id: "prod-s01",
    name: "360 GSM Heavy Polar Fleece Oversized Hoodie",
    occasion: "seasonal",
    category: "Unisex",
    wholesalePrice: 480,
    retailPrice: 1499,
    moq: 35,
    fabric: "Cotton-Poly Brushed Interior Fleece 360 GSM",
    gsm: "360 GSM Super Heavy",
    colors: ["#18181b", "#e4e4e7", "#3f3f46", "#7f1d1d", "#14532d"],
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 160,
    badge: "Winter Best Seller",
    description: "Double layered oversized hood, kangaroo pocket with bartack reinforcement, lint-free guarantee.",
    tierPricing: [
      { qty: "35 - 99 pcs", price: 480 },
      { qty: "100 - 299 pcs", price: 430 },
      { qty: "300+ pcs", price: 380 }
    ]
  },
  {
    id: "prod-s02",
    name: "Matte Finish Bonded Puffer Vest Jacket",
    occasion: "seasonal",
    category: "Men",
    wholesalePrice: 650,
    retailPrice: 1999,
    moq: 25,
    fabric: "Water-Repellent Poly Shell with Microfiber Down Fill",
    gsm: "220 GSM Fill",
    colors: ["#0f172a", "#374151", "#78350f"],
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 79,
    badge: "High Demand",
    description: "Sleeveless thermal vest with YKK brass zipper and fleece lined hand-warmer pockets.",
    tierPricing: [
      { qty: "25 - 59 pcs", price: 650 },
      { qty: "60 - 149 pcs", price: 580 },
      { qty: "150+ pcs", price: 520 }
    ]
  }
];

export const WHOLESALE_BENEFITS = [
  {
    title: "Direct Mill Sourcing",
    tag: "Lowest Cost Guarantee",
    desc: "We own integrated spinning and stitching units in Surat & Tirupur. You cut out 3 middlemen and enjoy genuine manufacturer pricing.",
    metric: "Save 25-35%"
  },
  {
    title: "Occasion-Wise Assortment",
    tag: "All-in-One Supplier",
    desc: "No need to juggle 8 different vendors. Order bridal lehengas, street tees, corporate uniforms, and festive kurtas in a single combined shipment.",
    metric: "9 Major Occasions"
  },
  {
    title: "Private Label & White Label",
    tag: "Your Brand, Our Manufacturing",
    desc: "Custom woven main neck tags, wash care labels, branded hangtags, and barcoded custom polybags ready for your boutique shelves.",
    metric: "MOQ: 100 pcs/style"
  },
  {
    title: "Risk-Free Sample Kits",
    tag: "Test Before Large Runs",
    desc: "Order a 3-piece swatch and master sample pack. Check the fabric feel, stitch tension, and wash behavior before booking a 500-piece carton.",
    metric: "100% Refundable"
  },
  {
    title: "Pan-India Express Logistics",
    tag: "Doorstep Delivery",
    desc: "Tied up with SafeExpress, VRL Logistics, Delhivery & Bluedart. Guaranteed transport dispatch within 24-48 hours of order confirmation.",
    metric: "19,000+ PIN Codes"
  },
  {
    title: "GST Credit & Flexible Invoicing",
    tag: "100% Legal B2B",
    desc: "Full GST tax invoicing for effortless Input Tax Credit (ITC) claiming. Flexible payment gateways, NEFT/RTGS, and Letter of Credit support.",
    metric: "100% GST Invoiced"
  }
];

export const RETAILER_TESTIMONIALS = [
  {
    name: "Vikram Singhania",
    store: "Singhania Menswear (3 Showrooms)",
    city: "Connaught Place, New Delhi",
    quote: "We've been stocking THREADHUB's corporate shirts and wedding tuxedos for 2 seasons. The finish on the 60s Giza cotton is as good as premium mall brands, and our gross retail margins have jumped from 38% to over 62%.",
    ordersCount: "42 Bulk Orders",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Pooja Deshmukh",
    store: "Aura Ethnic & Bridal Boutique",
    city: "Bandra West, Mumbai",
    quote: "Finding high quality wedding lehengas and festive Chikankari kurtas with consistent embroidery was a nightmare before THREADHUB. The sample kit arrived in 2 days and the 150-piece bulk shipment was pristine.",
    ordersCount: "28 Bulk Orders",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Karthik Raja",
    store: "Urban Drift Streetwear (Online + 2 Stores)",
    city: "Indiranagar, Bengaluru",
    quote: "Their 240 GSM drop shoulder oversized t-shirts sell out within 10 days of dropping on our website. The neck collar never stretches out after washing, which keeps our return rate under 1.8%.",
    ordersCount: "60+ Bulk Orders",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Meenakshi Sunder",
    store: "Kavya Silks & Readymades",
    city: "T. Nagar, Chennai",
    quote: "The ability to mix occasion orders—like 50 kids festive sets and 100 women's coords—in one transport invoice makes THREADHUB our primary distributor. Truly dependable wholesale partner.",
    ordersCount: "35 Bulk Orders",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

export const WHOLESALE_FAQS = [
  {
    q: "What is the Minimum Order Quantity (MOQ)?",
    a: "Our MOQ starts from just 15 to 30 pieces per design/style depending on the garment category (e.g. 15 pcs for heavy wedding lehengas, 30 pcs for festive kurtas, 60 pcs for oversized t-shirts). You can select standard size ratios (e.g., S:1, M:2, L:2, XL:1)."
  },
  {
    q: "Can I order a Sample Swatch or single sample set first?",
    a: "Yes! We encourage all new retailers to test our quality. We offer a 'Retailer Quality Sample Box' with 3 representative pieces across your chosen occasions. The sample cost is fully credited back against your first bulk order."
  },
  {
    q: "Do you provide custom branding, neck labels, and tags?",
    a: "Absolutely. For bulk orders above 100 pcs per style, we provide full private labeling services including your custom woven brand tag, wash-care ribbon, personalized barcode hangtags, and branded polybag packaging."
  },
  {
    q: "How does wholesale shipping work and how long does delivery take?",
    a: "We ship PAN-India from our central logistics hubs in Surat and Delhi NCR via trusted surface transport (VRL, SafeExpress, TCI) and air cargo (Bluedart, Delhivery). Delivery takes 2-4 days for Tier 1 metros and 4-6 days for Tier 2/3 cities."
  },
  {
    q: "What are the payment terms and do you provide GST invoices?",
    a: "Every transaction comes with a 100% compliant GST invoice so you can claim your Input Tax Credit (ITC). We accept RTGS/NEFT, UPI, Net Banking, and offer revolving credit terms (15-30 days) to verified repeat retail partners after 3 successful orders."
  },
  {
    q: "What is your return or defect replacement policy?",
    a: "Every single piece passes a 4-point fabric inspection. In the rare case of any manufacturing flaw, we offer a 100% no-questions-asked replacement or instant credit note within 7 days of receiving your consignment."
  }
];

export const WAREHOUSE_LOCATIONS = [
  {
    city: "Surat Central Mill Hub",
    type: "Manufacturing & Main Dispatch Center",
    address: "Plot 42-48, Millenium Textile Park-2, Ring Road, Surat, Gujarat - 395002",
    timing: "Mon - Sat: 9:00 AM - 8:30 PM",
    phone: "+91 98765 43210",
    manager: "Rajesh Parekh (Dispatch Head)"
  },
  {
    city: "Delhi NCR Showroom & Trade Center",
    type: "North India Wholesale Experience Center",
    address: "Block B, Okhla Industrial Area Phase 1, New Delhi - 110020",
    timing: "Mon - Sat: 9:30 AM - 7:30 PM",
    phone: "+91 98765 43211",
    manager: "Anurag Sharma (B2B Accounts)"
  },
  {
    city: "Tirupur Knitwear Factory",
    type: "Knitting, Dyeing & T-Shirt Unit",
    address: "Avinashi Road, Cotton Market Industrial Area, Tirupur, Tamil Nadu - 641602",
    timing: "Mon - Sat: 8:30 AM - 7:00 PM",
    phone: "+91 98765 43212",
    manager: "K. Subramanian (Production Lead)"
  }
];
