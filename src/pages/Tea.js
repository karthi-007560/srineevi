import React, { useState } from "react";

export default function Tea() {
  const [showTea, setShowTea] = useState(false);

  return (
    <div className="container mt-5">

      <button
        className="btn btn-warning"
        onClick={() => setShowTea(!showTea)}
      >
        ☕ Tea
      </button>

      {showTea && (
        <div className="mt-3">
          <div className="card p-3 mb-2">🍃 Masala Tea - ₹25</div>
          <div className="card p-3 mb-2">🫚 Ginger Tea - ₹20</div>
          <div className="card p-3 mb-2">🍋 Lemon Tea - ₹30</div>
          <div className="card p-3 mb-2">🌿 Green Tea - ₹35</div>
          <div className="card p-3">⚫ Black Tea - ₹20</div>
        </div>
      )}

    </div>
  );
}