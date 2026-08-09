import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkot.css";

export default function Checkout() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const cartItems = state?.cartItems || [];
    const grandTotal = state?.grandTotal || 0;

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    if (cartItems.length === 0) {
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

    const placeOrder = () => {
        const message = `
☕ *Srineevi Coffee House*

🧑 Customer Name: ${name}
📞 Phone: ${phone}

📍 Delivery Address:
${address}

----------------------------

🛒 Order Details

${cartItems
                .map(
                    (item) =>
                        `• ${item.name} x ${item.qty} = ₹${item.price * item.qty}`
                )
                .join("\n")}

----------------------------

💰 Grand Total: ₹${grandTotal}

🙏 Thank You
`;

        const shopNumber = "9087870472";

        window.open(
            `https://wa.me/${shopNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        localStorage.removeItem("cart");

        navigate("/success");
    };

    return (
        <div className="checkout-container">


            <h2 className="checkout-title">Checkout</h2>



            {cartItems.map((item, index) => (
                <div className="checkout-card" key={index}>

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

                    <p>Quantity : {item.qty}</p>

                    <h3>Total : ₹{item.price * item.qty}</h3>

                </div>
            ))}

            <h2
                style={{
                    textAlign: "center",
                    color: "green",
                    marginBottom: "20px"
                }}
            >
                Grand Total : ₹{grandTotal}
            </h2>

            <div className="checkout-card">

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
                />

                <button
                    className="place-btn"
                    disabled={!name || !phone || !address}
                    onClick={placeOrder}
                >
                    Place Order
                </button>

                <button
                    className="back-btn mb-3 ms-4"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

            </div>

        </div>
    );
}