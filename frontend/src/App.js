import React from 'react';
import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";

import { useCurrentUser } from "./contexts/CurrentUserContext";
import Container from "react-bootstrap/Container";


function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";
    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.Height}>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route exact path="/signin" render={() => <SignIn />} />
                    <Route
                        exact
                        path="/discover"
                        render={() => (
                            <PostsPage message="No results found. Adjust the search keyword." />
                        )}
                    />
                    <Route
                        exact
                        path="/feed"
                        render={() => (
                            <PostsPage
                                message="No results found. Adjust the search keyword or follow a user."
                                filter={`owner__followed__owner__profile=${profile_id}&`}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/saved"
                        render={() => (
                            <PostsPage
                                message="No results found. Adjust the search keyword or save a post."
                                filter={`saves__owner__profile=${profile_id}&ordering=-saves__created_at&`}
                            />
                        )}
                    />
                    <Route exact path="/posts/create" render={() => <PostCreateForm />} />
                    <Route exact path="/posts/:id" render={() => <PostPage />} />
                    <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
                    <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
                    <Route
                        exact
                        path="/profiles/:id/edit/username"
                        render={() => <UsernameForm />}
                    />
                    <Route
                        exact
                        path="/profiles/:id/edit/password"
                        render={() => <UserPasswordForm />}
                    />
                    <Route
                        exact
                        path="/profiles/:id/edit"
                        render={() => <ProfileEditForm />}
                    />
                    <Route render={() => <NotFound />} />
                </Switch>
            </Container>
        </div >
    );
}

export default App;