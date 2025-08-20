function renderBrandProducts(brand) {
  const container = document.getElementById("products-list");
  if (!container) return;


  // Filter products by EXACT brand match
  const filteredProducts = brand === 'all'
    ? products
    : products.filter(p => p.brand === brand);


  const currentPath = encodeURIComponent(window.location.pathname);
  const currentBrand = encodeURIComponent(brand)
  container.innerHTML = filteredProducts.length > 0
    ? filteredProducts.map(product => `
        <div class="product-card">
          <img src="../${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
        <a href="../partials/product.html?id=${product.id}&brand=${product.brand}&returnTo=${".." + currentPath + "?" + currentBrand}" class="btn">View Details</a>

          ${product.stock > 0
        ? `<button class="add-to-cart">Add to Cart</button>`
        : `<button disabled>Sold Out</button>`
      }
        </div>
      `).join('')
    : `<p class="no-products">No ${brand} products found.</p>`;
}