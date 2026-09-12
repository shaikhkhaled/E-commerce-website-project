import React from "react";
import { useCart } from "../context/CartContext";

function Navbar({
  currentPage,
  setCurrentPage,
  loggedIn,
  setLoggedIn
}) {
  const { totalItems } = useCart();

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logout = () => {
    setLoggedIn(false);
    navigateTo("login");
  };


  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => navigateTo("products")}
      >
        Shop<span>Zone</span>
      </div>

      <div className="nav-links">
        <button
          className={currentPage === "products" ? "active" : ""}
          onClick={() => navigateTo("products")}
        >
          Products
        </button>

        <button
          className={currentPage === "categories" ? "active" : ""}
          onClick={() => navigateTo("categories")}
        >
          Categories
        </button>

        <button
          className={currentPage === "orders" ? "active" : ""}
          onClick={() => navigateTo("orders")}
        >
          Orders
        </button>

        <button
          className={currentPage === "users" ? "active" : ""}
          onClick={() => navigateTo("users")}
        >
          Users
        </button>

        <button
            className={currentPage === "cart" ? "active" : ""}
             onClick={() => navigateTo("cart")}
            >
            🛒 Cart {totalItems > 0 ? `(${totalItems})` : "(0)"}
         </button>

        {!loggedIn ? (
          <button
            className="login-btn"
git            onClick={() => navigateTo("login")}
          >
            Login
          </button>
        ) : (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
