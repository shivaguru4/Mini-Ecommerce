import Home from "./Pages/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme="dark" position="top-center" />
          <Header cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route
              path="/product/:id"
              element={
                <ProductDetails
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
