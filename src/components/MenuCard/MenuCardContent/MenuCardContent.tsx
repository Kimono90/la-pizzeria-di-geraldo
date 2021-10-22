import React, {useState} from "react";
import './MenuCardContent.css'
import Prismic from '@prismicio/client'
import { Document as PrismicDocument } from "@prismicio/client/types/documents";
import {MenuOption} from "../../enums/MenuOption";


const apiEndpoint = 'https://la-pizzeria-di-geraldo.prismic.io/api/v2'
const accessToken = import.meta.env.VITE_APP_PRISMIC_TOKEN as string;

type MenuCardContentProps = {
    menuOption: MenuOption;
}

export function MenuCardContent({ menuOption }: MenuCardContentProps) {
    const [prismicData, setPrismicData] = useState<PrismicDocument[] | null>(null);
    const client = Prismic.client(apiEndpoint, { accessToken })


    React.useEffect(() => {
        const fetchData = async () => {
            const response = await client.query(
                Prismic.Predicates.at('document.type', 'menu-item')
            )
            if (response) {
                setPrismicData(response.results)
            }
        }
        fetchData()
    }, [])

    function renderMenuItems(): JSX.Element[] | null {
        if (!prismicData) return null;
        const menuItemsToRender = prismicData.filter((item) => item.data.item_type === menuOption);
        if (!menuItemsToRender.length) return null;

        return menuItemsToRender.map((item, index) => {
            return (
                <div className="menu_card__item" key={`${item.id}`} style={{
                    animationDelay: `${(index * 100)}ms`, opacity: 0
                }}>
                <div className="menu_card__item__name">
                    <span>{item.data.menu_item_name[0].text}</span>
                    <span className="menu_card__item__border">&nbsp;</span>
                    <span>{item.data.menu_item_price}</span></div>
                <span className="menu_card__item__description"><i>{item.data.menu_item_description[0].text}</i></span>
            </div>)
        })
    }

    return (
        <div className="menu_card__content">
            {renderMenuItems()}
        </div>
    )
}