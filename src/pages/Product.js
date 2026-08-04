import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    const [showAll, setShowAll] = useState(false);

    const drinks = [
        { id: 1, image: Tea, name: "Tea" },
        { id: 2, image: Coffee, name: "Coffee" },
        { id: 3, image: Milk, name: "Milk" },
        { id: 4, image: Boost, name: "Boost" },
        { id: 5, image: Samosa, name: "Snacks" },
        { id: 6, image: Sandwich, name: "Sandwichs" },
        { id: 7, image: CoolDrink, name: "Cool drink" },
    ];

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
                        style={{
                            cursor: "pointer",
                            marginBottom: "30px"
                        }}
                        onClick={() => navigate(`/menu/${item.name}`)}
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

    </Container>
);
}