import React from 'react'
import './Contact.css'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import {
    FaTwitter,
    FaFacebookF,
    FaEnvelope,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
    return (
        <div className='Contact'>
            <Container>
                <div className='row md-12 '>

                    <div className='col-md-3 '>
                        <h2 className='textcolor'>Company</h2>
                        <ul>
                            <p> About Us</p>
                            <p> Contact Us</p>
                            <p> Reservation</p>
                            <p> Privacy Policy</p>
                            <p> Terms & Condition</p>
                        </ul>
                    </div>

                    <div className='col-md-3'>
                        <h2 className='textcolor'>Contact</h2>
                        <p>📍 41/1 HUDCO Colony Peelamedu Coimbatore</p>
                        <p>📞 9092330880</p>
                        <p>📫 srineevicoffeehouse@gmail.com</p>
                        <div className="Social">
                            <div className="iconborder">
                                <Link
                                    className="iconcolor"
                                    to="mailto:srineevicoffeehouse.25@gmail.com"
                                    target="_blank"
                                    aria-label="Visit our Facebook page"
                                >
                                    <FaEnvelope className="icon-color" />
                                </Link>
                            </div>

                            <div className="iconborder1">
                                <Link
                                    className="iconcolor"
                                    to="https://www.facebook.com/"
                                    target="_blank"
                                    aria-label="Visit our Facebook page"
                                >
                                    <FaFacebookF className="icon-color" />
                                </Link>
                            </div>

                            <div className="iconborder2">
                                <Link
                                    className="iconcolor"
                                    to="https://wa.me/9092330880"
                                    target="_blank"
                                    aria-label="Visit our Whatsapp page"
                                >
                                    <FaWhatsapp className="icon-color" />
                                </Link>
                            </div>
                            
                            <div className="iconborder3">
                                <Link
                                    className="iconcolor"
                                    to="https://www.instagram.com/srineevicoffeehouse2026/"
                                    target="_blank"
                                    aria-label="Visit our Instagram page"
                                >
                                    <FaInstagram className="icon-color" />
                                </Link>
                            </div>

                        </div>

                    </div>

                    <div className='col-md-3'>
                        <h2 className='textcolor'>Opening</h2>
                        <h3>Monday - Saturday</h3>
                        <p>7:00AM - 8:00PM</p>
                        <h3>Sunday</h3>
                        <p>8:00AM - 7:00PM</p>
                    </div>

                    <div className='col-md-3'>
                        <h2 className='textcolor'>Newsletter</h2>
                        <p>
                            Dolor amet sit justo amet elitr clita ipsum elitr est.
                        </p>
                        <div className="newsletter">
                            <input type="email" placeholder="Your email" className="text" />
                            <button className="button">SIGNUP</button>
                        </div>
                    </div>

                </div>
            </Container>
            <hr />
            <div className='Copy'>
                Copyright @ 2026 All Right Reserver By SRI NEEVI COFFEE HOUSE <span className='textcolor'>|</span> Designed By <span><a href="https://karthi-frontend-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer"  className='textcolor'>Karthi-007</a></span>
            </div>
        </div>
    )
}
