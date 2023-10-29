import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignUp.module.css";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

const SignIn = () => {
    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");
    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/dj-rest-auth/login/", signInData);
            history.push("/discover");
            setCurrentUser(data.user);
            setTokenTimestamp(data);
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <Row className={styles.Container}>
            <Col className={`${styles.SignIn} p-0 p-md-2`} md={6}>
                <Container className={`p-5 shadow-lg`}>
                    <h1 className="mb-3">Sign In</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username" className="mb-3">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"

                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password" className="mb-3">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"

                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Button
                            type="submit"
                        >
                            Sign in
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}

                        <Link className={`d-block mt-3 text-decoration-none text-secondary`} to="/signup">
                            Don&apos;t have an account? <span className="text-primary">Sign up now!</span>
                        </Link>
                    </Form>
                </Container>
            </Col>
            <Col
                md={6}
                className={`${styles.SignIn} my-auto d-none d-md-block p-2`}
            >
                <Image
                    className={styles.Image}
                    src={"https://images.unsplash.com/photo-1679226274014-b979c03c56d1?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
            </Col>
        </Row>
    );
};

export default SignIn;

