import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

const PostCreateForm = () => {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        content: "",
        tag: "",
        image: "",
    });
    const { content, tag, image } = postData;

    const imageInput = useRef(null);
    const history = useHistory();

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("content", content);
        formData.append("tag", tag);

        if (imageInput.current.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        try {
            const { data } = await axiosReq.post("/posts/", formData);
            history.push(`/posts/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Post</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Share what's on your mind...."
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                    resize="none"
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Tag</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="hurling2024"
                    name="tag"
                    value={tag}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group className="text-center">
                {image ? (
                    <>
                        <figure>
                            <Image src={image} rounded />
                        </figure>
                        <div>
                            <Form.Label
                                className={` btn`}
                                htmlFor="image-upload"
                            >
                                Change the image
                            </Form.Label>
                        </div>
                    </>
                ) : (
                    <Form.Label
                        className="d-flex justify-content-center"
                        htmlFor="image-upload"
                    >
                        <Asset
                            src={Upload}
                            message="Click or tap to upload an image"
                        />
                    </Form.Label>
                )}

                <Form.File
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button type="submit">Share</Button>
        </Form>
    );
};


export default PostCreateForm;