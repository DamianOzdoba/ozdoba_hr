import React from 'react';
import {Link} from "react-router-dom";

function HeaderBtn({url, text, hide}) {
    return (
        <Link onClick={hide} className="link" to={url}>{text}</Link>
    );
}

export default HeaderBtn;