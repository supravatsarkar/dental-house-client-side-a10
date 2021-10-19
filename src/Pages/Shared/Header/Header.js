import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/logo/png/logo.png'
import './Header.css';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import userImg from '../../../images/user.png';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();

    // try to display user photo 
    const [img, setImg] = useState('');
    useEffect(() => {
        user.photoURl ? setImg(user.photoURl) : setImg(userImg);
    }, [])
    return (
        <Navbar className="nav-bar" sticky="top" bg="" expand="lg" variant="light">
            <Container >
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
                        <Nav.Link as={NavHashLink} activeClassName="selected"
                            activeStyle={{ color: '#dc3545' }} className="nav-button fw-bolder" smooth to="/home#home">Home</Nav.Link>
                        <Nav.Link as={NavHashLink} activeClassName="selected"
                            activeStyle={{ color: '#dc3545' }} className="nav-button fw-bolder" smooth to="/home#services">Services</Nav.Link>
                        <Nav.Link as={NavHashLink} activeClassName="selected"
                            activeStyle={{ color: '#dc3545' }} className="nav-button fw-bolder" smooth to="/home#contact">Contact Us</Nav.Link>
                        <Nav.Link as={NavHashLink} activeClassName="selected"
                            activeStyle={{ color: '#dc3545' }} className="nav-button fw-bolder" smooth to="/home#about-us">About Us</Nav.Link>
                        <Nav.Link as={NavHashLink} activeClassName="selected"
                            activeStyle={{ color: '#dc3545' }} className="nav-button fw-bolder" smooth to="/doctors">Doctors</Nav.Link>
                        {

                            (user.email || user.displayName) ? <></> : <>
                                <Nav.Link as={HashLink} className="nav-button fw-bolder" smooth to="/login">Log In</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav className="mx-auto d-flex align-items-center justify-content-around">

                        {

                            (user?.displayName || user?.email) && <>
                                <img className="img-fluid border border-dark rounded-circle mx-1" src={img} alt=".." />
                                <span>{user?.displayName}</span>
                                <Button onClick={logOut} variant="danger" size="sm" className="mx-1">Log Out</Button>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;