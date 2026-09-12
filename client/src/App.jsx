import { useState } from "react";
import "./App.css";
import Payment from "./pages/Payment";
import Navbar from "./comopnects/Navbar";
import Footer from "./comopnects/Footer";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
    setLoggedIn(true);
    setCurrentPage("products");
  };
    
  const renderPage = () => {
    
    switch (currentPage) {
      case "login":
        return <Login onLogin={handleLogin} />;

      case "users":
        return <Users />;

      case "categories":
        return <Categories />;

      case "products":
        return <Products />;

      case "orders":
        return <Orders />;

         case "cart":
       return <Cart setCurrentPage={setCurrentPage} />;

       case "payment":
         return <Payment setCurrentPage={setCurrentPage} />;

      default:
        return <Products />;
    }
 
  };

  return (
  <CartProvider>
    <Navbar
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn}
    />
    <main>{renderPage()}</main>
    <Footer />
  </CartProvider>
);
}

export default App;
