import React, {ReactElement} from "react";
import './VideoMenu.css';

export function VideoMenu(): ReactElement {
    return (
        <div className="video-container">
            <video autoPlay={true} muted={true} loop={true} width='100%' height='100%' className="video">
                <source
                    src="https://res.cloudinary.com/night-potato/video/upload/v1634232441/pexels-denys-gromov-6176588_zvpmip.mp4"
                    type="video/mp4"
                />

            </video>
            <div className="buttons-container">
                <button
                    className="video-button"
                    onClick={() => document.querySelector(".menu_card")?.scrollIntoView({
                        behavior: "smooth",
                        block: 'center'
                    })}
                >
                    Menu
                </button>
                <button
                    className="video-button"
                    onClick={() => document.querySelector('.reservations_section')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })}
                >
                    Make a reservation
                </button>
            </div>
        </div>
    )
}