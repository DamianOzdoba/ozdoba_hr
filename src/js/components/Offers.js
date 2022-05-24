import React, {useState, useEffect} from 'react';
import firebase from "../../firebase";
import Offer from "./Offer";

import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Offers() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('default');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const ref = firebase.firestore().collection('offers');

        function getOffers() {
            setLoading(true);
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setOffers(items);
                setFiltered(items);
                setLoading(false);
            })
        }

        getOffers();
    }, []);

    function getFilterList() {
        return offers.map(({location}) => location).filter((el, idx, arr) => arr.indexOf(el) === idx);
    }

    function handleChange(event) {
        setLocation(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (location === 'default') {
            setFiltered(offers);
        } else {
            setFiltered(offers.filter(item => item.location === location));
        }
    }


    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="offers">
                <form className="offers__filter" onSubmit={handleSubmit}>
                    <FormControl sx={{m: 1, minWidth: 155,}}>
                        <InputLabel sx={{fontWeight: '600'}}>
                            Lokalizacja
                        </InputLabel>
                        <Select
                            sx={{
                                fontWeight: '600',
                                color: 'secondary.main',
                            }}
                            value={location}
                            defaultValue="default"
                            label="Lokalizacja"
                            onChange={handleChange}
                        >
                            <MenuItem sx={{fontWeight: 'bold'}} value="default">
                                Wszystkie
                            </MenuItem>
                            {getFilterList().map((item, idx) => (
                                <MenuItem sx={{fontWeight: 'bold'}} key={idx}
                                          value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        style={{
                            fontSize: 18,
                            height: '55px',
                            width: '110px'
                        }}>
                        FILTRUJ
                    </Button>
                </form>
            </div>
            <div className="offers__container">
                {filtered.map((item, idx) => (
                    <Offer
                        key={idx}
                        role={item.role}
                        salary={item.salary}
                        location={item.location}
                        description={item.description}
                    />
                ))}
            </div>
        </>
    )
        ;
}

export default Offers;