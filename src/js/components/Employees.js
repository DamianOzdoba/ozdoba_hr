import React from 'react';
import Offers from "./Offers";
import offers_bg_white from "../../images/offers_bg_white.png";

function Employees() {
    return (
        <div className="employees" style={{backgroundImage: `url(${offers_bg_white})`}}>
            <div className="employees__offers">
                <h2>Aktualnie otwarte rekrutacje:</h2>
                <Offers />
            </div>
        </div>
    );
}

export default Employees;