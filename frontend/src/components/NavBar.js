import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }

        console.log(setCurrentUser())
    };

    const loggedInLinks =
        <>
            <Link to="/" className="nav-link" onClick={handleSignOut}>
                Sign Out
            </Link>
        </>;

    const loggedOutLinks =
        <>
            <Link to="/signup" className="nav-link">
                Sign Up
            </Link>
            <Link to="/signin" className="nav-link">
                Sign In
            </Link>
        </>;

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link className="text-decoration-none" exact to="/">
                    <Navbar.Brand className="fw-bold">
                        GGN
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {currentUser ? loggedInLinks : loggedOutLinks}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;