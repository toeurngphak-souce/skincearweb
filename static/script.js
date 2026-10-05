// Product data
const products = [
    {
        id: 1,
        name: "Vitamin C Serum",
        category: "serum",
        price: 25.00,
        image: "/static/serum.jpg"
    },
    {
        id: 2,
        name: "Gentle Facial Cleanser",
        category: "cleanser",
        price: 15.00,
        image: "/static/cleanser.jpg"
    },
    {
        id: 3,
        name: "SPF 50+ Sunscreen",
        category: "sunscreen",
        price: 18.50,
        image: "/static/sunscreen.jpg"
    },
    {
        id: 4,
        name: "Hyaluronic Acid Serum",
        category: "serum",
        price: 28.00,
        image: "static/HA+Serum.jpg"
    }
];

let cartCount = 0;

// Display products on the screen
function displayProducts(items) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    items.forEach(product => {
        const productHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart()">
                    Add to Cart
                </button>
            </div>
        `;

        container.innerHTML += productHTML;
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(
            item => item.category === category
        );

        displayProducts(filtered);
    }
}

// Increase cart item count
function addToCart() {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Product added to cart successfully!");
}

// Display products when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});