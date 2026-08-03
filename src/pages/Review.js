import React from "react";
import "./Review.css";

const reviews = [
  {
    id: 1,
    name: "Arun Kumar",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Tea romba fresh-ah irundhuchu. Taste super, service quick. Daily inga than tea kudikka varuven!",
  },
  {
    id: 2,
    name: "Priya S",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "Coffee aroma amazing! Clean place, friendly staff, affordable price. Highly recommended.",
  },
  {
    id: 3,
    name: "Vignesh R",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Best ginger tea in our area. Snacks-um fresh, staff-um polite. Excellent experience.",
  },
  {
    id: 4,
    name: "Divya R",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Every cup feels fresh and flavorful. Perfect place to relax with friends over tea.",
  },
];

export default function Review() {
  return (
    <section className="review-section container py-5">
      <h2 className="text-center mb-2">What Our Customers Say</h2>
      <p className="text-center text-muted mb-5">
        Thousands of happy customers, one unforgettable tea experience.
      </p>

      <div className="row">
        {reviews.map((item) => (
          <div className="col-lg-6 mb-4" key={item.id}>
            <div className="review-card">
              <div className="d-flex align-items-center mb-3">
                <img src={item.image} alt={item.name} />
                <div className="ms-3">
                  <h5>{item.name}</h5>
                  <div className="stars">★★★★★</div>
                </div>
              </div>

              <p>{item.review}</p>

              <span className="quote">❝</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}