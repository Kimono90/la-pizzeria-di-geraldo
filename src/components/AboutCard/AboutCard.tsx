import React, {ReactElement} from "react";
import './AboutCard.css';

export function AboutCard(): ReactElement {
    return <div className="about_card">
        <h1>Welcome to La Pizzeria Di Geraldo!</h1>
        <p><i>The best things in life come in circles.</i></p>
    </div>
}