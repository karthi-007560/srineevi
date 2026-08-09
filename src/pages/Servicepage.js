import React from "react";
import {
    FaCoffee,
    FaMotorcycle,
    FaUtensils,
    FaWifi,
    FaUsers,
    FaBirthdayCake
} from "react-icons/fa";
import "./Servicepage.css";

export default function Servicepage() {

    const services = [
        {
            icon: <FaCoffee />,
            title: "Freshly Brewed Coffee",
            text: "Enjoy freshly brewed coffee made with carefully selected quality ingredients."
        },
        {
            icon: <FaMotorcycle />,
            title: "Fast Delivery",
            text: "Get your favourite coffee and snacks delivered fresh and quickly to your doorstep."
        },
        {
            icon: <FaUtensils />,
            title: "Delicious Food",
            text: "Enjoy tasty snacks, sandwiches and refreshing beverages along with your coffee."
        },
        {
            icon: <FaWifi />,
            title: "Free Wi-Fi",
            text: "Relax, work or catch up with friends while enjoying our complimentary Wi-Fi."
        },
        {
            icon: <FaUsers />,
            title: "Friendly Atmosphere",
            text: "A comfortable and welcoming space perfect for conversations and quality time."
        },
        {
            icon: <FaBirthdayCake />,
            title: "Special Events",
            text: "Celebrate birthdays, small gatherings and special moments with us."
        }
    ];

    return (
        <section className="services-section" id="services">

            <div className="services-header">
                <span>WHAT WE OFFER</span>

                <h2>
                    Our <strong>Services</strong>
                </h2>

                <p>
                    We make every visit special with great coffee,
                    delicious food and warm hospitality.
                </p>
            </div>

            <div className="services-container">

                {services.map((service, index) => (
                    <div
                        className="service-card"
                        key={index}
                    >

                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.text}</p>

                        <div className="service-number">
                            0{index + 1}
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}