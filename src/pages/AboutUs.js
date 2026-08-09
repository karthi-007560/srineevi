import React from "react";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";
import Sri from '../image/loginbgimg.jpeg';
export default function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="about-page">

            {/* About Hero */}
            <section className="about-hero">
                <div className="about-hero-overlay">
                </div>

                <div className="about-hero-content">
                    <span>WELCOME TO SRINEEVI</span>
                    <h1>About Us</h1>
                    <p>
                        More than coffee, it's a place to connect,
                        relax and enjoy every moment.
                    </p>
                </div>
            </section>


            {/* About Us */}
            <section className="about-us-section">
                <div className="about-container">

                    <div className="about-image">
                        <img src={Sri} alt="coffee"/>
                    </div>

                    <div className="about-content">
                        <span className="about-subtitle">
                            ABOUT SRINEEVI COFFEE HOUSE
                        </span>

                        <h2>
                            A Perfect Place for
                            <span> Coffee & Conversations</span>
                        </h2>

                        <p>
                            Welcome to Srineevi Coffee House, a place where
                            great coffee, delicious food and warm hospitality
                            come together. We believe that a coffee house is
                            more than just a place to enjoy a drink — it is a
                            place where people meet, conversations begin and
                            beautiful memories are created.
                        </p>

                        <p>
                            From freshly brewed coffee and refreshing
                            beverages to tasty snacks and delicious treats,
                            every item we serve is prepared with care and
                            quality. Our goal is to give every customer a
                            comfortable experience and a taste they will
                            always remember.
                        </p>

                        <button className="about-btn" onClick={() => navigate("/our-recipes")}>
                            Discover Our Menu
                        </button>
                    </div>

                </div>
            </section>


            {/* Vision & Mission */}
            <section className="vision-mission-section">

                <div className="section-heading">
                    <span>WHAT WE BELIEVE</span>
                    <h2>Our Vision & Mission</h2>
                    <p>
                        Our passion is simple — serve quality, create
                        happiness and make every visit special.
                    </p>
                </div>

                <div className="vm-container">

                    {/* Vision */}
                    <div className="vm-card">
                        <div className="vm-icon">
                            👁️
                        </div>

                        <span>OUR VISION</span>

                        <h3>
                            Brewing Happiness in Every Cup
                        </h3>

                        <p>
                            Our vision is to create a welcoming coffee house
                            where every cup brings people together. We want
                            Srineevi Coffee House to be a place where
                            customers can relax, connect and enjoy memorable
                            moments with every visit.
                        </p>
                    </div>


                    {/* Mission */}
                    <div className="vm-card">
                        <div className="vm-icon">
                            🎯
                        </div>

                        <span>OUR MISSION</span>

                        <h3>
                            Quality, Passion & Perfect Taste
                        </h3>

                        <p>
                            Our mission is to serve fresh and delicious
                            beverages and food using quality ingredients.
                            We are committed to excellent service, consistent
                            taste and creating a wonderful experience for
                            every customer.
                        </p>
                    </div>

                </div>
            </section>


            {/* Why Choose Us */}
            <section className="why-section">

                <div className="section-heading">
                    <span>WHY SRINEEVICOFFEEHOUSE</span>

                    <h2>
                        Made With Love, Served With Care
                    </h2>
                </div>

                <div className="why-container">

                    <div className="why-card">
                        <div>☕</div>
                        <h3>Freshly Brewed</h3>
                        <p>
                            Freshly prepared beverages with rich taste
                            and quality in every cup.
                        </p>
                    </div>

                    <div className="why-card">
                        <div>🌱</div>
                        <h3>Quality Ingredients</h3>
                        <p>
                            We carefully choose quality ingredients to
                            deliver delicious food and drinks.
                        </p>
                    </div>

                    <div className="why-card">
                        <div>❤️</div>
                        <h3>Made With Love</h3>
                        <p>
                            Every order is prepared with passion and
                            attention to make you happy.
                        </p>
                    </div>

                    <div className="why-card">
                        <div>😊</div>
                        <h3>Happy Customers</h3>
                        <p>
                            Your happiness and satisfaction are always
                            at the heart of our coffee house.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
}