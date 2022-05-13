import React from 'react';
import OpinionsCarousel from "./OpinionsCarousel";

function Opinions() {
    return (
        <div className="opinions">
            <h2 className="opinions__title">Dziękuję za ciepłe słowa.</h2>
            <div className="opinions__container">
                <OpinionsCarousel/>
            </div>
        </div>
    );
}

export default Opinions;