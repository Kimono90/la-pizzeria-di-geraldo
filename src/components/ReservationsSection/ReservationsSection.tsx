import React, {ReactElement} from "react";
import './ReservationsSection.css'

export function ReservationsSection(): ReactElement {
    return <div className="reservations_section">
        <h1>Make a reservation</h1>
        <div className="reservations_content">
            <div className="reservations_address">
                <h3>Address</h3>
                <span>69 Margarita street</span>
                <span>1234 AB, Napolitana City</span>
                <span>043-12345679</span>
                <a href="mailto:geraldo@lapizzeria.com">geraldo@lapizzeria.com</a>
            </div>
            <div className="reservations_opening_hours">
                <h3>Opening hours</h3>
                <div className="reservations_day"><span>Monday - Tuesday</span><span>Closed</span></div>
                <div className="reservations_day"><span>Wednesday - Sunday</span><span>14:00 - 21:00</span></div>
            </div>
        </div>
    </div>
}