import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Payment from "./pages/Subscribe";
import Menu from "./pages/Menu";
import Cart from "./pages/Tea";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Success from "./pages/Success";
import ProtectedRoute from "./pages/Protect";

import AboutUs from "./pages/AboutUs";
import Servicepage from "./pages/Servicepage";
import Contactus from "./pages/Contactus";
import Contact from "./pages/Contact";
import Ourmen from "./pages/Ourmen";

import Head from "./pages/Head";
import Top from "./pages/Top";

import "./App.css";

function App() {

    const [search, setSearch] = useState("");

    return (
        <>
            {/* TOP OFFER BAR */}
            <Top />

            {/* NAVBAR */}
            <Head
                search={search}
                setSearch={setSearch}
            />

            <Routes>

                {/* LOGIN */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* SIGNUP */}
                <Route
                    path="/signup"
                    element={<Signup />}
                />

                {/* HOME */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home
                                search={search}
                                setSearch={setSearch}
                            />
                        </ProtectedRoute>
                    }
                />

                {/* ABOUT US */}
                <Route
                    path="/about"
                    element={<AboutUs />}
                />

                {/* OUR SERVICES */}
                <Route
                    path="/services"
                    element={<Servicepage />}
                />

                {/* CONTACT */}
                <Route
                    path="/contact"
                    element={<Contactus />}
                />

                {/* OUR RECIPES */}
                <Route
                    path="/our-recipes"
                    element={
                        <Ourmen
                            search={search}
                        />
                    }
                />

                {/* PAYMENT */}
                <Route
                    path="/payment"
                    element={
                        <ProtectedRoute>
                            <Payment />
                        </ProtectedRoute>
                    }
                />

                {/* PRODUCT / SEARCH RESULTS */}
                <Route
                    path="/product"
                    element={
                        <ProtectedRoute>
                            <Product
                                search={search}
                                setSearch={setSearch}
                            />
                        </ProtectedRoute>
                    }
                />

                {/* MENU */}
                <Route
                    path="/menu/:category"
                    element={
                        <ProtectedRoute>
                            <Menu />
                        </ProtectedRoute>
                    }
                />

                {/* CART */}
                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    }
                />

                {/* CHECKOUT */}
                <Route
                    path="/checkout"
                    element={
                        <ProtectedRoute>
                            <Checkout />
                        </ProtectedRoute>
                    }
                />

                {/* SUCCESS */}
                <Route
                    path="/success"
                    element={
                        <ProtectedRoute>
                            <Success />
                        </ProtectedRoute>
                    }
                />

            </Routes>
            <Contact/>
        </>
    );
}

export default App;