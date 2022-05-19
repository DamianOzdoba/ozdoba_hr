import React from 'react';
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";

function ContactInfo() {
    return (
        <div className="contact-info">
            <Link to="/"><img className="contact-info__logo" src={logo} alt="logo"/></Link>
            <div className="contact-info__desc">
                <h2>Sara Ozdoba</h2>
                <p>ul. Grunwaldzka 597c/2</p>
                <p>62-064 Plewiska</p>
                <p><span>NIP: </span>779-23-90-887</p>
                <p><span>REGON: </span>387752384</p>
                <p><span>TEL: </span><a href="tel:48 798 588 943">+48 798 588 943</a></p>
                <p><span>E-MAIL: </span><a href="mailto:rekrutacja@ozdobahr.pl">rekrutacja@ozdobahr.pl</a></p>
            </div>
        </div>
    );
}

export default ContactInfo;