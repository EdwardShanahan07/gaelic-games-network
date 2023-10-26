import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
    Form,
    Button,
    Image,
    Col,
    Row,
    Container,
    Alert,
} from "react-bootstrap";
import styles from "../../styles/SignUp.module.css";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const SignUp = () => {
    useRedirect("loggedIn");
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };
    return (
        <Row className={styles.Container}>
            <Col className={`${styles.SignUpCol} my-auto py-2 p-md-2 shadow-lg`} md={6}>
                <Container className={`p-5`}>
                    <h1 className="mb-3">Sign Up</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username" className="mb-3">
                            <Form.Label className="d-none">username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password1" className="mb-3">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password2" className="mb-3">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Button
                            type="submit"
                        >
                            Sign up
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}

                        <Link className="d-block mt-3 text-secondary text-decoration-none" to="/signin">
                            Already have an account? <span className="text-primary">Sign in</span>
                        </Link>
                    </Form>
                </Container>

            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2`}
            >
                <Image
                    className={styles.Image}
                    src={"https://images.unsplash.com/photo-1679226273960-b8f78fffd7dc?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
            </Col>
        </Row>
    );
};

export default SignUp;