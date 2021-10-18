import React from 'react';
import { Button, Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/logo/png/logo.png'
import './Header.css';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <Navbar sticky="top" bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="200"
                        // height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    {/* <p className="p-0 m-0"><small className="fs-6 ">Care for your smile</small></p> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" to="/home#contact">Contact Us</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" to="/home#about-us">About Us</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" to="/home#about-us">Log In</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;