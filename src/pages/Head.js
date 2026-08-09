import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../image/logo.jpeg";
import "./Head.css";
import { useNavigate } from "react-router-dom";

export default function Head({ search, setSearch }) {

    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState(
        localStorage.getItem("userEmail")
    );


    /* CHECK LOGIN */

    useEffect(() => {

        const checkLogin = () => {

            setUserEmail(
                localStorage.getItem("userEmail")
            );

        };

        window.addEventListener(
            "storage",
            checkLogin
        );

        return () => {
            window.removeEventListener(
                "storage",
                checkLogin
            );
        };

    }, []);


    /* LOGOUT */

    const handleLogout = () => {

        localStorage.removeItem("userEmail");

        setUserEmail(null);

        alert("Logged out successfully!");

        navigate("/login");

    };


    /* SEARCH */

    const handleSearch = (e) => {

        const value = e.target.value;

        setSearch(value);

        if (value.trim() !== "") {
            navigate("/product");
        }

    };


    return (

        <Navbar
            expand="lg"
            className="Navbar"
        >

            <Container>


                {/* LOGO */}

                <Navbar.Brand
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >

                    <img
                        src={Logo}
                        alt="Srineevi Coffee House"
                        className="Logo"
                        width={100}
                    />

                </Navbar.Brand>


                {/* MOBILE TOGGLE */}

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                />


                <Navbar.Collapse
                    id="basic-navbar-nav"
                >


                    {/* NAVIGATION */}

                    <Nav className="me-auto Home">


                        {/* HOME */}

                        <Nav.Link
                            onClick={() => navigate("/")}
                        >

                            <b className="Home">
                                HOME
                            </b>

                        </Nav.Link>


                        {/* ABOUT */}

                        <Nav.Link
                            onClick={() => navigate("/about")}
                        >

                            <b className="Home">
                                ABOUT
                            </b>

                        </Nav.Link>


                        {/* OUR RECIPES */}

                        <Nav.Link
                            onClick={() =>
                                navigate("/our-recipes")
                            }
                        >

                            <b className="Home">
                                OUR RECIPES
                            </b>

                        </Nav.Link>


                        {/* OUR SERVICES */}

                        <Nav.Link
                            onClick={() =>
                                navigate("/services")
                            }
                        >

                            <b className="Home">
                                OUR SERVICES
                            </b>

                        </Nav.Link>


                        {/* CONTACT */}

                        <Nav.Link
                            onClick={() =>
                                navigate("/contact")
                            }
                        >

                            <b className="Home">
                                CONTACT
                            </b>

                        </Nav.Link>

                    </Nav>


                    {/* SEARCH */}

                    <input
                        type="text"
                        placeholder="🔍 Search the items"
                        value={search}
                        onChange={handleSearch}
                        className="Search"
                    />


                    {/* LOGIN / LOGOUT */}

                    {userEmail ? (

                        <div className="user-area">

                            <span className="user-email">
                                👤 {userEmail}
                            </span>

                            <button
                                className="Button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </div>

                    ) : (

                        <button
                            className="Button"
                            onClick={() =>
                                navigate("/login")
                            }
                        >
                            👤 Login
                        </button>

                    )}

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );
}