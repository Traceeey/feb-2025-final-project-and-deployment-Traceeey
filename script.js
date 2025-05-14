let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  localStorage.setItem("cartCount", cartCount);
}

window.onload = () => {
  const storedCount = localStorage.getItem("cartCount");
  if (storedCount) {
    cartCount = parseInt(storedCount, 10);
    document.getElementById("cart-count").innerText = cartCount;
  }
};

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image: "images/Make-up Set 🎀.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "images/Bags.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image: "images/Teddybears.jpg"
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    image: "images/pexels-pixabay-50987.jpg"
  }
];

// Add product to cart
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === productId);

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").innerText = total;
}

// Load cart count on every page
window.onload = () => {
  if (document.getElementById("cart-count")) {
    updateCartCount();
  }
};
