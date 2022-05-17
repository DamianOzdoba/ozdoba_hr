import React from 'react';

function Offer({role, salary, location, description}) {
    return (
        <div className="offer">
            <h2>{role}</h2>
            <h3>{salary}</h3>
            <h4>{location}</h4>
            <p>{description}</p>
        </div>
    );
}

export default Offer;