// brand.js
function renderBrandProducts() {
    const container = document.getElementById("products-list");
    if (!container) return;

    // Get brand from URL (e.g. "marukyu-koyamaen")
    const urlParams = new URLSearchParams(window.location.search);
    const brandSlug = urlParams.get('brand');

    // Filter products by brand (case-insensitive, hyphen/space tolerant)
    const brandProducts = products.filter(p =>
        p.brand.toLowerCase().replace(/\s+/g, '-') === brandSlug
    );

    // Render products or show message if none found
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
        : `<p class="no-products">No products found for this brand.</p>`;
}

// Run on page load
document.addEventListener('DOMContentLoaded', renderBrandProducts);