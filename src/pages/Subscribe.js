import React from "react";

export default function Payment() {
  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        ☕ Sri Neevi Coffee House
      </h2>

      <div className="card p-4 shadow mx-auto" style={{maxWidth:"500px"}}>

        <h4 className="text-center mb-3">Membership Payment</h4>

        <h3 className="text-center text-success mb-4">
          ₹1,000
        </h3>

        <button className="btn btn-primary w-100 mb-3">
          💳 Pay with Card
        </button>

        <button className="btn btn-success w-100 mb-3">
          📱 Pay with UPI
        </button>

        <button className="btn btn-dark w-100">
          🏦 Net Banking
        </button>

      </div>

    </div>
  );
}