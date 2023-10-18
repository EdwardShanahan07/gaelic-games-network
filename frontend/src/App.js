import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/home/Home';

import Container from "react-bootstrap/Container";

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/test" render={() => <h1>Test Page</h1>} />
                </Switch>
            </Container>
        </div >
    );
}

export default App;