import React from "react";
import "./Service.css";

import Delivery from "../image/Fastdelivery.jpg";
import Teacoffee from "../image/Teacoffee.jpg";
import Coffeetea from "../image/Coffeetea.jpg";
import Table from "../image/Table.jpg";

const services = [
  {
    image: Delivery,
    title: "Fastest Door Delivery",
    description:
      "Freshly brewed coffee delivered to your doorstep with speed and care.",
  },
  {
    image: Teacoffee,
    title: "Fresh Tea & Coffee Beans",
    description:
      "Premium roasted beans sourced from the finest coffee farms.",
  },
  {
    image: Coffeetea,
    title: "Best Quality Tea & Coffee",
    description:
      "Every cup is crafted using carefully selected organic beans.",
  },
  {
    image: Table,
    title: "Online Table Booking",
    description:
      "Reserve your table online and enjoy your favorite coffee anytime.",
  },
];

export default function Service() {
  return (
    <section className="services">
      <h2 className="sub-title"><b>OUR SERVICES</b></h2>
      <h1>Fresh & Organic Beans</h1>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} width="100" className="IMG"/>

            <div className="content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="/">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}