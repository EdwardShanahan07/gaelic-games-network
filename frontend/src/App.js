import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import Discover from './components/Discover';


import Container from "react-bootstrap/Container";

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.Height}>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route exact path="/signin" render={() => <SignIn />} />
                    <Route exact path="/discover" render={() => <Discover />} />
                    <Route render={() => <p>Page not found!</p>} />
                </Switch>
            </Container>
        </div >
    );
}

export default App;