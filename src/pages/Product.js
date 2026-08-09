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
        {
            id: 1,
            image: Tea,
            name: "Tea"
        },
        {
            id: 2,
            image: Coffee,
            name: "Coffee"
        },
        {
            id: 3,
            image: Milk,
            name: "Milk"
        },
        {
            id: 4,
            image: Boost,
            name: "Boost"
        },
        {
            id: 5,
            image: Samosa,
            name: "Snacks"
        },
        {
            id: 6,
            image: Sandwich,
            name: "Sandwichs"
        },
        {
            id: 7,
            image: CoolDrink,
            name: "Cool drink"
        }
    ];


    /* SEARCH FILTER */

    const filteredDrinks = drinks.filter((item) =>
        item.name
            .toLowerCase()
            .includes(search.trim().toLowerCase())
    );


    /* SEARCH RESULT */

    const isSearching = search.trim() !== "";


    /* DISPLAY ITEMS */

    const displayedDrinks = isSearching
        ? filteredDrinks
        : showAll
            ? drinks
            : drinks.slice(0, 3);


    return (

        <Container>

            {/* SEARCH RESULT TITLE */}

            {isSearching && (
                <div className="search-title">

                    <h2>
                        Search Results
                    </h2>

                    <p>
                        Results for "{search}"
                    </p>

                </div>
            )}


            {/* PRODUCT GRID */}

            <div className="row mt-5 pt-3 mb-3">

                {displayedDrinks.length > 0 ? (

                    displayedDrinks.map((item) => (

                        <div
                            className="col-md-4 text-center mb-4"
                            key={item.id}
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                className="Tea"
                                style={{
                                    cursor: "pointer",
                                    marginBottom: "30px"
                                }}
                                onClick={() =>
                                    navigate(
                                        `/menu/${encodeURIComponent(item.name)}`
                                    )
                                }
                            />

                            <h5>
                                {item.name}
                            </h5>

                        </div>

                    ))

                ) : (

                    /* NO RESULT */

                    <div className="no-search-result">

                        <h3>
                            No Products Found
                        </h3>

                        <p>
                            No product matches "{search}".
                        </p>

                    </div>

                )}

            </div>


            {/* SHOW MORE */}

            {!isSearching && (

                <div className="text-center mb-4">

                    <button
                        className="ProductButton"
                        onClick={() =>
                            setShowAll(!showAll)
                        }
                    >

                        {showAll
                            ? "Show Less"
                            : "Show More"
                        }

                    </button>

                </div>

            )}

        </Container>
    );
}