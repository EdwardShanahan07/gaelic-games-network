import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../components/Avatar";
import styles from "../styles/NavBar.module.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const loggedOutLogo =
        <>
            <Link className="text-decoration-none" exact to="/">
                <Navbar.Brand className="fw-bold">
                    GGN
                </Navbar.Brand>
            </Link>
        </>;

    const loggedInLogo =
        <>
            <Link className="text-decoration-none" exact to="/discover">
                <Navbar.Brand className="fw-bold">
                    GGN
                </Navbar.Brand>
            </Link>
        </>;

    const loggedInLinks =
        <>
            <Link to="/posts/create" className="nav-link">
                <i class={`fa-solid fa-circle-plus ${styles.Icon}`}></i>
            </Link>
            <Link to="/discover" className="nav-link">
                Discover
            </Link>
            <Link to="/feed" className="nav-link">
                Feed
            </Link>
            <Link to="/saved" className="nav-link">
                Saved
            </Link>
            <Link to="/" className="nav-link" onClick={handleSignOut}>
                Sign Out
            </Link>
            <Avatar src={currentUser?.profile_image} height={40} />
        </>;

    const loggedOutLinks =
        <>
            <Link to="/discover" className="nav-link">
                Discover
            </Link>
            <Link to="/signup" className="nav-link">
                Sign Up
            </Link>
            <Link to="/signin" className="nav-link">
                Sign In
            </Link>
        </>;

    return (
        <Navbar expand="lg" className="shadow-sm rounded"
            expanded={expanded}>
            <Container>
                {currentUser ? loggedInLogo : loggedOutLogo}
                <Navbar.Toggle ref={ref} aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)} />
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