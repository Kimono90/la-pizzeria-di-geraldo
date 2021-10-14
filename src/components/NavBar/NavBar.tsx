import react, {ReactElement} from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

export default function NavBar(): ReactElement {
    return <nav className="navbar">
        <Link className="navbar__link" to="/">Home</Link>
        <div>
            <Link className="navbar__link" to="/about">About</Link>
            <Link className="navbar__link" to="/about">Menu</Link>
            <Link className="navbar__link" to="/users">Reservations</Link>
        </div>
    </nav>
}