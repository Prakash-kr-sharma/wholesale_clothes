export const INITIAL_ADMIN_METRICS = {
  totalRevenue: 4865000, // ₹48.65 Lakhs
  revenueGrowth: "+18.4%",
  totalOrders: 284,
  ordersGrowth: "+12.1%",
  totalRetailers: 3240,
  activeRetailersGrowth: "+46 this month",
  grossProfitMargin: "64.2%",
  totalInventoryValue: 12450000, // ₹1.24 Cr
  pendingDispatches: 18,
  lowStockItemsCount: 4
};

export const INITIAL_SALES_ORDERS = [
  {
    id: "ORD-9401",
    retailerName: "Singhania Menswear",
    contactPerson: "Vikram Singhania",
    city: "New Delhi",
    occasion: "wedding",
    itemsSummary: "40x Royal Velvet Sherwanis, 60x Peak Lapel Tuxedos",
    totalPieces: 100,
    orderValue: 246000,
    paymentStatus: "Paid (NEFT)",
    dispatchStatus: "Dispatched",
    carrier: "SafeExpress (LR: SF-882910)",
    orderDate: "2026-09-25",
    invoiceNo: "TH-INV-2026-891"
  },
  {
    id: "ORD-9402",
    retailerName: "Aura Ethnic Boutique",
    contactPerson: "Pooja Deshmukh",
    city: "Mumbai",
    occasion: "wedding",
    itemsSummary: "25x Raw Silk Bridal Lehengas, 40x Georgette Anarkalis",
    totalPieces: 65,
    orderValue: 124250,
    paymentStatus: "30-Day Credit (Active)",
    dispatchStatus: "In Transit",
    carrier: "BlueDart Express",
    orderDate: "2026-09-24",
    invoiceNo: "TH-INV-2026-892"
  },
  {
    id: "ORD-9403",
    retailerName: "Urban Drift Streetwear",
    contactPerson: "Karthik Raja",
    city: "Bengaluru",
    occasion: "casual",
    itemsSummary: "500x 240 GSM Drop-Shoulder Oversized Tees (Black & Taupe)",
    totalPieces: 500,
    orderValue: 107500,
    paymentStatus: "Paid (UPI)",
    dispatchStatus: "Delivered",
    carrier: "VRL Logistics",
    orderDate: "2026-09-22",
    invoiceNo: "TH-INV-2026-893"
  },
  {
    id: "ORD-9404",
    retailerName: "Kavya Silks & Readymades",
    contactPerson: "Meenakshi Sunder",
    city: "Chennai",
    occasion: "festive",
    itemsSummary: "120x Lucknowi Chikankari Kurtas, 80x Kids Nehru Sets",
    totalPieces: 200,
    orderValue: 124800,
    paymentStatus: "Partial (50% Advance)",
    dispatchStatus: "Packing & Quality Check",
    carrier: "TCI Express",
    orderDate: "2026-09-26",
    invoiceNo: "TH-INV-2026-894"
  },
  {
    id: "ORD-9405",
    retailerName: "Apex Corporate Uniforms Ltd",
    contactPerson: "Rohit Bansal",
    city: "Gurugram",
    occasion: "corporate",
    itemsSummary: "350x Giza Cotton Formal Shirts, 200x Smart-Stretch Trousers",
    totalPieces: 550,
    orderValue: 228000,
    paymentStatus: "Paid (RTGS)",
    dispatchStatus: "Dispatched",
    carrier: "SafeExpress (LR: SF-882944)",
    orderDate: "2026-09-23",
    invoiceNo: "TH-INV-2026-895"
  },
  {
    id: "ORD-9406",
    retailerName: "Velvet Lounge Clubwear",
    contactPerson: "Sameer Merchant",
    city: "Goa",
    occasion: "party",
    itemsSummary: "60x Midnight Sequin Blazers, 80x Liquid Satin Slip Dresses",
    totalPieces: 140,
    orderValue: 120400,
    paymentStatus: "Pending Approval",
    dispatchStatus: "Order Received",
    carrier: "Pending Dispatch",
    orderDate: "2026-09-27",
    invoiceNo: "TH-INV-2026-896"
  }
];

export const INITIAL_BUY_PROCUREMENT = [
  {
    id: "BUY-501",
    vendorName: "Surat Weaving Mills Corp",
    material: "Pure Raw Silk & Chanderi Fabric",
    quantity: "3,500 Meters",
    purpose: "Wedding Lehengas & Festive Kurtas",
    unitCost: 280,
    totalCost: 980000,
    status: "Received & Lab Tested",
    deliveryDate: "2026-09-20",
    destinationHub: "Surat Central Mill Hub"
  },
  {
    id: "BUY-502",
    vendorName: "Tirupur Spinning & Knit Mills",
    material: "100% Super-Combed Cotton Yarn (240 GSM)",
    quantity: "5,200 Kg",
    purpose: "Streetwear Oversized Tees & Fleece",
    unitCost: 195,
    totalCost: 1014000,
    status: "Knitting in Progress",
    deliveryDate: "2026-09-24",
    destinationHub: "Tirupur Knitwear Factory"
  },
  {
    id: "BUY-503",
    vendorName: "Biella Fine Textiles (Imported)",
    material: "Italian Wool-Blend Terry Rayon",
    quantity: "1,800 Meters",
    purpose: "Tuxedos & Corporate Blazers",
    unitCost: 450,
    totalCost: 810000,
    status: "Customs Cleared & Received",
    deliveryDate: "2026-09-18",
    destinationHub: "Delhi NCR Trade Center"
  },
  {
    id: "BUY-504",
    vendorName: "Ahmedabad Spun Mills",
    material: "Egyptian Giza 60s Compact Cotton",
    quantity: "4,000 Meters",
    purpose: "Executive Formal Wrinkle-Free Shirts",
    unitCost: 160,
    totalCost: 640000,
    status: "Received & Lab Tested",
    deliveryDate: "2026-09-25",
    destinationHub: "Surat Central Mill Hub"
  },
  {
    id: "BUY-505",
    vendorName: "YKK Fasteners India Pvt Ltd",
    material: "Brass Antique Zippers & Metal Buttons",
    quantity: "25,000 Units",
    purpose: "Blazers, Jackets & Trousers",
    unitCost: 18,
    totalCost: 450000,
    status: "Dispatched from Factory",
    deliveryDate: "2026-09-28",
    destinationHub: "Surat Central Mill Hub"
  }
];

export const INITIAL_EMPLOYEES = [
  {
    id: "EMP-01",
    name: "Rajesh Parekh",
    role: "Dispatch & Logistics Head",
    department: "Logistics & Transport",
    location: "Surat Central Mill Hub",
    phone: "+91 98765 11001",
    email: "rajesh.p@threadhub.com",
    monthlySalary: 75000,
    joinedDate: "2021-03-15",
    shift: "Morning (09:00 - 18:00)",
    status: "Active"
  },
  {
    id: "EMP-02",
    name: "Anurag Sharma",
    role: "Senior B2B Accounts Director",
    department: "Wholesale Sales & Retailers",
    location: "Delhi NCR Showroom",
    phone: "+91 98765 11002",
    email: "anurag.s@threadhub.com",
    monthlySalary: 85000,
    joinedDate: "2020-07-01",
    shift: "Regular (10:00 - 19:00)",
    status: "Active"
  },
  {
    id: "EMP-03",
    name: "K. Subramanian",
    role: "Production & Knitting Lead",
    department: "Fabric Manufacturing",
    location: "Tirupur Knitwear Factory",
    phone: "+91 98765 11003",
    email: "k.subramanian@threadhub.com",
    monthlySalary: 80000,
    joinedDate: "2019-11-20",
    shift: "Morning (08:00 - 17:00)",
    status: "Active"
  },
  {
    id: "EMP-04",
    name: "Sunita Verma",
    role: "Fabric Quality & GSM Inspector",
    department: "Quality Assurance",
    location: "Surat Central Mill Hub",
    phone: "+91 98765 11004",
    email: "sunita.v@threadhub.com",
    monthlySalary: 52000,
    joinedDate: "2022-01-10",
    shift: "Regular (09:30 - 18:30)",
    status: "Active"
  },
  {
    id: "EMP-05",
    name: "Master Mohammad Rafiq",
    role: "Chief Pattern Maker & Master Cutter",
    department: "Tailoring & Fit Grading",
    location: "Delhi NCR Showroom",
    phone: "+91 98765 11005",
    email: "rafiq.m@threadhub.com",
    monthlySalary: 65000,
    joinedDate: "2020-02-14",
    shift: "Regular (10:00 - 19:00)",
    status: "Active"
  },
  {
    id: "EMP-06",
    name: "Amit Solanki",
    role: "Inventory & Barcode Supervisor",
    department: "Warehouse Management",
    location: "Surat Central Mill Hub",
    phone: "+91 98765 11006",
    email: "amit.s@threadhub.com",
    monthlySalary: 44000,
    joinedDate: "2023-04-18",
    shift: "Evening (13:00 - 22:00)",
    status: "Active"
  },
  {
    id: "EMP-07",
    name: "Priyanka Nair",
    role: "Boutique Relationship Officer",
    department: "Customer Service & RFQs",
    location: "Delhi NCR Showroom",
    phone: "+91 98765 11007",
    email: "priyanka.n@threadhub.com",
    monthlySalary: 48000,
    joinedDate: "2023-08-01",
    shift: "Regular (09:30 - 18:30)",
    status: "On Shift"
  }
];

export const INITIAL_INVENTORY = [
  {
    id: "INV-01",
    productName: "Imperial Velvet Sherwani Set",
    occasion: "wedding",
    stockPieces: 320,
    reorderLevel: 100,
    unitWholesalePrice: 2850,
    unitCost: 1720,
    status: "Adequate Stock",
    location: "Surat Bay A-12"
  },
  {
    id: "INV-02",
    productName: "Raw Silk Bridal Lehenga",
    occasion: "wedding",
    stockPieces: 145,
    reorderLevel: 80,
    unitWholesalePrice: 3450,
    unitCost: 2100,
    status: "Adequate Stock",
    location: "Surat Bay A-14"
  },
  {
    id: "INV-03",
    productName: "240 GSM Drop-Shoulder Oversized Tee",
    occasion: "casual",
    stockPieces: 1850,
    reorderLevel: 500,
    unitWholesalePrice: 240,
    unitCost: 145,
    status: "High Turnover",
    location: "Tirupur Warehouse Bin 4"
  },
  {
    id: "INV-04",
    productName: "Lucknowi Chikankari Kurta Set",
    occasion: "festive",
    stockPieces: 620,
    reorderLevel: 250,
    unitWholesalePrice: 790,
    unitCost: 460,
    status: "Adequate Stock",
    location: "Surat Bay B-03"
  },
  {
    id: "INV-05",
    productName: "Giza Cotton Wrinkle-Free Formal Shirt",
    occasion: "corporate",
    stockPieces: 890,
    reorderLevel: 400,
    unitWholesalePrice: 420,
    unitCost: 260,
    status: "Adequate Stock",
    location: "Surat Bay C-08"
  },
  {
    id: "INV-06",
    productName: "Draped Liquid Satin Slip Dress",
    occasion: "party",
    stockPieces: 85,
    reorderLevel: 120,
    unitWholesalePrice: 580,
    unitCost: 330,
    status: "Low Stock Alert",
    location: "Delhi NCR Rack 2"
  },
  {
    id: "INV-07",
    productName: "360 GSM Heavy Polar Fleece Hoodie",
    occasion: "seasonal",
    stockPieces: 70,
    reorderLevel: 150,
    unitWholesalePrice: 480,
    unitCost: 290,
    status: "Low Stock Alert",
    location: "Tirupur Knitwear Factory"
  }
];

export const OCCASION_SALES_DISTRIBUTION = [
  { occasion: "Wedding & Bridal", percentage: 32, revenue: 1556800, color: "#f97316" },
  { occasion: "Festive & Traditional", percentage: 26, revenue: 1264900, color: "#eab308" },
  { occasion: "Casual & Streetwear", percentage: 18, revenue: 875700, color: "#a855f7" },
  { occasion: "Corporate & Formal", percentage: 12, revenue: 583800, color: "#3b82f6" },
  { occasion: "Party & Clubwear", percentage: 7, revenue: 340550, color: "#ec4899" },
  { occasion: "Athleisure & Resort", percentage: 5, revenue: 243250, color: "#10b981" }
];
