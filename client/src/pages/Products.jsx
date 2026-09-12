import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../comopnects/ProductCard";


function Products() {
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      description: "Premium wireless headphones with clear sound.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 3999,
      description: "Smart watch with fitness and health tracking.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 2999,
      description: "Comfortable running shoes for everyday use.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 4,
      name: "Classic T-Shirt",
      category: "Fashion",
      price: 799,
      description: "Comfortable cotton t-shirt.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 5,
      name: "Backpack",
      category: "Fashion",
      price: 1499,
      description: "Stylish backpack for college and travel.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },
    {
      id: 6,
      name: "Sunglasses",
      category: "Fashion",
      price: 999,
      description: "Modern sunglasses with UV protection.",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1999,
      description: "Portable speaker with powerful sound.",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
    }
  ]);

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


   const handleAddToCart = (product) => {
    addToCart(product);
  alert(`${product.name} added to Cart!`);
   };

  return (
    <div className="page-container">
      <div className="hero">
        <div>
          <span>NEW COLLECTION</span>

          <h1>
            Discover Your
            <br />
            Favorite Products
          </h1>

          <p>
            Shop the latest products at the best prices.
          </p>

          <button  className="hero-btn" >
            Shop Now
          </button>
        </div>
      </div>

      <div className="page-header product-header">
        <div>
          <h1>Products</h1>
          <p>Explore our latest products</p>
        </div>

        <button className="primary-btn">
          + Add Product
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={()=> addToCart(product)}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty">
          <h2>No products found</h2>
          <p>Try another search.</p>
        </div>
      )}
    </div>
  );
}

export default Products;