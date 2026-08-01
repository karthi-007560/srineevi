import React from 'react'
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import './Product.css';
import Tea from '../image/Tea.jpg';
import Coffee from '../image/Coffee.jpg';
import Boost from '../image/Boost.jpg';
import Samosa from '../image/Samosa.jpg';
import Eggpuff from '../image/Egg pops.jpg';
import CoolDrink from '../image/Cool drink.jpg';
export default function Product() {
    const [showAll, setShowAll] = useState(false);

    const drinks = [
        { id: 1, image: Tea, name: "Tea" },
        { id: 2, image: Coffee, name: "Coffee" },
        { id: 3, image: Boost, name: "Boost" },
        { id: 4, image: Samosa, name: "Samosa" },
        { id: 5, image: Eggpuff, name: "Egg Puff" },
        { id: 6, image: CoolDrink, name: "Cool drink" },

    ];
    return (
        <div>
            <Container>
                <div className="Title">
                    <h2><b>OUR RECIPE</b></h2>
                </div>

                <div className="row">
                    {(showAll ? drinks : drinks.slice(0, 3)).map((item) => (
                        <div className="col-md-4  text-center" key={item.id}>
                            <img src={item.image} className="Tea" alt={item.name} />
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
        </div>
    )
}
