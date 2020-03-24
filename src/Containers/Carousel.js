import React from 'react';
import Gallery from './../Components/Carousel/Gallery'
import './Carousel.scss';

const Carousel = () => {
    return (
        <main id='carousel'>
            <h2>
                Мои работы
            </h2>
            <Gallery />
        </main>
    );
}

export default Carousel;