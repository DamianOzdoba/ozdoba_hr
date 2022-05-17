import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Hamburger from 'hamburger-react'
import logo from '../../images/logo.png';
import HeaderBtn from "./HeaderBtn";

function Header() {
    const [expanded, setExpanded] = useState(false);

    function hideMenu() {
        return setExpanded(false);
    }

    return (
        <div className="header">
            <Link onClick={hideMenu} to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
            <nav className="header__nav">
                <Hamburger
                    color={'white'}
                    rounded
                    toggled={expanded}
                    toggle={setExpanded}
                />
                <div className={
                    expanded ? "header__nav-container expanded" : "header__nav-container"}>
                    <HeaderBtn hide={hideMenu} url={'/about'} text={'POZNAJ OZDOBA.HR'}/>
                    <HeaderBtn hide={hideMenu} url={'/employees'} text={'DLA KANDYDATÓW'}/>
                    <HeaderBtn hide={hideMenu} url={'/employers'} text={'DLA PRACODAWCÓW'}/>
                    <HeaderBtn hide={hideMenu} url={'/contact'} text={'KONTAKT'}/>
                </div>

            </nav>
        </div>
    );
}

export default Header;