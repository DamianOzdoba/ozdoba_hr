import React from 'react';
import about_img3 from '../../images/about_img3.jpg';

function About() {
    return (
        <div className="about">
            <img className="about__img" src={about_img3} alt="Me"/>
            <div className="about__container">
                <h2 className="about__title"> Poznajmy się :)</h2>
                <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                    ea fugiat hic inventore ipsa, iusto minus molestiae natus quas, quisquam repellendus temporibus,
                    voluptas voluptate voluptatem voluptates. Ab accusamus ducimus eveniet, exercitationem
                    necessitatibus nemo nesciunt nostrum quidem sed voluptas. A aperiam, blanditiis ducimus et fugit
                    laudantium nostrum officia quasi quos unde!</p>
            </div>
        </div>
    );
}

export default About;