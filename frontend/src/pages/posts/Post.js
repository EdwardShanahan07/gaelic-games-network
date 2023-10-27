import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { DropDownMenu } from "../../components/DropDownMenu";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        save_id,
        tag,
        content,
        image,
        updated_at,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleSave = async () => {
        try {
            const { data } = await axiosRes.post("/saves/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, save_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnSave = async () => {
        try {
            await axiosRes.delete(`/saves/${save_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, save_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className="mb-3 p-3 shadow-sm">
            <Row>
                <Col md={1}>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                    </Link>
                </Col>

                <Col>
                    <Card.Body>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <Link className={styles.Username} to={`/profiles/${profile_id}`}>
                                    {owner}
                                </Link>

                                <span className={`text-secondary ${styles.UpdatedAt}`}>{updated_at}</span>
                            </div>

                            {is_owner && postPage && (
                                <DropDownMenu
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            )}

                        </div>

                        <Link to={`/posts/${id}`} className="text-dark text-decoration-none">
                            {content && <Card.Text>{content}</Card.Text>}
                            {tag && <Card.Text className="mb-3">#{tag.toLowerCase()}</Card.Text>}
                        </Link>

                        {image ? <Link to={`/posts/${id}`}>
                            <Card.Img className={styles.Image} src={image} alt={tag} />
                        </Link> : <></>
                        }
                        <div className="d-flex align-items-center justify-content-between mt-5" >
                            <div>
                                {is_owner ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>You can't like your own post!</Tooltip>}
                                    >
                                        <i className={`far fa-heart ${styles.Icon}`} />
                                    </OverlayTrigger>
                                ) : like_id ? (
                                    <span onClick={handleUnlike}>
                                        <i className={`fas fa-heart ${styles.Icon}`} />
                                    </span>
                                ) : currentUser ? (
                                    <span onClick={handleLike}>
                                        <i className={`far fa-heart ${styles.Icon}`} />
                                    </span>
                                ) : (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>Log in to like posts!</Tooltip>}
                                    >
                                        <i className={`far fa-heart ${styles.Icon}`} />
                                    </OverlayTrigger>
                                )}
                                {likes_count}
                            </div>
                            <div>
                                <Link to={`/posts/${id}`}>
                                    <i className={`far fa-comments ${styles.Icon}`} />
                                </Link>
                                {comments_count}
                            </div>

                            <div>
                                {is_owner ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>You can't save your own post</Tooltip>}
                                    >
                                        <i className={`fa-regular fa-bookmark ${styles.Icon}`}></i>
                                    </OverlayTrigger>
                                ) : save_id ? (
                                    <span onClick={handleUnSave}>
                                        <i className={`fa-solid fa-bookmark ${styles.Icon}`}></i>
                                    </span>
                                ) : currentUser ? (
                                    <span onClick={handleSave}>
                                        <i className={`fa-regular fa-bookmark ${styles.Icon}`}></i>
                                    </span>
                                ) : (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>Log in to save posts!</Tooltip>}
                                    >
                                        <i className={`fa-regular fa-bookmark ${styles.Icon}`}></i>
                                    </OverlayTrigger>
                                )}
                            </div>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    );
};

export default Post;
