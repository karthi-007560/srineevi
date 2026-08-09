import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tea.css";

export default function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Increase Quantity
  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].qty += 1;

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Decrease Quantity
  const decreaseQty = (index) => {
    const updated = [...cartItems];

    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
    } else {
      updated.splice(index, 1);
    }

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove Item
  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Grand Total
  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Empty Cart
  if (cartItems.length === 0) {
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

  return (
    <div className="cart-container">



      <h2 className="cart-title">🛒 Your Cart</h2>



      {cartItems.map((item, index) => (
        <div className="cart-card" key={index}>

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
                onClick={() => decreaseQty(index)}
              >
                -
              </button>

              <span className="qty">
                {item.qty}
              </span>

              <button
                className="qty-btn"
                onClick={() => increaseQty(index)}
              >
                +
              </button>

            </div>

            <h3 className="total-price">
              Total : ₹{item.price * item.qty}
            </h3>

            <button
              className="checkout-btn"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>

          </div>

        </div>
      ))}

      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "green"
        }}
      >
        Grand Total : ₹{grandTotal}
      </h2>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="checkout-btn"
          onClick={() =>
            navigate("/checkout", {
              state: {
                cartItems,
                grandTotal
              }
            })
          }
        >
          Checkout
        </button>

        <button
          className="back-btn mb-4 ms-4"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

    </div>
  );
}