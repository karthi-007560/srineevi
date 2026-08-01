import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../image/logo.jpeg';
import './Head.css';
import { Link } from "react-router-dom";
export default function Head() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width="100" className="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Home">
              <Nav.Link href="#home"><b className='Home'>HOME</b></Nav.Link>
              <Nav.Link href="#link"><b className='Home'>ABOUT</b></Nav.Link>
              <Nav.Link href="#link"><b className='Home'>OUR RECIPES</b></Nav.Link>
              <Nav.Link href="#link"><b className='Home'>OUR SERVICES</b></Nav.Link>
              <Nav.Link href="#link"><b className='Home'>CONTACT</b></Nav.Link>
              
            </Nav>
            <div>
              <input type="text" placeholder="🔍 Search.." className="Search"></input>
            </div>
            <div>
              <button className="Button">👤 Login</button>
            </div>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  )
}

