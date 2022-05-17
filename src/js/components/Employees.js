import React from 'react';
import Offers from "./Offers";

function Employees() {
    return (
        <div className="employees">
            <div className="employees__offers">
                <h2>Aktualnie otwarte rekrutacje:</h2>
                <Offers />
            </div>
        </div>
    );
}

export default Employees;