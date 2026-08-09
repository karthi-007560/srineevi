import React from "react";

import Video from "./Video";
import About from "./About";
import Carous from "./Carousel";
import Product from "./Product"
import Service from "./Service";
import Review from "./Review";

import "./Home.css";

export default function Home() {

    return (
        <div className="home-page">

            {/* HERO VIDEO */}

            <Video />


            {/* ABOUT */}

            <About />


            {/* OFFERS / CAROUSEL */}

            <Carous />
            <Product/>


            {/* SERVICES */}

            <Service />


            {/* CUSTOMER REVIEWS */}

            <Review />

        </div>
    );
}