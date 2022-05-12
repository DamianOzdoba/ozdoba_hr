import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';
import HeaderBtn from "./HeaderBtn";

function Header() {
    return (
        <div className="header">
            <Link to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
            <nav className="header__nav">
                <HeaderBtn url={'/about'} text={'Poznaj Ozdoba.HR'}/>
                <HeaderBtn url={'/employees'} text={'Dla Kandydatów'}/>
                <HeaderBtn url={'/employers'} text={'Dla Pracodawców'}/>
                <HeaderBtn url={'/contact'} text={'Kontakt'}/>
            </nav>
        </div>
    );
}

export default Header;