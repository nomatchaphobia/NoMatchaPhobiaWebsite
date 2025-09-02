function renderInStock() {
    const inStockProducts = document.getElementById("in-stock-products");
    
        products.filter(p => p.stock > 0).forEach(p => {
            
            inStockProducts.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          ${p.weight > 0
            ? `<p>${p.price} - ${p.weight}g</p>`
            : `<p>${p.price}</p>`
          }
          

          <a href="partials/product.html?id=${p.id}&returnTo=${encodeURIComponent(window.location.pathname)}" class="btn">View Details</a>
          <!--${p.stock > 0
        ? `<button class="add-to-cart">Add to Cart</button>`
        : `<button disabled>Sold Out</button>`
      } -->
        </div>
      `;
        });
}

document.addEventListener('DOMContentLoaded', renderInStock);