import React, {ReactElement} from "react";
import './MenuCard.css';

export function MenuCard(): ReactElement {
    return <div className="menu_card">
        <div className="menu_card__options_bar">
            <div className="menu_card__option"><span>Lunch</span></div>
            <div className="menu_card__option"><span>Diner</span></div>
            <div className="menu_card__option"><span>Desserts</span></div>
        </div>
    </div>
}