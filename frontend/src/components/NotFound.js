import React from "react";
import NotFoundImage from "../assets/not-found.svg";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <Image className={`mb-3 ${styles.Image}`} src={NotFoundImage} />

            <p className='mb-3'>Sorry we could&apos;nt find the page you are looking for!</p>

            <Link to="/discover">
                <Button className="btn-primary">
                    Back To Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;