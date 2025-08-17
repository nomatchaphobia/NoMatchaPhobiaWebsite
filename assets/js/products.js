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
  },
  {
    id: "aoarashi",
    name: "Aoarashi - Marukyu Koyamaen",
    category: "matcha",
    price: "$50",
    image: "assets/images/matcha/aoarashi.png",
    description: "",
    brand: "Marukyu Koyamaen",
  },
  {
    id: "wako",
    name: "Wako - Marukyu Koyamaen",
    category: "matcha",
    price: "$90",
    image: "assets/images/matcha/wako.png",
    description: "",
    brand: "Marukyu Koyamaen",
  },
  {
    id: "isuzu",
    name: "Isuzu - Marukyu Koyamaen",
    category: "matcha",
    price: "$65",
    image: "assets/images/matcha/isuzu.png",
    description: "",
    brand: "Marukyu Koyamaen",
  },
  {
    id: "ayanoshiro",
    name: "Aya no Shiro - Marukyu Koyamaen",
    category: "matcha",
    price: "$75",
    image: "assets/images/matcha/ayanoshiro.png",
    description: "",
    brand: "Marukyu Koyamaen",
  },
  {
    id: "miyonomukashi",
    name: "Miyo no Mukashi - Marukyu Koyamaen",
    category: "matcha",
    price: "$85",
    image: "assets/images/matcha/miyonomukashi.png",
    description: "",
    brand: "Marukyu Koyamaen",
  },
  {
    id: "ayanomori",
    name: "Aya no Mori - Kanbayashi Shunsho",
    category: "matcha",
    price: "$48",
    image: "assets/images/matcha/ayanomori.png",
    description: "",
    brand: "Kanbayashi Shunsho",
  },
  {
    id: "mozumukashi",
    name: "Mozu Mukashi - Kanbayashi Shunsho",
    category: "matcha",
    price: "$52",
    image: "assets/images/matcha/mozumukashi.png",
    description: "",
    brand: "Kanbayashi Shunsho",
  },
  {
    id: "matsukaze",
    name: "Matsukaze Mukashi - Kanbayashi Shunsho",
    category: "matcha",
    price: "$56",
    image: "assets/images/matcha/",
    description: "",
    brand: "Kanbayashi Shunsho",
  },
  {
    id: "gounnoshiro",
    name: "Goun no Shiro - Kanbayashi Shunsho",
    category: "matcha",
    price: "$56",
    image: "assets/images/matcha/",
    description: "",
    brand: "Kanbayashi Shunsho",
  },
  {
    id: "biwanoshiro",
    name: "Biwa no Shiro - Kanbayashi Shunsho",
    category: "matcha",
    price: "$56",
    image: "assets/images/matcha/biwanoshiro.png",
    description: "",
    brand: "Kanbayashi Shunsho",
  },
  {
    id: "yaeyama",
    name: "Yaeyama - Aoi Seicha",
    category: "matcha",
    price: "$48",
    image: "assets/images/matcha/yaeyama.png",
    description: "",
    brand: "Aoi Seicha",
  },
  {
    id: "samidori",
    name: "Samidori - Yamamasa Koyamaen",
    category: "matcha",
    price: "$48",
    image: "assets/images/matcha/samidori.png",
    description: "",
    brand: "Yamamasa Koyamaen",
  },
  {
    id: "yomonokaori",
    name: "Yomo no Kaori - Yamamasa Koyamaen",
    category: "matcha",
    price: "$55",
    image: "assets/images/matcha/",
    description: "",
    brand: "Yamamasa Koyamaen",
  },
  {
    id: "yuzan",
    name: "Yuzan - Saijoen",
    category: "matcha",
    price: "$45",
    image: "assets/images/matcha/",
    description: "",
    brand: "Saijoen",
  },
  {
    id: "hohopremium",
    name: "Preium Hojicha Powder - Hoho",
    category: "hojicha",
    price: "$40",
    image: "assets/images/",
    description: "",
    brand: "Hoho",
  },
  {
    id: "ykrich",
    name: "Rich Hojcha Powder - Yamamasa Koyamaen",
    category: "hojicha",
    price: "$45",
    image: "assets/images/richyk.png",
    description: "",
    brand: "Yamamasa Koyamaen",
  },
  {
    id: "resinwhisk",
    name: "Resin Whisk - Nakamura Tokichi",
    category: "utensil",
    price: "$50",
    image: "assets/images/resin.png",
    description: "",
    brand: "Nakamura Tokichi",
  },
  {
    id: "ujimukashihorii",
    name: "Uji Mukashi - Horii Shichimeien",
    category: "matcha",
    price: "$68",
    image: "assets/images/matcha/",
    description: "",
    brand: "Horii Shichimeien",
  },
  {
    id: "agatanoshirohorii",
    name: "Agata no Shiro - Horii Shichimeien",
    category: "matcha",
    price: "$75",
    image: "assets/images/matcha/",
    description: "",
    brand: "Horii Shichimeien",
  },
  {
    id: "karin",
    name: "Karin - CHARLOTTE",
    category: "matcha",
    price: "$",
    image: "assets/images/matcha/",
    description: "",
    brand: "CHARLOTTE",
  },
  {
    id: "sumire",
    name: "Sumire - CHARLOTTE",
    category: "matcha",
    price: "$",
    image: "assets/images/matcha/",
    description: "",
    brand: "CHARLOTTE",
  },
  {
    id: "mibu",
    name: "Mibu - CHARLOTTE",
    category: "matcha",
    price: "$",
    image: "assets/images/matcha/",
    description: "",
    brand: "CHARLOTTE",
  },
];

// Function to filter and render matcha products
function renderMatchaProducts() {
  const matchaProducts = products.filter(product => product.category === "matcha");
  const container = document.getElementById("matcha-products-container");

  if (!container) return;

  container.innerHTML = matchaProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <p>${product.description}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    </div>
  `).join("");
}

// Call the function when the DOM loads
document.addEventListener("DOMContentLoaded", renderMatchaProducts);