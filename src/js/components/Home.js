import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Opinions from './Opinions';
// import Contact from './Contact';

function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Opinions />
            {/*<Contact />*/}
        </>
    );
}

export default Home;