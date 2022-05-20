import React from 'react';
import CooperationOffer from "./CooperationOffers";
import offers_bg_white from "../../images/offers_bg_white.png";

function Employers() {
    return (
        <div className="employers" style={{backgroundImage: `url(${offers_bg_white})`}}>
            <div className="employers__cooperation-offers">
                <h2>Modele współpracy:</h2>
                <div className="cooperation-offers">
                    <CooperationOffer/>
                </div>
            </div>
        </div>
    );
}

export default Employers;