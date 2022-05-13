import React from 'react';
import about_img2 from '../../images/about_img2.jpg';

function AboutMe() {
    return (
        <div className="about-me">
            <img className="about-me__img" src={about_img2} alt="Me"/>
            <div className="about-me__container">
                <h2 className="about-me__title"> Poznajmy się :)</h2>
                <p className="about-me__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                    ea fugiat hic inventore ipsa, iusto minus molestiae natus quas, quisquam repellendus temporibus,
                    voluptas voluptate voluptatem voluptates. Ab accusamus ducimus eveniet, exercitationem
                    necessitatibus nemo nesciunt nostrum quidem sed voluptas. A aperiam, blanditiis ducimus et fugit
                    laudantium nostrum officia quasi quos unde!</p>
            </div>
        </div>
    );
}

export default AboutMe;