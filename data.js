// Product data for the e-commerce website
const products = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 999,
    originalPrice: 1099,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-natural-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692895704560",
    description:
      "The latest iPhone with advanced camera system and powerful A17 Pro chip.",
    specs: {
      processor: "A17 Pro",
      ram: "8GB",
      storage: "256GB",
      display: "6.1-inch Super Retina XDR",
      camera: "48MP main camera",
      battery: "4000mAh",
      os: "iOS 17",
    },
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 1199,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/us/2302/gallery/us-galaxy-s23-s918-sm-s918uzgaxaa-534850629?$650_519_PNG$",
    description:
      "Premium Android smartphone with S Pen support and exceptional camera system.",
    specs: {
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "512GB",
      display: "6.8-inch Dynamic AMOLED 2X",
      camera: "200MP main camera",
      battery: "5000mAh",
      os: "Android 13",
    },
    rating: 4.7,
    inStock: true,
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 899,
    originalPrice: 999,
    image:
      "https://lh3.googleusercontent.com/Nu3a6F80WfixUqf_ec_vgXiDaiyBkeb9rvQQ_mCxhcGMPCoR9kgJgGCqmhJCaJo7HDu62OKcLJGaAmCMCCQYVyBc=w512",
    description:
      "Google's flagship with advanced AI capabilities and excellent camera performance.",
    specs: {
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "256GB",
      display: "6.7-inch LTPO OLED",
      camera: "50MP main camera",
      battery: "4950mAh",
      os: "Android 14",
    },
    rating: 4.6,
    inStock: true,
  },
  {
    id: "4",
    name: "OnePlus 12",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 799,
    image:
      "https://oasis.opstatics.com/content/dam/oplus/page/2024/global/products/oneplus-12/pc/kv/oneplus-12-kv.png",
    description:
      "Flagship killer with Hasselblad camera system and lightning-fast charging.",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "256GB",
      display: "6.7-inch AMOLED LTPO",
      camera: "50MP main camera",
      battery: "5400mAh",
      os: "OxygenOS 14",
    },
    rating: 4.5,
    inStock: true,
  },
  {
    id: "5",
    name: "Xiaomi 14 Ultra",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 899,
    image:
      "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1702371226.83937048.png",
    description:
      "Feature-packed smartphone with Leica optics and impressive specifications.",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "512GB",
      display: "6.73-inch AMOLED",
      camera: "50MP main camera",
      battery: "5000mAh",
      os: "MIUI 15",
    },
    rating: 4.4,
    inStock: true,
  },
  {
    id: "6",
    name: "Nothing Phone 2",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 599,
    image:
      "https://nothing.tech/cdn/shop/files/Phone2_White_1_9e1a2706-8f87-4554-b04b-69161b0dc294.png?v=1689174250&width=1800",
    description:
      "Unique design with Glyph interface and clean Android experience.",
    specs: {
      processor: "Snapdragon 8+ Gen 1",
      ram: "12GB",
      storage: "256GB",
      display: "6.7-inch OLED",
      camera: "50MP main camera",
      battery: "4700mAh",
      os: "Nothing OS 2.5",
    },
    rating: 4.3,
    inStock: true,
  },
  {
    id: "7",
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    subcategory: "Accessories",
    price: 199,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=472&hei=472&fmt=jpeg&qlt=95&.v=1694014871985",
    description:
      "High-quality wireless earbuds with active noise cancellation.",
    specs: {
      batteryLife: "8 hours (30 with case)",
      connectivity: "Bluetooth 5.3",
      noiseReduction: "Active Noise Cancellation",
      waterResistance: "IPX4",
      charging: "Wireless & USB-C",
    },
    rating: 4.6,
    inStock: true,
  },
  {
    id: "8",
    name: "Smart Watch Series 5",
    category: "Electronics",
    subcategory: "Accessories",
    price: 299,
    originalPrice: 349,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-45-pink-sport-band-pink?wid=470&hei=556&fmt=png-alpha&.v=1692895395269",
    description:
      "Advanced smartwatch with health monitoring and fitness tracking.",
    specs: {
      display: "1.4-inch AMOLED",
      batteryLife: "Up to 2 days",
      sensors: "Heart rate, SpO2, ECG",
      waterResistance: "5ATM",
      connectivity: "Bluetooth, WiFi, NFC",
    },
    rating: 4.5,
    inStock: true,
  },
  {
    id: "9",
    name: "Fast Charging Power Bank",
    category: "Electronics",
    subcategory: "Accessories",
    price: 49.99,
    image:
      "https://m.media-amazon.com/images/I/61IBBxJQ0GL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description: "20,000mAh power bank with fast charging capabilities.",
    specs: {
      capacity: "20,000mAh",
      ports: "USB-C, USB-A",
      fastCharging: "65W",
      inputPorts: "USB-C, Micro USB",
      weight: "340g",
    },
    rating: 4.4,
    inStock: true,
  },
];

// Utility functions
function getProductsByCategory(category) {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );
}

function getProductsBySubcategory(subcategory) {
  return products.filter(
    (product) =>
      product.subcategory.toLowerCase() === subcategory.toLowerCase(),
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.subcategory.toLowerCase().includes(searchTerm),
  );
}

function sortProducts(products, sortBy) {
  const sortedProducts = [...products];

  switch (sortBy) {
    case "price-low":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "price-high":
      return sortedProducts.sort((a, b) => b.price - a.price);
    case "rating":
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    default:
      return sortedProducts;
  }
}

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    products,
    getProductsByCategory,
    getProductsBySubcategory,
    getProductById,
    searchProducts,
    sortProducts,
  };
}
