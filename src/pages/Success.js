import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

export default function Success() {

    const navigate = useNavigate();

    return (
        <div className="success-container">

            <div className="success-card">

                <h1>🎉 Order Placed Successfully!</h1>

                <p>
                    Thank you for ordering from
                    <br />
                    <b>Srineevi Coffee House ☕</b>
                </p>

                <button
                    className="home-btn"
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>

            </div>

        </div>
    );
}