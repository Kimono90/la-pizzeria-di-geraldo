import react, {ReactElement, useRef} from "react";
import {BackgroundVideo} from "../components/BackgroundVideo/BackgroundVideo";
import {AboutCard} from "../components/AboutCard/AboutCard";
import {MenuCard} from "../components/MenuCard/MenuCard";

export function HomePage(): ReactElement {

    return <>
        <div style={{display: "flex", zIndex: 2, position: "relative", flexDirection: 'column', alignItems: 'center'}}>
            <AboutCard/>
        </div>
        <BackgroundVideo/>
        <div style={{display: "flex", zIndex: 2, position: "relative", flexDirection: 'column', alignItems: 'center'}}>
            <MenuCard/>
            <div>RESERVATIONS</div>
        </div>
    </>
}