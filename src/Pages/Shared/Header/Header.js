import React from 'react';
import { Button, Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/logo/png/logo.png'
import './Header.css';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg" variant="light">
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
                        <Nav.Link className="nav-button fw-bolder" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-button fw-bolder" href="#link">Link</Nav.Link>
                        <Nav.Link className="nav-button fw-bolder" href="#link">Link</Nav.Link>
                        <Nav.Link className="nav-button fw-bolder" href="#link">Link</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;