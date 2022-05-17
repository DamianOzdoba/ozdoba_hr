import React from 'react';

function Opinion({title, opinion}) {
    return (
        <div className="opinion">
            <h2 className="opinion__title">{title}</h2>
            <p className="opinion__description">{opinion}</p>
        </div>
    );
}

export default Opinion;