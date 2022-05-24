import React from 'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function BannerSection({title, desc, btnText, url}) {
    return (
        <div className="bannerSection">
            <h1 className="bannerSection__title">{title}</h1>
            <p className="bannerSection__desc">{desc}</p>
            <Link className="bannerSection__link" to={url}>
                <Button
                    sx={{
                        fontSize: 18,
                        width: '180px',
                        textAlign: 'center'
                    }}
                    variant="contained"
                    size="large">
                    {btnText}
                </Button>
            </Link>
        </div>
    );
}

export default BannerSection;