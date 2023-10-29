import React, { useState } from "react";
import { Media, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { DropDownMenu } from "../../components/DropDownMenu";
import CommentEditForm from "./CommentEditForm";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        id,
        setPost,
        setComments,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) { console.log(err); }
    };

    return (
        <>
            <hr />
            <Media>
                <Row>
                    <Col md={1}>
                        <Link to={`/profiles/${profile_id}`}>
                            <Avatar src={profile_image} />
                        </Link>
                    </Col>

                    <Col>
                        <Media.Body className="align-self-center ml-2">
                            <div className={"d-flex align-items-center justify-content-between"}>
                                <div>
                                    <span className={styles.Owner}>{owner}</span>
                                    <span className="text-secondary">{updated_at}</span>
                                </div>

                                {is_owner && !showEditForm && (
                                    <DropDownMenu
                                        handleEdit={() => setShowEditForm(true)}
                                        handleDelete={handleDelete}
                                    />
                                )}
                            </div>

                            {showEditForm ? (
                                <CommentEditForm
                                    id={id}
                                    profile_id={profile_id}
                                    content={content}
                                    profileImage={profile_image}
                                    setComments={setComments}
                                    setShowEditForm={setShowEditForm}
                                />
                            ) : (
                                <p>{content}</p>
                            )}
                        </Media.Body>
                    </Col>
                </Row>
            </Media>
        </>
    );
};

export default Comment;