import React from 'react';
import Button from "@mui/material/Button";

function BannerSection({title , desc, btnText, url}) {
    return (
        <div className="bannerSection">
            <h2 className="bannerSection__title">{title}</h2>
            <p className="bannerSection__desc">{desc}</p>
            <Button
                sx={{
                    fontSize: 18,
                    width: '180px',
                    textAlign: 'center'
                }}
                variant="contained"
                size="large"
                href={url}>
                {btnText}
            </Button>
        </div>
    );
}

export default BannerSection;