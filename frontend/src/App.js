import './App.css';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/home/Home';

import Container from "react-bootstrap/Container";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;