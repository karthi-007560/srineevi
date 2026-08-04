import React from "react";
import { Link } from "react-router-dom";
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
        ❤️ <span className="highlight">200 Already Subscribed</span>
        &nbsp;|&nbsp;
        Limited Time Offer – <Link to="/payment" className="subscribe-link">
          ☕ Subscribe Now
        </Link>
      </p>

    </div>
  );
}