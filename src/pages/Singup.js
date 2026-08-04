import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "./Singup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    alert("✅ Signup Successful!");
    setSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="signup-container">
      <Container className="signup-box">
        <h2>Create Account</h2>

        {success && (
          <Alert variant="success">
            🎉 Signup Successful! Redirecting to Login...
          </Alert>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input-box"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-box"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-box"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input-box"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button className="button-box" onClick={handleSignup}>
          Sign Up
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </Container>
    </div>
  );
}