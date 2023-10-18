import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';

import Container from "react-bootstrap/Container";

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route exact path="/signin" render={() => <SignIn />} />
                </Switch>
            </Container>
        </div >
    );
}

export default App;