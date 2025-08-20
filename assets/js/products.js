// products.js
const products = [
  {
    id: "kinrin",
    name: "Kinrin - Marukyu Koyamaen",
    category: "matcha",
    price: "$48.00",
    image: "assets/images/matcha/kinrin.png",
    description: "",
    brand: "Marukyu Koyamaen",
    stock: 1,
  },
  {
    id: "aoarashi",
    name: "Aoarashi - Marukyu Koyamaen",
    category: "matcha",
    price: "$50",
    image: "assets/images/matcha/aoarashi.png",
    description: "",
    brand: "Marukyu Koyamaen",
    stock: 2,
  },
  {
    id: "wako",
    name: "Wako - Marukyu Koyamaen",
    category: "matcha",
    price: "$90",
    image: "assets/images/matcha/wako.png",
    description: "",
    brand: "Marukyu Koyamaen",
    stock: 5,
  },
  {
    id: "isuzu",
    name: "Isuzu - Marukyu Koyamaen",
    category: "matcha",
    price: "$65",
    image: "assets/images/matcha/isuzu.png",
    description: "",
    brand: "Marukyu Koyamaen",
    stock: 0,
  },
  {
    id: "ayanoshiro",
    name: "Aya no Shiro - Marukyu Koyamaen",
    category: "matcha",
    price: "$75",
    image: "assets/images/matcha/ayanoshiro.png",
    description: "",
    brand: "Marukyu Koyamaen",
    stock: 1,
  },
  {
    id: "miyonomukashi",
    name: "Miyo no Mukashi - Marukyu Koyamaen",
    category: "matcha",
    price: "$85",
    image: "assets/images/matcha/miyonomukashi.png",
    description: "",
    brand: "Marukyu Koyamaen",
    stock: 1,
  },
  {
    id: "ayanomori",
    name: "Aya no Mori - Kanbayashi Shunsho",
    category: "matcha",
    price: "$48",
    image: "assets/images/matcha/ayanomori.png",
    description: "",
    brand: "Kanbayashi Shunsho",
    stock: 0,
  },
  {
    id: "matsukaze",
    name: "Matsukaze Mukashi - Kanbayashi Shunsho",
    category: "matcha",
    price: "$56",
    image: "assets/images/matcha/",
    description: "",
    brand: "Kanbayashi Shunsho",
    stock: 2,
  },
  {
    id: "gounnoshiro",
    name: "Goun no Shiro - Kanbayashi Shunsho",
    category: "matcha",
    price: "$56",
    image: "assets/images/matcha/",
    description: "",
    brand: "Kanbayashi Shunsho",
    stock: 1,
  },
  {
    id: "biwanoshiro",
    name: "Biwa no Shiro - Kanbayashi Shunsho",
    category: "matcha",
    price: "$56",
    image: "assets/images/matcha/biwanoshiro.png",
    description: "",
    brand: "Kanbayashi Shunsho",
    stock: 1,
  },
  {
    id: "yaeyama",
    name: "Yaeyama - Aoi Seicha",
    category: "matcha",
    price: "$48",
    image: "assets/images/matcha/yaeyama.png",
    description: "",
    brand: "Aoi Seicha",
    stock: 1,
  },
  {
    id: "samidori",
    name: "Samidori - Yamamasa Koyamaen",
    category: "matcha",
    price: "$48",
    image: "assets/images/matcha/samidori.png",
    description: "",
    brand: "Yamamasa Koyamaen",
    stock: 2,
  },
  {
    id: "hohopremium",
    name: "Preium Hojicha Powder - Hoho",
    category: "hojicha",
    price: "$40",
    image: "assets/images/",
    description: "",
    brand: "Hoho",
    stock: 10,
  },
  {
    id: "ykrich",
    name: "Rich Hojcha Powder - Yamamasa Koyamaen",
    category: "hojicha",
    price: "$45",
    image: "assets/images/hojicha/richyk.png",
    description: "",
    brand: "Yamamasa Koyamaen",
    stock: 4,
  },
  {
    id: "resinwhisk",
    name: "Resin Whisk - Nakamura Tokichi",
    category: "utensil",
    price: "$50",
    image: "assets/images/utensil/resin.png",
    description: "",
    brand: "Nakamura Tokichi",
    stock: 1,
  },
];

function renderProducts(category) {
  const container = document.getElementById("products-list");
  if (!container) return;

  const filteredProducts = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  const pathDepth = window.location.pathname.split('/').length -2;
  
  const depth = '../'.repeat(pathDepth);
  const currentPage = window.location.pathname.split('/').pop();
  
  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <img src="../${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="../partials/product.html?id=${product.id}&returnTo=${depth + currentPage}" class="btn">View Details</a>
      ${product.stock > 0
      ? `<button class="add-to-cart">Add to Cart</button>`
      : `<button disabled>Sold Out</button>`
    }
    </div>
  `).join('');
}