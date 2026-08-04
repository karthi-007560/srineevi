import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Product.css";
import Tea from "../image/Tea.jpg";
import Coffee from "../image/Coffee.jpg";
import Boost from "../image/Boost.jpg";
import Samosa from "../image/Samosa.jpg";
import Sandwich from "../image/sandwichs.jpg";
import CoolDrink from "../image/Cool drink.jpg";
import Milk from "../image/Milk.jpg";

export default function Product({ search = "" }) {

    const [showAll, setShowAll] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [cart, setCart] = useState([]);

    const drinks = [
        { id: 1, image: Tea, name: "Tea" },
        { id: 2, image: Coffee, name: "Coffee" },
        { id: 3, image: Milk, name: "Milk" },
        { id: 4, image: Boost, name: "Boost" },
        { id: 5, image: Samosa, name: "Snacks" },
        { id: 6, image: Sandwich, name: "Sandwichs" },
        { id: 7, image: CoolDrink, name: "Cool drink" },
    ];

    const menuItems = {

        Tea: [
            { id: 1, image: Tea, name: "Masala Tea", price: 20, qty: 1 },
            { id: 2, image: Tea, name: "Ginger Tea", price: 20, qty: 1 },
            { id: 3, image: Tea, name: "Lemon Tea", price: 25, qty: 1 },
            { id: 4, image: Tea, name: "Green Tea", price: 30, qty: 1 },
            { id: 5, image: Tea, name: "Black Tea", price: 20, qty: 1 },
        ],

        Coffee: [
            { id: 1, image: Coffee, name: "Filter Coffee", price: 25, qty: 1 },
            { id: 2, image: Coffee, name: "Cappuccino", price: 80, qty: 1 },
            { id: 3, image: Coffee, name: "Latte", price: 90, qty: 1 },
        ],

        Milk: [
            { id: 1, image: Milk, name: "Hot Milk", price: 25, qty: 1 },
            { id: 2, image: Milk, name: "Badam Milk", price: 40, qty: 1 },
        ],

        Boost: [
            { id: 1, image: Boost, name: "Boost", price: 40, qty: 1 },
            { id: 2, image: Boost, name: "Boost Special", price: 50, qty: 1 },
        ],

        Snacks: [
            { id: 1, image: Samosa, name: "Samosa", price: 15, qty: 1 },
            { id: 2, image: Samosa, name: "Veg Puff", price: 20, qty: 1 },
            { id: 3, image: Samosa, name: "Cutlet", price: 25, qty: 1 },
        ],

        Sandwichs: [
            { id: 1, image: Sandwich, name: "Veg Sandwich", price: 60, qty: 1 },
            { id: 2, image: Sandwich, name: "Cheese Sandwich", price: 80, qty: 1 },
        ],

        "Cool drink": [
            { id: 1, image: CoolDrink, name: "Coke", price: 40, qty: 1 },
            { id: 2, image: CoolDrink, name: "Sprite", price: 40, qty: 1 },
            { id: 3, image: CoolDrink, name: "Fanta", price: 40, qty: 1 },
        ]

    };

const filteredDrinks = drinks.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

    return (
        <Container>

            <div className="Title">
                <h2><b>OUR RECIPE</b></h2>
            </div>

            <div className="row">
                {(showAll ? filteredDrinks : filteredDrinks.slice(0, 3)).map((item) => (
                    <div className="col-md-4 text-center mb-4" key={item.id}>

                        <img
                            src={item.image}
                            alt={item.name}
                            className="Tea"
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedCategory(item.name)}
                        />

                        <h5>{item.name}</h5>

                    </div>
                ))}
            </div>

            <div className="text-center mb-4">
                <button
                    className="ProductButton"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>

            {/* Menu Display */}

            {selectedCategory && (
                <div className="mt-5">

                    <h2 className="text-center mb-4">
                        {selectedCategory} Menu
                    </h2>

                    <div className="row">

                        {menuItems[selectedCategory].map((item, index) => (
                            <div className="col-md-4 mb-3" key={index}>

                                <div className="card shadow p-3 text-center">

                                    <h5>{item.name}</h5>

                                    <h4 className="text-success">{item.price}</h4>

                                    <button className="btn btn-warning mt-2">
                                        Order Now
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            )}

        </Container>
    );
}