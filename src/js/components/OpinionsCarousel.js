import React, {useState, useEffect} from 'react';
import firebase from "../../firebase";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Opinion from "./Opinion";

function OpinionsCarousel() {
    const [opinions, setOpinions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ref = firebase.firestore().collection('opinions');

        function getOpinions() {
            setLoading(true);
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setOpinions(items);
                setLoading(false);
            })
        }
        getOpinions();
    },[]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <Carousel
            emulateTouch={true}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            stopOnHover={true}
            showThumbs={false}

        >
            {opinions.map((item, idx) => (
                <Opinion
                    key={idx}
                    title={item.title}
                    opinion={item.opinion}
                />
            ))}
        </Carousel>
    );
}

export default OpinionsCarousel;