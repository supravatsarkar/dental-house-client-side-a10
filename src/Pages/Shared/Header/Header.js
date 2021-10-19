import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/logo/png/logo.png'
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirabase';
import userImg from '../../../images/user.png';
const Header = () => {
    const { user, logOut } = useFirebase();
    // console.log(user.photoURL);
    const [img, setImg] = useState('');
    useEffect(() => {
        user.photoURl ? setImg(user.photoURl) : setImg(userImg);
    }, [])
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
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" smooth to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" smooth to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" smooth to="/home#contact">Contact Us</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-button fw-bolder" smooth to="/home#about-us">About Us</Nav.Link>
                        {
                            user?.email ? <></> : <Nav.Link as={HashLink} className="nav-button fw-bolder" smooth to="/login">Log In</Nav.Link>
                        }
                    </Nav>
                    <Nav className="mx-auto align-items-center ">

                        {

                            (user?.displayName || user?.email) && <>
                                <img className="img-fluid border border-dark rounded-circle me-2" src={img} alt=".." />
                                <span>{user?.displayName}</span>
                                <Button onClick={logOut} variant="danger" size="sm" className="ms-2">Log Out</Button>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;