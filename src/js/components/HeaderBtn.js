import React from 'react';
import {Link} from "react-router-dom";

function HeaderBtn({url, text}) {
    return (
        <Link className="link" to={url}>{text}</Link>
    );
}

export default HeaderBtn;