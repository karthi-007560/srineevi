import React, { useState } from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock
} from "react-icons/fa";
import "./Contactus.css";

export default function Contactus() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        const whatsappNumber = "9087870472";


        const whatsappMessage =
            `Hello Srineevi Coffee House 👋%0A%0A` +
            `Name: ${formData.name}%0A` +
            `Email: ${formData.email}%0A` +
            `Phone: ${formData.phone}%0A%0A` +
            `Message:%0A${formData.message}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


        // WhatsApp open
        window.open(whatsappURL, "_blank");


        // Clear form
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });

    };


    return (

        <div className="contact-page">

            {/* CONTACT INFO */}

            <section className="contact-section">

                <div className="contact-heading">

                    <span>
                        CONTACT SRINEEVI
                    </span>

                    <h2>
                        Let's Start a
                        <strong> Conversation</strong>
                    </h2>

                    <p>
                        Have a question, feedback or just want to say hello?
                        Our team is always happy to hear from you.
                    </p>

                </div>


                <div className="contact-container">


                    {/* LEFT SIDE */}

                    <div className="contact-info">


                        {/* PHONE */}

                        <div className="contact-card">

                            <div className="contact-icon">
                                <FaPhoneAlt />
                            </div>

                            <div>

                                <h3>
                                    Call Us
                                </h3>

                                <p>
                                    +91 90879 81608
                                </p>

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="contact-card">

                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>

                            <div>

                                <h3>
                                    Email Us
                                </h3>

                                <p>
                                    info@srineevicoffeehouse.com
                                </p>

                            </div>

                        </div>


                        {/* LOCATION */}

                        <div className="contact-card">

                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>

                            <div>

                                <h3>
                                    Visit Us
                                </h3>

                                <p>
                                    Srineevi Coffee House
                                    <br />
                                    Tamil Nadu, India
                                </p>

                            </div>

                        </div>


                        {/* OPENING HOURS */}

                        <div className="contact-card">

                            <div className="contact-icon">
                                <FaClock />
                            </div>

                            <div>

                                <h3>
                                    Opening Hours
                                </h3>

                                <p>
                                    Monday - Sunday
                                    <br />
                                    7:00 AM - 10:00 PM
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT SIDE - FORM */}

                    <div className="contact-form">

                        <h2>
                            Send Us a Message
                        </h2>

                        <p>
                            Fill out the form and we'll get back to you soon.
                        </p>


                        <form onSubmit={handleSubmit}>


                            {/* NAME + EMAIL */}

                            <div className="form-row">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />


                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* PHONE */}

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />


                            {/* MESSAGE */}

                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>


                            {/* WHATSAPP BUTTON */}

                            <button type="submit">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </div>
    );
}