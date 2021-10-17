import React, {ReactElement} from "react";
import './BackgroundVideo.css';

export function BackgroundVideo(): ReactElement {
    return (
        <video autoPlay={true} muted={true} loop={true} width='100%' height='80%' className="video">
            <source
                src="https://res.cloudinary.com/night-potato/video/upload/v1634232441/pexels-denys-gromov-6176588_zvpmip.mp4"
                type="video/mp4"
            />
        </video>
    )
}