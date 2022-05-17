import React, {useState, useEffect} from 'react';
import firebase from "../../firebase";
import Offer from "./Offer";

function Offers() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ref = firebase.firestore().collection('offers');

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
        <div className="offers">
            {offers.map((item, idx) => (
                <Offer
                    key={idx}
                    role={item.role}
                    salary={item.salary}
                    location={item.location}
                    description={item.description}
                />
            ))}
        </div>
    );
}

export default Offers;