import React from 'react';

import AboutMe from './AboutMe';
import Opinions from './Opinions';

function About() {
    return (
        <div className="about">
            <AboutMe />
            <Opinions />
        </div>
    );
}

export default About;