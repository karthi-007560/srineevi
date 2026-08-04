import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../image/logo.jpeg";
import "./Head.css";
import { useNavigate } from "react-router-dom";

export default function Head({ search, setSearch }) {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    alert("Logged out successfully!");
    navigate("/");
    window.location.reload();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={Logo} width="100" className="Logo" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Home">
            <Nav.Link href="#home"><b className="Home">HOME</b></Nav.Link>
            <Nav.Link href="#about"><b className="Home">ABOUT</b></Nav.Link>
            <Nav.Link href="#recipes"><b className="Home">OUR RECIPES</b></Nav.Link>
            <Nav.Link href="#services"><b className="Home">OUR SERVICES</b></Nav.Link>
            <Nav.Link href="#contact"><b className="Home">CONTACT</b></Nav.Link>
          </Nav>

          <input
          placeholder="🔍 Search the items"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="Search"
          />

          {userEmail ? (
            <div style={{ marginLeft: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontWeight: "bold", color: "#8B4513" }}>
                👤 {userEmail}
              </span>

              <button className="Button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button
              className="Button"
              onClick={() => navigate("/login")}
            >
              👤 Login
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}