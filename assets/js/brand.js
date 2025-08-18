function renderBrandProducts() {
  const container = document.getElementById("products-list");
  if (!container) return;

  // Get raw brand name from URL (e.g. "Marukyu%20Koyamaen")
  const brandName = decodeURIComponent(
    new URLSearchParams(window.location.search).get('brand')
  );

  // Filter products by EXACT brand match
  const brandProducts = products.filter(p => p.brand === brandName);

  container.innerHTML = brandProducts.length > 0
    ? brandProducts.map(product => `
        <div class="product-card">
          <img src="../${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          ${product.stock > 0 
            ? `<button class="add-to-cart">Add to Cart</button>`
            : `<button disabled>Sold Out</button>`
          }
        </div>
      `).join('')
    : `<p class="no-products">No ${brandName} products found.</p>`;
}

document.addEventListener('DOMContentLoaded', renderBrandProducts);