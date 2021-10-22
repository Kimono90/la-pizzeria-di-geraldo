import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={() => <HomePage/>}/>
            </Switch>
        </Router>
    )
}

export default App
