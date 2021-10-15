import React from "react";
import './MenuCardContent.css'

export function MenuCardContent() {
    return (
        <div className="menu_card__content">
            <div className="menu_card__item">
                <div className="menu_card__item__name">
                    <span>Pizza Margarita</span>
                    <span className="menu_card__item__border">&nbsp;</span>
                    <span>9.00</span></div>
                <span className="menu_card__item__description"><i>An Authentic pizza with mozzarella cheese, fresh tomato sauce and basil.</i></span>
            </div>
            <div className="menu_card__item">
                <div className="menu_card__item__name">
                    <span>Pizza Fungi</span>
                    <span className="menu_card__item__border">&nbsp;</span>
                    <span>9.50</span></div>
                <span className="menu_card__item__description"><i>We put the fun in Fungi. This pizza is topped with fresh mushrooms.</i></span>
            </div>
        </div>
    )
}