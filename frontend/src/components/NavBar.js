import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link className="text-decoration-none" exact to="/">
                    <Navbar.Brand className="fw-bold" href="#home">
                        GGN
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link exact to="/test">
                            <Nav.Link href="#home">Discover</Nav.Link>
                        </Link>
                        <Nav.Link href="#link">Sign In</Nav.Link>
                        <Nav.Link href="#link">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;