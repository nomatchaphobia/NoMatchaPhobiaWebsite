function renderProducts(category) {
  const container = document.getElementById("products-list");
  if (!container) return;

  const filteredProducts = category === 'all'
    ? products
    : products.filter(p => p.category === category);


  
  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <img src="../${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="../partials/product.html?id=${product.id}&returnTo=${encodeURIComponent(window.location.pathname)}" class="btn">View Details</a>
      <!--${product.stock > 0
      ? `<button class="add-to-cart">Add to Cart</button>`
      : `<button disabled>Sold Out</button>`
    }-->
    </div>
  `).join('');
}