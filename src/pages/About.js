import React from 'react'
import Container from 'react-bootstrap/Container';
import './About.css';
export default function About() {
  return (

    <section className="vision mb-5 pb-3">

      <div className="BG">
        <Container className='Text'>
          <h2 className="Title"><b>ABOUT US</b></h2>
          <b >Welcome to **SRI NEEVI COFFEE HOUSE**, where every cup is brewed with care and every sip brings comfort. We are passionate about serving fresh tea, rich coffee, and a variety of refreshing beverages made with quality ingredients. Our goal is to provide a warm and friendly atmosphere where customers can relax and enjoy delicious drinks at affordable prices. Whether you're starting your day or taking a break, SRI NEEVI COFFEE HOUSE is the perfect place to refresh and recharge.
          </b>
        </Container>
      </div>

      <div className="vision-mission-container">

        {/* Our Vision */}
        <div className="vision-card">
          <div className="vm-icon">👁️</div>

          <div className="vm-content">
            <span className="vm-small-title">OUR VISION</span>
            <h2>Brewing Happiness in Every Cup</h2>

            <p>
              At Srineevi Coffee House, our vision is to create a
              warm and welcoming space where every cup of coffee
              brings people together. We aim to deliver rich
              flavors, memorable experiences, and quality in
              every sip.
            </p>
          </div>
        </div>


        {/* Our Mission */}
        <div className="mission-card">
          <div className="vm-icon">🎯</div>

          <div className="vm-content">
            <span className="vm-small-title">OUR MISSION</span>
            <h2>Quality, Passion & Perfect Taste</h2>

            <p>
              Our mission is to serve freshly prepared beverages
              and delicious food using quality ingredients.
              We are committed to excellent service, consistent
              taste, and making every visit to Srineevi Coffee
              House a delightful experience.
            </p>
          </div>
        </div>

      </div>
    </section>

  )
}
