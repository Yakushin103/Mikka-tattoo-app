import React from 'react';
import Gallery from './../Components/Carousel/Gallery'
import './Carousel.scss';

const Carousel = ({theme}) => {
    return (
        <main id='carousel'>
            <div className={theme ? 'black' : 'white'}>
            <h2>
                #My_Work
            </h2>
            <Gallery />
            </div>
        </main>
    );
}

export default Carousel;