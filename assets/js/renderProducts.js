const productList = document.getElementById("products-list");

    products.forEach(p => {
      productList.innerHTML += `
        <div class="product-card">
          <img src="../${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          ${p.weight > 0
            ? `<p>${p.price} - ${p.weight}g</p>`
            : `<p>${p.price}</p>`
          }

          <a href="../partials/product.html?id=${p.id}" class="btn">View Details</a>
          <!--${p.stock > 0
          ? `<button class="add-to-cart">Add to Cart</button>`
          : `<button disabled>Sold Out</button>`
        } -->
        </div>
      `;
    });