function renderProducts() {
    const productList = document.getElementById("products-list");
    if (!productList) return;

    productList.innerHTML = products.map(product => {
        if (product.stock <= 0) {
            return `
                <div class="product-card sold-out">
                  <img src="../${product.image}" alt="${product.name}">
                  <h3>${product.name} (Sold Out)</h3>
                  ${product.weight > 0
                    ? `<p>${product.price} - ${product.weight}g</p>`
                    : `<p>${product.price}</p>`
                  }
                  <a href="../partials/product.html?id=${product.id}&brand=${product.brand}&returnTo=${encodeURIComponent(window.location.pathname)}" class="btn">View Details</a>
                </div>
            `;
        } else {
            return `
                <div class="product-card">
                  <img src="../${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  ${product.weight > 0
                    ? `<p>${product.price} - ${product.weight}g</p>`
                    : `<p>${product.price}</p>`
                  }
                  <a href="../partials/product.html?id=${product.id}&brand=${product.brand}&returnTo=${encodeURIComponent(window.location.pathname)}" class="btn">View Details</a>
                </div>
            `;
        }
    }).join('');
}