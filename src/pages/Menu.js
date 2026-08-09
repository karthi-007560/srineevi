import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./Menu.css";
import Tea from "../image/Tea.jpg";

import Coffee from "../image/Coffee.jpg";

import Boost from "../image/Boost.jpg";

import Samosa from "../image/Samosa.jpg";

import Sandwich from "../image/sandwichs.jpg";

import Breadomelette from "../image/Breadomelette.jpeg";

import CoolDrink from "../image/Cool drink.jpg";

import Milk from "../image/Milk.jpg";

export default function Menu() {

    const { category } = useParams();
    const navigate = useNavigate();

    const menuItems = {

        Tea: [
            { id: 1, image: Tea, name: "Masala Tea", price: 20 },
            { id: 2, image: Tea, name: "Ginger Tea", price: 25 },
            { id: 3, image: Tea, name: "Lemon Tea", price: 25 },
            { id: 4, image: Tea, name: "Green Tea", price: 30 },
            { id: 5, image: Tea, name: "Black Tea", price: 20 },
        ],

        Coffee: [
            { id: 1, image: Coffee, name: "Filter Coffee", price: 25 },
            { id: 2, image: Coffee, name: "Normal Coffee", price: 25 },
            { id: 3, image: Coffee, name: "Black Coffee", price: 20 },
            { id: 4, image: Coffee, name: "Black Gee Coffee", price: 20 },
        ],

        Milk: [
            { id: 1, image: Milk, name: "Hot Milk", price: 20 },
            { id: 2, image: Milk, name: "Badam Milk", price: 40 },
            { id: 3, image: Milk, name: "Rose Milk", price: 40 },
            { id: 4, image: Milk, name: "Balkova Milk", price: 40 },
        ],

        Boost: [
            { id: 1, image: Boost, name: "Boost", price: 30 },
            { id: 2, image: Boost, name: "Boost Special", price: 40 },
        ],

        Snacks: [
            { id: 1, image: Samosa, name: "Samosa", price: 12 },
            { id: 2, image: Samosa, name: "Egg Puff", price: 30 },
            { id: 3, image: Samosa, name: "Cutlet", price: 30 },
            { id: 4, image: Samosa, name: "Biscuits", price: 10 },
            { id: 5, image: Samosa, name: "Sweet's", price: 10 },

        ],

        Sandwich: [
            { id: 1, image: Breadomelette, name: "Bread omelette", price: 40 },
            { id: 2, image: Sandwich, name: "Cheese Sandwich", price: 50 },
        ],

        "Cool drink": [
            { id: 1, image: CoolDrink, name: "Mango", price: 40 },
            { id: 2, image: CoolDrink, name: "Sprite", price: 40 },
            { id: 3, image: CoolDrink, name: "Fanta", price: 40 },
        ]
    };

    const items = menuItems[category] || [];

    const addToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find((p) => p.name === item.name);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({
                ...item,
                qty: 1,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        navigate("/cart");
    };

    return (
        <Container className="mt-5">
           
            <div className="text-center mb-4">
                <h2 className="menu-title">{category} Menu</h2>
            </div>

             <button
                className="back-btn mb-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>


            <div className="row mb-5 pb-4">

                {items.map((item) => (

                    <div className="col-md-4 mb-4" key={item.id}>

                        <div className="menu-card mt-5">

                            <img src={item.image} alt={item.name} className="card-img"/>

                            <h4>{item.name}</h4>

                            <h5 className="menu-price">
                                ₹{item.price}
                            </h5>

                            <button
                                className="order-btn"
                                onClick={() => addToCart(item)}
                            >
                                Add To Cart
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </Container>
    );
}