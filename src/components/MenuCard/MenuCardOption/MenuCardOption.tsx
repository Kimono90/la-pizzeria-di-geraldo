import React, {useState} from "react";
import { MenuOption } from "../../enums/MenuOption";
import './MenuCardOption.css';


type MenuCardOptionProps = {
    option: MenuOption;
    isSelected: boolean;
    onOptionClick: (option: MenuOption) => void;
}


export function MenuCardOption({ option, isSelected, onOptionClick }: MenuCardOptionProps) {
    document.querySelector('.menu_card')?.scrollIntoView({behavior: 'smooth', block: 'start'});
    function getClassName() {
        return isSelected
            ? "menu_card__option menu_card__option-selected"
            : "menu_card__option menu_card__option-unselected";
    }

    return <div className={getClassName()} onClick={() => onOptionClick(option)}>
        <span>{option}</span>
    </div>
}