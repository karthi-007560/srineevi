import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./Menu.css";
import Tea from "../image/Tea.jpg";
import Coffee from "../image/Coffee.jpg";
import Boost from "../image/Boost.jpg";
import Samosa from "../image/Samosa.jpg";
import Sandwich from "../image/sandwichs.jpg";
import CoolDrink from "../image/Cool drink.jpg";
import Milk from "../image/Milk.jpg";

export default function Menu() {

    const { category } = useParams();
    const navigate = useNavigate();

    const menuItems = {

        Tea: [
            { id: 1, image: Tea, name: "Masala Tea", price: 20 },
            { id: 2, image: Tea, name: "Ginger Tea", price: 20 },
            { id: 3, image: Tea, name: "Lemon Tea", price: 25 },
            { id: 4, image: Tea, name: "Green Tea", price: 30 },
            { id: 5, image: Tea, name: "Black Tea", price: 20 },
        ],

        Coffee: [
            { id: 1, image: Coffee, name: "Filter Coffee", price: 25 },
            { id: 2, image: Coffee, name: "Cappuccino", price: 80 },
            { id: 3, image: Coffee, name: "Latte", price: 90 },
        ],

        Milk: [
            { id: 1, image: Milk, name: "Hot Milk", price: 25 },
            { id: 2, image: Milk, name: "Badam Milk", price: 40 },
        ],

        Boost: [
            { id: 1, image: Boost, name: "Boost", price: 40 },
            { id: 2, image: Boost, name: "Boost Special", price: 50 },
        ],

        Snacks: [
            { id: 1, image: Samosa, name: "Samosa", price: 15 },
            { id: 2, image: Samosa, name: "Veg Puff", price: 20 },
            { id: 3, image: Samosa, name: "Cutlet", price: 25 },
        ],

        Sandwichs: [
            { id: 1, image: Sandwich, name: "Veg Sandwich", price: 60 },
            { id: 2, image: Sandwich, name: "Cheese Sandwich", price: 80 },
        ],

        "Cool drink": [
            { id: 1, image: CoolDrink, name: "Coke", price: 40 },
            { id: 2, image: CoolDrink, name: "Sprite", price: 40 },
            { id: 3, image: CoolDrink, name: "Fanta", price: 40 },
        ]
    };

    const items = menuItems[category] || [];
   return (
    <Container className="mt-5">

        <div className="text-center mb-4">
            <h2 className="menu-title">{category} Menu</h2>
        </div>

        <div className="row">

            {items.map((item) => (

                <div className="col-md-4 mb-4" key={item.id}>

                    <div className="menu-card">

                        <img src={item.image} alt={item.name} />

                        <h4>{item.name}</h4>

                        <h5 className="menu-price">
                            ₹{item.price}
                        </h5>

                        <button
                            className="order-btn"
                            onClick={() =>
                                navigate("/cart", {
                                    state: { item }
                                })
                            }
                        >
                            Order Now
                        </button>

                    </div>

                </div>

            ))}

        </div>

    </Container>
);
}