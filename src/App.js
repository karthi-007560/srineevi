import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Payment from "./pages/Subscribe";
import Menu from "./pages/Menu";
import Cart from "./pages/Tea";
import Checkout from "./pages/Checkout";
import './App.css';
import Product from "./pages/Product";
import Success from "./pages/Success";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={<Home search={search} setSearch={setSearch} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/product" element={<Product/>} />
      <Route path="/menu/:category" element={<Menu />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />

    </Routes>
  );
}

export default App;