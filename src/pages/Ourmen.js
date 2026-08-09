import React from "react";
import Product from "./Product";
import "./Ourmenu.css";

export default function Ourmen({ search }) {

    return (
        <div className="ourmen-page">

            {/* TOP CONTENT */}

            <div className="ourmen-heading">

                <span>WHAT WE OFFER</span>

                <h2>
                    Our <strong>Recipes</strong>
                </h2>

                <p>
                    We make every visit special with great coffee,
                    delicious food and warm hospitality.
                </p>

            </div>


            {/* NORMAL PRODUCT SECTION */}

            <Product search={search} />

        </div>
    );
}