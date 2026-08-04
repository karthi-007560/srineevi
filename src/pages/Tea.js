import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Tea.css";

export default function Cart() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state?.item;

  const [qty, setQty] = useState(1);

  if (!item) {
    return (
      <div className="empty-cart">
        <h2>🛒 Cart is Empty</h2>

        <button
          className="back-shopping"
          onClick={() => navigate("/product")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const totalPrice = item.price * qty;

  return (
    <div className="cart-container">

      <h2 className="cart-title">🛒 Your Cart</h2>

      <div className="cart-card">

        <img
          src={item.image}
          alt={item.name}
          className="cart-img"
        />

        <div className="cart-info">

          <h3>{item.name}</h3>

          <h4>Price : ₹{item.price}</h4>

          <div className="qty-box">

            <button
              className="qty-btn"
              onClick={() => qty > 1 && setQty(qty - 1)}
            >
              -
            </button>

            <span className="qty">{qty}</span>

            <button
              className="qty-btn"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>

          </div>

          <h3 className="total-price">
            Total : ₹{totalPrice}
          </h3>

        </div>

        <button
          className="checkout-btn"
          onClick={() =>
            navigate("/checkout", {
              state: {
                item,
                qty
              }
            })
          }
        >
          Checkout
        </button>

      </div>

    </div>
  );
}