document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const brandSlug = urlParams.get('brand');
  const brandProducts = getProductsByBrand(brandSlug);
  
  if (brandProducts.length > 0) {
    const brandName = brandProducts[0].brand; // Get name from first product
    document.getElementById('brand-name').textContent = brandName;
    
    // Render products
    document.getElementById('brand-products').innerHTML = brandProducts.map(product => `
      <div class="product-card">
        <img src="../assets/images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        ${product.stock > 0 ? 
          `<button class="add-to-cart">Add to Cart</button>` : 
          `<button disabled>Sold Out</button>`
        }
      </div>
    `).join('');
  } else {
    window.location.href = '../pages/matcha.html'; // Redirect if no products
  }
});