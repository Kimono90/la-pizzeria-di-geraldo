import react, {ReactElement} from "react";
import {Link} from "react-router-dom";
import './NavBar.css'
import React from "react";

export default function NavBar(): ReactElement {
    return <nav className="navbar">
        <Link className="navbar__link" to="/">Home</Link>
        <div style={{display: 'flex'}}>
            <Link className="navbar__link" to="/menu">Menu</Link>
            <Link className="navbar__link" to="/reservations">Make a reservation</Link>
        </div>
    </nav>
}