import react, {ReactElement, useRef} from "react";
import {VideoMenu} from "../components/VideoMenu/VideoMenu";
import {AboutCard} from "../components/AboutCard/AboutCard";
import {MenuCard} from "../components/MenuCard/MenuCard";

export function HomePage(): ReactElement {

    return <>
        <div style={{display: "flex", zIndex: 2, position: "relative", flexDirection: 'column', alignItems: 'center'}}>
            <AboutCard/>
        </div>
        <VideoMenu/>
        <div style={{display: "flex", zIndex: 2, position: "relative", flexDirection: 'column', alignItems: 'center'}}>
            <MenuCard/>
            <div>RESERVATIONS</div>
        </div>
    </>
}