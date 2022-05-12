import React from 'react';
import banner_bg from "../../images/banner_bg.png";
import BannerSection from "./BannerSection";

function Banner() {
    return (
        <div className="banner" style={{backgroundImage: `url(${banner_bg})`}}>
            <BannerSection
                title={'Zmiana pracy?'}
                desc={'Oferty pracy dla kandydatów'}
                btnText={'Dla kandydatów'}
                url={'/employees'}/>
            <BannerSection
                title={'Rekrutacja pracowników?'}
                desc={'Poszukiwanie specjalistów IT'}
                btnText={'Dla pracodawców'}
                url={'/employers'}/>
        </div>
    );
}

export default Banner;