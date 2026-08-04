import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Payment from "./pages/Subscribe";
import './App.css';

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

    </Routes>
  );
}

export default App;