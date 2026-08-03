import React from "react";
import "./Top.css";

export default function Top() {
  return (
    <div className="top-bar">

      <span className="live-badge">
        <span className="dot"></span>
        LIVE
      </span>

      <p>
        🎉 <strong>Subscribe with ₹1,000</strong> &nbsp;|&nbsp;
        ❤️ <span className="highlight">200 Members Already Joined</span>
        &nbsp;|&nbsp;
        ☕ Limited Time Offer – Subscribe Now!
      </p>

    </div>
  );
}