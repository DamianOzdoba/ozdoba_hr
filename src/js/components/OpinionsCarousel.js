import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function OpinionsCarousel() {
    return (
        <Carousel
            autoPlay={true}
            interval={10000}
            infiniteLoop={true}
            stopOnHover={true}
            showThumbs={false}

        >
            <div className="opinions-carousel__container">
                <h2 className="opinions-carousel__title">Title 1</h2>
                <p className="opinions-carousel__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    consequatur, dolores doloribus ea eligendi error esse, fugit impedit iste itaque nulla numquam
                    odit,
                    quisquam quod reprehenderit saepe veritatis vitae. Architecto, corporis deleniti dicta, dolorum
                    eaque earum expedita fugiat hic labore molestias nisi quaerat recusandae saepe similique tempora
                    tempore veniam, vero.</p>
            </div>
            <div className="opinions-carousel__container">
                <h2 className="opinions-carousel__title">Title 1</h2>
                <p className="opinions-carousel__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    consequatur, dolores doloribus ea eligendi error esse, fugit impedit iste itaque nulla numquam
                    odit,
                    quisquam quod reprehenderit saepe veritatis vitae. Architecto, corporis deleniti dicta, dolorum
                    eaque earum expedita fugiat hic labore molestias nisi quaerat recusandae saepe similique tempora
                    tempore veniam, vero.</p>
            </div>
            <div className="opinions-carousel__container">
                <h2 className="opinions-carousel__title">Title 1</h2>
                <p className="opinions-carousel__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    consequatur, dolores doloribus ea eligendi error esse, fugit impedit iste itaque nulla numquam
                    odit,
                    quisquam quod reprehenderit saepe veritatis vitae. Architecto, corporis deleniti dicta, dolorum
                    eaque earum expedita fugiat hic labore molestias nisi quaerat recusandae saepe similique tempora
                    tempore veniam, vero.</p>
            </div>
        </Carousel>
    );
}

export default OpinionsCarousel;