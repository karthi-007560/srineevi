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

        // Empty field check

        if (!email || !password) {

            alert("⚠️ Please enter your email and password!");

            return;
        }


        // Get saved signup user

        const savedUser =
            JSON.parse(localStorage.getItem("user"));


        // Check email and password

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {

            // Login status

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            // Save logged-in user's email

            localStorage.setItem(
                "userEmail",
                email
            );


            // Success message

            setSuccess(true);


            // Go to Home

            setTimeout(() => {

                navigate("/");

                window.location.reload();

            }, 1500);


        } else {

            alert("❌ Invalid Email or Password");

        }

    };


    return (

        <div className="login-page">

            <Container className="login-container">

                <h2>
                    Welcome Back 👋
                </h2>

                <p>
                    Please sign in to continue
                </p>


                {/* SUCCESS MESSAGE */}

                {success && (

                    <Alert variant="success">

                        Login Successful!
                        Redirecting...

                    </Alert>

                )}


                {/* EMAIL */}

                <input
                    type="email"
                    className="input-box"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />


                {/* PASSWORD */}

                <input
                    type="password"
                    className="input-box"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />


                {/* FORGOT PASSWORD */}

                <div className="forgot-password">

                    <span
                        onClick={() =>
                            alert(
                                "Forgot Password feature coming soon!"
                            )
                        }
                    >
                        Forgot Password?
                    </span>

                </div>


                {/* LOGIN BUTTON */}

                <button
                    className="button-box"
                    onClick={handleLogin}
                >
                    Sign In
                </button>


                {/* SIGN UP */}

                <p className="signup-text">

                    Don't have an account?{" "}

                    <span
                        onClick={() =>
                            navigate("/signup")
                        }
                        style={{
                            color: "#0d6efd",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Sign Up
                    </span>

                </p>

            </Container>

        </div>

    );
}