import React, {ReactElement, useState} from "react";
import './MenuCard.css';
import {MenuOption} from "../enums/MenuOption";
import {MenuCardOption} from "./MenuCardOption/MenuCardOption";
import {MenuCardContent} from "./MenuCardContent/MenuCardContent";


export function MenuCard(): ReactElement {
    const [selectedOption, setSelectedOption] = useState<MenuOption>(MenuOption.Dinner);

    return <div className="menu_card">
        <div className="menu_card__options_bar">
            <MenuCardOption
                option={MenuOption.Lunch}
                onOptionClick={setSelectedOption}
                isSelected={selectedOption === MenuOption.Lunch}
            />
            <MenuCardOption
                option={MenuOption.Dinner}
                onOptionClick={setSelectedOption}
                isSelected={selectedOption === MenuOption.Dinner}
            />
            <MenuCardOption
                option={MenuOption.Desserts}
                onOptionClick={setSelectedOption}
                isSelected={selectedOption === MenuOption.Desserts}
            />
        </div>
        <MenuCardContent menuOption={selectedOption}/>
    </div>
}