import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Checkot.css";

export default function Checkout() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const item = state?.item;
    const qty = state?.qty || 1;

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    if (!item) {
        return (
            <div className="checkout-container">
                <h2>No Order Found</h2>

                <button
                    className="back-btn"
                    onClick={() => navigate("/product")}
                >
                    Back to Products
                </button>
            </div>
        );
    }

    const total = item.price * qty;

    return (
        <div className="checkout-container">

            <h2 className="checkout-title">Checkout</h2>

            <div className="checkout-card">

                <img
                    src={item.image}
                    alt={item.name}
                    className="checkout-img"
                    style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "50%"
                    }}
                />

                <h3>{item.name}</h3>

                <p>Price : ₹{item.price}</p>

                <p>Quantity : {qty}</p>

                <h3>Total : ₹{total}</h3>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="checkout-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="checkout-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <textarea
                    placeholder="Delivery Address"
                    className="checkout-input"
                    rows="4"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></textarea>

                <button
                    className="place-btn"
                    disabled={!name || !phone || !address}
                    onClick={() => navigate("/success")}
                >
                    Place Order
                </button>

            </div>

        </div>
    );
}