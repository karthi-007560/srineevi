import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("⚠️ Please enter your email and password!");
      return;
    }

    alert("✅ Login Successful!");
    setSuccess(true);

    // Redirect after 1.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="login-container">
      <Container className="login-box">
        <h2>Welcome Back 👋</h2>
        <p>Please sign in to continue</p>

        {success && (
          <Alert variant="success">
            🎉 Login Successful! Redirecting...
          </Alert>
        )}

        <input
          type="email"
          className="input-box"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="input-box"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="forgot-password">
          <span
            onClick={() => alert("Forgot Password feature coming soon!")}
          >
            Forgot Password?
          </span>
        </div>

        <button className="button-box" onClick={handleLogin}>
          Sign In
        </button>

        <p className="signup-text">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "bold" }}
          >
            Sign Up
          </span>
        </p>
      </Container>
    </div>
  );
}