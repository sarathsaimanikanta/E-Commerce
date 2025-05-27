// Main JavaScript file for ElectroShop
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the application
  initializeApp();
});

function initializeApp() {
  // Initialize dropdown functionality
  initializeDropdowns();

  // Initialize search functionality
  initializeSearch();

  // Initialize form handlers
  initializeForms();

  // Load page-specific content
  loadPageContent();

  // Initialize product grids
  initializeProductGrids();

  // Initialize tabs
  initializeTabs();
}

// Dropdown functionality
function initializeDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".nav-button");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (button && menu) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Close other dropdowns
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("active");
          }
        });

        // Toggle current dropdown
        dropdown.classList.toggle("active");
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  });
}

// Search functionality
function initializeSearch() {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        // In a real app, this would navigate to search results
        performSearch(query);
      }
    });
  }
}

function performSearch(query) {
  const results = searchProducts(query);
  displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
  // Create a simple search results display
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = `
            <div class="container">
                <div class="section">
                    <div class="breadcrumb">
                        <a href="index.html">Home</a>
                        <span>/</span>
                        <span>Search Results</span>
                    </div>
                    <div class="page-header">
                        <h1 class="page-title">Search Results for "${query}"</h1>
                        <p class="page-description">Found ${results.length} products</p>
                    </div>
                    <div class="products-grid" id="searchResults">
                        ${results.map((product) => createProductCard(product)).join("")}
                    </div>
                </div>
            </div>
        `;
  }
}

// Form handlers
function initializeForms() {
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      alert(`Thank you for subscribing with email: ${email}`);
      e.target.reset();
    });
  }
}

// Product grid functionality
function initializeProductGrids() {
  const featuredProductsGrid = document.getElementById("featuredProducts");
  const sortSelect = document.getElementById("sortSelect");

  if (featuredProductsGrid) {
    loadFeaturedProducts();
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const sortBy = e.target.value;
      sortAndDisplayProducts(sortBy);
    });
  }
}

function loadFeaturedProducts() {
  const featuredProducts = products.slice(0, 4);
  displayProducts(featuredProducts, "featuredProducts");
}

function sortAndDisplayProducts(sortBy) {
  const currentProducts = getCurrentPageProducts();
  const sortedProducts = sortProducts(currentProducts, sortBy);
  const gridId = getCurrentProductGridId();
  displayProducts(sortedProducts, gridId);
}

function getCurrentPageProducts() {
  const pathname = window.location.pathname;

  if (pathname.includes("smartphones")) {
    return getProductsBySubcategory("Smartphones");
  } else if (pathname.includes("accessories")) {
    return getProductsBySubcategory("Accessories");
  } else if (pathname.includes("electronics")) {
    return getProductsByCategory("Electronics");
  } else {
    return products.slice(0, 4); // Featured products
  }
}

function getCurrentProductGridId() {
  // Determine which grid to update based on current page
  if (document.getElementById("smartphoneProducts"))
    return "smartphoneProducts";
  if (document.getElementById("accessoryProducts")) return "accessoryProducts";
  if (document.getElementById("electronicsProducts"))
    return "electronicsProducts";
  return "featuredProducts";
}

function displayProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = products
      .map((product) => createProductCard(product))
      .join("");
  }
}

function createProductCard(product) {
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return `
        <div class="product-card">
            <a href="product-detail.html?id=${product.id}" class="product-link">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${discountPercentage > 0 ? `<div class="product-badge">${discountPercentage}% OFF</div>` : ""}
                    ${!product.inStock ? '<div class="product-badge out-of-stock">Out of Stock</div>' : ""}
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <div>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-category">${product.subcategory}</p>
                        </div>
                        <div class="product-price">
                            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ""}
                            <span class="current-price">$${product.price}</span>
                        </div>
                    </div>
                    <div class="product-footer">
                        <div class="product-rating">
                            <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                            <span class="rating-text">${product.rating.toFixed(1)}</span>
                        </div>
                        <span class="view-details">View Details</span>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Tab functionality
function initializeTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset.tab;

      // Remove active class from all tabs and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      button.classList.add("active");
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

// Page-specific content loading
function loadPageContent() {
  const pathname = window.location.pathname;
  const filename = pathname.split("/").pop() || "index.html";

  switch (filename) {
    case "index.html":
    case "":
      loadHomePage();
      break;
    case "smartphones.html":
      loadSmartphonesPage();
      break;
    case "accessories.html":
      loadAccessoriesPage();
      break;
    case "electronics.html":
      loadElectronicsPage();
      break;
    case "product-detail.html":
      loadProductDetailPage();
      break;
    case "comparison.html":
      loadComparisonPage();
      break;
  }
}

function loadHomePage() {
  // Home page is mostly static, just load featured products
  loadFeaturedProducts();
}

function loadSmartphonesPage() {
  const smartphones = getProductsBySubcategory("Smartphones");
  displayProducts(smartphones, "smartphoneProducts");
}

function loadAccessoriesPage() {
  const accessories = getProductsBySubcategory("Accessories");
  displayProducts(accessories, "accessoryProducts");
}

function loadElectronicsPage() {
  const electronics = getProductsByCategory("Electronics");
  displayProducts(electronics, "electronicsProducts");
}

function loadProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    const product = getProductById(productId);
    if (product) {
      displayProductDetail(product);
    } else {
      displayProductNotFound();
    }
  } else {
    displayProductNotFound();
  }
}

function displayProductDetail(product) {
  // This would be implemented in product-detail.html
  console.log("Loading product detail for:", product);
}

function displayProductNotFound() {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = `
            <div class="container">
                <div class="section text-center">
                    <h1>Product Not Found</h1>
                    <p>The product you're looking for doesn't exist or has been removed.</p>
                    <a href="electronics.html" class="btn btn-primary">Browse Products</a>
                </div>
            </div>
        `;
  }
}

function loadComparisonPage() {
  // Initialize comparison functionality
  initializeComparison();
}

// Comparison functionality
function initializeComparison() {
  const productCheckboxes = document.querySelectorAll(".product-checkbox");
  const compareButton = document.getElementById("compareButton");
  const comparisonTable = document.getElementById("comparisonTable");

  if (productCheckboxes.length > 0) {
    productCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateComparison);
    });
  }

  if (compareButton) {
    compareButton.addEventListener("click", generateComparison);
  }
}

function updateComparison() {
  const selectedProducts = getSelectedProducts();
  const compareButton = document.getElementById("compareButton");

  if (compareButton) {
    compareButton.disabled = selectedProducts.length < 2;
    compareButton.textContent = `Compare (${selectedProducts.length})`;
  }
}

function getSelectedProducts() {
  const checkboxes = document.querySelectorAll(".product-checkbox:checked");
  return Array.from(checkboxes)
    .map((checkbox) => {
      const productId = checkbox.value;
      return getProductById(productId);
    })
    .filter((product) => product);
}

function generateComparison() {
  const selectedProducts = getSelectedProducts();
  const comparisonType =
    document.querySelector('input[name="comparisonType"]:checked')?.value ||
    "features";

  displayComparisonTable(selectedProducts, comparisonType);
}

function displayComparisonTable(products, type) {
  const container = document.getElementById("comparisonTable");
  if (!container) return;

  if (type === "price") {
    container.innerHTML = createPriceComparisonTable(products);
  } else {
    container.innerHTML = createFeaturesComparisonTable(products);
  }
}

function createPriceComparisonTable(products) {
  if (products.length === 0)
    return "<p>No products selected for comparison.</p>";

  return `
        <div class="table-container">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        ${products.map((product) => `<th>${product.name}</th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Image</strong></td>
                        ${products
                          .map(
                            (product) => `
                            <td class="product-image-cell">
                                <img src="${product.image}" alt="${product.name}">
                            </td>
                        `,
                          )
                          .join("")}
                    </tr>
                    <tr>
                        <td><strong>Price</strong></td>
                        ${products.map((product) => `<td><strong>$${product.price}</strong></td>`).join("")}
                    </tr>
                    <tr>
                        <td><strong>Original Price</strong></td>
                        ${products.map((product) => `<td>${product.originalPrice ? "$" + product.originalPrice : "N/A"}</td>`).join("")}
                    </tr>
                    <tr>
                        <td><strong>Rating</strong></td>
                        ${products.map((product) => `<td>⭐ ${product.rating.toFixed(1)}</td>`).join("")}
                    </tr>
                    <tr>
                        <td><strong>Availability</strong></td>
                        ${products
                          .map(
                            (product) => `
                            <td>
                                <span class="badge ${product.inStock ? "badge-success" : "badge-error"}">
                                    ${product.inStock ? "In Stock" : "Out of Stock"}
                                </span>
                            </td>
                        `,
                          )
                          .join("")}
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function createFeaturesComparisonTable(products) {
  if (products.length === 0)
    return "<p>No products selected for comparison.</p>";

  // Get all unique spec keys
  const allSpecs = new Set();
  products.forEach((product) => {
    Object.keys(product.specs).forEach((spec) => allSpecs.add(spec));
  });

  return `
        <div class="table-container">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        ${products.map((product) => `<th>${product.name}</th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Image</strong></td>
                        ${products
                          .map(
                            (product) => `
                            <td class="product-image-cell">
                                <img src="${product.image}" alt="${product.name}">
                            </td>
                        `,
                          )
                          .join("")}
                    </tr>
                    ${Array.from(allSpecs)
                      .map(
                        (spec) => `
                        <tr>
                            <td><strong>${formatSpecName(spec)}</strong></td>
                            ${products.map((product) => `<td>${product.specs[spec] || "N/A"}</td>`).join("")}
                        </tr>
                    `,
                      )
                      .join("")}
                    <tr>
                        <td><strong>Rating</strong></td>
                        ${products.map((product) => `<td>⭐ ${product.rating.toFixed(1)}</td>`).join("")}
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function formatSpecName(spec) {
  return spec
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

// Utility functions
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function showNotification(message, type = "info") {
  // Simple notification system
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem;
        border-radius: 0.5rem;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Shopping cart functionality (basic)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (product && product.inStock) {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`, "success");
  }
}

function updateCartDisplay() {
  // Update cart count in header
  const cartButton = document.querySelector('.action-button[href="cart.html"]');
  if (cartButton) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Add cart count badge
    let badge = cartButton.querySelector(".cart-badge");
    if (!badge && totalItems > 0) {
      badge = document.createElement("span");
      badge.className = "cart-badge";
      badge.style.cssText = `
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ef4444;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            `;
      cartButton.style.position = "relative";
      cartButton.appendChild(badge);
    }

    if (badge) {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? "flex" : "none";
    }
  }
}

// Initialize cart display on page load
document.addEventListener("DOMContentLoaded", updateCartDisplay);
