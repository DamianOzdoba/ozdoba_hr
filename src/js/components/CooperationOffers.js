import React, {useState, useEffect} from 'react';
import firebase from "../../firebase";
import CooperationOffer from "./CooperationOffer";

function CooperationOffers() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ref = firebase.firestore().collection('cooperation-offers');

        function getOffers() {
            setLoading(true);
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setOffers(items);
                setLoading(false);
            })
        }

        getOffers();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (

        <div className="cooperation-offers__container">
            {offers.map((item, idx) => (
                <CooperationOffer
                    key={idx}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>

    );
}

export default CooperationOffers;