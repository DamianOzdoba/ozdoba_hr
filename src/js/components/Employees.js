import React from 'react';
import Offers from "./Offers";
import offers_bg_white from "../../images/offers_bg_white.png";

function Employees() {
    return (
        <div className="employ" style={{backgroundImage: `url(${offers_bg_white})`}}>
            <div className="employ__offers">
                <h2>Aktualne oferty rekrutacyjne:</h2>
                <Offers />
            </div>
        </div>
    );
}

export default Employees;