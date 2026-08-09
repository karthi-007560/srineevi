import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "./Singup.css";

export default function Signup() {

    const navigate = useNavigate();


    /* FORM DATA */

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    /* SUCCESS */

    const [success, setSuccess] = useState(false);


    /* HANDLE INPUT */

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    /* SIGNUP */

    const handleSignup = () => {

        // Check empty fields

        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {

            alert("⚠️ Please fill all fields!");

            return;
        }


        // Check password

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            alert("❌ Passwords do not match!");

            return;
        }


        // Create user object

        const user = {

            name: formData.name,

            email: formData.email,

            password: formData.password

        };


        // Save user

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        // Make sure old login is cleared

        localStorage.removeItem("isLoggedIn");

        localStorage.removeItem("userEmail");


        // Show success

        setSuccess(true);


        // Go to Login

        setTimeout(() => {

            navigate("/login");

        }, 1500);

    };


    return (

        <div className="signup-page">

            <Container className="signup-container">

                <h2>
                    Create Account
                </h2>


                {/* SUCCESS */}

                {success && (

                    <Alert variant="success">

                        Signup Successful!
                        Redirecting to Login...

                    </Alert>

                )}


                {/* NAME */}

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input-box"
                    value={formData.name}
                    onChange={handleChange}
                />


                {/* EMAIL */}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input-box"
                    value={formData.email}
                    onChange={handleChange}
                />


                {/* PASSWORD */}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-box"
                    value={formData.password}
                    onChange={handleChange}
                />


                {/* CONFIRM PASSWORD */}

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="input-box"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />


                {/* SIGN UP */}

                <button
                    className="button-box"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>


                {/* LOGIN */}

                <p
                    style={{
                        marginTop: "15px",
                        textAlign: "center"
                    }}
                >

                    Already have an account?{" "}

                    <span
                        style={{
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        onClick={() =>
                            navigate("/login")
                        }
                    >
                        Sign In
                    </span>

                </p>

            </Container>

        </div>

    );
}