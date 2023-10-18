import React from "react";
import { Link } from 'react-router-dom';

import {
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";

import styles from "../../styles/Home.module.css";

const Home = () => {
    return (
        <div>
            <Row className={styles.Container}>
                <Col md={6}>
                    <Image
                        className={styles.Image}
                        src="https://images.unsplash.com/photo-1679226301040-2430aa9eba2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                    />
                </Col>
                <Col className="d-flex justify-content-center flex-column" md={6}>
                    <h1>Welcome To Gaelic Games Network!</h1>
                    <p>Discover, Connect, and Celebrate the Passion for Gaelic Games with Gaelic Games Network -
                        Your Hub for All Things GAA!
                    </p>
                    <Link to="/signup">
                        <Button>Sign Up</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default Home;