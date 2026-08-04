import React from "react";
import Head from "./Head";
import Top from "./Top";
import Video from "./Video";
import Product from "./Product";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Review from "./Review";
import Carous from "./Carousel";
import './Home.css'
import Tea from "./Tea";
export default function Home({ search, setSearch }) {
  const isSearching = search && search.trim() !== "";

  return (
    <div className="HomeBG">
      <Top />
      <Head search={search} setSearch={setSearch} />

      {isSearching ? (
        <Product search={search} />
      ) : (
        <>
          <Video />
          <About />
          <Carous />
          <Product search={search} />
          <Service />
          <Review />
          <Contact />
        </>
      )}
    </div>
  );
}